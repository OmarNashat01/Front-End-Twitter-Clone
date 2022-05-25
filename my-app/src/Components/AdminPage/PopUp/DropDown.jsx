import React, { useState } from "react";
import { Modal,ModalHeader,DropdownButton,ButtonGroup,Dropdown } from 'react-bootstrap';
import PopUpStyle from "./PopUpStyle.module.css"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const DropDown=(props)=>{

    const [duration, setDuration] = React.useState('');
const{period,setPeriod}=props;
  const handleChange = (event) => {
    setDuration(event.target.value);
    console.log(event.target.value);
    setPeriod(event.target.value);
  };
return (

    <FormControl sx={{ m: 1, minWidth: 100 }}>
    <InputLabel id="demo-simple-select-autowidth-label">Period</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={duration}
      onChange={handleChange}
      autoWidth
      label="Period"
    >
      {/* <MenuItem value="">
        <em>None</em>
      </MenuItem> */}
      <MenuItem value={1}>1 minute</MenuItem>
      <MenuItem value={1440}>1 day</MenuItem>
      <MenuItem value={10080 }>1 week</MenuItem>
      <MenuItem value={43200}>1 month</MenuItem>
    </Select>
  </FormControl>

    // <DropdownButton
 
    //   className="btn-group shadow-0"
    // // className={PopUpStyle.dropDown}
    //   align={{ lg: 'start' }}
    //   title={title}
    //   bsPrefix={PopUpStyle.dropDown}
    //   menuRole="ar"
    //  // variant={PopUpStyle.dropDown}
    // >
    //   <Dropdown.Item eventKey="1"  onClick={setTitle("a")}>Action 1</Dropdown.Item>
    //   <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    // </DropdownButton>
);

}
export default DropDown;