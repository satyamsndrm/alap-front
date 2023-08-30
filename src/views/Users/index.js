import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddSwotAnalysis } from '../../hooks/useSwotAnalysis';

export default function Users() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addSwotAnalysis } = useAddSwotAnalysis(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addSwotAnalysis({
      data,
    });
  };
  return (
    <main className='main-content mt-1 border-radius-lg '>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='font-weight-bolder'>Users</h4>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
