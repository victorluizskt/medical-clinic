namespace MC.MedicalClinic.Model
{
    public class RegistrarEnderecoPaciente
    {
        public string Cep { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Bairro { get; set; }
        public string Logradouro { get; set; }
        public int IdUser { get; set; }
    }
}
