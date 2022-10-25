import Header from "../../Molecules/Header";
import Input from "../../Atoms/Input";
import Button from '@mui/material/Button';
import { Container, FormContainer, FormAlignItems } from './styles';

function RegisterAddress() {

  return (
    <>
      <Header />
      <Container>
      <FormContainer>
        <span style={{fontSize: '18px', marginLeft: '50px'}}>Vamos cadastrar um novo endereço?</span>
        <FormAlignItems>
        <Input
          label="CEP"
          marginTop="40px"
          password={false}
        />
        <Input
          label="Cidade"
          marginTop="40px"
          password={false}
        />
        <Input
          label="Estado"
          marginTop="40px"
          password={false}
        />
        <Input
          label="Cidade"
          marginTop="40px"
          password={false}
        />
        <Input
          label="Bairro"
          marginTop="40px"
          password={false}
        />
        <Input
          label="Logradouro"
          marginTop="40px"
          password={false}
        />
        <Button
          variant="contained"
          style={{marginTop: '33px'}}
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
