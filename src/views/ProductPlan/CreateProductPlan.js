import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddProductPlan } from '../../hooks/useProductPlan';

export default function CreateProductPlan() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addProductPlan } = useAddProductPlan(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addProductPlan({
      data,
    });
  };
  return (
    <main className='main-content mt-1 border-radius-lg '>
      <nav
        className='navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl d-print-none'
        navbar-scroll='true'
      >
        <div className='container-fluid py-1 px-3 d-print-none'>
          <div
            className='collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4'
            id='navbar'
          >
            <div className='ms-md-auto pe-md-3 d-flex align-items-center'></div>
            <ul className=' justify-content-end'>
              <li className='nav-item d-xl-none pe-2 ps-3 d-flex align-items-center'>
                <a
                  href='javascript:'
                  className='nav-link text-body p-0'
                  id='iconNavbarSidenav'
                >
                  <div className='sidenav-toggler-inner'>
                    <i className='sidenav-toggler-line'></i>
                    <i className='sidenav-toggler-line'></i>
                    <i className='sidenav-toggler-line'></i>
                  </div>
                </a>
              </li>
              <li className='nav-item dropdown pe-2 d-flex align-items-center'>
                <a
                  href='https://techfertile.patcognos.com/create-project'
                  className='nav-link text-body p-0'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                ></a>
                <ul
                  className='dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4'
                  aria-labelledby='dropdownMenuButton'
                >
                  <li className='mb-2'>
                    <a
                      className='dropdown-item border-radius-md'
                      href='https://techfertile.patcognos.com/profile'
                    >
                      <div className='d-flex py-1'>
                        <div className='d-flex flex-column justify-content-center'>
                          <h6 className='text-sm font-weight-normal mb-1'>
                            <span className='font-weight-bold'>My Profile</span>
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item border-radius-md'
                      href='https://techfertile.patcognos.com/logout'
                    >
                      <div className='d-flex py-1'>
                        <div className='d-flex flex-column justify-content-center'>
                          <h6 className='text-sm font-weight-bolder mb-1'>
                            Logout
                          </h6>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h5 className=' text-secondary fw-bolder'>Product Plan</h5>
          </div>
          <div className='col text-end'>
            <a
              href='https://techfertile.patcognos.com/projects'
              type='button'
              className='btn btn-info text-white'
            >
              Product Plans{' '}
            </a>
          </div>
        </div>
      </div>
      <div className='container-fluid py-4'>
        <div className='row'>
          <form>
            <div className='col-lg-9 col-12 mx-auto'>
              <div className=' card-body'>
                <h3 className='mb-0'>New Product Idea</h3>
                <p className='text-sm mb-0'>Create new product idea</p>
                <hr className='horizontal dark my-3' />
                <label htmlFor='projectName' className='form-label'>
                  Product Name
                </label>
                <label className='text-danger'>*</label>
                <CustomTextField
                  {...{ register, errors, name: 'projectName' }}
                />
                <label className='mt-4 text-sm mb-0'>
                  What Problem does this product solves?
                </label>
                <p className='form-text  text-purple text-xs ms-1'>
                  Write a short pitch.Within 225 words
                </p>
                <div className='form-group'>
                  <CustomTextField
                    multiline
                    rows={4}
                    InputLabelProps={{ shrink: true }}
                    {...{ register, errors, name: 'summary' }}
                  />
                </div>
                <div className='form-group'>
                  <label
                    htmlFor='example-text-input'
                    className='form-control-label'
                  >
                    Status
                  </label>
                  <span className='text-danger'>*</span>
                  {/* <select
                    className='form-select'
                    aria-label='Default select example'
                    name='status'
                  >
                    <option value='Pending'>Pending</option>
                    <option value='Started'>Started</option>
                    <option value='Finished'>Finished</option>
                  </select> */}
                  <FormControl fullWidth>
                    <Select
                      {...register('status', { required: true })}
                      error={errors['status'] ? true : false}
                    >
                      <MenuItem value={'pending'}>Pending</MenuItem>
                      <MenuItem value={'started'}>Started</MenuItem>
                      <MenuItem value={'finished'}>Finished</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className='col-md-12'>
                  <div>
                    <label
                      htmlFor='exampleFormControlInput1'
                      className='form-label'
                    >
                      Team Members
                    </label>
                    <span className='text-danger'>*</span>
                    {/* <select
                      className='form-control select2 select2-hidden-accessible'
                      multiple=''
                      id=''
                      name='members[]'
                      data-select2-id='select2-data-1-hbz9'
                      tabIndex='-1'
                      aria-hidden='true'
                    >
                      <option value='7'>Kartik Choudhary</option>
                    </select>
                    <span
                      className='select2 select2-container select2-container--default'
                      dir='ltr'
                      data-select2-id='select2-data-2-7r59'
                      //   style='width: 638px;'
                    >
                      <span className='selection'>
                        <span
                          className='select2-selection select2-selection--multiple'
                          role='combobox'
                          aria-haspopup='true'
                          aria-expanded='false'
                          tabIndex='-1'
                          aria-disabled='false'
                        >
                          <ul
                            className='select2-selection__rendered'
                            id='select2--container'
                          ></ul>
                          <span className='select2-search select2-search--inline'>
                            {/* <textarea
                              className='select2-search__field'
                              type='search'
                              tabIndex='0'
                              autocorrect='off'
                              autocapitalize='none'
                              spellcheck='false'
                              role='searchbox'
                              aria-autocomplete='list'
                              autocomplete='off'
                              aria-label='Search'
                              aria-describedby='select2--container'
                              placeholder=''
                              style='width: 0.75em;'
                            ></textarea> 
                          </span>
                        </span>
                      </span>
                      <span
                        className='dropdown-wrapper'
                        aria-hidden='true'
                      ></span>
                    </span> */}

                    <FormControl fullWidth>
                      <Select
                        {...register('member', { required: true })}
                        error={errors['member'] ? true : false}
                      >
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                    <label className='form-label'>Start Date</label>
                    {/* <input
                      className='form-control flatpickr-input'
                      name='start_date'
                      id='start_date'
                      value='2022-11-14'
                      type='text'
                      readOnly='readonly'
                    /> */}
                    <CustomTextField
                      label='Start Date'
                      type='date'
                      InputLabelProps={{ shrink: true }}
                      {...{ register, errors, name: 'start_date' }}
                    />
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>End Date</label>
                    {/* <input
                      className='form-control flatpickr-input'
                      name='end_date'
                      id='end_date'
                      value='2022-11-14'
                      type='text'
                      readOnly='readonly'
                    /> */}
                    <CustomTextField
                      label='End Date'
                      type='date'
                      InputLabelProps={{ shrink: true }}
                      {...{ register, errors, name: 'end_date' }}
                    />
                  </div>
                </div>
                <label className='mt-4 text-sm mb-0'>Product Description</label>
                <p className='form-text text-purple text-xs ms-1'>
                  Write a well organised description of the product.
                </p>
                <div className='form-group'>
                  {/* <textarea
                    className='form-control'
                    rows='10'
                    id='description'
                    name='description'
                    aria-hidden='true'
                  ></textarea> */}

                  <CustomTextField
                    multiline
                    rows={4}
                    // label='Description'
                    InputLabelProps={{ shrink: true }}
                    {...{ register, errors, name: 'description' }}
                  />
                </div>
                <input
                  type='hidden'
                  name='_token'
                  value='CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2'
                />{' '}
                <div className='d-flex  mt-4'>
                  <button
                    type='submit'
                    name='button'
                    className='btn btn-info m-0 '
                    onClick={handleSubmit(onSubmit)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
