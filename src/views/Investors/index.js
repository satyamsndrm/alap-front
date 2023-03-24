import React from 'react';

// import './app.css';

export default function Investors() {
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
                  href='https://techfertile.patcognos.com/add-investor'
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
                            <input
                              name='first_name'
                              className='multisteps-form__input form-control'
                              type='text'
                            />
                          </div>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Last Name</label>
                            <small className='text-danger'>*</small>
                            <input
                              name='last_name'
                              className='multisteps-form__input form-control'
                              type='text'
                            />
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-md-12'>
                            <label>Username/Email</label>
                            <small className='text-danger'>*</small>
                            <input
                              name='email'
                              className='multisteps-form__input form-control'
                              type='email'
                              value=''
                            />
                          </div>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Phone Number</label>
                            <input
                              name='phone_number'
                              className='multisteps-form__input form-control'
                              value=''
                            />
                          </div>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Source</label>
                            <input
                              name='source'
                              className='multisteps-form__input form-control'
                              value=''
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
                          <select
                            className='form-select form-select-solid fw-bolder'
                            id='contact'
                            aria-label='Floating label select example'
                            name='product_id'
                          >
                            <option value='0'>None</option>
                          </select>
                        </div>

                        <div className='row mt-3'>
                          <div className='col-12 col-sm-6 mt-3 mt-sm-0'>
                            <label>Estimated Amount to be invested</label>
                            <input
                              name='amount'
                              className=' form-control'
                              value=''
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
                              <select
                                className='form-select'
                                aria-label='Default select example'
                                name='status'
                              >
                                <option value='Pending'>Pending</option>
                                <option value='Approved'>Approved</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-md-12'>
                            <label className='mt-4 text-sm mb-0'>
                              Write a short Note
                            </label>

                            <div className='form-group'>
                              <textarea
                                name='notes'
                                className='form-control bg-yellow-light'
                                rows='4'
                                id='editor'
                                aria-hidden='true'
                                // style='display: none;'
                              ></textarea>
                              <div
                                role='application'
                                className='tox tox-tinymce'
                                aria-disabled='false'
                                // style='visibility: hidden; height: 200px;'
                              >
                                <div className='tox-editor-container'>
                                  <div
                                    data-alloy-vertical-dir='toptobottom'
                                    className='tox-editor-header'
                                  >
                                    <div
                                      role='group'
                                      className='tox-toolbar-overlord'
                                      aria-disabled='false'
                                    >
                                      <div
                                        role='group'
                                        className='tox-toolbar__primary'
                                      >
                                        <div
                                          title=''
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
                                          title=''
                                          role='toolbar'
                                          data-alloy-tabstop='true'
                                          tabIndex='-1'
                                          className='tox-toolbar__group'
                                        >
                                          <div
                                            aria-pressed='false'
                                            aria-label='Text color'
                                            title='Text color'
                                            role='button'
                                            aria-haspopup='true'
                                            unselectable='on'
                                            tabIndex='-1'
                                            className='tox-split-button'
                                            aria-disabled='false'
                                            aria-expanded='false'
                                            aria-describedby='aria_6209987411521668447448097'
                                            // style='user-select: none;'
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
                                                      id='tox-icon-text-color__color'
                                                      d='M3 18h18v3H3z'
                                                    ></path>
                                                    <path d='M8.7 16h-.8a.5.5 0 01-.5-.6l2.7-9c.1-.3.3-.4.5-.4h2.8c.2 0 .4.1.5.4l2.7 9a.5.5 0 01-.5.6h-.8a.5.5 0 01-.4-.4l-.7-2.2c0-.3-.3-.4-.5-.4h-3.4c-.2 0-.4.1-.5.4l-.7 2.2c0 .3-.2.4-.4.4zm2.6-7.6l-.6 2a.5.5 0 00.5.6h1.6a.5.5 0 00.5-.6l-.6-2c0-.3-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.4z'></path>
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
                                              id='aria_6209987411521668447448097'
                                              // style='display: none;'
                                            >
                                              To open the popup, press
                                              Shift+Enter
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
                                      </div>
                                    </div>
                                    <div className='tox-anchorbar'></div>
                                  </div>
                                  <div className='tox-sidebar-wrap'>
                                    <div className='tox-edit-area'>
                                      <iframe
                                        id='editor_ifr'
                                        frameBorder='0'
                                        allowtransparency='true'
                                        title='Rich Text Area. Press ALT-0 for help.'
                                        className='tox-edit-area__iframe'
                                        src='./TechFertile-investors_files/saved_resource.html'
                                      ></iframe>
                                    </div>
                                    <div
                                      role='complementary'
                                      className='tox-sidebar'
                                    >
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
                                  // style='display: none;'
                                ></div>
                              </div>
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
                            <input
                              name='twitter'
                              className='multisteps-form__input form-control'
                              type='text'
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

                            <input
                              name='facebook'
                              className='multisteps-form__input form-control'
                              type='text'
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

                            <input
                              name='linkedin'
                              className='multisteps-form__input form-control'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      type='hidden'
                      name='_token'
                      value='CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2'
                    />{' '}
                    <div className='button-row text-left mt-4 '>
                      <button
                        className='btn bg-gradient-dark ms-auto mb-0 js-btn-next'
                        type='submit'
                        title='Next'
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
