import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from "../../Atoms/Card";
import Input from "../../Atoms/Input";
import Logo from '../../../assets/logo-amais-saude.png';
import Repository from '../../../repositories/repository'
import Button, { ButtonProps } from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import {
  Image,
  CardContainer,
  PasswordContainer,
  PasswordRecover,
  PrivacyPolitic,
  PrivacyPoliticHref,
} from "./styles";
import {  useState } from "react";
import MyContext from '../../../contexts/auth';

const repository = new Repository();

function CardHome() {
  const navigate = useNavigate();
  const { paciente, setPaciente}: any = useContext(MyContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const  handleChangeButtonLogin = async () => {
    const request = {
      'Email': user.email,
      'Senha': user.password
    }

    const data = await repository.checkUser(request);
    const {tipoUsuario} = data;
    if(data === undefined) {
      alert("Usuário não encontrado.");
    } else if(tipoUsuario === "P") {
      const {
        codigo,
        email,
        tipoUsario,
        nome,
        peso,
        altura,
        tipoSanguineo,
      } = data;

      setPaciente({
        codigo,
        email,
        tipoUsario,
        nome,
        peso,
        altura,
        tipoSanguineo,
      })

      return navigate('/home');
    }
  }

  const ButtonLoginWithRegister = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: "#009FDD",
    '&:hover': {
      backgroundColor: "#18BEFF",
    }
  }));

  return (
    <Card width="399px" height="599px">
      <CardContainer>
        <Image
          src={Logo}
          width="246px"
          height="107px"
          marginTop="35px"
        />
        <Input
          label="Login"
          marginTop="40px"
          password={false}
          setLoginInfos={setUser}
          state={user}
        />
        <PasswordContainer>
          <Input
            label="Senha"
            marginTop="0"
            password
            setLoginInfos={setUser}
            state={user}
          />
          <PasswordRecover>Esqueceu sua senha?</PasswordRecover>
        </PasswordContainer>
        <ButtonLoginWithRegister
          variant="contained"
          style={{marginTop: '33px'}}
          onClick={handleChangeButtonLogin}
        >
          Entrar
        </ButtonLoginWithRegister>
        <ButtonLoginWithRegister
          variant="contained"
          style={{marginTop: '20px'}}
          href="/registerUser"
          >
            Cadastrar
        </ButtonLoginWithRegister>
        <PrivacyPolitic>
          Ao acessar o portal, você está de acordo com a nossa
        </PrivacyPolitic>
        <PrivacyPoliticHref>
          política de privacidade.
        </PrivacyPoliticHref>
      </CardContainer>
    </Card>
  )
}

export default CardHome;
