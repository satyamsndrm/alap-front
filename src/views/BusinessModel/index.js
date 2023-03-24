import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddBusinessModel } from '../../hooks/useBusinessModel';

// import './app.css';

export default function BusinessModel() {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(-1);
  };
  const { mutate: addBusinessModel } = useAddBusinessModel(onSuccess);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    addBusinessModel({
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
                <h4 className='font-weight-bolder'>Business Model Canvas</h4>
                <p>
                  <strong>
                    Source: Harvard Business Review, Entreprenuers Handbook{' '}
                  </strong>
                </p>
                <hr />

                <form>
                  <div className='form-group'>
                    <label htmlFor='exampleFormControlTextarea1'>
                      Business/Company Name
                    </label>
                    <label className='text-danger'>*</label>

                    <CustomTextField
                      {...{ register, errors, name: 'companyName' }}
                    />
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Key Partners
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          Who are our key partners?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Who are our key Suppliers?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Which key resources are we acquiring from our
                          partners?
                        </p>

                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'partners' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Key Activities
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            What key activities do our value propositions
                            require?
                          </p>
                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'activities' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Key Resources
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          What key resources do our value propositions require?
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'resources' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Value Propositions
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          What value do we deliver to the customer ?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Which one of our customers problem are we helping to
                          solve?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          What bundle of products or services are we offering to
                          each segment?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Which customer needs are we satisfying?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          What is the minimum viable product?
                        </p>

                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'propositions' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Customer Relationships
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            How do we get, keep and grow customers?
                          </p>
                          <p className='form-text text-muted text-xs ms-1'>
                            Which cuustomer relationships have we established ?
                          </p>
                          <p className='form-text text-muted text-xs ms-1'>
                            How are they integrated with the rest of our
                            business model?
                          </p>
                          <p className='form-text text-muted text-xs ms-1'>
                            How costly are they?
                          </p>

                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{
                              register,
                              errors,
                              name: 'customerRelationship',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Channels
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          Through which channels do our customer segments wants
                          to be reached?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          How do other companies reach them now?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Which ones work best?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Which ones are most cost-efficient?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          How are we integrating them with customer routines?
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'channels' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Customer Segments
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          For whom are we creating value?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          Who are our most important customers?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          What are the customer archetypes?
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'customerSegment' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col align-self-end'>
                      <div className='col align-self-center'>
                        <div className='form-group'>
                          <label htmlFor='exampleFormControlTextarea1'>
                            Cost Structure
                          </label>
                          <p className='form-text text-muted text-xs ms-1'>
                            What are the most important costs inherent to our
                            business model?
                          </p>
                          <p className='form-text text-muted text-xs ms-1'>
                            Which key resources are most expensive?
                          </p>
                          <p className='form-text text-muted text-xs ms-1'>
                            Which key activities are most expensive?
                          </p>

                          <CustomTextField
                            multiline
                            rows={4}
                            InputLabelProps={{ shrink: true }}
                            {...{ register, errors, name: 'costStructure' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col align-self-center'>
                      <div className='form-group'>
                        <label htmlFor='exampleFormControlTextarea1'>
                          Revenue Stream
                        </label>
                        <p className='form-text text-muted text-xs ms-1'>
                          For what value are our customers willing to pay?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          For what do they currently pay?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          What is the revenue model?
                        </p>
                        <p className='form-text text-muted text-xs ms-1'>
                          What are the pricing tactics?
                        </p>
                        <CustomTextField
                          multiline
                          rows={4}
                          InputLabelProps={{ shrink: true }}
                          {...{ register, errors, name: 'revenueStream' }}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className='btn btn-info mt-4'
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
