import react from "react";
import auxelary from "../../../hoc/Auxelary";
import "./Bio.css"
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
const Bio = (props) => {
    return ( < div className = "bio" > hii im bio { props.children } <
        div > <
        CalendarMonthTwoToneIcon / > Joined May 2018 < /div>   < /
        div >

    )

}
export default Bio;