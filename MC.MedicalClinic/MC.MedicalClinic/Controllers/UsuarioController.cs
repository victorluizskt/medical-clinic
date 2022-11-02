﻿using Microsoft.AspNetCore.Mvc;
using MC.MedicalClinic.Model;
using Dapper;
using MC.MedicalClinic.Data;
using System.Data;
using System.Net;

namespace MC.MedicalClinic.Controllers
{
    [ApiController]
    [Route("")]
    public class UsuarioController : ControllerBase
    {
        private readonly DbSession _db;
        public UsuarioController(DbSession dbSession)
        {
            _db = dbSession;
        }

        [HttpPost("login")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(Pessoa))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetUser(
            [FromBody] Login usuario
        )
        {
            if (usuario != null)
            {
                var pessoa = await PegarPessoaSistema(usuario);
                switch (pessoa.TipoUsuario)
                {
                    case "P":
                        var paciente = await PegarPacienteSistema(usuario);
                        if(paciente != null)
                        {
                            return Ok(paciente);
                        }
                        return Ok("Usuario não encontrado");
                    case "F":
                        return Ok("Deu certinho pai");
                    default:
                        break;
                }
            }

            return BadRequest("Não foi possível verificar o usuário");
        }

        [HttpGet("cadastrarUsuario")]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> GetCadastrarUsuario()
        {
            return Ok("Cadastrado com sucesso");
        }

        #region Private 
        private async Task<Pessoa> PegarPessoaSistema(Login usuario)
        {
            using var connection = _db.CreateConnection();
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@email", usuario.Email, DbType.String);

            return await connection.QueryFirstAsync<Pessoa>(PEGAR_TIPO_USUARIO, dynamicParameters);
        }

        private async Task<Paciente> PegarPacienteSistema(Login usuario)
        {
            using var connection = _db.CreateConnection();
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@email", usuario.Email, DbType.String);
            dynamicParameters.Add("@senha_hash", usuario.Senha, DbType.String);

            return await connection.QueryFirstOrDefaultAsync<Paciente>(PEGAR_PACIENTE, dynamicParameters);
        }

        #endregion

        #region SQL
        public string PEGAR_TIPO_USUARIO = "" +
            "SELECT codigo as Codigo, email as Email, tipo_usuario as TipoUsuario " +
            "FROM pessoa WHERE email = @email";
        public string PEGAR_PACIENTE = "" +
            "SELECT  p.codigo as Codigo, p.nome as Nome, p.email as Email, pac.peso as Peso, pac.altura as Altura, pac.tipo_sanguineo as TipoSanguineo, p.tipo_usuario as TipoUsuario " +
            "FROM pessoa p  inner join paciente pac on pac.codigo = p.codigo " +
            "WHERE p.email = @email and pac.senha_hash = @senha_hash;";
        #endregion
    }
}
