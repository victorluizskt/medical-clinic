namespace MC.MedicalClinic.Model
{
    public class RegistrarPaciente
    {
        public decimal Altura { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Cidade { get; set; }
        public string Email { get; set; }
        public string Estado { get; set; }
        public string Logradouro { get; set; }
        public string Nome { get; set; }
        public string Peso { get; set; }
        public string SenhaHash { get; set; }
        public string Telefone { get; set; }
        public string TipoSanguineo { get; set; }
        public DateTime? DataContrato { get; set; }
        public string? Salario { get; set; }
        public string? Especialidade { get; set; }
        public string? CRM { get; set; }
    }
}
