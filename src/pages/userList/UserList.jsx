import React from 'react'
import "./UserList.css";
import { DataGrid } from '@material-ui/data-grid';
import img from "../../images/shohelrana.png";
import { DeleteOutline } from "@material-ui/icons";

export default function UserList() {
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
                        <button className="userListEdit">Edit</button>
                        <DeleteOutline className="userListDelete" />
                    </>
                )
            }
        }

    ];

    const rows = [
        {
            id: 1,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 2,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 3,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 4,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 5,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 6,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 7,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 8,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 9,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
        {
            id: 10,
            username: 'Baig',
            avatar: '',
            email: 'baig@gmail.com',
            status: 'active',
            transaction: '$4400.00'
        },
    ];
    return (
        <div className="userList">
            <DataGrid disableSelectionOnClick rows={rows} columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
