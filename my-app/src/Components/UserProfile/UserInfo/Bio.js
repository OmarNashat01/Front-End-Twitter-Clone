import react from "react";
import auxelary from "../../../hoc/Auxelary";
import BioCSS from "./Bio.module.css";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
const Bio = (props) => {
    return ( <
        div className = { BioCSS.bio } > { " " }
        hii im bio < p > { props.children } < /p>{" "} <
        div className = { BioCSS.timejoined } > { " " } <
        CalendarMonthTwoToneIcon / > Joined May 2018 { " " } <
        /div>{" "}  <
        div >
        <
        div className = { BioCSS.following } > < div className = { BioCSS.numb1 } > 58 < /div> Following < /div >
        <
        div className = { BioCSS.follower } > < div className = { BioCSS.numb2 } > 58 < /div> Followers < /div >
        <
        svg viewBox = "0 0 24 24"
        className = { BioCSS.bicon }
        class = "r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr" >
        <
        g > < path d = "M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z" >
        <
        /path> <
        path d = "M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z" >
        <
        /path > < /g > < /svg >  <
        div className = { BioCSS.born } > Born June 30, 2000 <
        /div> <
        /
        div > <
        /
        div >
    );
};
export default Bio;