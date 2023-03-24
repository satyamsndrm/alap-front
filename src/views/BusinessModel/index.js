import React from 'react';

// import './app.css';

export default function BusinessModel() {
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
                  href='https://techfertile.patcognos.com/design-business-model'
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

                <form
                  method='post'
                  action='https://techfertile.patcognos.com/business-model-post'
                >
                  <div className='form-group'>
                    <label htmlFor='exampleFormControlTextarea1'>
                      Business/Company Name
                    </label>
                    <label className='text-danger'>*</label>
                    <input
                      className='form-control'
                      name='company_name'
                      id='company_name'
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

                        <textarea
                          className='form-control mt-4'
                          rows='10'
                          id='partners'
                          name='partners'
                          aria-hidden='true'
                        ></textarea>
                        <div
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
                                  <span className='tox-mbtn__select-label'>
                                    File
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Edit
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    View
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Insert
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Format
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Table
                                  </span>
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
                                  id='partners_ifr'
                                  frameBorder='0'
                                  allowtransparency='true'
                                  title='Rich Text Area. Press ALT-0 for help.'
                                  className='tox-edit-area__iframe'
                                  src='./TechFertile-design-business-model_files/saved_resource.html'
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
                          ></div>
                        </div>
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
                          <textarea
                            className='form-control mt-4'
                            rows='10'
                            id='activities'
                            name='activities'
                            aria-hidden='true'
                          ></textarea>
                          <div
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
                                    <span className='tox-mbtn__select-label'>
                                      File
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Edit
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      View
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Insert
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Format
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Table
                                    </span>
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
                                    id='activities_ifr'
                                    frameBorder='0'
                                    allowtransparency='true'
                                    title='Rich Text Area. Press ALT-0 for help.'
                                    className='tox-edit-area__iframe'
                                    src='./TechFertile-design-business-model_files/saved_resource(1).html'
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
                            ></div>
                          </div>
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
                        <textarea
                          className='form-control mt-4'
                          rows='10'
                          id='resources'
                          name='resources'
                          aria-hidden='true'
                        ></textarea>
                        <div
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
                                  <span className='tox-mbtn__select-label'>
                                    File
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Edit
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    View
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Insert
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Format
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Table
                                  </span>
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
                                  id='resources_ifr'
                                  frameBorder='0'
                                  allowtransparency='true'
                                  title='Rich Text Area. Press ALT-0 for help.'
                                  className='tox-edit-area__iframe'
                                  src='./TechFertile-design-business-model_files/saved_resource(2).html'
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
                          ></div>
                        </div>
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

                        <textarea
                          className='form-control'
                          rows='10'
                          id='value_propositions'
                          name='value_propositions'
                          aria-hidden='true'
                        ></textarea>
                        <div
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
                                  <span className='tox-mbtn__select-label'>
                                    File
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Edit
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    View
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Insert
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Format
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Table
                                  </span>
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
                                  id='value_propositions_ifr'
                                  frameBorder='0'
                                  allowtransparency='true'
                                  title='Rich Text Area. Press ALT-0 for help.'
                                  className='tox-edit-area__iframe'
                                  src='./TechFertile-design-business-model_files/saved_resource(3).html'
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
                          ></div>
                        </div>
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

                          <textarea
                            className='form-control mt-4'
                            rows='10'
                            id='customer_relationships'
                            name='customer_relationships'
                            aria-hidden='true'
                          ></textarea>
                          <div
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
                                    <span className='tox-mbtn__select-label'>
                                      File
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Edit
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      View
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Insert
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Format
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Table
                                    </span>
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
                                    id='customer_relationships_ifr'
                                    frameBorder='0'
                                    allowtransparency='true'
                                    title='Rich Text Area. Press ALT-0 for help.'
                                    className='tox-edit-area__iframe'
                                    src='./TechFertile-design-business-model_files/saved_resource(4).html'
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
                            ></div>
                          </div>
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
                        <textarea
                          className='form-control mt-4'
                          rows='10'
                          id='channels'
                          name='channels'
                          aria-hidden='true'
                        ></textarea>
                        <div
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
                                  <span className='tox-mbtn__select-label'>
                                    File
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Edit
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    View
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Insert
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Format
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Table
                                  </span>
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
                                  id='channels_ifr'
                                  frameBorder='0'
                                  allowtransparency='true'
                                  title='Rich Text Area. Press ALT-0 for help.'
                                  className='tox-edit-area__iframe'
                                  src='./TechFertile-design-business-model_files/saved_resource(5).html'
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
                          ></div>
                        </div>
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
                        <textarea
                          className='form-control'
                          rows='10'
                          id='customer_segments'
                          name='customer_segments'
                          aria-hidden='true'
                        ></textarea>
                        <div
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
                                  <span className='tox-mbtn__select-label'>
                                    File
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Edit
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    View
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Insert
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Format
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Table
                                  </span>
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
                                  id='customer_segments_ifr'
                                  frameBorder='0'
                                  allowtransparency='true'
                                  title='Rich Text Area. Press ALT-0 for help.'
                                  className='tox-edit-area__iframe'
                                  src='./TechFertile-design-business-model_files/saved_resource(6).html'
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
                          ></div>
                        </div>
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

                          <textarea
                            className='form-control'
                            rows='10'
                            id='cost_structure'
                            name='cost_structure'
                            aria-hidden='true'
                          ></textarea>
                          <div
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
                                    <span className='tox-mbtn__select-label'>
                                      File
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Edit
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      View
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Insert
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Format
                                    </span>
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
                                    <span className='tox-mbtn__select-label'>
                                      Table
                                    </span>
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
                                    id='cost_structure_ifr'
                                    frameBorder='0'
                                    allowtransparency='true'
                                    title='Rich Text Area. Press ALT-0 for help.'
                                    className='tox-edit-area__iframe'
                                    src='./TechFertile-design-business-model_files/saved_resource(7).html'
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
                            ></div>
                          </div>
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
                        <textarea
                          className='form-control'
                          rows='10'
                          id='revenue_stream'
                          name='revenue_stream'
                          aria-hidden='true'
                        ></textarea>
                        <div
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
                                  <span className='tox-mbtn__select-label'>
                                    File
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Edit
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    View
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Insert
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Format
                                  </span>
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
                                  <span className='tox-mbtn__select-label'>
                                    Table
                                  </span>
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
                                  id='revenue_stream_ifr'
                                  frameBorder='0'
                                  allowtransparency='true'
                                  title='Rich Text Area. Press ALT-0 for help.'
                                  className='tox-edit-area__iframe'
                                  src='./TechFertile-design-business-model_files/saved_resource(8).html'
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
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type='hidden'
                    name='_token'
                    value='CgAIPwH3U2rndeaqc1UlqzjnVBEU2dKexY11VuY2'
                  />{' '}
                  <button className='btn btn-info mt-4' type='submit'>
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
