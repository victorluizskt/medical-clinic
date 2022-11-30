import HeaderFuncionario from "../../Molecules/HeaderFuncionario";
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import { Container, FormContainer, FormAlignItems } from './styles';
import { useState } from "react";
import Repository from '../../../repositories/repository'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const repository = new Repository();

function RegistrarFuncionario() {
  const [eMedico, setEMedico] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [funcionario, setFuncionario] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    cidade: '',
    estado: '',
    bairro: '',
    logradouro: '',
    salario: '',
    altura: '',
    tipoSanguineo: '',
    senhaHash: '',
    crm: '',
    especialidade: '',
  });

  const handleChangeRequest = async () => {
    const request = {
      cep: funcionario.cep ,
      cidade: funcionario.cidade ,
      estado: funcionario.estado ,
      bairro: funcionario.bairro ,
      logradouro: funcionario.logradouro ,
      nome: funcionario.nome,
      email: funcionario.email,
      telefone: funcionario.telefone,
      salario: funcionario.salario,
      tipoSanguineo: funcionario.tipoSanguineo,
      senhaHash: funcionario.senhaHash,
      crm: funcionario.crm,
      especialidade: funcionario.especialidade,
      dataContrato: startDate,
    }

    if(request.cep !== '' && request.cidade !== '' && request.estado !== '' && request.bairro !== '' && request.logradouro !== '') {
      const data = await repository.registrarFuncionario(request);
      if(data) {
        alert("funcionario registrado com sucesso");
        setFuncionario({
          nome: '',
          email: '',
          telefone: '',
          cep: '',
          cidade: '',
          estado: '',
          bairro: '',
          logradouro: '',
          salario: '',
          tipoSanguineo: '',
          senhaHash: '',
          documento: '',
          especilidade: '',
          crm: '',
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
        <span style={{fontSize: '18px', fontWeight: 'bold', marginLeft: '200px', marginTop: '20px'}}>Cadastrar funcionario</span>
        <FormAlignItems>
        <TextField
          label="Nome"
          style={{marginTop: '14px', marginRight: '20px'}}
          value={funcionario.nome}
          onChange={(event) => setFuncionario({...funcionario, nome: event.target.value})}
        />
        <TextField
          label="Email"
          style={{marginTop: '14px'}}
          value={funcionario.email}
          onChange={(event) => setFuncionario({...funcionario, email: event.target.value})}
        />
        <TextField
          label="Senha"
          value={funcionario.senhaHash}
          style={{marginTop: '14px', marginRight: '20px'}}
          onChange={(event) => setFuncionario({...funcionario, senhaHash: event.target.value})}
        />
        <TextField
          label="Telefone"
          value={funcionario.telefone}
          style={{marginTop: '14px'}}
          onChange={(event) => setFuncionario({...funcionario, telefone: event.target.value})}
        />
        <TextField
          label="CEP"
          value={funcionario.cep}
          style={{marginTop: '14px', marginRight: '20px'}}
          onChange={(event) => setFuncionario({...funcionario, cep: event.target.value})}
        />
        <TextField
          label="Estado"
          value={funcionario.estado}
          style={{marginTop: '14px'}}
          onChange={(event) => setFuncionario({...funcionario, estado: event.target.value})}
        />
        <TextField
          label="Logradouro"
          value={funcionario.logradouro}
          style={{marginTop: '14px', marginRight: '20px'}}
          onChange={(event) => setFuncionario({...funcionario, logradouro: event.target.value})}
        />
        <TextField
          label="Bairro"
          value={funcionario.bairro}
          style={{marginTop: '14px'}}
          onChange={(event) => setFuncionario({...funcionario, bairro: event.target.value})}
        />
        <TextField
          label="Cidade"
          value={funcionario.cidade}
          style={{marginTop: '14px', marginRight: '20px'}}
          onChange={(event) => setFuncionario({...funcionario, cidade: event.target.value})}
        />
        <TextField
          label="Salário"
          value={funcionario.salario}
          style={{marginTop: '14px'}}
          onChange={(event) => setFuncionario({...funcionario, salario: event.target.value})}
        />
        <FormControl style={{marginTop: '15px', width: '315px'}} >
            <span>Início de contrato de trabalho</span>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </FormControl>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Médico</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="no"
            name="radio-buttons-group"
          >
            <FormControlLabel onClick={() => setEMedico(true)} value="yes" control={<Radio />} label="Sim" />
            <FormControlLabel onClick={() => setEMedico(false)} value="no" control={<Radio />} label="Não" />
          </RadioGroup>
        </FormControl>
        {eMedico && (
          <>
            <TextField
              label="Especialidade"
              value={funcionario.especialidade}
              style={{marginTop: '14px', marginRight: '20px'}}
              onChange={(event) => setFuncionario({...funcionario, especialidade: event.target.value})}
            />
            <TextField
              label="Documento"
              value={funcionario.crm}
              style={{marginTop: '14px'}}
              onChange={(event) => setFuncionario({...funcionario, crm: event.target.value})}
            />
          </>
        )}
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

export default RegistrarFuncionario;
