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
    return ( < div >
        <
        div className = { FollowingCSS.box } >
        <
        img src = { pro }
        alt = "pic"
        className = "img-fluid rounded-circle"
        height = { 50 }
        width = { 50 }
        /> </div >
        <
        div className = { FollowingCSS.user } > user name < p className = { FollowingCSS.handle } > @handlee < /p> <
        p className = { FollowingCSS.bio } > hi im here to follow < /p > < /div > <
        Button variant = "outline-secondary"
        className = { FollowingCSS.btn } >
        following { props.children } { " " } <
        /Button>{" "}

        <
        /div>
    );
};
export default Following;