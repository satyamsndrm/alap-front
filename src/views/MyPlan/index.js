import { FormControl, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/Form/CustomTextField';
import { useAddSwotAnalysis } from '../../hooks/useSwotAnalysis';

export default function MyPlan() {
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
        <div class='row'>
          <div class='col-md-7 mx-auto text-center'>
            <span class='badge bg-purple-light mb-3'>Pricing and Plans</span>
            <h3 class='text-dark'>
              Ready to get started with StartupKit?Awesome!
            </h3>
            <p class='text-secondary'>Choose the plan that best fit for you.</p>
          </div>
        </div>

        <div class='row mt-4'>
          <div class='col-md-3  mb-4 '>
            <div class='card '>
              <div class='card-header text-center '>
                <h5 class='text-purple opacity-8 text mb-2'>
                  University Access Plan
                </h5>
                <p></p>
                <span>
                  <h4 class='font-weight-bolder'>
                    ₹100.00 /
                    <span>
                      <small class=' text-sm text-warning'> month</small>
                    </span>
                  </h4>{' '}
                </span>

                <h4 class='mt-0'>
                  ₹1,000.00 /
                  <span>
                    <small class='text-sm text-warning'>year</small>
                  </span>
                </h4>
              </div>
              <div class='card-body mx-auto pt-0'></div>
              <div class='card-footer pt-0'>
                <a
                  href='https://techfertile.patcognos.com/subscribe?id=1&amp;term=monthly'
                  type='button'
                  class='btn btn-info btn-sm '
                >
                  Pay Monthly
                </a>

                <a
                  href='https://techfertile.patcognos.com/subscribe?id=1&amp;term=yearly'
                  type='button'
                  class='btn btn-success btn-sm '
                >
                  Pay Yearly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
