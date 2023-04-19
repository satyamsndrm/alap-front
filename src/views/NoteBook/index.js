import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddNotebook } from '../../hooks/useNotebook';

export default function Notebook() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addNotebook } = useAddNotebook(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addNotebook({
      data,
    });
  };
  return (
    <main className='main-content mt-1 border-radius-lg '>
      <div className='container-fluid'>
        <div className='container-fluid py-4'>
          <form>
            <div className='col-lg-9 col-12 mx-auto'>
              <h3 className='mb-0'>Write Note</h3>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Title
                </label>
                <label className='text-danger'>*</label>

                <CustomTextField {...{ register, errors, name: 'Title' }} />
              </div>
              <div className='mb-2'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  {' '}
                  Topic/Subject
                </label>
                <label className='text-danger'>*</label>

                <CustomTextField {...{ register, errors, name: 'Topic' }} />
              </div>
              <div className='align-self-center mb-3'>
                <div>
                  <label htmlFor='cover_photo' className='form-label mt-4'>
                    Upload Cover Photo
                  </label>

                  <CustomTextField
                    type='file'
                    {...{ register, errors, name: 'logo', required: false }}
                  />
                </div>
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'
                >
                  Write Notes
                </label>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'Notes' }}
                />
              </div>
              <button
                className='btn btn-info'
                type='submit'
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
