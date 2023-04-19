import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddSwotAnalysis } from '../../hooks/useSwotAnalysis';

export default function SwotAnalysis() {
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
                <h4 className='font-weight-bolder'>SWOT Analysis</h4>
                <hr />
                <form
                  method='post'
                  action='https://techfertile.patcognos.com/save-swot'
                >
                  <div className='form-group'>
                    <label htmlFor='exampleFormControlTextarea1'>
                      Business/Company Name
                    </label>
                    <label className='text-danger'>*</label>

                    <CustomTextField
                      {...{ register, errors, name: 'CompanyName' }}
                    />
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Strengths
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            What are the strengths?
                          </p>

                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'Strengths' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Weaknesses
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          What are the weaknesses?
                        </p>

                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'Weaknesses' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Opportunities
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            What are the opportunities?
                          </p>

                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'Opportunities' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Threats
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          What are the Threats?
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'Threats' }}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className='btn btn-info mt-4'
                    type='submit'
                    onClick={handleSubmit(onSubmit)}
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
