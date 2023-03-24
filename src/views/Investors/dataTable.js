import React, { useEffect, useState } from 'react';
import { useGetInvestors } from '../../hooks/useInvestor';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_PATH } from '../../routes/dashboard';
import { CustomDataTablePage } from '../../components/CustomDataGrid';

export default function InvestorsData() {
  const { data, isLoading } = useGetInvestors();
  const navigate = useNavigate();
  const windowWidth = window.innerWidth;

  const rows = [];
  const [dataRows, setDataRows] = useState(rows);
  const totalCol = 9;
  const columns = [
    { field: 'id', headerName: 'Id', width: windowWidth / totalCol },
    {
      headerName: 'Name',
      width: windowWidth / totalCol,
      renderCell: ({ row }) => `${row?.firstName} ${row.lastName}`,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: windowWidth / totalCol,
    },
    {
      field: 'userName',
      headerName: 'Username',
      width: windowWidth / totalCol,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: windowWidth / totalCol,
    },
    {
      field: 'EstimatedAmount',
      headerName: 'EstimatedAmount',
      width: windowWidth / totalCol,
    },
    {
      field: 'source',
      headerName: 'Source',
      width: windowWidth / totalCol,
    },
    // {
    //   field: 'createdAt',
    //   headerName: 'CreatedAt',
    //   width: windowWidth / totalCol,
    // },
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
            pageTitle: 'Investors',
            buttonTitle: 'Add Investors',
            buttonOnClick: () => navigate(DASHBOARD_PATH.CreateInvestor),
            dataRows,
            columns,
            isLoading,
          }}
        />
      </div>
    </main>
  );
}
