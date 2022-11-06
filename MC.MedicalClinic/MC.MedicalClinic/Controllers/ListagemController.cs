using Dapper;
using MC.MedicalClinic.Data;
using MC.MedicalClinic.Model;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace MC.MedicalClinic.Controllers
{
    public class ListagemController : ControllerBase
    {
        private readonly DbSession _db;
        public ListagemController(DbSession dbSession)
        {
            _db = dbSession;
        }

        [HttpPost("listagemFuncionarios")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<object>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ListarFuncionarios()
        {
            using var connection = _db.CreateConnection();
            var todosFuncionarios = await connection.QueryAsync<object>(PEGAR_TODOS_FUNCIONARIOS);
            return Ok(todosFuncionarios);
        }

        [HttpPost("listagemPacientes")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<object>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ListarPacientes()
        {
            using var connection = _db.CreateConnection();
            var todosFuncionarios = await connection.QueryAsync<object>(PEGAR_TODOS_PACIENTES);
            return Ok(todosFuncionarios);
        }

        [HttpPost("listagemEnderecoAuxiliares")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<object>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ListarEnderecoAuxiliar()
        {
            using var connection = _db.CreateConnection();
            var todosFuncionarios = await connection.QueryAsync<object>(PEGAR_TODOS_ENDERECOS);
            return Ok(todosFuncionarios);
        }

        [HttpPost("listagemConsultas")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<object>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ListarPacientesAgendados()
        {
            using var connection = _db.CreateConnection();
            var todosFuncionarios = await connection.QueryAsync<object>(PEGAR_PACIENTES_AGENDADOS);
            return Ok(todosFuncionarios);
        }


        #region SQL

        public string PEGAR_TODOS_FUNCIONARIOS = @"
            SELECT 
	            pes.nome,
	            pes.email,
	            fun.salario,
	            pes.telefone,
	            fun.data_contrato
            FROM funcionario fun
            INNER JOIN pessoa pes ON pes.codigo = fun.codigo
        ";

        public string PEGAR_TODOS_PACIENTES = @"
            SELECT 
	            pes.nome,
	            pes.email,
	            pac.altura,
	            pes.telefone,
	            pac.tipo_sanguineo,
	            pac.peso
            FROM paciente pac
            INNER JOIN pessoa pes ON pes.codigo = pac.codigo
        ";

        public string PEGAR_TODOS_ENDERECOS = @"
            SELECT 
	            cidade,
	            estado,
	            rua,
	            cep,
	            logradouro
            FROM base_enderecos 
        ";

        public string PEGAR_PACIENTES_AGENDADOS = @"
            SELECT 
	            nome_paciente,
	            horario,
	            data_agendamento,
	            altura,
	            peso,
	            tipoSanguineo
            FROM agenda;
        ";
        #endregion
    }
}
