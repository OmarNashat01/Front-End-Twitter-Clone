import react from "react";
import auxelary from "../../../hoc/Auxelary";
import BioCSS from "./Bio.module.css";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import { useNavigate } from 'react-router-dom';
import balloon from "../../../assets/balloon.png";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { useState, useEffect } from "react";


// function Bio() {
//     const navigate = useNavigate();
const Bio = (props) => {
    const [linkkk, setLink] = useState(false);
    const navigate = useNavigate();
    return ( <
        div className = { BioCSS.bio } > { " " } <
        p className = { BioCSS.bioo } > { props.bio } < /p>{" "} <
        div className = { BioCSS.timejoined } > { " " } <
        CalendarMonthTwoToneIcon / > Joined { props.joindate } { " " } <
        /div>{" "}  <
        div >
        <
        div className = { BioCSS.following }
        onClick = {
            () => { window.open("/profile/following", "_self") }
        } >
        <
        div className = { BioCSS.numb1 } > { props.fingcount } < /div> 
        Following <
        /div >

        <
        div className = { BioCSS.follower }
        onClick = {
            () => { window.open("/profile/followers", "_self") }
        } >
        <
        div className = { BioCSS.numb2 } > { props.fercount } < /div> Followers < /div >

        <
        img src = { balloon }
        className = { BioCSS.bicon }
        alt = "pic" /
        >


        <
        div className = { BioCSS.link } > < LinkOutlinedIcon / > { props.link } < /div > 


        <
        div className = { BioCSS.loc } > < LocationOnOutlinedIcon / > { props.loc } < /div >  <
        div className = { BioCSS.born } > Born { props.bdate } <
        /div>  < /
        div > <
        /div >
    );
};
// }
export default Bio;