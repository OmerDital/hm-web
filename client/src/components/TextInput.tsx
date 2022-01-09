import { InputLabel, TextField, TextFieldProps } from '@mui/material';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldError } from 'react-hook-form';

interface TextInputProps<TFieldValues> {
  label: string,
  name: string,
  register: UseFormRegister<TFieldValues>;
  required?: boolean,
  maxLength?: number,
  error?: FieldError
  textFieldProps?: TextFieldProps
}

const getErrorMessage = (error: FieldError | undefined) => {
  if (!error) {
    return '';
  }

  if (error.type === 'required') {
    return 'שדה חובה';
  }

  if (error.type === 'maxLength') {
    return 'חורג מכמות תווים מקסימלית';
  }

  return '';
};

const TextInput = ({
  label, name, register, required, maxLength, error, ...props
}: TextInputProps<any>) => (
  <>
    <InputLabel>{label}</InputLabel>
    <TextField
      data-testid={name}
      {...register(name, { required, maxLength })}
      fullWidth
      error={!!error}
      helperText={getErrorMessage(error)}
      {...props}
    />
  </>
);

export default TextInput;