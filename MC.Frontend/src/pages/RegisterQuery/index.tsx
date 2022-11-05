import Header from "../../common/components/Molecules/Header";
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Repository from '../../common/repositories/repository';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container, FormContainer, FormAlignItems, DatePickerContainer }  from './styles';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";

const repository = new Repository();

function RegisterQuery() {
  const [specialty, setSpecialty] = useState<any[]>([]);
  const [doctor, setDoctor] = useState<any[]>([]);

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  useEffect(() => {
    const getSpecialty = async () => {
      const data = await repository.getSpecialty();
      setSpecialty(data);
    }
    getSpecialty();
  }, []);

  useEffect(() => {
    const request = {
      especialidade: selectedSpecialty,
    }

    const getSpecialty = async () => {
      const data = await repository.getNameDoctor(request);
      setDoctor(data);
    }
    getSpecialty();
  }, [selectedSpecialty]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSpecialty(event.target.value as string);
  };

  const handleChangeDoctor = (event: SelectChangeEvent) => {
    setSelectedDoctor(event.target.value as string);
  };

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)

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
                disabled={specialty === null}
                style={{width: '300px'}}
                onChange={handleChange}
              >
                {specialty !== null && specialty.map((item: string) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
          </FormControl>
          <FormControl style={{marginTop: '15px', width: '315px'}} >
              <InputLabel>Médico</InputLabel>
              <Select
                value={selectedDoctor}
                style={{width: '300px'}}
                onChange={handleChangeDoctor}
                disabled={selectedSpecialty === null}
              >
                {doctor !== null && doctor.map((item: string) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
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
