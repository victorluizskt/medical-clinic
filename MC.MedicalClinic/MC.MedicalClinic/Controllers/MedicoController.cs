using Dapper;
using MC.MedicalClinic.Data;
using MC.MedicalClinic.Model;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Net;

namespace MC.MedicalClinic.Controllers
{
    [ApiController]
    [Route("")]
    public class MedicoController : ControllerBase
    {
        private readonly DbSession _db;
        public MedicoController(DbSession dbSession)
        {
            _db = dbSession;
        }

        [HttpGet("getSpecialty")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> PegarEspecialidades()
        {
            using var connection = _db.CreateConnection();
            var listaEspecialidades = await connection.QueryAsync<string>(LISTAR_ESPECIALIDADE);
            return Ok(listaEspecialidades);
        }

        [HttpPost("getNameDoctor")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> PegarNomeMedico(
           [FromBody] ListaEspecialidades listaEspecialidades
        )
        {
            using var connection = _db.CreateConnection();
            var sql = string.Format(LISTAR_MEDICO_ESPECIALIDADE, listaEspecialidades.Especialidade);
            var nomeDoutores = await connection.QueryAsync<string>(sql);
            return Ok(nomeDoutores);
        }

        [HttpPost("pegarHorarioDisponivelMedico")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> PegarHorarioDisponivelMedio(
           [FromBody] HorarioDisponivelMedico horarioDisponivelMedico
        )
        {
            using var connection = _db.CreateConnection();
            var sql = string.Format(PEGAR_CODIGO_MEDICO, horarioDisponivelMedico.NomeMedico);
            int idMedico = await connection.QueryFirstOrDefaultAsync<int>(sql);

            var pegarHora = horarioDisponivelMedico.DataAgendamento.ToString().Split(" ")[1].Substring(0, 2) + ":00";
            var pegarData = horarioDisponivelMedico.DataAgendamento.ToString().Split(" ")[0].Substring(0, 10);
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@idMedico", idMedico, DbType.String);
            dynamicParameters.Add("@data", pegarData, DbType.DateTime);
            var horarios = await connection.QueryAsync<string>(PEGAR_HORARIOS_DISPONIVEIS, dynamicParameters);
            if(horarios != null)
            {
                var horariosDisponiveis = Horarios.Except(horarios).ToArray();
                return Ok(horariosDisponiveis);
            }
            
            return Ok(Horarios);
        }

        [HttpPost("agendarConsulta")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(IEnumerable<string>))]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> AgendarConsulta(
           [FromBody] AgendarConsulta agendarConsulta
        )
        {
            using var connection = _db.CreateConnection();
            var sql = string.Format(PEGAR_CODIGO_MEDICO, agendarConsulta.NomeDoutor);
            int idMedico = await connection.QueryFirstOrDefaultAsync<int>(sql);
            var pegarData = agendarConsulta.Data.ToString().Split(" ")[0].Substring(0, 10);
            Random randNum = new Random();
            DynamicParameters dynamicParameters = new();
            dynamicParameters.Add("@codigoUsuario", agendarConsulta.CodigoUsuario, DbType.Int32);
            dynamicParameters.Add("@horario", agendarConsulta.Horario, DbType.String);
            dynamicParameters.Add("@nomeUsuario", agendarConsulta.NomeUsuario, DbType.String);
            dynamicParameters.Add("@emailUsuario", agendarConsulta.EmailUsuario, DbType.String);
            dynamicParameters.Add("@telefoneUsuario", "31", DbType.String);
            dynamicParameters.Add("@idMedico", idMedico, DbType.Int32);
            dynamicParameters.Add("@dataAgendamento", pegarData, DbType.String);
            await connection.ExecuteAsync(AGENDA_CONSULTA, dynamicParameters);
            return Ok(true);
        }

        #region Private 
        private List<string> Horarios = new List<string> { 
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00"
        };

        #endregion

        #region Query
        public string LISTAR_ESPECIALIDADE = @"SELECT DISTINCT especialidade FROM medico;";
        public string LISTAR_MEDICO_ESPECIALIDADE = @"
            SELECT DISTINCT pes.nome 
            FROM pessoa pes
            INNER JOIN funcionario func ON func.codigo = pes.codigo
            INNER JOIN medico med ON med.codigo = func.codigo
            WHERE med.especialidade = '{0}'";
        public string PEGAR_HORARIOS_DISPONIVEIS = @"
            SELECT 
	            horario
            FROM agenda age
            INNER JOIN pessoa pes ON pes.codigo = age.codigo_usuario
            WHERE age.codigo_medico = @idMedico
            AND data_agendamento =  @data
        ";
        public string PEGAR_CODIGO_MEDICO = @"
            SELECT codigo FROM pessoa WHERE nome = '{0}';    
        ";
        public string AGENDA_CONSULTA = @"
            INSERT INTO agenda VALUES (@codigoUsuario, @horario, @nomeUsuario, @emailUsuario, @telefoneUsuario, @idMedico, @dataAgendamento);
        ";
        #endregion
    }
}
