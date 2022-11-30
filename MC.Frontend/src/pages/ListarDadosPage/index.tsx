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
interface Pessoa {
  nome: string,
  email: string,
  tipo_sanguineo: string,
  telefone: string,
  peso: string
}


interface Funcionario {
  nome: string,
  email: string,
  telefone: string,
  data_contrato: string,
  salario: string,
}

function ListarDadosPage() {
  const [paciente, setPaciente] = useState<Array<Pessoa>>()
  const [funcionario, setFuncionario] = useState<Array<Funcionario>>()
  useEffect(() => {
    const fetchData = async () => {
      const dadosPaciente = await repository.listagemPacientes()
      const dadosFuncionario = await repository.listagemFuncionarios()
      setFuncionario(dadosFuncionario)
      setPaciente(dadosPaciente)
    }

    fetchData()
  }, [])


  return (
    <>
      <HeaderFuncionario />
      <div style={{width: '700px', marginTop: '20px', marginLeft: '50px'}}>
          <span style={{fontWeight: 'bold'}}>Listagem pacientes cadastrados</span>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome Paciente</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Telefone</TableCell>
                <TableCell align="right">Tipo sanguineo</TableCell>
                <TableCell align="right">Peso</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paciente && paciente.map((row) => (
                <TableRow
                  key={row.nome}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.telefone}</TableCell>
                  <TableCell align="right">{row.tipo_sanguineo}</TableCell>
                  <TableCell align="right">{row.peso}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{width: '700px', marginTop: '20px', marginLeft: '50px'}}>
          <span style={{fontWeight: 'bold'}}>Listagem funcionarios cadastrados</span>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nome Funcionario</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Telefone</TableCell>
                <TableCell align="right">Data Contrato</TableCell>
                <TableCell align="right">Salario</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionario && funcionario.map((row) => (
                <TableRow
                  key={row.nome}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nome}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.telefone}</TableCell>
                  <TableCell align="right">{row.data_contrato}</TableCell>
                  <TableCell align="right">{row.salario}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default ListarDadosPage;
