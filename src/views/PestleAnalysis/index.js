import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddPestleAnalysis } from '../../hooks/usePestleAnalysis';

export default function PestleAnalysis() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addPestleAnalysis } = useAddPestleAnalysis(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addPestleAnalysis({
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
                <h4 className='font-weight-bolder'>PESTLE Analysis</h4>
                <hr />
                <form>
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
                            Political
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            What are the political factors relate to how the
                            government intervenes in the economy?
                          </p>
                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'Political' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Economic
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          What are the economic factors include economic growth,
                          exchange rates, inflation rate, and interest rates.
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'Economic' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Social
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            What are the social factors include the cultural
                            aspects and health consciousness, population growth
                            rate, age distribution, career attitudes and
                            emphasis on safety?
                          </p>
                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'Social' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Technological
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          What are the technological factors include
                          technological aspects like R&amp;D activity,
                          automation, technology incentives and the rate of
                          technological change?
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'Technological' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Legal
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          Legal factors are those that emerge from changes to
                          the regulatory environment, which may affect the
                          broader economy, certain industries, or even
                          individual businesses within a specific sector.
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'Legal' }}
                        />
                      </div>
                    </div>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Environmental
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            Environmental factors emerged as a sensible addition
                            to the original PEST framework as the business
                            community began to recognize that changes to our
                            physical environment can present material risks and
                            opportunities for organizations.
                          </p>
                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'Environmental' }}
                          />
                        </div>
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
