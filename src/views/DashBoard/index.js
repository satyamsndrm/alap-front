import React from 'react';

// import './app.css';

export default function DashBoard() {
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
                  href='https://techfertile.patcognos.com/dashboard'
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
        <div className='row mb-3'>
          <div className='col'>
            <h5 className=' text-secondary fw-bolder'>Dashboard</h5>
          </div>

          <div className='col text-end'>
            <span className='badge bg-pink-light text-danger'>
              Trial Expiring in 1 week from now
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <div className='card bg-purple-light'>
              <div className='card-body'>
                <div className='row'>
                  <div className=''>
                    <h4 className='fw-bolder'>Hello,</h4>{' '}
                    <h5 className='text-secondary fw-bolder d-sm-inline d-none '>
                      John Doe
                    </h5>
                    <p className='text-purple fw-bolder mt-3'>
                      Welcome Back to Your Dashboard
                    </p>
                  </div>
                </div>
                <a
                  href='https://techfertile.patcognos.com/create-project'
                  type='button'
                  className='btn btn-info fw-bolder mt-2'
                >
                  Plan for your Product
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className=' '>
              <div className=''>
                <div className='row'>
                  <div className='col-md-6 mb-4'>
                    <div className='card'>
                      <div className='card-body p-3'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='numbers'>
                              <p className='text-sm mb-0 text-capitalize font-weight-bold'>
                                Product Plans
                              </p>

                              <h5 className='font-weight-bolder mt-4 '>
                                <a href='https://techfertile.patcognos.com/projects'>
                                  0
                                </a>
                              </h5>
                            </div>
                          </div>
                          <div className='col-4 text-end'>
                            <div className=' icon icon-shape bg-purple-light  text-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className=' text-purple feather feather-hard-drive mt-2'
                              >
                                <line x1='22' y1='12' x2='2' y2='12'></line>
                                <path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'></path>
                                <line x1='6' y1='16' x2='6.01' y2='16'></line>
                                <line x1='10' y1='16' x2='10.01' y2='16'></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 mb-4'>
                    <div className='card bg-info'>
                      <div className='card-body p-3'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='numbers'>
                              <p className='text-sm text-white mb-0 text-capitalize font-weight-bold'>
                                Total Notes
                              </p>
                              <h5 className=' mt-4  '>
                                <a
                                  href='https://techfertile.patcognos.com/notes'
                                  className='text-white'
                                >
                                  0
                                </a>
                              </h5>
                            </div>
                          </div>
                          <div className='col-4 text-end'>
                            <div className='icon icon-shape bg-purple-light ms-auto text-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className=' text-purple feather feather-edit mt-2'
                              >
                                <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                                <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='card bg-gradient-dark'>
                      <div className='card-body p-3'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='numbers'>
                              <p className='text-sm mb-0 text-white text-capitalize font-weight-bold'>
                                Business Models
                              </p>
                              <h5 className='font-weight-bolder text-white mt-4'>
                                0
                              </h5>
                            </div>
                          </div>
                          <div className='col-4 text-end'>
                            <div className='icon icon-shape bg-purple-light ms-auto text-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className=' text-purple feather feather-briefcase mt-2'
                              >
                                <rect
                                  x='2'
                                  y='7'
                                  width='20'
                                  height='14'
                                  rx='2'
                                  ry='2'
                                ></rect>
                                <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6 mb-xl-0 mb-4'>
                    <div className='card'>
                      <div className='card-body  p-3'>
                        <div className='row'>
                          <div className='col-8'>
                            <div className='numbers '>
                              <p className='text-sm mb-0 text-capitalize font-weight-bold'>
                                Total Users
                              </p>
                              <h5 className='font-weight-bolder text-dark mt-4'>
                                1
                              </h5>
                            </div>
                          </div>
                          <div className='col-4 text-end'>
                            <div className='icon icon-shape bg-purple-light ms-auto text-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-user text-purple mt-2'
                              >
                                <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                                <circle cx='12' cy='7' r='4'></circle>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-lg-5'>
            <div className='card '>
              <div className='card-header pb-0 p-3'>
                <div className='d-flex align-items-center'>
                  <h6 className='mb-0'>Recent Tasks</h6>
                </div>
              </div>
              <div className='table-responsive'>
                <table className='table align-items-center mb-0'>
                  <thead>
                    <tr>
                      <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
                        Task
                      </th>

                      <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 '>
                        Assigned to
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='row my-4'>
          <div className='col-lg-12 col-md-6 mb-md-0 mb-4'>
            <div className='card '>
              <div className='card-header pb-0 p-3'>
                <div className='d-flex align-items-center'>
                  <h6 className='mb-0'>Recent Product Plans</h6>
                </div>
              </div>
              <div className='table-responsive'>
                <table className='table align-items-center mb-0'>
                  <thead>
                    <tr>
                      <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
                        Product Name
                      </th>

                      <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>
                        Members
                      </th>
                      <th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
                        Due Date
                      </th>

                      <th className='text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7'>
                        Status
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='row my-4'>
          <div className='col-lg-12 col-md-6 mb-md-0 mb-4'>
            <div className='card '>
              <div className='card-header pb-0 p-3'>
                <div className='d-flex align-items-center'>
                  <h6 className='mb-0'>Recent Investors</h6>
                </div>
              </div>
              <div className='table-responsive'>
                <table className='table align-items-center mb-0'>
                  <thead>
                    <tr>
                      <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
                        Name
                      </th>

                      <th className='text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'>
                        Email
                      </th>
                      <th className='text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'>
                        Product Name
                      </th>

                      <th className='text-uppercase text-center text-secondary text-xxs font-weight-bolder opacity-7'>
                        Status
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
