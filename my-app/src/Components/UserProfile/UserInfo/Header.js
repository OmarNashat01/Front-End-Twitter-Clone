import react from "react";
import auxelary from "../../../hoc/Auxelary";
import HeaderCSS from './Header.module.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Header = (props) => {
    return ( <
        Navbar bg = "light"
        className = { HeaderCSS.header } >
        <
        Container >
        <
        Navbar.Brand href = "#home" >
        <
        i className = "bi bi-arrow-left-short" >
        <
        /i>  <
        ArrowBackOutlinedIcon className = { HeaderCSS.arrow }
        / > <
        h3 className = { HeaderCSS.user } >

        Ggj { " " } <
        /h3> <
        p className = { HeaderCSS.tweetnum } > 365 Tweets < /p>{" "} < /
        Navbar.Brand > { " " } <
        br / >
        <
        /Container> < /
        Navbar >
    );
};
export default Header;