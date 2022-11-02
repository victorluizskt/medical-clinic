import { InputContainer } from "./styles"
import TextField from '@mui/material/TextField';

interface Props {
  label: string,
  marginTop: string,
  password: boolean,
  setLoginInfos: Function,
  state: object
}

function Input({
  label,
  marginTop,
  password,
  setLoginInfos,
  state
}: Props) {

  const handleChangeLogin = (event: any) => {
    if(password) {
      setLoginInfos({...state, password: event.target.value})
    } else {
      setLoginInfos({...state, email: event.target.value})
    }
  }

  return (
    <InputContainer marginTop={marginTop}>
      <TextField
          label={label}
          id="outlined-size-small"
          size="small"
          type={password ? "password" : ""}
          onChange={handleChangeLogin}
        />
    </InputContainer>
  );
}

export default Input;
