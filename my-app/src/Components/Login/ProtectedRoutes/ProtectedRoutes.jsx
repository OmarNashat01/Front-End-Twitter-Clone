import React , {Component} from "react";
import { Navigate} from "react-router-dom"


import HomeFeed from "../../HomeFeed/HomeFeed";

export default class ProtectedRoutes extends Component{
    render(){
        let token = localStorage.getItem("token");
        if(true){
            return(
                <this.props.Component />
            )
        }
        else{
            return <Navigate to="/singin" />
        }

    }
}