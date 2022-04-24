import UsersTableStyle from"./UsersTable.module.css"
import TablePagination from '@mui/material/TablePagination';
import React,{useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns,userRows } from "./UsersDate";
import { margin } from "@mui/system";
const UsersTable=()=>{
    const [data, setData] = useState(userRows);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        sortable: false,
        renderCell: (params) => {
          return (
            <div className={UsersTableStyle.cellAction}>
<button   className={UsersTableStyle.banButton} >Ban</button>
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


return ( <div className={UsersTableStyle.dataTable}>
<DataGrid
  rows={userRows }
  columns={userColumns}
  autoPageSize
rowsPerPageOptions={[4,5,7]}
 onRowsPerPageChange={handleChangeRowsPerPage}
//  checkboxSelection
  sx={{
    boxShadow: 4,
    border: 2,
    padding:0.5,
    backgroundColor:'white',
    borderColor: 'primary.light',
    '& .MuiDataGrid-cell:hover': {
      color: 'primary.main',
    },
    '& .columnHeader': {
      backgroundColor: 'rgba(13, 110, 253,0.5)',
      
      fontFamily: 'Arial Black,sans-serif',
      fontSize:'14px',
      fontWeight:'700px',
      letterSpacing:'1.5px',
     padding:'10px',
color:'rgba(23, 40, 69)',
    },
  }}
 //count={userRows.length}
//rowsPerPage={rowsPerPage}
 //page={page}
//onPageChange={handleChangePage}

/>

</div>);

}
export default UsersTable