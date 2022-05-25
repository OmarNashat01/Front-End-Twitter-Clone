import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { fontSize, textAlign } from '@mui/system';
import CardStyles from './Card.module.css'
import RepeatIcon from '@mui/icons-material/Repeat';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const Card=(props)=> {
  const{title,value,type}=props
  //type=1 retweets
  //type=2 tweets
  //type=3 Likes
  //type=4 New Accounts
  return (
    <MDBCard style={{ maxWidth: '25%' , borderRadius:'25px 25px 25px 25px',boxShadow:'5px 5px 5px grey',height:'50%'}}>
      {/* <MDBCardImage src='https://www.seoclerk.com/pics/202205-1kMlfU1396431821.jpg' position='top'height='150px' width='100px' alt='...' /> */}
      <MDBCardBody >

        {type==1 && <div> <MDBCardTitle className={CardStyles.textAlign}><RepeatIcon/>{title}</MDBCardTitle>
        <div className={CardStyles.textAlign}>
        <MDBCardText >
          {value}
        </MDBCardText>
        </div></div>}
        {type==2 && <div style={{height:'118px'}}> <MDBCardTitle className={CardStyles.textAlign2}><div className={CardStyles.tweet}><HistoryEduIcon style={{fontSize:'35px'}} /></div>{title}</MDBCardTitle>
        <div className={CardStyles.textAlign}>
        <MDBCardText >
          {value}
        </MDBCardText>
        </div></div>}
        {type==3 && <div style={{height:'118px'}}> <MDBCardTitle className={CardStyles.textAlign2}><div className={CardStyles.tweet}><FavoriteIcon  style={{fontSize:'35px'}}/></div>{title}</MDBCardTitle>
        <div className={CardStyles.textAlign}>
        <MDBCardText >
          {value}
        </MDBCardText>
        </div></div>}

        {type==4 && <div style={{height:'125px'}}> <MDBCardTitle className={CardStyles.textAlign2}><div className={CardStyles.tweet}><AssignmentIndIcon  style={{fontSize:'35px'}}/></div>{title}</MDBCardTitle>
        <div className={CardStyles.textAlign}>
        <MDBCardText >
          {value}
        </MDBCardText>
        </div></div>}
        {/* //<MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  );
}
export default Card;