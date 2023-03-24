import React from 'react';

export default function CreateProductPlan() {
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
          <form
            action='https://techfertile.patcognos.com/save-project'
            method='post'
          >
            <div className='col-lg-9 col-12 mx-auto'>
              <div className=' card-body'>
                <h3 className='mb-0'>New Product Idea</h3>
                <p className='text-sm mb-0'>Create new product idea</p>
                <hr className='horizontal dark my-3' />
                <label htmlhtmlFor='projectName' className='form-label'>
                  Product Name
                </label>
                <label className='text-danger'>*</label>
                <input
                  type='text'
                  value=''
                  name='title'
                  className='form-control'
                  id='projectName'
                />
                <label className='mt-4 text-sm mb-0'>
                  What Problem does this product solves?
                </label>
                <p className='form-text  text-purple text-xs ms-1'>
                  Write a short pitch.Within 225 words
                </p>
                <div className='form-group'>
                  {/* <textarea
                    name='summary'
                    className='form-control'
                    rows='4'
                    id='editor'
                  ></textarea> */}
                </div>
                <div className='form-group'>
                  <label
                    htmlhtmlFor='example-text-input'
                    className='form-control-label'
                  >
                    Status
                  </label>
                  <span className='text-danger'>*</span>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                    name='status'
                  >
                    <option value='Pending'>Pending</option>
                    <option value='Started'>Started</option>
                    <option value='Finished'>Finished</option>
                  </select>
                </div>
                <div className='col-md-12'>
                  <div>
                    <label
                      htmlhtmlFor='exampleFormControlInput1'
                      className='form-label'
                    >
                      Team Members
                    </label>
                    <span className='text-danger'>*</span>
                    <select
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
                            ></textarea> */}
                          </span>
                        </span>
                      </span>
                      <span
                        className='dropdown-wrapper'
                        aria-hidden='true'
                      ></span>
                    </span>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-6'>
                    <label className='form-label'>Start Date</label>
                    <input
                      className='form-control flatpickr-input'
                      name='start_date'
                      id='start_date'
                      value='2022-11-14'
                      type='text'
                      readOnly='readonly'
                    />
                  </div>
                  <div className='col-6'>
                    <label className='form-label'>End Date</label>
                    <input
                      className='form-control flatpickr-input'
                      name='end_date'
                      id='end_date'
                      value='2022-11-14'
                      type='text'
                      readOnly='readonly'
                    />
                  </div>
                </div>
                <label className='mt-4 text-sm mb-0'>Product Description</label>
                <p className='form-text text-purple text-xs ms-1'>
                  Write a well organised description of the product.
                </p>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    rows='10'
                    id='description'
                    name='description'
                    aria-hidden='true'
                  ></textarea>
                  {/* <div
                    role='application'
                    className='tox tox-tinymce'
                    aria-disabled='false'
                    // style='visibility: hidden; height: 242px;'
                  >
                    <div className='tox-editor-container'>
                      <div
                        data-alloy-vertical-dir='toptobottom'
                        className='tox-editor-header'
                      >
                        <div
                          role='menubar'
                          data-alloy-tabstop='true'
                          className='tox-menubar'
                        >
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>File</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>Edit</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>View</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>Insert</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>Format</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>Tools</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                          <button
                            aria-haspopup='true'
                            role='menuitem'
                            type='button'
                            data-alloy-tabstop='true'
                            unselectable='on'
                            tabIndex='-1'
                            className='tox-mbtn tox-mbtn--select'
                            aria-expanded='false'
                            // style='user-select: none;'
                          >
                            <span className='tox-mbtn__select-label'>Table</span>
                            <div className='tox-mbtn__select-chevron'>
                              <svg width='10' height='10'>
                                <path
                                  d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                  fillRule='nonzero'
                                ></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                        <div
                          role='group'
                          className='tox-toolbar-overlord'
                          aria-disabled='false'
                        >
                          <div role='group' className='tox-toolbar__primary'>
                            <div
                              title='history'
                              role='toolbar'
                              data-alloy-tabstop='true'
                              tabIndex='-1'
                              className='tox-toolbar__group'
                            >
                              <button
                                aria-label='Undo'
                                title='Undo'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn tox-tbtn--disabled'
                                aria-disabled='true'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 01-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L6.4 8z'
                                      fillRule='nonzero'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                              <button
                                aria-label='Redo'
                                title='Redo'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn tox-tbtn--disabled'
                                aria-disabled='true'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 11-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 111.4-1.4l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4l3.3-3.3z'
                                      fillRule='nonzero'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <div
                              title='styles'
                              role='toolbar'
                              data-alloy-tabstop='true'
                              tabIndex='-1'
                              className='tox-toolbar__group'
                            >
                              <button
                                title='Formats'
                                aria-label='Formats'
                                aria-haspopup='true'
                                type='button'
                                unselectable='on'
                                tabIndex='-1'
                                className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                                aria-expanded='false'
                                // style='user-select: none;'
                              >
                                <span className='tox-tbtn__select-label'>
                                  Paragraph
                                </span>
                                <div className='tox-tbtn__select-chevron'>
                                  <svg width='10' height='10'>
                                    <path
                                      d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                      fillRule='nonzero'
                                    ></path>
                                  </svg>
                                </div>
                              </button>
                            </div>
                            <div
                              title='formatting'
                              role='toolbar'
                              data-alloy-tabstop='true'
                              tabIndex='-1'
                              className='tox-toolbar__group'
                            >
                              <button
                                aria-label='Bold'
                                title='Bold'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                                aria-pressed='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 01-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                              <button
                                aria-label='Italic'
                                title='Italic'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                                aria-pressed='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M16.7 4.7l-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <div
                              title='alignment'
                              role='toolbar'
                              data-alloy-tabstop='true'
                              tabIndex='-1'
                              className='tox-toolbar__group'
                            >
                              <button
                                aria-label='Align left'
                                title='Align left'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                                aria-pressed='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                              <button
                                aria-label='Align center'
                                title='Align center'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                                aria-pressed='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                              <button
                                aria-label='Align right'
                                title='Align right'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                                aria-pressed='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                              <button
                                aria-label='Justify'
                                title='Justify'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                                aria-pressed='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <div
                              title='indentation'
                              role='toolbar'
                              data-alloy-tabstop='true'
                              tabIndex='-1'
                              className='tox-toolbar__group'
                            >
                              <button
                                aria-label='Decrease indent'
                                title='Decrease indent'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn tox-tbtn--disabled'
                                aria-disabled='true'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm1.6-3.8a1 1 0 01-1.2 1.6l-3-2a1 1 0 010-1.6l3-2a1 1 0 011.2 1.6L6.8 12l1.8 1.2z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                              <button
                                aria-label='Increase indent'
                                title='Increase indent'
                                type='button'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 110-2zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 010-2zm-5 4h12a1 1 0 010 2H7a1 1 0 010-2zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 011.2-1.6l3 2a1 1 0 010 1.6l-3 2a1 1 0 11-1.2-1.6z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='tox-anchorbar'></div>
                      </div>
                      <div className='tox-sidebar-wrap'>
                        <div className='tox-edit-area'>
                          <iframe
                            id='description_ifr'
                            frameBorder='0'
                            allowtransparency='true'
                            title='Rich Text Area. Press ALT-0 for help.'
                            className='tox-edit-area__iframe'
                            src='./TechFertile-create-project-plan_files/saved_resource.html'
                          ></iframe>
                        </div>
                        <div role='complementary' className='tox-sidebar'>
                          <div
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-sidebar__slider tox-sidebar--sliding-closed'
                            // style='width: 0px;'
                          >
                            <div className='tox-sidebar__pane-container'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='tox-statusbar'>
                      <div className='tox-statusbar__text-container'>
                        <div
                          role='navigation'
                          data-alloy-tabstop='true'
                          className='tox-statusbar__path'
                          aria-disabled='false'
                        >
                          <div
                            role='button'
                            data-index='0'
                            tab-index='-1'
                            aria-level='1'
                            tabIndex='-1'
                            className='tox-statusbar__path-item'
                            aria-disabled='false'
                          >
                            p
                          </div>
                        </div>
                      </div>
                      <div
                        title='Resize'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__resize-handle'
                      >
                        <svg width='10' height='10'>
                          <g fillRule='nonzero'>
                            <path d='M8.1 1.1A.5.5 0 119 2l-7 7A.5.5 0 111 8l7-7zM8.1 5.1A.5.5 0 119 6l-3 3A.5.5 0 115 8l3-3z'></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div
                      aria-hidden='true'
                      className='tox-throbber'
                      //   style='display: none;'
                    ></div>
                  </div> */}
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
