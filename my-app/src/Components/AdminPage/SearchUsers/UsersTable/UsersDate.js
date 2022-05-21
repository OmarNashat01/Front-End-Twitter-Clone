import UsersTableStyle from"./UsersTable.module.css"
import PopUp from "../../PopUp/PopUp";
const banHandler=()=>{
  <div><PopUp isOpen="true"/></div>

}
export const userColumns = [
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
<button   className={UsersTableStyle.banButton}  >Ban</button>
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
//temporary data
export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/27/male-face-avatar-logo-template-pictograph-vector-11333827.webp",
     
      email: "1snow@gmail.com",
  
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.webp",
      email: "2snow@gmail.com",
   
 
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/27/male-face-avatar-logo-template-pictograph-vector-11333827.webp",
      email: "3snow@gmail.com",
    
    },
    {
      id: 4,
      username: "Stark",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/01/female-face-avatar-round-flat-icon-with-women-vector-11333801.webp",
      email: "4snow@gmail.com",
  
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/01/female-face-avatar-round-flat-icon-with-women-vector-11333801.webp",
      email: "5snow@gmail.com",
  
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.webp",
      email: "6snow@gmail.com",
     
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
     
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
     
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://cdn.vectorstock.com/i/1000x1000/38/27/male-face-avatar-logo-template-pictograph-vector-11333827.webp",
      email: "snow@gmail.com",
     
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
    
    },
    {
      id: 11,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
   
    },
  ];