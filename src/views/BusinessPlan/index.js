import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddBuisnessPlan } from '../../hooks/useBusinessPlan';

export default function BusinessPlan() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addBusinessPlan } = useAddBuisnessPlan(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addBusinessPlan({
      data,
    });
  };
  return (
    <main className='main-content mt-1 border-radius-lg '>
      <div className='container-fluid'>
        <div className='card'>
          <div className='card-header'>
            <h3>Write your Business plan</h3>
          </div>
          <div className='card-body multisteps-form'>
            <form className='multisteps-form__form mb-8'>
              <div className='form-group'>
                <label
                  htmlFor='example-text-input'
                  className='form-control-label'
                >
                  Business Name
                </label>
                <label className='text-danger'>*</label>

                <CustomTextField
                  {...{ register, errors, name: 'BusinessName' }}
                />
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label
                      htmlFor='example-search-input'
                      className='form-control-label'
                    >
                      Your Name
                    </label>
                    <label className='text-danger'>*</label>

                    <CustomTextField
                      {...{ register, errors, name: 'yourName' }}
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label
                      htmlFor='example-search-input'
                      className='form-control-label'
                    >
                      Date
                    </label>
                    <CustomTextField
                      type='date'
                      InputLabelProps={{ shrink: true }}
                      {...{ register, errors, name: 'date' }}
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label
                      htmlFor='example-email-input'
                      className='form-control-label'
                    >
                      Email
                    </label>
                    <CustomTextField {...{ register, errors, name: 'email' }} />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label
                      htmlFor='example-tel-input'
                      className='form-control-label'
                    >
                      Phone
                    </label>
                    <CustomTextField {...{ register, errors, name: 'phone' }} />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='logo_file' className='form-label mt-4'>
                  Upload Logo
                </label>
                <CustomTextField
                  type='file'
                  {...{ register, errors, name: 'logo', required: false }}
                />
              </div>
              <div className='form-group'>
                <label
                  htmlFor='example-url-input'
                  className='form-control-label'
                >
                  Website
                </label>
                <CustomTextField {...{ register, errors, name: 'website' }} />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Executive Summary
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  A snapshot of your business
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'ExecutiveSummary' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Company description
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Describe what you do
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'Companydescription' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Market Analysis
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Rsesearch on your industry, market and competitors
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'MarketAnalysis' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Organization &amp; Management
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Your business and management structure
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'OrganizationManagement' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Service or product
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  The products or services you’re offering
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'ServiceOrProduct' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Marketing and sales
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  How you’ll market your business and your sales strategy
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'MarketingSales' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>Budget</label>
                <p className='form-text text-muted text-xs ms-1'>
                  Budget of your company for next 2 years with source of the
                  moneys
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'Budget' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Investment/Funding request
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  How much money you’ll need for next 3 to 5 years
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'InveatmentFundingRequet' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Financial projections
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Supply information like balance sheets
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'FinentialProjections' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>Appendix</label>
                <p className='form-text text-muted text-xs ms-1'>
                  An optional section that includes résumés and permits
                </p>
                <CustomTextField
                  multiline
                  rows={4}
                  InputLabelProps={{ shrink: true }}
                  {...{ register, errors, name: 'Appendix' }}
                />
              </div>
              <button
                type='submit'
                className='btn bg-gradient-dark'
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
