import React, { useState } from "react";
import "./EquipeList.css";
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { TeamRows } from '../../../../Data'
import { Link } from "react-router-dom";

const EquipeList = () => {
    //Pegando as linhas da equipe
    const [data, setData] = useState(TeamRows)

    //"deletendo" da lista
    const handleDelete = (id) => {
        setData(data.filter(item => item.id == id));
    }

    //montando colunas da tabela
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
            field: 'action', headerName: 'action', width: 200, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/member/" + params.row.id}>
                            <button className="equipeListEdit">Editar</button>
                        </Link>
                        <DeleteOutlineIcon className="equipeListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
    ];

    //Tabela da equipe
    return (
        <div className="containerEquipeList">
            <h1 className='title'>Equipe</h1>
            <DataGrid
                rows={data}
                disableRowSelectionOnClick
                columns={columns}
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

export default EquipeList;
