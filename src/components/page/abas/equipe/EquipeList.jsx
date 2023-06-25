import React from "react";
import "./EquipeList.css";
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const EquipeList = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'user', width: 200, renderCell: (params) => {
                return (
                    <div className="EquipeListUser">
                        <img className="EquipeListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'email', width: 200 },
        { field: 'status', headerName: 'status', width: 90 },
        {
            field: 'action', headerName: 'action', width: 200, randerCell: (params) => {
                return (
                        <Button className="equipeListEdit">Editar</Button>
                )
            }
        }
    ];

    const rows = [
        { id: 1, username: 'Snow', avatar: '', email: 'teste@gmail.com', status: 'active' }
    ];

    return (
        <div className="container">
            <DataGrid
                rows={rows}
                disableRowSelectionOnClick
                columns={columns}
                // initialState={{
                //     pagination: {
                //         paginationModel: { page: 0, pageSize: 5 },
                //     },
                // }}
                // pageSizeOptions={[5, 10]}
                checkboxSelection
                // onRowEditStart={}
            />
        </div>
    );
};

export default EquipeList;
