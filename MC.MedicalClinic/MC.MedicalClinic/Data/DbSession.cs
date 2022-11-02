using System.Data;
using System.Data.SqlClient;

namespace MC.MedicalClinic.Data
{
    public class DbSession : IDisposable
    {

        private string _connectionString { get; set; }
        public IDbConnection Connection { get; set; }
        public IDbTransaction Transaction { get; set; }

        public DbSession(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        public void Dispose()
        {
            Connection?.Close();
            Connection?.Dispose();
        }

        public IDbConnection CreateConnection()
        {
            Connection = new SqlConnection(_connectionString);
            return Connection;
        }
    }
}
