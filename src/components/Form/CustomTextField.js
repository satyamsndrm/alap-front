import { TextField } from '@mui/material';

export default function CustomTextField({
  register,
  name,
  errors,
  required,
  ...rest
}) {
  return (
    <>
      <TextField
        fullWidth
        {...rest}
        {...(register &&
          register(name, {
            required: required != undefined ? required : true,
          }))}
        error={errors[name] ? true : false}
      />
    </>
  );
}
