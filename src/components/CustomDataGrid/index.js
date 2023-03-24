import { DataGrid } from '@mui/x-data-grid';

export const CustomDataGrid = ({ dataRows, columns, isLoading }) => {
  return <DataGrid rows={dataRows} columns={columns} loading={isLoading} />;
};

export const CustomDataTablePage = ({
  pageTitle,
  buttonTitle,
  buttonOnClick,
  dataRows,
  columns,
  isLoading,
}) => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <h5 className=' text-secondary fw-bolder'>
            {pageTitle || 'Product Plan'}
          </h5>
        </div>
        <div className='col text-end'>
          <a
            type='button'
            className='btn btn-info text-white'
            //   onClick={() => {
            //     navigate(DASHBOARD_PATH.CreateProductPlan);
            //   }}
            onClick={buttonOnClick}
          >
            {buttonTitle || 'Add Product Plan'}
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
                  rows={dataRows}
                  columns={columns}
                  loading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
