import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import './index.css';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddTask } from '../../hooks/useTask';
export default function AddTaskForm({ setOpenModal }) {
  const onSuccess = () => {
    setOpenModal(false);
  };
  const { mutate: addTask } = useAddTask(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addTask({
      data,
    });
  };
  return (
    <Box className='form-wrapper'>
      <Box className='form-row'>
        <Box className='form-row-item'>
          {/* <TextField fullWidth label='Subject/Task' error={true} /> */}
          <CustomTextField
            label='Subject/Task'
            {...{ register, errors, name: 'topic' }}
          />
        </Box>
      </Box>
      <Box className='form-row'>
        <Box className='form-row-item'>
          {/* <TextField fullWidth label='Start Date' /> */}
          <CustomTextField
            label='Start Date'
            type='date'
            InputLabelProps={{ shrink: true }}
            {...{ register, errors, name: 'start_date' }}
          />
        </Box>
        <Box className='form-row-item'>
          {/* <TextField fullWidth label='End Date' /> */}
          <CustomTextField
            label='End Date'
            type='date'
            InputLabelProps={{ shrink: true }}
            {...{ register, errors, name: 'end_date' }}
          />
        </Box>
      </Box>
      <Box className='form-row'>
        <Box className='form-row-item'>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>AssignTo</InputLabel>
            <Select
              label='AssignTo'
              {...register('contact_id', { required: true })}
              error={errors['contact_id'] ? true : false}
            >
              <MenuItem value={'Kartik'}>Kartik</MenuItem>
              <MenuItem value={'Satyam'}>Satyam</MenuItem>
              <MenuItem value={'Anmol'}>Anmol</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box className='form-row'>
        <Box className='form-row-item'>
          {/* <TextField fullWidth label='Description' /> */}
          <CustomTextField
            multiline
            rows={4}
            label='Description'
            InputLabelProps={{ shrink: true }}
            {...{ register, errors, name: 'description' }}
          />
        </Box>
      </Box>
      <Box className='form-button'>
        <Box className='form-button-item'>
          <Button variant='contained' onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Box>
        <Box className='form-button-item'>
          <Button variant='outlined' color='error'>
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
