import BusinessModel from '../views/BusinessModel';
import DashBoard from '../views/DashBoard';
import Investors from '../views/Investors';
import ProductPlan from '../views/ProductPlan';
import CreateProductPlan from '../views/ProductPlan/CreateProductPlan';
import Tasks from '../views/Task';
import SwotAnalysis from '../views/SwotAnalysis';
import PestAnalysis from '../views/PestAnalysis';
import PestleAnalysis from '../views/PestleAnalysis';
import BusinessPlan from '../views/BusinessPlan';
import NoteBook from '../views/NoteBook';
import Documents from '../views/Documents';
import InvestorsData from '../views/Investors/dataTable';
import BusinessModelsData from '../views/BusinessModel/dataTable';

export const DASHBOARD_PATH = {
  Dashboard: '/dashboard',
  ProductPlan: '/product-plan',
  CreateProductPlan: '/product-plan/create',
  Tasks: '/tasks',
  Calendar: '/calendar',
  IdeationCanvas: '/ideation-canvas',

  Investors: '/investors',
  CreateInvestor: '/investors/create',

  BusinessModels: '/business-models',
  CreateBusinessModels: '/business-models/create',
  Swot: '/swot',
  Pest: '/pest-analysis',
  Pestle: '/pestle-analysis',
  BusinessPlans: '/business-plans',
  Notebook: '/notebook',
  Documents: '/documents',
};

export const dashboardRoutes = [
  {
    path: DASHBOARD_PATH.Dashboard,
    component: <DashBoard />,
  },
  {
    path: DASHBOARD_PATH.ProductPlan,
    component: <ProductPlan />,
  },
  {
    path: DASHBOARD_PATH.CreateProductPlan,
    component: <CreateProductPlan />,
  },
  {
    path: DASHBOARD_PATH.Tasks,
    component: <Tasks />,
  },
  {
    path: DASHBOARD_PATH.Calendar,
    component: <DashBoard />,
  },
  {
    path: DASHBOARD_PATH.IdeationCanvas,
    component: <DashBoard />,
  },
  {
    path: DASHBOARD_PATH.CreateInvestor,
    component: <Investors />,
  },
  {
    path: DASHBOARD_PATH.Investors,
    component: <InvestorsData />,
  },
  {
    path: DASHBOARD_PATH.CreateBusinessModels,
    component: <BusinessModel />,
  },
  {
    path: DASHBOARD_PATH.BusinessModels,
    component: <BusinessModelsData />,
  },
  {
    path: DASHBOARD_PATH.Swot,
    component: <SwotAnalysis />,
  },
  {
    path: DASHBOARD_PATH.Pest,
    component: <PestAnalysis />,
  },
  {
    path: DASHBOARD_PATH.Pestle,
    component: <PestleAnalysis />,
  },
  {
    path: DASHBOARD_PATH.BusinessPlans,
    component: <BusinessPlan />,
  },
  {
    path: DASHBOARD_PATH.Notebook,
    component: <NoteBook />,
  },
  {
    path: DASHBOARD_PATH.Documents,
    component: <Documents />,
  },
];
