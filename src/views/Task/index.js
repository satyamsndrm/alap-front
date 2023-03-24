import React, { useEffect, useState } from 'react';
import AddTaskModal from './AddTaskModal';

import { DataGrid } from '@mui/x-data-grid';
import { useGetTasks } from '../../hooks/useTask';
// import './app.css';

export default function Tasks() {
  const { data, isLoading } = useGetTasks();
  console.log('data,isLoading', data, isLoading);
  const [openModal, setOpenModal] = useState(false);
  const windowWidth = window.innerWidth;

  const rows = [
    {
      id: '3fc97001-2de3-4aa4-8ebf-5f413723782f',
      subject: null,
      start_date: 'string',
      end_date: 'string',
      contact_id: 'string',
      description: 'string',
      createdAt: '2023-02-22T18:25:38.000Z',
      updatedAt: '2023-02-22T18:25:38.000Z',
    },
  ];
  const [dataRows, setDataRows] = useState(rows);
  const totalCol = 9;
  const columns = [
    { field: 'id', headerName: 'Id', width: windowWidth / totalCol },
    { field: 'subject', headerName: 'Subject', width: windowWidth / totalCol },
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
      field: 'contact_id',
      headerName: 'Assign To',
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
    <main className='main-content mt-1 border-radius-lg'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h5 className='text-secondary'>Tasks</h5>
          </div>
          <div className='col text-end'>
            <button
              type='button'
              className='btn btn-info'
              id='btn_add_new_category'
              onClick={() => setOpenModal(true)}
            >
              Add Task
            </button>
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
      </div>
      <AddTaskModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        //    {...{ openModal, setOpenModal }}
      />
    </main>
  );
}
