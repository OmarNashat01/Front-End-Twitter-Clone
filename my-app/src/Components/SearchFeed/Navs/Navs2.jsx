import React from 'react'
import { Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import { useState } from "react";
import "./Navs.css"


function Navs2() {

 ////////////////////////////////////////////////////////////
 const [active, setActive] = useState('All');
 const CustomNav = ({ active, onSelect, ...props }) => {
   return (
     <Nav {...props} activeKey={active} onSelect={onSelect} justified>
       <Nav.Item eventKey="All" >All</Nav.Item>
       <Nav.Item eventKey="Mentions" >Mentions</Nav.Item>
     </Nav>
   );
 };
 /////////////////////////////////////////////////////////


  return (
    <div className='nav_container_2'>
        <CustomNav appearance="subtle" active={active} onSelect={setActive} />
    </div>
  )
}

export default Navs2