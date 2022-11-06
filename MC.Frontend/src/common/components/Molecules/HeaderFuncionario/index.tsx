import {
  HeaderContainer,
  Image,
  UserLogged
} from "./styles";
import Button, { ButtonProps } from '@mui/material/Button';
import Logo from '../../../assets/logo-amais-saude.png'
import { styled } from '@mui/material/styles';
function HeaderFuncionario() {

  const ButtonHeader = styled(Button)<ButtonProps>(({ theme }) => ({
    fontFamily: 'Inter',
    color: "#009FDD",
  }));

  return (
    <HeaderContainer>
      <Image src={Logo} />
      <ButtonHeader variant="text" href="/registrarFuncionario">Cadastrar Funcionario</ButtonHeader>
      <ButtonHeader variant="text" href="/registrarPaciente">Cadastrar Paciente</ButtonHeader>
      <ButtonHeader variant="text" href="/listarDados">Listar Dados</ButtonHeader>
      <UserLogged>SEJA BEM VINDO, {localStorage.getItem("nome")}</UserLogged>
    </HeaderContainer>
  )
}

export default HeaderFuncionario;
