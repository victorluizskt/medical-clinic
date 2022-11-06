import HeaderFuncionario from "../../Molecules/HeaderFuncionario";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, FormContainer, FormAlignItems } from './styles';
import { useState } from "react";
import Repository from '../../../repositories/repository'

const repository = new Repository();

function RegistrarPaciente() {
  const [paciente, setPaciente] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    cidade: '',
    estado: '',
    bairro: '',
    logradouro: '',
    peso: '',
    altura: '',
    tipoSanguineo: '',
    senhaHash: '',
  });

  const handleChangeRequest = async () => {
    const request = {
      cep: paciente.cep ,
      cidade: paciente.cidade ,
      estado: paciente.estado ,
      bairro: paciente.bairro ,
      logradouro: paciente.logradouro ,
      nome: paciente.nome,
      email: paciente.email,
      telefone: paciente.telefone,
      altura: paciente.altura,
      peso: paciente.peso,
      tipoSanguineo: paciente.tipoSanguineo,
      senhaHash: paciente.senhaHash
    }

    console.log(request)

    if(request.cep !== '' && request.cidade !== '' && request.estado !== '' && request.bairro !== '' && request.logradouro !== '') {
      const data = await repository.registrarPaciente(request);
      if(data) {
        alert("Paciente registrado com sucesso");
        setPaciente({
          nome: '',
          email: '',
          telefone: '',
          cep: '',
          cidade: '',
          estado: '',
          bairro: '',
          logradouro: '',
          peso: '',
          altura: '',
          tipoSanguineo: '',
          senhaHash: '',
        })
      } else {
        alert("Ocorreu um erro ao salvar usuário, tente novamente mais tarde.")
      }
    } else {
      alert("Preencha todos os campos antes de continuar.")
    }
  }

  return (
    <>
      <HeaderFuncionario />
      <Container>
      <FormContainer>
        <FormAlignItems>
        <span style={{fontSize: '18px', marginLeft: '100px'}}>Cadastrar Paciente</span>
        <TextField
          label="Nome"
          style={{marginTop: '14px'}}
          value={paciente.nome}
          onChange={(event) => setPaciente({...paciente, nome: event.target.value})}
        />
        <TextField
          label="Email"
          style={{marginTop: '14px'}}
          value={paciente.email}
          onChange={(event) => setPaciente({...paciente, email: event.target.value})}
        />
        <TextField
          label="Senha"
          value={paciente.senhaHash}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, senhaHash: event.target.value})}
        />
        <TextField
          label="Telefone"
          value={paciente.telefone}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, telefone: event.target.value})}
        />
        <TextField
          label="CEP"
          value={paciente.cep}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, cep: event.target.value})}
        />
        <TextField
          label="Estado"
          value={paciente.estado}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, estado: event.target.value})}
        />
        <TextField
          label="Logradouro"
          value={paciente.logradouro}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, logradouro: event.target.value})}
        />
        <TextField
          label="Bairro"
          value={paciente.bairro}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, bairro: event.target.value})}
        />
        <TextField
          label="Cidade"
          value={paciente.cidade}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, cidade: event.target.value})}
        />
        <TextField
          label="Peso"
          value={paciente.peso}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, peso: event.target.value})}
        />
        <TextField
          label="Altura"
          value={paciente.altura}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, altura: event.target.value})}
        />
        <TextField
          label="Tipo sanguineo"
          value={paciente.tipoSanguineo}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, tipoSanguineo: event.target.value})}
        />
        <Button
          variant="contained"
          style={{marginTop: '33px'}}
          onClick={handleChangeRequest}
        >
          Cadastrar
        </Button>
        </FormAlignItems>
      </FormContainer>
      </Container>
    </>
  )
}

export default RegistrarPaciente;
