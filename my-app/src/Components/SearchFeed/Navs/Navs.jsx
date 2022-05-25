import React from 'react'
import { Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import { useState } from "react";
import "./Navs.css"


function Navs() {

 ////////////////////////////////////////////////////////////
 const [active, setActive] = useState('People');
 const CustomNav = ({ active, onSelect, ...props }) => {
   return (
     <Nav {...props} activeKey={active} onSelect={onSelect} justified>
       <Nav.Item eventKey="Top" >Top</Nav.Item>
       <Nav.Item eventKey="Latest" >Latest</Nav.Item>
       <Nav.Item eventKey="People" >People</Nav.Item>
       <Nav.Item eventKey="Photos" >Photos</Nav.Item>
       <Nav.Item eventKey="Videos" >Videos</Nav.Item>
     </Nav>
   );
 };
 /////////////////////////////////////////////////////////


  return (
    <div className='nav_container_1'>
        <CustomNav appearance="subtle" active={active} onSelect={setActive} />
    </div>
  )
}

export default Navs