using Microsoft.AspNetCore.Mvc;

namespace MC.MedicalClinic.Controllers.Usuario
{
    [ApiController]
    [Route("usuario")]
    public class UsuarioController : ControllerBase
    {
        [HttpGet(Name = "VerificarUsuario")]
        public int GetUser()
        {
            return 0;
        }

        [HttpGet("cadastrarUsuario")]
        public IActionResult GetCadastrarUsuario()
        {
            return Ok("Cadastrado com sucesso");
        }
    }
}
