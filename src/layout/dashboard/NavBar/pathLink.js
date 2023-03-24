import { DASHBOARD_PATH } from '../../../routes/dashboard';

export const DASHBOARD_LINKS = [
  {
    name: 'Dashboard',
    link: DASHBOARD_PATH.Dashboard,
    SvgLogo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        // strokeWidth='2'
        // strokeLinecap='round'
        // strokeLinejoin='round'
        className='feather feather-home'
      >
        <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
        <polyline points='9 22 9 12 15 12 15 22'></polyline>
      </svg>
    ),
  },
];
export const PRODUCT_PLAN_LINKS = [
  {
    name: 'Product Planning',
    link: DASHBOARD_PATH.ProductPlan,
    SvgLogo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        // strokeWidth='2'
        // strokeLinecap='round'
        // strokeLinejoin='round'
        className='feather feather-grid'
      >
        <rect x='3' y='3' width='7' height='7'></rect>
        <rect x='14' y='3' width='7' height='7'></rect>
        <rect x='14' y='14' width='7' height='7'></rect>
        <rect x='3' y='14' width='7' height='7'></rect>
      </svg>
    ),
  },
  {
    name: 'Tasks',
    link: DASHBOARD_PATH.Tasks,
    SvgLogo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        // strokeWidth='2'
        // strokeLinecap='round'
        // strokeLinejoin='round'
        className='feather feather-check-circle'
      >
        <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
        <polyline points='22 4 12 14.01 9 11.01'></polyline>
      </svg>
    ),
  },
  {
    name: 'Calendar',
    link: DASHBOARD_PATH.Calendar,
    SvgLogo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        // strokeWidth='2'
        // strokeLinecap='round'
        // strokeLinejoin='round'
        className='feather feather-calendar'
      >
        <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
        <line x1='16' y1='2' x2='16' y2='6'></line>
        <line x1='8' y1='2' x2='8' y2='6'></line>
        <line x1='3' y1='10' x2='21' y2='10'></line>
      </svg>
    ),
  },
  {
    name: 'Ideation Canvas ',
    link: DASHBOARD_PATH.IdeationCanvas,
    SvgLogo: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='19'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        // strokeWidth='2'
        // strokeLinecap='round'
        // strokeLinejoin='round'
        className='feather feather-edit-2'
      >
        <path d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'></path>
      </svg>
    ),
  },
];

export const CONTACTS_LINKS = [
  {
    name: 'Investors',
    link: DASHBOARD_PATH.Investors,
    SvgLogo: (
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
        className='feather feather-user-check'
      >
        <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
        <circle cx='8.5' cy='7' r='4'></circle>
        <polyline points='17 11 19 13 23 9'></polyline>
      </svg>
    ),
  },
];
export const BUSINESS_MODELS_LINKS = [
  {
    name: 'Business Models',
    link: DASHBOARD_PATH.BusinessModels,
    SvgLogo: (
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
        <rect x='2' y='7' width='20' height='14' rx='2' ry='2'></rect>
        <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
      </svg>
    ),
  },
];

export const STRATEGIES_LINKS = [
  {
    name: 'Swot Analysis',
    link: DASHBOARD_PATH.Swot,
    SvgLogo: (
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
    ),
  },
  {
    name: 'Pest Analysis',
    link: DASHBOARD_PATH.Pest,
    SvgLogo: (
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
    ),
  },
  {
    name: 'Pestle Analysis',
    link: DASHBOARD_PATH.Pestle,
    SvgLogo: (
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
    ),
  },
  {
    name: 'Business Plans',
    link: DASHBOARD_PATH.BusinessPlans,
    SvgLogo: (
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
    ),
  },
];

export const KNOWLEDGEBASE_LINKS = [
  {
    name: 'Note Book',
    link: DASHBOARD_PATH.Notebook,
    SvgLogo: (
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
    ),
  },
  {
    name: 'Documents',
    link: DASHBOARD_PATH.Documents,
    SvgLogo: (
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
    ),
  },
];

export const ALL_LINKS = [
  {
    name: undefined,
    linkArray: DASHBOARD_LINKS,
  },
  {
    name: 'Product Planning',
    linkArray: PRODUCT_PLAN_LINKS,
  },
  {
    name: 'Contacts',
    linkArray: CONTACTS_LINKS,
  },
  {
    name: 'Business Models',
    linkArray: BUSINESS_MODELS_LINKS,
  },
  {
    name: 'Strategies & Analysis',
    linkArray: STRATEGIES_LINKS,
  },
  {
    name: 'KNOWLEDGEBASE',
    linkArray: KNOWLEDGEBASE_LINKS,
  },
];
