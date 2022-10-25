import Card from "../../Atoms/Card";
import Input from "../../Atoms/Input";
import Logo from '../../../assets/logo-amais-saude.png';
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

function CardHome() {

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
        />
        <PasswordContainer>
          <Input
            label="Senha"
            marginTop="0"
            password
          />
          <PasswordRecover>Esqueceu sua senha?</PasswordRecover>
        </PasswordContainer>
        <ButtonLoginWithRegister
          variant="contained"
          style={{marginTop: '33px'}}
        >
          Entrar
        </ButtonLoginWithRegister>
        <ButtonLoginWithRegister
        variant="contained"
        style={{marginTop: '20px'}}
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
