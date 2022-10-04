import {
  HeaderContainer,
  Image,
  UserLogged
} from "./styles";
import Button, { ButtonProps } from '@mui/material/Button';
import Logo from '../../../assets/logo-amais-saude.png'
import { styled } from '@mui/material/styles';
function Header() {

  const ButtonHeader = styled(Button)<ButtonProps>(({ theme }) => ({
    fontFamily: 'Inter',
    color: "#009FDD",
  }));

  return (
    <HeaderContainer>
      <Image src={Logo} />
      <ButtonHeader variant="text">Conheça nossas clinícas</ButtonHeader>
      <ButtonHeader variant="text">Cadastrar novo endereço</ButtonHeader>
      <ButtonHeader variant="text">Agendar consulta</ButtonHeader>
      <UserLogged>SEJA BEM VINDO, Victor</UserLogged>
    </HeaderContainer>
  )
}

export default Header;
