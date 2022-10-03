import { InputContainer } from "./styles"
import TextField from '@mui/material/TextField';

interface Props {
  label: string,
  marginTop: string,
  password: boolean,
}

function Input({
  label,
  marginTop,
  password
}: Props) {

  return (
    <InputContainer marginTop={marginTop}>
      <TextField
          label={label}
          id="outlined-size-small"
          size="small"
          type={password ? "password" : ""}
        />
    </InputContainer>
  );
}

export default Input;
