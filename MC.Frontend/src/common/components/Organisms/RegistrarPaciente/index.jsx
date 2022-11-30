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
      altura: paciente.altura,
      bairro: paciente.bairro,
      cep: paciente.cep,
      cidade: paciente.cidade,
      email: paciente.email,
      estado: paciente.estado,
      logradouro: paciente.logradouro,
      nome: paciente.nome,
      peso: paciente.peso,
      telefone: paciente.telefone,
      tipoSanguineo: paciente.tipoSanguineo,
    }

    const data = await repository.registrarFuncionario(request);
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
}

  return (
    <>
      <HeaderFuncionario />
      <Container>
      <FormContainer>
        <span style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '200px'}}>Cadastrar Paciente</span>
        <FormAlignItems>
        <TextField
          label="Nome"
          style={{marginTop: '14px', marginRight: '15px'}}
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
          label="Telefone"
          value={paciente.telefone}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, telefone: event.target.value})}
        />
        <TextField
          label="CEP"
          value={paciente.cep}
          style={{marginTop: '14px', marginRight: '15px'}}
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
          style={{marginTop: '14px', marginRight: '15px'}}
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
          style={{marginTop: '14px', marginRight: '15px'}}
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
          style={{marginTop: '14px', marginRight: '15px'}}
          onChange={(event) => setPaciente({...paciente, altura: event.target.value})}
        />
        <TextField
          label="Tipo sanguineo"
          value={paciente.tipoSanguineo}
          style={{marginTop: '14px'}}
          onChange={(event) => setPaciente({...paciente, tipoSanguineo: event.target.value})}
        />
        </FormAlignItems>
        <Button
          variant="contained"
          style={{marginLeft: '180px', width: '250px'}}
          onClick={handleChangeRequest}
        >
          Cadastrar
        </Button>
      </FormContainer>
      </Container>
    </>
  )
}

export default RegistrarPaciente;
