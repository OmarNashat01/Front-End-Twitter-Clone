import react from "react";
import auxelary from "../../../hoc/Auxelary";
import HeaderCSS from './Header.module.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import FollowingCSS from "./Following.module.css";
import Button from "react-bootstrap/Button";
import pro from "../../../assets/pro.jpg";
import Image from "react-bootstrap/Image";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Following = (props) => {
    return ( < div className = {
            FollowingCSS.box
        } >

        <
        div >
        <
        div >


        <
        img src = { props.pic }
        alt = "pic"
        className = "img-fluid rounded-circle"
        className = {
            FollowingCSS.pic
        }
        height = { 50 }
        width = { 50 }
        /> </div >
        <
        div className = { FollowingCSS.user } > { props.username } < p className = { FollowingCSS.handle } > { props.handle } < /p> <
        p className = { FollowingCSS.bio } > { props.bio } < /p >  <
        Button variant = "outline-dark"
        className = { FollowingCSS.btn } >
        <
        span > Following < /span> { props.children } { " " } < /
        Button > { " " } <
        /div > <
        /div> <
        /div>
    );
};
export default Following;