import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TicketRows } from '../../../../Data'
import { Link } from "react-router-dom";
import "./TicketList.css"

const TicketList = () => {
  //Pegando as linhas da equipe
  const [data, setData] = useState(TicketRows)

  //"deletendo" da lista
  const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id));
  }

  //montando colunas da tabela
  const columnsTicket = [
      { field: 'id', headerName: 'N° Ticket', width: 90 },
      { field: 'solicitante', headerName: 'Solicitante', width: 200 },
      { field: 'status', headerName: 'Status', width: 200 },
      {
          field: 'action', headerName: '', width: 200, renderCell: (params) => {
              return (
                  <>
                      <Link to={"/ticket/" + params.row.id}>
                          <button className="ticketListShow">Visualizar</button>
                      </Link>
                      <DeleteOutlineIcon className="ticketListDelete" onClick={() => handleDelete(params.row.id)} />
                  </>
              )
          }
      }
  ];

  //Tabela da equipe
  return (
      <div className="containerTicketList">
          <h1 className='title'>Tickets</h1>
          <DataGrid
              rows={data}
              disableRowSelectionOnClick
              columns={columnsTicket}
              initialState={{
                  pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                  },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
          />
      </div>
  );
};

export default TicketList;
