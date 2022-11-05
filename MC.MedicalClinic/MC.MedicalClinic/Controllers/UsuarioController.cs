using Microsoft.AspNetCore.Mvc;
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

        [HttpPost("registerAddressPatient")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(bool))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> RegistrarEnderecoPessoa(
            RegistrarEnderecoPaciente registrarEnderecoPaciente
        )
        {
            if(registrarEnderecoPaciente != null)
            {
                var sucesso = await SalvarEnderecoSistema(registrarEnderecoPaciente);
                if (sucesso) return Ok(true);
                else return BadRequest(sucesso);
            }

            return BadRequest("Não foi possível salvar as informações.");
        }

        #region Private 
        private async Task<bool> SalvarEnderecoSistema(RegistrarEnderecoPaciente registrarEndereco)
        {

            using var connection = _db.CreateConnection();
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@cep_pessoa", registrarEndereco.Cep, DbType.String);
            dynamicParameters.Add("@cidade", registrarEndereco.Cidade, DbType.String);
            dynamicParameters.Add("@estado", registrarEndereco.Estado, DbType.String);
            dynamicParameters.Add("@bairro", registrarEndereco.Bairro, DbType.String);
            dynamicParameters.Add("@logradouro", registrarEndereco.Logradouro, DbType.String);
            dynamicParameters.Add("@codigo", registrarEndereco.IdUser, DbType.Int32);

            await connection.ExecuteAsync(INSERIR_ENDERECO_USUARIO, dynamicParameters);
            return true;
        }
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
        public string PEGAR_PACIENTE = 
            @"SELECT  
                p.codigo as Codigo, 
                p.nome as Nome, 
                p.email as Email, 
                pac.peso as Peso, 
                pac.altura as Altura, 
                pac.tipo_sanguineo as TipoSanguineo, 
                p.tipo_usuario as TipoUsuario,
                p.telefone as Telefone
            FROM pessoa p  
                inner join paciente pac on pac.codigo = p.codigo 
            WHERE p.email = @email and pac.senha_hash = @senha_hash;";

        public string INSERIR_ENDERECO_USUARIO = @"
        INSERT INTO base_enderecos VALUES (@codigo, @cep_pessoa, @logradouro, @bairro, @cidade, @estado)
        ";
        #endregion
    }
}
