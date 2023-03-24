import React from 'react';

// import './app.css';

export default function BusinessPlan() {
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
                  href='https://techfertile.patcognos.com/write-business-plan'
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
        <div className='card'>
          <div className='card-header'>
            <h3>Write your Business plan</h3>
          </div>
          <div className='card-body multisteps-form'>
            <form
              action='https://techfertile.patcognos.com/business-plan-post'
              className='multisteps-form__form mb-8'
              enctype='multipart/form-data'
              method='post'
            >
              <div className='form-group'>
                <label
                  htmlFor='example-text-input'
                  className='form-control-label'
                >
                  Business Name
                </label>
                <label className='text-danger'>*</label>
                <input
                  className='form-control'
                  type='text'
                  name='company_name'
                  value=''
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
                    <input
                      className='form-control'
                      name='name'
                      type='text'
                      value=''
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
                    <input
                      className='form-control flatpickr-input'
                      name='date'
                      id='date'
                      value='2022-11-14'
                      type='text'
                      readOnly='readonly'
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
                    <input className='form-control' type='email' name='email' />
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
                    <input className='form-control' type='tel' name='phone' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='logo_file' className='form-label mt-4'>
                  Upload Logo
                </label>
                <input
                  className='form-control'
                  name='logo'
                  type='file'
                  id='logo_file'
                />
              </div>
              <div className='form-group'>
                <label
                  htmlFor='example-url-input'
                  className='form-control-label'
                >
                  Website
                </label>
                <input className='form-control' name='website' />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Executive Summary
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  A snapshot of your business
                </p>
                <textarea
                  className='form-control'
                  name='ex_summary'
                  id='ex_summary'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                        <button
                          aria-haspopup='true'
                          role='menuitem'
                          type='button'
                          data-alloy-tabstop='true'
                          unselectable='on'
                          tabIndex='-1'
                          className='tox-mbtn tox-mbtn--select'
                          aria-expanded='false'
                          //style='user-select: none;'
                        >
                          <span className='tox-mbtn__select-label'>Help</span>
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_5076845159731668447607553'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_5076845159731668447607553'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_1753479489751668447607555'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_1753479489751668447607555'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_6485220859771668447607556'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_6485220859771668447607556'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='ex_summary_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource.html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Company description
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Describe what you do
                </p>
                <textarea
                  className='form-control'
                  name='description'
                  id='com_description'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                        <button
                          aria-haspopup='true'
                          role='menuitem'
                          type='button'
                          data-alloy-tabstop='true'
                          unselectable='on'
                          tabIndex='-1'
                          className='tox-mbtn tox-mbtn--select'
                          aria-expanded='false'
                          //style='user-select: none;'
                        >
                          <span className='tox-mbtn__select-label'>Help</span>
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_7782478069791668447607577'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_7782478069791668447607577'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_2505224569811668447607579'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_2505224569811668447607579'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_2591969029831668447607579'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_2591969029831668447607579'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='com_description_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(1).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Market Analysis
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Rsesearch on your industry, market and competitors
                </p>
                <textarea
                  className='form-control'
                  name='m_analysis'
                  id='market_analysis'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_3270624989851668447607612'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_3270624989851668447607612'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_8949783939871668447607614'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_8949783939871668447607614'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_3935942109891668447607615'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_3935942109891668447607615'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='market_analysis_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(2).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Organization &amp; Management
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Your business and management structure
                </p>
                <textarea
                  className='form-control'
                  name='management'
                  id='organization'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_3043088189911668447607635'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_3043088189911668447607635'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_400139319931668447607637'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_400139319931668447607637'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_7699782749951668447607638'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_7699782749951668447607638'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='organization_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(3).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Service or product
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  The products or services you’re offering
                </p>
                <textarea
                  className='form-control'
                  name='product'
                  id='service_product'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_7468087079971668447607660'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_7468087079971668447607660'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_7372016959991668447607662'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_7372016959991668447607662'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_62356725710011668447607662'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_62356725710011668447607662'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='service_product_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(4).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Marketing and sales
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  How you’ll market your business and your sales strategy
                </p>
                <textarea
                  className='form-control'
                  name='marketing'
                  id='marketing_sale'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_97358299910031668447607685'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_97358299910031668447607685'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_30255747210051668447607687'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_30255747210051668447607687'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_93079643610071668447607688'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_93079643610071668447607688'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='marketing_sale_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(5).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>Budget</label>
                <p className='form-text text-muted text-xs ms-1'>
                  Budget of your company for next 2 years with source of the
                  moneys
                </p>
                <textarea
                  className='form-control'
                  name='budget'
                  id='budget'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_95522279910091668447607711'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_95522279910091668447607711'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_66539779910111668447607712'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_66539779910111668447607712'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_51030168610131668447607713'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_51030168610131668447607713'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='budget_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(6).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Investment/Funding request
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  How much money you’ll need for next 3 to 5 years
                </p>
                <textarea
                  className='form-control'
                  name='investment'
                  id='investment'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_75198157210151668447607731'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_75198157210151668447607731'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_1918611410171668447607732'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_1918611410171668447607732'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_31007992610191668447607732'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_31007992610191668447607732'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='investment_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(7).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>
                  Financial projections
                </label>
                <p className='form-text text-muted text-xs ms-1'>
                  Supply information like balance sheets
                </p>
                <textarea
                  className='form-control'
                  name='finance'
                  id='financial_projections'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              title='Blocks'
                              aria-label='Blocks'
                              aria-haspopup='true'
                              type='button'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-tbtn tox-tbtn--select tox-tbtn--bespoke'
                              aria-expanded='false'
                              //style='user-select: none;'
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
                            title=''
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
                            <div
                              aria-pressed='false'
                              aria-label='Background color'
                              title='Background color'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_16132824610211668447607746'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <g fillRule='evenodd'>
                                      <path
                                        id='tox-icon-highlight-bg-color__color'
                                        d='M3 18h18v3H3z'
                                      ></path>
                                      <path
                                        fillRule='nonzero'
                                        d='M7.7 16.7H3l3.3-3.3-.7-.8L10.2 8l4 4.1-4 4.2c-.2.2-.6.2-.8 0l-.6-.7-1.1 1.1zm5-7.5L11 7.4l3-2.9a2 2 0 012.6 0L18 6c.7.7.7 2 0 2.7l-2.9 2.9-1.8-1.8-.5-.6'
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_16132824610211668447607746'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                          </div>
                          <div
                            title=''
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <div
                              aria-pressed='false'
                              aria-label='Bullet list'
                              title='Bullet list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_36532926010231668447607750'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_36532926010231668447607750'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
                            <div
                              aria-pressed='false'
                              aria-label='Numbered list'
                              title='Numbered list'
                              role='button'
                              aria-haspopup='true'
                              unselectable='on'
                              tabIndex='-1'
                              className='tox-split-button'
                              aria-disabled='false'
                              aria-expanded='false'
                              aria-describedby='aria_50145147710251668447607751'
                              //style='user-select: none;'
                            >
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn'
                                aria-disabled='false'
                              >
                                <span className='tox-icon tox-tbtn__icon-wrap'>
                                  <svg width='24' height='24'>
                                    <path
                                      d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                      fillRule='evenodd'
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                              <span
                                role='presentation'
                                tabIndex='-1'
                                className='tox-tbtn tox-split-button__chevron'
                                aria-disabled='false'
                              >
                                <svg width='10' height='10'>
                                  <path
                                    d='M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 010-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8z'
                                    fillRule='nonzero'
                                  ></path>
                                </svg>
                              </span>
                              <span
                                aria-hidden='true'
                                id='aria_50145147710251668447607751'
                                //style='display: none;'
                              >
                                To open the popup, press Shift+Enter
                              </span>
                            </div>
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
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Clear formatting'
                              title='Clear formatting'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M13.2 6a1 1 0 010 .2l-2.6 10a1 1 0 01-1 .8h-.2a.8.8 0 01-.8-1l2.6-10H8a1 1 0 110-2h9a1 1 0 010 2h-3.8zM5 18h7a1 1 0 010 2H5a1 1 0 010-2zm13 1.5L16.5 18 15 19.5a.7.7 0 01-1-1l1.5-1.5-1.5-1.5a.7.7 0 011-1l1.5 1.5 1.5-1.5a.7.7 0 011 1L17.5 17l1.5 1.5a.7.7 0 01-1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Help'
                              title='Help'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <g fillRule='evenodd'>
                                    <path d='M12 5.5a6.5 6.5 0 00-6 9 6.3 6.3 0 001.4 2l1 1a6.3 6.3 0 003.6 1 6.5 6.5 0 006-9 6.3 6.3 0 00-1.4-2l-1-1a6.3 6.3 0 00-3.6-1zM12 4a7.8 7.8 0 015.7 2.3A8 8 0 1112 4z'></path>
                                    <path
                                      d='M9.6 9.7a.7.7 0 01-.7-.8c0-1.1 1.5-1.8 3.2-1.8 1.8 0 3.2.8 3.2 2.4 0 1.4-.4 2.1-1.5 2.8-.2 0-.3.1-.3.2a2 2 0 00-.8.8.8.8 0 01-1.4-.6c.3-.7.8-1 1.3-1.5l.4-.2c.7-.4.8-.6.8-1.5 0-.5-.6-.9-1.7-.9-.5 0-1 .1-1.4.3-.2 0-.3.1-.3.2v-.2c0 .4-.4.8-.8.8z'
                                      fillRule='nonzero'
                                    ></path>
                                    <circle cx='12' cy='16' r='1'></circle>
                                  </g>
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
                          id='financial_projections_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(8).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                      <button
                        type='button'
                        data-alloy-tabstop='true'
                        tabIndex='-1'
                        className='tox-statusbar__wordcount'
                      >
                        0 words
                      </button>
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleFormControlTextarea1'>Appendix</label>
                <p className='form-text text-muted text-xs ms-1'>
                  An optional section that includes résumés and permits
                </p>
                <textarea
                  className='form-control'
                  name='appendix'
                  id='appendix'
                  rows='10'
                  aria-hidden='true'
                  //style='display: none;'
                ></textarea>
                <div
                  role='application'
                  className='tox tox-tinymce'
                  aria-disabled='false'
                  //style='visibility: hidden; height: 242px;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                          //style='user-select: none;'
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
                            title=''
                            role='toolbar'
                            data-alloy-tabstop='true'
                            tabIndex='-1'
                            className='tox-toolbar__group'
                          >
                            <button
                              aria-label='Numbered list'
                              title='Numbered list'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                              aria-pressed='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 110-2zM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 01-.5-.5V5h-.5a.5.5 0 010-1H6zm-1 8.8l.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 01-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 00-.2-.2H4.5a.5.5 0 01-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3zM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 010-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 110-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 110-1H6c.6 0 1 .4 1 1z'
                                    fillRule='evenodd'
                                  ></path>
                                </svg>
                              </span>
                            </button>
                            <button
                              aria-label='Bullet list'
                              title='Bullet list'
                              type='button'
                              tabIndex='-1'
                              className='tox-tbtn'
                              aria-disabled='false'
                              aria-pressed='false'
                            >
                              <span className='tox-icon tox-tbtn__icon-wrap'>
                                <svg width='24' height='24'>
                                  <path
                                    d='M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 010-2zM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1z'
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
                          id='appendix_ifr'
                          frameBorder='0'
                          allowtransparency='true'
                          title='Rich Text Area. Press ALT-0 for help.'
                          className='tox-edit-area__iframe'
                          src='./TechFertile-business-plans_files/saved_resource(9).html'
                        ></iframe>
                      </div>
                      <div role='complementary' className='tox-sidebar'>
                        <div
                          data-alloy-tabstop='true'
                          tabIndex='-1'
                          className='tox-sidebar__slider tox-sidebar--sliding-closed'
                          //style='width: 0px;'
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
                    //style='display: none;'
                  ></div>
                </div>
              </div>
              <input
                type='hidden'
                name='_token'
                value='CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2'
              />{' '}
              <button type='submit' className='btn bg-gradient-dark'>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
