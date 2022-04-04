import react from "react";
import auxelary from "../../../hoc/Auxelary";
import classes from "./Bio.css"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Header = (props) => {
    return ( < Navbar bg = "light" >
        <
        Container >

        <
        Navbar.Brand href = "#home" >

        <
        i class = "bi bi-arrow-left-short" > < /i>

        <
        h3 > Ggj < /h3>  

        <
        p > 365 tweets < /p> < /
        Navbar.Brand > <
        br / >
        <
        /
        Container >



        <
        /Navbar>
    )

}
export default Header;