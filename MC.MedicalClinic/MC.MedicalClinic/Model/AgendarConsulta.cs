namespace MC.MedicalClinic.Model
{
    public class AgendarConsulta
    {
        public string Especialidade { get; set; }
        public string NomeDoutor { get; set; }
        public DateTime Data { get; set; }
        public string Horario { get; set; }
        public int CodigoUsuario { get; set; }
        public string NomeUsuario { get; set; }
        public string EmailUsuario { get; set; }
        public string TelefoneUsuario { get; set; }

    }
}
