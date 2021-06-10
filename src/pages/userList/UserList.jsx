import React, { useState } from 'react';
import "./UserList.css";
import { DataGrid } from '@material-ui/data-grid';
import img from "../../images/shohelrana.png";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        console.log("id found");
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username', headerName: 'Username', width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={img} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete"
                            onClick={() =>
                                // console.log("delete button working")
                                handleDelete(params.row.id)
                            } />
                    </>
                )
            }
        }

    ];

    return (
        <div className="userList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
