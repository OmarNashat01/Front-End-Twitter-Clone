import UsersTableStyle from "./UsersTable.module.css"
import TablePagination from '@mui/material/TablePagination';
import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
//import { userColumns, userRows } from "./UsersDate";
import { margin } from "@mui/system";
import PopUp from "../../PopUp/PopUp";
import { getAllUsers } from "../../../../Api/admin";
import{getSearchUsersAdmin}from "../../../../Api/admin";
const UsersTable = (props) => {
  const { userName } = props;
  //const [data, setData] = useState(userRows);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
const [showBan,setShowBan]=useState(false);
console.log("from parent");
console.log(showBan);
  const [usersLoading, setUsersLoading] = useState(true);
  const [allUsers, setAllUsers] = useState();
  const banHandler=()=>{
    setShowBan(!showBan);
  
  }
  const userColumns = [
    // { field: "id", headerName: "ID", width: 70, hide:true ,renderCell: (params) => {
    //     return (
    //     <div>
    //       </div>
    //     );
    //   }, },


    {
      field: "user",
      headerName: "User",
      width: 200,
      sortable: true,
    
     headerClassName:'columnHeader',
     headerAlign:'center',
  
      renderCell: (params) => {
        return (
          <div className={UsersTableStyle.cellWithImg}>
           <img className={UsersTableStyle.cellImg} src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName:'columnHeader',
      align:'center',
      headerAlign:'center',
    },
  
    {
      field: "dateofbirth",
      headerName: "Date of Birth",
      width: 200,
      headerClassName:'columnHeader',
      align:'center',
      headerAlign:'center',
    },
  
    {
      field: "followerscount",
      headerName: "Followers",
      width: 150,
      headerClassName:'columnHeader',
      align:'center',
      headerAlign:'center',
      hide:true,
    },
  
    {
      field: "creationdate",
      headerName: "Creation Date",
      width: 150,
      headerClassName:'columnHeader',
      align:'center',
      headerAlign:'center',
    },
  
    {
      field: "followingcount",
      headerName: "Following",
      width: 150,
      headerClassName:'columnHeader',
      align:'center',
      headerAlign:'center',
      hide:true,
    },
  
    {
      field: "action",
      headerName: "Ban",
      width: 100,
      sortable: false,
      headerClassName:'columnHeader',
      flex:5,
      align:'center',
      
      headerAlign:'center',
      renderCell: (params) => {
        return (
          <div className={UsersTableStyle.cellAction}>
<button   className={UsersTableStyle.banButton} onClick={() => banHandler()}>Ban</button>
            {/* <div
              className={UsersTableStyle.banButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Ban
            </div> */}
          </div>
        );
      },
    },
  ];
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     sortable: false,
  //     renderCell: (params) => {
  //       return (
  //         <div className={UsersTableStyle.cellAction}>
  //           <button className={UsersTableStyle.banButton} onClick={banHandler}>Ban</button>
  //           {/* <div
  //               className={UsersTableStyle.banButton}
  //               onClick={() => handleDelete(params.row.id)}
  //             >
  //               Ban
  //             </div> */}
  //         </div>
  //       );
  //     },
  //   },
  // ];

  useEffect(() => {

    const fetchData = async () => {
      let queryString;
      if (userName==="")
      {
        queryString= `?offset=0&limit=10000`;
        const data = await getAllUsers(setUsersLoading, setAllUsers, queryString);
      }
      else{
        queryString=`?keyword=${userName}&offset=0&limit=10000`;
        const data = await getSearchUsersAdmin(setUsersLoading, setAllUsers, queryString);
      }
    
    }

    // call the function
    fetchData()

      // make sure to catch any error
      .catch(console.error);
  }, [userName])

  var allUsersTable;

  if (!usersLoading) {
    console.log(allUsers);

    var id_increment = 1;
    if(allUsers.status===204)
    {
      allUsersTable=[];
    }
else  {  allUsersTable = allUsers.data.users.map(user => ({ id: id_increment++, username: user.username, img: user.prof_pic_url, email: user.email, dateofbirth: user.date_of_birth, followerscount: user.followers_count, followingcount: user.following_count, creationdate: user.creation_date }));
    console.log(allUsersTable);}



  }


  return (!usersLoading && <div className={UsersTableStyle.dataTable}>
    <DataGrid
      rows={allUsersTable}
      columns={userColumns}
      autoPageSize
      rowsPerPageOptions={[4, 5, 7]}
      //onPageChange={()=>{userRows.append}}
      onRowsPerPageChange={handleChangeRowsPerPage}
      //  checkboxSelection
      sx={{
        boxShadow: '5px 5px 5px grey',
        border: 2,
        padding: 0.5,
        backgroundColor: 'white',
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
        '& .columnHeader': {
          backgroundColor: 'rgba(10, 161, 221,1)',

          fontFamily: 'Arial Black,sans-serif',
          fontSize: '14px',
          fontWeight: '700px',
          letterSpacing: '0.5px',
          padding: '10px',
          color: 'rgba(23, 40, 69)',
        },
      }}
    //count={userRows.length}
    //rowsPerPage={rowsPerPage}
    //page={page}
    //onPageChange={handleChangePage}

    />
{showBan&&<div><PopUp isOpened={showBan} setOpen={setShowBan}/></div>

}
  </div>);

}
export default UsersTable