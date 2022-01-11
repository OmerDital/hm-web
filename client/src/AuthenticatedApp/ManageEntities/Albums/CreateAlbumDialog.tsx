import {
  Button,
  FormControlLabel, Grid, Radio, RadioGroup, Stack
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import DialogContainer from '../../../components/DialogContainer';
import TextInput from '../../../components/TextInput';

interface CreateAlbumDialogProps {
  open: boolean,
  handleClose: () => void
}

interface FormInput {
  name: string
  description: string
  country: string
  type: string
  listeners: number
  purpose: string
}

const CreateAlbumDialog = ({ open, handleClose }: CreateAlbumDialogProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
  // eslint-disable-next-line no-console
  // Todo: send to server
  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => console.log(data);

  return (
    <DialogContainer open={open} handleClose={handleClose} maxWidth='sm' title='יצירת אלבום'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <TextInput label='שם' name='name' register={register} error={errors.name} required maxLength={20} />
          </Grid>
          <Grid item>
            <TextInput label='תיאור' name='description' register={register} error={errors.description} required maxLength={100} />
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs={6}>
              <TextInput label='מדינת הוצאה' name='country' register={register} error={errors.country} required maxLength={20} />
            </Grid>
            <Grid item xs={6}>
              <TextInput label='סוג אלבום' name='type' register={register} error={errors.type} required />
            </Grid>
          </Grid>
          <Grid container item justifyContent='space-between'>
            <Grid item xs={6}>
              <TextInput label='מאזינים לחישוב' name='listeners' register={register} error={errors.listeners} required />
            </Grid>
            <RadioGroup row defaultValue='draft'>
              <FormControlLabel
                {...register('purpose', { required: true })}
                value='draft'
                control={<Radio />}
                label='מגירה'
              />
              <FormControlLabel
                {...register('purpose', { required: true })}
                value='official'
                control={<Radio />}
                label='הוצאה'
              />
            </RadioGroup>
          </Grid>
        </Grid>
        <Stack direction='row' spacing={2} marginY={2}>
          <Button color='secondary' variant='contained' type='submit'>שמירה</Button>
          <Button variant='contained'>ביטול</Button>
        </Stack>
      </form>
    </DialogContainer>
  );
};

export default CreateAlbumDialog;