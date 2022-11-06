import HeaderFuncionario from "../../common/components/Molecules/HeaderFuncionario";
import { useState, useEffect } from 'react';
import Repository from '../../common/repositories/repository';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const repository = new Repository();

function ListarDadosPage() {

  const [listagemFuncionarios, setListagemFuncionarios] = useState<any[]>([]);
  const [listagemPacientes, setListagemPacientes] = useState<any[]>([]);
  const [listagemEnderecosAuxiliares, setListagemEnderecosAuxiliares] = useState<any[]>([]);
  const [listagemConsultas, setListagemConsultas] = useState<any[]>([]);

  useEffect(() => {
    const salvarListagens = async () => {
      const listagemFun = await repository.listagemFuncionarios();
      const listagemPac = await repository.listagemFuncionarios();
      const listagemEndAux = await repository.listagemEnderecoAuxiliares();
      const listagemCons = await repository.listagemConsultas();

      setListagemFuncionarios(listagemFun);
      setListagemPacientes(listagemPac);
      setListagemEnderecosAuxiliares(listagemEndAux);
      setListagemConsultas(listagemCons);
    }

    salvarListagens();
  }, [])

  return (
    <>
      <HeaderFuncionario />
      <div style={{display: 'grid', gridTemplateColumns:'700px 700px', alignItems: 'center', marginLeft: '200px'}}>
        <div style={{width: '700px', marginTop: '20px'}}>
          <span style={{fontWeight: 'bold'}}>Listagem funcionários cadastrados</span>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome Funcionario</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Salario</TableCell>
                <TableCell align="right">Telefone</TableCell>
                <TableCell align="right">Inicio Contrato</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listagemFuncionarios.map((listagemFuncionarios) => (
                <TableRow
                  key={listagemFuncionarios.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {listagemFuncionarios.name}
                  </TableCell>
                  <TableCell align="right">{listagemFuncionarios.email}</TableCell>
                  <TableCell align="right">{listagemFuncionarios.salario}</TableCell>
                  <TableCell align="right">{listagemFuncionarios.telefone}</TableCell>
                  <TableCell align="right">{listagemFuncionarios.inicioContrato}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{width: '700px', marginTop: '20px', marginLeft: '50px'}}>
          <span style={{fontWeight: 'bold'}}>Listagem pacientes cadastrados</span>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome Paciente</TableCell>
                <TableCell align="right">Telefone</TableCell>
                <TableCell align="right">Altura</TableCell>
                <TableCell align="right">Tipo sanguineo</TableCell>
                <TableCell align="right">Peso</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listagemPacientes.map((listagemPacientes) => (
                <TableRow
                  key={listagemPacientes.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {listagemPacientes.name}
                  </TableCell>
                  <TableCell align="right">{listagemPacientes.telefone}</TableCell>
                  <TableCell align="right">{listagemPacientes.altura}</TableCell>
                  <TableCell align="right">{listagemPacientes.tipoSanguineo}</TableCell>
                  <TableCell align="right">{listagemPacientes.peso}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{width: '700px', marginTop: '20px'}}>
          <span style={{fontWeight: 'bold'}}>Listagem endereços auxiliares cadastrados</span>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Cidade</TableCell>
                <TableCell align="right">Estado</TableCell>
                <TableCell align="right">Rua</TableCell>
                <TableCell align="right">CEP</TableCell>
                <TableCell align="right">Logradouro</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listagemEnderecosAuxiliares.map((listagemEnderecosAuxiliares) => (
                <TableRow
                  key={listagemEnderecosAuxiliares.cidade}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {listagemEnderecosAuxiliares.cidade}
                  </TableCell>
                  <TableCell align="right">{listagemEnderecosAuxiliares.estado}</TableCell>
                  <TableCell align="right">{listagemEnderecosAuxiliares.rua}</TableCell>
                  <TableCell align="right">{listagemEnderecosAuxiliares.cep}</TableCell>
                  <TableCell align="right">{listagemEnderecosAuxiliares.logradouro}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{width: '700px', marginTop: '20px', marginLeft: '50px'}}>
          <span style={{fontWeight: 'bold'}}>Listagem agendamento consulta</span>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Paciente</TableCell>
                <TableCell align="right">Horario agendado</TableCell>
                <TableCell align="right">Idade</TableCell>
                <TableCell align="right">Altura</TableCell>
                <TableCell align="right">Peso</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listagemConsultas.map((listagemConsultas) => (
                <TableRow
                  key={listagemConsultas.nome}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {listagemConsultas.nome}
                  </TableCell>
                  <TableCell align="right">{listagemConsultas.horarioAgendado}</TableCell>
                  <TableCell align="right">{listagemConsultas.idade}</TableCell>
                  <TableCell align="right">{listagemConsultas.altura}</TableCell>
                  <TableCell align="right">{listagemConsultas.peso}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    </>
  )
}

export default ListarDadosPage;
