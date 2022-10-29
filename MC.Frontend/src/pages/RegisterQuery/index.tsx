import Header from "../../common/components/Molecules/Header";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container, FormContainer, FormAlignItems, DatePickerContainer }  from './styles';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
function RegisterQuery() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    <Header />
      <Container>
      <FormContainer>
        <FormAlignItems>
          <span style={{fontSize: '25px', marginLeft: '50px', marginBottom: '15px'}}>Agendar consulta</span>
          <FormControl style={{marginTop: '15px', width: '315px'}} >
              <InputLabel>Especialidade</InputLabel>
              <Select
                value={age}
                style={{width: '300px'}}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </FormControl>
          <FormControl style={{marginTop: '15px', width: '315px'}} >
              <InputLabel>Médico</InputLabel>
              <Select
                value={age}
                style={{width: '300px'}}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </FormControl>
          <FormControl style={{marginTop: '15px', width: '315px'}} >
            <span>Selecione a data</span>
            <DatePickerContainer>
              <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            </DatePickerContainer>
          </FormControl>
          <FormControl style={{marginTop: '15px', width: '315px'}} >
              <InputLabel>Horário da consulta</InputLabel>
              <Select
                value={age}
                style={{width: '300px'}}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </FormControl>
          <Button
            variant="contained"
            style={{marginTop: '33px'}}
          >
            Agendar consulta
          </Button>
        </FormAlignItems>
      </FormContainer>
      </Container>
    </>
  )
}

export default RegisterQuery;
