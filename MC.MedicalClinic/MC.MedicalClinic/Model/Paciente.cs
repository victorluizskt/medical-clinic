namespace MC.MedicalClinic.Model
{
    public class Paciente : Pessoa
    {
        public string Nome { get; set; }
        public decimal Peso { get; set; }
        public decimal Altura { get; set; }
        public string TipoSanguineo { get; set; }
    }
}
