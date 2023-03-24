import React, { useEffect, useState } from 'react';
import { useGetProductPlans } from '../../hooks/useProductPlan';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../routes/dashboard';
import { CustomDataTablePage } from '../../components/CustomDataGrid';

export default function ProductPlan() {
  const { data, isLoading } = useGetProductPlans();
  const navigate = useNavigate();
  const windowWidth = window.innerWidth;

  const rows = [];
  const [dataRows, setDataRows] = useState(rows);
  const totalCol = 9;
  const columns = [
    { field: 'id', headerName: 'Id', width: windowWidth / totalCol },
    {
      field: 'projectName',
      headerName: 'ProjectName',
      width: windowWidth / totalCol,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: windowWidth / totalCol,
    },
    {
      field: 'member',
      headerName: 'Member',
      width: windowWidth / totalCol,
    },
    {
      field: 'start_date',
      headerName: 'Start Date',
      width: windowWidth / totalCol,
    },
    {
      field: 'end_date',
      headerName: 'End Date',
      width: windowWidth / totalCol,
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: windowWidth / totalCol,
    },
  ];
  useEffect(() => {
    if (data) {
      setDataRows(() => data);
    }
  }, [data]);
  return (
    <main className='main-content mt-1 border-radius-lg '>
      <div className='container-fluid'>
        {/* <div className='row'>
          <div className='col'>
            <h5 className=' text-secondary fw-bolder'>Product Plan</h5>
          </div>
          <div className='col text-end'>
            <a
              type='button'
              className='btn btn-info text-white'
              onClick={() => {
                navigate(DASHBOARD_PATH.CreateProductPlan);
              }}
            >
              Add Product Plan
            </a>
          </div>
        </div>

        <div>
          <div className='card'>
            <div className='card-body mt-4 table-responsive  pt-0'>
              <div
                id='cloudonex_table_wrapper'
                className='dataTables_wrapper dt-bootstrap5 no-footer'
              >
                <div style={{ height: '80vh', width: '100%' }}>
                  <DataGrid
                    // getRowId={(row) => {
                    //   return row.projectName;
                    // }}
                    rows={dataRows}
                    columns={columns}
                    loading={isLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <CustomDataTablePage
          {...{
            pageTitle: 'Product Plan',
            buttonTitle: 'Add Product Plan',
            buttonOnClick: () => navigate(DASHBOARD_PATH.CreateProductPlan),
            dataRows,
            columns,
            isLoading,
          }}
        />
      </div>
    </main>
  );
}
