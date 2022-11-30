using Dapper;
using MC.MedicalClinic.Data;
using MC.MedicalClinic.Model;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Net;

namespace MC.MedicalClinic.Controllers
{
    public class FuncionarioController : ControllerBase
    {
        private readonly DbSession _db;
        public FuncionarioController(DbSession dbSession)
        {
            _db = dbSession;
        }

        [HttpPost("registrarFuncionario")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> RegistrarFuncionario(
            [FromBody] RegistrarPaciente registrarPaciente
        )
        {
            using var connection = _db.CreateConnection();
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@nome", registrarPaciente.Nome, DbType.String);
            dynamicParameters.Add("@email", registrarPaciente.Email, DbType.String);
            dynamicParameters.Add("@telefone", registrarPaciente.Telefone, DbType.String);
            dynamicParameters.Add("@cep_pessoa", registrarPaciente.Cep, DbType.String);
            dynamicParameters.Add("@logradouro", registrarPaciente.Logradouro, DbType.String);
            dynamicParameters.Add("@bairro", registrarPaciente.Bairro, DbType.String);
            dynamicParameters.Add("@cidade", registrarPaciente.Cidade, DbType.String);
            dynamicParameters.Add("@estado", registrarPaciente.Estado, DbType.String);
            dynamicParameters.Add("@tipo_usuario", "M", DbType.String);
            connection.Execute(REGISTRAR_PACIENTE, dynamicParameters);
            var idUser = connection.QueryFirstOrDefault<int>($"SELECT codigo FROM pessoa WHERE email = '{registrarPaciente.Email}'");
            connection.Execute($"INSERT INTO funcionario VALUES ('{registrarPaciente.DataContrato}', '{registrarPaciente.Salario}', '{registrarPaciente.SenhaHash}', {idUser})");
            if(registrarPaciente.CRM != null)
            {
                connection.Execute($"INSERT INTO medico VALUES ('{registrarPaciente.Especialidade}', '{registrarPaciente.CRM}', {idUser})");
            }
            return Ok(true);
        }

        [HttpPost("registrarPaciente")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> PegarEspecialidades(
            [FromBody] RegistrarPaciente registrarPaciente    
        )
        {
            using var connection = _db.CreateConnection();
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@nome", registrarPaciente.Nome, DbType.String);
            dynamicParameters.Add("@email", registrarPaciente.Email, DbType.String);
            dynamicParameters.Add("@telefone", registrarPaciente.Telefone, DbType.String);
            dynamicParameters.Add("@cep_pessoa", registrarPaciente.Cep, DbType.String);
            dynamicParameters.Add("@logradouro", registrarPaciente.Logradouro, DbType.String);
            dynamicParameters.Add("@bairro", registrarPaciente.Bairro, DbType.String);
            dynamicParameters.Add("@cidade", registrarPaciente.Cidade, DbType.String);
            dynamicParameters.Add("@estado", registrarPaciente.Estado, DbType.String);
            dynamicParameters.Add("@tipo_usuario", "P", DbType.String);
            await connection.ExecuteAsync(REGISTRAR_PACIENTE, dynamicParameters);

            var sucesso = await InserirInformacoesPaciente(registrarPaciente);
            return Ok(sucesso);
        }

        #region Private
        public async Task<bool> InserirInformacoesPaciente(RegistrarPaciente registrarPaciente)
        {
            using var connection = _db.CreateConnection();
            var idUser = await connection.QueryFirstOrDefaultAsync<int>(string.Format(PEGAR_ID_USUARIO, registrarPaciente.Email));
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@peso", registrarPaciente.Peso, DbType.Decimal);
            dynamicParameters.Add("@altura", registrarPaciente.Altura, DbType.Decimal);
            dynamicParameters.Add("@senhaHash", registrarPaciente.SenhaHash, DbType.String);
            dynamicParameters.Add("@tipoSanguineo", registrarPaciente.TipoSanguineo, DbType.String);
            dynamicParameters.Add("@codigo", idUser, DbType.Int32);

            await connection.ExecuteAsync(INSERIR_PACIENTE, dynamicParameters);
            return true;
        }
        #endregion

        #region SQL
        public string REGISTRAR_PACIENTE = @"
            INSERT INTO pessoa VALUES (@nome, @email, @telefone, @cep_pessoa, @logradouro, @bairro, @cidade, @estado, @tipo_usuario)
        ";

        public string PEGAR_ID_USUARIO = @"SELECT codigo FROM pessoa WHERE email = '{0}';";

        public string INSERIR_PACIENTE = @"INSERT INTO paciente VALUES (@peso, @altura, @senhaHash, @tipoSanguineo, @codigo);";
        #endregion
    }
}
