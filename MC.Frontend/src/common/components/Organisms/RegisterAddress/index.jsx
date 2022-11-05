import Header from "../../Molecules/Header";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, FormContainer, FormAlignItems } from './styles';
import { useState } from "react";
import Repository from '../../../repositories/repository'

const repository = new Repository();

function RegisterAddress() {
  const [address, setAddress] = useState({
    cep: '',
    cidade: '',
    estado: '',
    bairro: '',
    logradouro: '',
  });

  console.log()

  const handleChangeRequest = async () => {
    const request = {
      cep: address.cep ,
      cidade: address.cidade ,
      estado: address.estado ,
      bairro: address.bairro ,
      logradouro: address.logradouro ,
      idUser: localStorage.getItem("codigo")
    }
    console.log(request)

    if(request.cep !== '' && request.cidade !== '' && request.estado !== '' && request.bairro !== '' && request.logradouro !== '') {
      const data = await repository.registerAddress(request);
      if(data) {
        alert("Endereço registrado com sucesso");
        setAddress({
          cep: '',
          cidade: '',
          estado: '',
          bairro: '',
          logradouro: '',
        })
        console.log(address);
      } else {
        alert("Ocorreu um erro ao salvar usuário, tente novamente mais tarde.")
      }
    } else {
      alert("Preencha todos os campos antes de continuar.")
    }
  }

  return (
    <>
      <Header />
      <Container>
      <FormContainer>
        <FormAlignItems>
        <span style={{fontSize: '18px', marginLeft: '20px'}}>Vamos cadastrar um novo endereço?</span>
        <TextField
          label="CEP"
          style={{marginTop: '14px'}}
          value={address.cep}
          onChange={(event) => setAddress({...address, cep: event.target.value})}
        />
        <TextField
          label="Cidade"
          style={{marginTop: '14px'}}
          value={address.cidade}
          onChange={(event) => setAddress({...address, cidade: event.target.value})}
        />
        <TextField
          label="Estado"
          value={address.estado}
          style={{marginTop: '14px'}}
          onChange={(event) => setAddress({...address, estado: event.target.value})}
        />
        <TextField
          label="Bairro"
          value={address.bairro}
          style={{marginTop: '14px'}}
          onChange={(event) => setAddress({...address, bairro: event.target.value})}
        />
        <TextField
          label="Logradouro"
          value={address.logradouro}
          style={{marginTop: '14px'}}
          onChange={(event) => setAddress({...address, logradouro: event.target.value})}
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

export default RegisterAddress;
