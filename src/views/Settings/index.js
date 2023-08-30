import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddSwotAnalysis } from '../../hooks/useSwotAnalysis';

export default function Settings() {
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
      <div class='container-fluid'>
        <div class=' row'>
          <div class='col'>
            <h5 class=' text-secondary fw-bolder'>Settings</h5>
          </div>
          <div class='col text-end'></div>
        </div>
        <div class='row mb-5'>
          <div class='  col-md-8 mt-lg-0 mt-4'>
            <div class='card'>
              <div class='card-body'>
                <form
                  enctype='multipart/form-data'
                  action='https://techfertile.patcognos.com/settings'
                  method='post'
                >
                  <div class='mt-4' id='basic-info'>
                    <div class=' pt-0'>
                      <div class='row'>
                        <label class='form-label'>Workspace Name</label>

                        <div class='input-group'>
                          <input
                            id='firstName'
                            name='workspace_name'
                            value='Kartik&#39;s workspace'
                            class='form-control'
                            type='text'
                            required='required'
                          />
                        </div>
                      </div>
                      <input
                        type='hidden'
                        name='_token'
                        value='CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2'
                      />{' '}
                      <button class='btn btn-info btn-sm float-left mt-4 mb-0'>
                        Update{' '}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
