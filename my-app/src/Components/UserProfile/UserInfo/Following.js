import react from "react";
import auxelary from "../../../hoc/Auxelary";
import HeaderCSS from './Header.module.css'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import FollowingCSS from "./Following.module.css";
import Button from "react-bootstrap/Button";
import { getMe, getUser, sendFollow, deleteFollowing } from "../../../Api/UserProfile";
import pro from "../../../assets/pro.jpg";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
const Following = (props) => {
    const [loadunf, setLoadingunf] = useState(true);
    const [unf, setUnf] = useState();
    async function OnSubmitunf() {
        // make an API call
        // await submitForm(state)

        {
            // const Obj = {
            //     "source_user_id": userData.data.user._id,
            //     "target_user_id": window.location.pathname.split("/")[2].toString()
            // };
            // console.log(postObj);
            deleteFollowing(
                setLoadingunf,
                setUnf,
                `?source_user_id=${localStorage.getItem("user_id")}&target_user_id=${window.location.pathname.split("/")[2].toString()}`
            );
        }

        return true;
    }
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
        div className = { FollowingCSS.user } > { props.username } < p className = { FollowingCSS.handle } > @ { props.handle } < /p> <
        p className = { FollowingCSS.bio } > { props.bio } < /p >  <
        Button variant = "outline-dark"
        className = { FollowingCSS.btn }
        onClick = {
            () => {
                // setImg(userData.data.user.cover_pic_url);
                OnSubmitunf();

            }
        }

        >
        <
        span > Following < /span> { props.children } { " " } < /
        Button > { " " } <
        /div > < /
        div > <
        /div>
    );
};
export default Following;