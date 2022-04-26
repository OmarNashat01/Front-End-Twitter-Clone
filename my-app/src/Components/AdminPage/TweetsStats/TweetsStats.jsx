import React ,{useState,componentDidUpdate} from 'react'
import DateSelector ,{dateSelected}from "../DateSelector/DateSelector"
import LineChart from "../LineChart/LineChart"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import TweetStatsStyle from "./TweetsStats.module.css"

const TweetsStats=(props)=>{

    const [startDate,setStartDate]=useState(new Date())
    const [endDate,setEndDate]=useState(new Date())

    return(
<div>
        <div>

            <CalendarMonthIcon />
        </div>
        <div className={TweetStatsStyle.fromDateSelector}>

            Start Date <DateSelector   setStart={setStartDate} dateChosen={startDate} minimumDate={new Date("01-01-2000")} />
         
        </div>
        <div><CalendarMonthIcon className={TweetStatsStyle.dateIcon} /></div>

        <div className={TweetStatsStyle.toDateSelector}>

            End Date <DateSelector setStart={setStartDate} dateChosen={endDate} minimumDate={startDate}/>
        </div>
        <div className={TweetStatsStyle.chart}><LineChart startDate={startDate} endDate={endDate}/></div>

    </div>
    );
}
export default TweetsStats