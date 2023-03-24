import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../../routes/dashboard';

import './app.css';
import { ALL_LINKS, DASHBOARD_LINKS, PRODUCT_PLAN_LINKS } from './pathLink';

export default function DashBoardNavBar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <aside
      className='sidenav navbar navbar-vertical navbar-expand-xs border-0  fixed-left'
      id='sidenav-main'
    >
      <div className='sidenav-header'>
        <i
          className='fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute right-0 top-0 d-none d-xl-none'
          aria-hidden='true'
          id='iconSidenav'
        ></i>
        <a className='navbar-brand m-0' href='TechFertile-dashboard.html'>
          <span className='ms-1 font-weight-bold'> TechFertile</span>
        </a>
      </div>
      <div className=' text-center'>
        <div className='avatar avatar-md  rounded-circle bg-purple-light  border-radius-md p-2'>
          <h6 className='text-purple text-uppercase mt-1'>JD</h6>
        </div>

        <a
          href='TechFertile-profile.tml'
          className=' nav-link text-body font-weight-bold px-0'
        >
          <span className='d-sm-inline d-none '> John Doe</span>
        </a>
      </div>
      <hr className='horizontal dark mt-0' />

      <div
        className='collapse navbar-collapse  w-auto  d-print-none '
        id='sidenav-collapse-main'
      >
        <ul className='navbar-nav'>
          {ALL_LINKS.map((item, idx) => {
            const { name, linkArray } = item;
            let nameLi = '';
            const linkHtml = linkArray.map((item, idx) => {
              const { name, link, SvgLogo } = item;
              const active = pathname.indexOf(link) == -1 ? '' : 'active';
              return (
                <li className={`nav-item `} key={idx}>
                  <Link className={`nav-link ${active}`} to={link}>
                    {SvgLogo}
                    <span className='nav-link-text ms-3'>{name}</span>
                  </Link>
                </li>
              );
            });
            if (name) {
              nameLi = (
                <li className='nav-item mt-3 mb-2'>
                  <h6 className='ps-4 ms-2 text-uppercase text-muted text-xs opacity-6'>
                    {name}
                  </h6>
                </li>
              );
            }
            return (
              <React.Fragment key={idx}>
                {nameLi}
                {linkHtml}
              </React.Fragment>
            );
          })}
          {/* <>

              <li className='nav-item mt-3 mb-2'>
                <h6 className='ps-4 ms-2 text-uppercase text-muted text-xs opacity-6'>
                  Business Models
                </h6>
              </li>

              <li className='nav-item '>
                <a
                  className='nav-link  '
                  href='TechFertile-design-business-model.html'
                >
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
                    className='feather feather-briefcase'
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
                  <span className='nav-link-text text-end ms-3 '>
                    Business Models
                  </span>
                </a>
              </li>

              <li className='nav-item '>
                <a
                  className='nav-link  '
                  href='TechFertile-design-startup-canvas.html'
                >
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
                    className='feather feather-server'
                  >
                    <rect
                      x='2'
                      y='2'
                      width='20'
                      height='8'
                      rx='2'
                      ry='2'
                    ></rect>
                    <rect
                      x='2'
                      y='14'
                      width='20'
                      height='8'
                      rx='2'
                      ry='2'
                    ></rect>
                    <line x1='6' y1='6' x2='6.01' y2='6'></line>
                    <line x1='6' y1='18' x2='6.01' y2='18'></line>
                  </svg>
                  <span className='nav-link-text text-end ms-3 '>
                    Startup Canvas
                  </span>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' href='TechFertile-mckinsey-models.html'>
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
                    className='feather feather-file-text'
                  >
                    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                    <polyline points='14 2 14 8 20 8'></polyline>
                    <line x1='16' y1='13' x2='8' y2='13'></line>
                    <line x1='16' y1='17' x2='8' y2='17'></line>
                    <polyline points='10 9 9 9 8 9'></polyline>
                  </svg>
                  <span className='nav-link-text ms-3'>McKinsey 7-S Model</span>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' href='TechFertile-new-porter.html'>
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
                    className='feather feather-life-buoy'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <circle cx='12' cy='12' r='4'></circle>
                    <line x1='4.93' y1='4.93' x2='9.17' y2='9.17'></line>
                    <line x1='14.83' y1='14.83' x2='19.07' y2='19.07'></line>
                    <line x1='14.83' y1='9.17' x2='19.07' y2='4.93'></line>
                    <line x1='14.83' y1='9.17' x2='18.36' y2='5.64'></line>
                    <line x1='4.93' y1='19.07' x2='9.17' y2='14.83'></line>
                  </svg>
                  <span className='nav-link-text ms-3'>Porter's 5-F Model</span>
                </a>
              </li>

              <li className='nav-item mt-3 mb-2'>
                <h6 className='ps-4 ms-2 text-uppercase text-muted text-xs opacity-6'>
                  Strategies &amp; Analysis
                </h6>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='TechFertile-swot-list.html'>
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
                    className='feather feather-disc'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <circle cx='12' cy='12' r='3'></circle>
                  </svg>
                  <span className='nav-link-text ms-3'>SWOT Analysis</span>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' href='TechFertile-write-pest.html'>
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
                    className='feather feather-folder'
                  >
                    <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                  </svg>
                  <span className='nav-link-text ms-3'>PEST Analysis</span>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' href='TechFertile-pestle-list.html'>
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
                    className='feather feather-columns'
                  >
                    <path d='M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18'></path>
                  </svg>
                  <span className='nav-link-text ms-3'>PESTLE Analysis</span>
                </a>
              </li>

              <li className='nav-item '>
                <a className='nav-link ' href='TechFertile-business-plans.html'>
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
                    className='feather feather-edit'
                  >
                    <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                    <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
                  </svg>
                  <span className='nav-link-text  ms-3'>Business Plans</span>
                </a>
              </li>

              <li className='nav-item mt-3 mb-2'>
                <h6 className='ps-4 ms-2 text-uppercase text-muted text-xs opacity-6'>
                  Knowledgebase
                </h6>
              </li>
              <li className='nav-item '>
                <a className='nav-link ' href='TechFertile-notes.html'>
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
                    className='feather feather-book-open'
                  >
                    <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                    <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
                  </svg>
                  <span className='nav-link-text ms-3'>Note Book</span>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='TechFertile-documents.html'>
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
                    className='feather feather-file'
                  >
                    <path d='M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'></path>
                    <polyline points='13 2 13 9 20 9'></polyline>
                  </svg>
                  <span className='nav-link-text ms-3'>Documents</span>
                </a>
              </li>
              <li className='nav-item mt-3 mb-2'>
                <h6 className='ps-4 ms-2 text-uppercase text-muted text-xs opacity-6'>
                  Account pages
                </h6>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' href='TechFertile-profile.html'>
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
                    className='feather feather-user'
                  >
                    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                  <span className='nav-link-text ms-3'>Profile</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='#'>
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
                    className='feather feather-database'
                  >
                    <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                    <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                    <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
                  </svg>
                  <span className='nav-link-text ms-3'>Users</span>
                </a>
              </li>

              <li className='nav-item mt-3 mb-2'>
                <h6 className='ps-4 ms-2 text-uppercase text-muted text-xs opacity-6'>
                  Settings
                </h6>
              </li>
              <li className='nav-item'>
                <a className='nav-link  ' href='TechFertile-billing.html'>
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
                    className='feather feather-shopping-cart'
                  >
                    <circle cx='9' cy='21' r='1'></circle>
                    <circle cx='20' cy='21' r='1'></circle>
                    <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
                  </svg>
                  <span className='nav-link-text ms-3'>My Plan</span>
                </a>
              </li>
              <li className='nav-item mb-4'>
                <a className='nav-link  ' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-command'
                  >
                    <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
                  </svg>
                  <span className='nav-link-text ms-3'>Settings</span>
                </a>
              </li>
            </> */}

          {/* <li className='mb-4 ms-5'>
              <a className='btn btn-warning' type='button' href='#'>
                <span className=''>Logout</span>
              </a>
            </li> */}
        </ul>
      </div>
    </aside>
  );
}
