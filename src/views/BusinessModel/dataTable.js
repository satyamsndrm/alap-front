import React, { useEffect, useState } from 'react';
import { useGetBusinessModels } from '../../hooks/useBusinessModel';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../routes/dashboard';
import { CustomDataTablePage } from '../../components/CustomDataGrid';

export default function BusinessModelsData() {
  const { data, isLoading } = useGetBusinessModels();
  const navigate = useNavigate();
  const windowWidth = window.innerWidth;

  const rows = [];
  const [dataRows, setDataRows] = useState(rows);
  const totalCol = 6;
  const columns = [
    { field: 'id', headerName: 'Id', width: windowWidth / totalCol },
    {
      field: 'companyName',
      headerName: 'CompanyName',
      width: windowWidth / totalCol,
    },
    {
      field: 'createdAt',
      headerName: 'CreatedAt',
      width: windowWidth / totalCol,
    },
    {
      field: 'updatedAt',
      headerName: 'UpdatedAt',
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
        <CustomDataTablePage
          {...{
            pageTitle: 'Business Models',
            buttonTitle: 'Add Business Models',
            buttonOnClick: () => navigate(DASHBOARD_PATH.CreateBusinessModels),
            dataRows,
            columns,
            isLoading,
          }}
        />
      </div>
    </main>
  );
}
