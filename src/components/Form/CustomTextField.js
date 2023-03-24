import { TextField } from '@mui/material';

export default function CustomTextField({ register, name, errors, ...rest }) {
  return (
    <>
      <TextField
        fullWidth
        {...rest}
        {...(register && register(name, { required: true }))}
        error={errors[name] ? true : false}
      />
    </>
  );
}
