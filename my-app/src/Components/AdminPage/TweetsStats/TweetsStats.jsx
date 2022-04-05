import React ,{useState,componentDidUpdate} from 'react'
import DateSelector ,{dateSelected}from "../DateSelector/DateSelector"
import LineChart from "../LineChart/LineChart"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import "./TweetsStats.css"

const TweetsStats=(props)=>{

    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())

    return(
<div>
        <div>

            <CalendarMonthIcon />
        </div>
        <div className='fromDateSelector'>

            Start Date <DateSelector />
         
        </div>
        <div><CalendarMonthIcon className='dateIcon' /></div>

        <div className="toDateSelector">

            End Date <DateSelector />
        </div>
        <div className='chart'><LineChart /></div>

    </div>
    );
}
export default TweetsStats