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


        #region Private 

        #endregion

        #region Query
        public string LISTAR_ESPECIALIDADE = @"SELECT DISTINCT especialidade FROM medico;";
        public string LISTAR_MEDICO_ESPECIALIDADE = @"
            SELECT DISTINCT pes.nome 
            FROM pessoa pes
            INNER JOIN funcionario func ON func.codigo = pes.codigo
            INNER JOIN medico med ON med.codigo = func.codigo
            WHERE med.especialidade = '{0}'";
        #endregion
    }
}
