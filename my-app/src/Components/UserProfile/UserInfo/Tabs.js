import react from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./Tab.css";


const Tabss = () => {
    return ( <
        div > <
        Tabs className = "mb-3" >
        <
        Tab title = < div className = "tabs" > Tweets < /div>


        >

        <
        /Tab> <
        Tab title = < div className = "tabs" > Tweets & replies < /div> >

        <
        /Tab> <
        Tab title = < div className = "tabs" > Media < /div> >

        <
        /Tab> 

        <
        Tab title = < div className = "tabs" > Likes < /div> >

        <
        /Tab> < /
        Tabs > < /div>

    );
};
export default Tabss;