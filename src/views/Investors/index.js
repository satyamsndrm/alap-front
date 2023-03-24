import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddInvestor } from '../../hooks/useInvestor';

export default function Investors() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addInvestor } = useAddInvestor(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addInvestor({
      data,
    });
  };
  return (
    <main className='main-content mt-1 border-radius-lg '>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <div className='multisteps-form mb-5'>
              <div className='row'>
                <div className='col-12 col-lg-8 m-auto'>
                  <form
                    action='https://techfertile.patcognos.com/save-investor'
                    method='post'
                    className='multisteps-form__form mb-8'
                  >
                    <div
                      className='card card-body p-3  js-active'
                      data-animation='FadeIn'
                    >
                      <h5 className='font-weight-bolder mb-0'>
                        Add New Investor
                      </h5>

                      <div className='multisteps-form__content'>
                        <div className='row mt-3'>
                          <div className='col-12 col-sm-6'>
                            <label>First Name</label>
                            <small className='text-danger'>*</small>
                            <CustomTextField
                              {...{ register, errors, name: 'firstName' }}
                            />
                          </div>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Last Name</label>
                            <small className='text-danger'>*</small>
                            <CustomTextField
                              {...{ register, errors, name: 'lastName' }}
                            />
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-md-12'>
                            <label>Username/Email</label>
                            <small className='text-danger'>*</small>
                            <CustomTextField
                              {...{ register, errors, name: 'userName' }}
                            />
                          </div>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Phone Number</label>
                            <CustomTextField
                              {...{ register, errors, name: 'phoneNumber' }}
                            />
                          </div>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Source</label>
                            <CustomTextField
                              {...{ register, errors, name: 'source' }}
                            />
                          </div>
                        </div>
                        <div className='mb-1 mt-3'>
                          <label
                            htmlFor='exampleFormControlInput1'
                            className='form-label'
                          >
                            Select Product
                          </label>
                          <FormControl fullWidth>
                            <Select
                              {...register('productSelected', {
                                required: true,
                              })}
                              error={errors['productSelected'] ? true : false}
                            >
                              <MenuItem value={'1'}>1</MenuItem>
                              <MenuItem value={'2'}>2</MenuItem>
                              <MenuItem value={'3'}>3</MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Estimated Amount to be invested</label>

                            <CustomTextField
                              {...{ register, errors, name: 'EstimatedAmount' }}
                            />
                          </div>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <div className='form-group'>
                              <label
                                htmlFor='example-text-input'
                                className='form-control-label'
                              >
                                Status
                              </label>
                              <span className='text-danger'>*</span>

                              <FormControl fullWidth>
                                <Select
                                  {...register('status', { required: true })}
                                  error={errors['status'] ? true : false}
                                >
                                  <MenuItem value={'pending'}>Pending</MenuItem>
                                  <MenuItem value={'started'}>Started</MenuItem>
                                  <MenuItem value={'finished'}>
                                    Finished
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-md-12'>
                            <label className='mt-4 text-sm mb-0'>
                              Write a short Note
                            </label>

                            <div className='form-group'>
                              <CustomTextField
                                multiline
                                rows={4}
                                InputLabelProps={{ shrink: true }}
                                {...{ register, errors, name: 'note' }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className=' mt-4 card card-body  p-3'
                      data-animation='FadeIn'
                    >
                      <h5 className='font-weight-bolder'>Socials</h5>
                      <div className='multisteps-form__content'>
                        <div className='row mt-3'>
                          <div className='col-12'>
                            <span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18'
                                height='18'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-twitter'
                              >
                                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                              </svg>
                              <label>Twitter Handle</label>
                            </span>
                            <CustomTextField
                              {...{ register, errors, name: 'socialTwitter' }}
                            />
                          </div>
                          <div className='col-12 mt-3'>
                            <span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-facebook'
                              >
                                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                              </svg>
                              <label>Facebook Account</label>
                            </span>
                            <CustomTextField
                              {...{ register, errors, name: 'socialFacebook' }}
                            />
                          </div>
                          <div className='col-12 mt-3'>
                            <span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-linkedin'
                              >
                                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                                <rect x='2' y='9' width='4' height='12'></rect>
                                <circle cx='4' cy='4' r='2'></circle>
                              </svg>
                              <label>Linkedin Account</label>
                            </span>
                            <CustomTextField
                              {...{ register, errors, name: 'socialLinkedin' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='button-row text-left mt-4 '>
                      <button
                        className='btn bg-gradient-dark ms-auto mb-0 js-btn-next'
                        type='submit'
                        title='Next'
                        onClick={handleSubmit(onSubmit)}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
