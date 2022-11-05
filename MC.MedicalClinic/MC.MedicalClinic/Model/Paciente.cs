namespace MC.MedicalClinic.Model
{
    public class Paciente : Pessoa
    {
        public string Nome { get; set; }
        public decimal Peso { get; set; }
        public decimal Altura { get; set; }
        public string TipoUsuario { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
    }
}
