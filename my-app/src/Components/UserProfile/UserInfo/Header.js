import react, { PropTypes, Component } from "react";
import auxelary from "../../../hoc/Auxelary";
import HeaderCSS from './Header.module.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Header = (props) => {
    const navigate = useNavigate();
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
        onClick = {
            () => { navigate("/home") }
        }
        / > <
        h3 className = { HeaderCSS.user } >

        { props.user } { " " } <
        /h3> <
        p className = { HeaderCSS.tweetnum } > { props.tweetnum }
        Tweets < /p>{" "} < /
        Navbar.Brand > { " " } <
        br / >
        <
        /Container> < /
        Navbar >
    );
};
export default Header;