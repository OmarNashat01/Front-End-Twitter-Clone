import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { textAlign } from '@mui/system';
import CardStyles from './Card.module.css'
import RepeatIcon from '@mui/icons-material/Repeat';
const Card=(props)=> {
  const{title,value}=props
  return (
    <MDBCard style={{ maxWidth: '25%' ,maxHeight:'10%', borderRadius:'25px 25px 25px 25px',boxShadow:'5px 5px 5px grey'}}>
      {/* <MDBCardImage src='https://www.seoclerk.com/pics/202205-1kMlfU1396431821.jpg' position='top'height='150px' width='100px' alt='...' /> */}
      <MDBCardBody>
        <MDBCardTitle className={CardStyles.textAlign}><RepeatIcon/>{title}</MDBCardTitle>
        <div className={CardStyles.textAlign}>
        <MDBCardText >
          {value}
        </MDBCardText>
        </div>
        {/* //<MDBBtn href='#'>Button</MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  );
}
export default Card;