import React, { useState, componentDidUpdate, useEffect } from 'react'
import { format } from 'date-fns'
import DateSelector, { dateSelected } from "../DateSelector/DateSelector"
import DonutChart from "../DonutChart/DonutChart"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import RetweetsStatsStyle from "../RetweetsStats/RetweetsStats.module.css"
import { getLikeCount ,getReTweetCount } from "../../../Api/admin";
import LikesStatsStyle from "./LikesStats.module.css"
import Card from "../Card/Card"
import AdminPageStyle from "../AdminPage.module.css"
import Sidebar from '../AdminNavBar/Sidebar'
const LikesStats = (props) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [valuesLoading, setValuesLoading] = useState(true);
    const [values, setValues] = useState();
    var chartValues;
var chartLabels;
var sumWithInitial;
    const buttonHandler = () => {
        if(startDate>endDate)
{
    alert("Choose valid date range");
}
     else{   const fetchData = async () => {
            const data = await getReTweetCount(setValuesLoading, setValues, `?start_date=${format(startDate, 'yyyy-MM-dd')}&end_date=${format(endDate, 'yyyy-MM-dd')}`);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);

        console.log(valuesLoading);
    }

    };
    if (!valuesLoading) {
        console.log("hii");

       
        console.log(values.data[Object.keys(values.data)[0]]);
var temp=values.data[Object.keys(values.data)[0]];
        chartValues = temp.map(x=>x[Object.keys(x)[0]]);
        console.log(temp[0][Object.keys(temp[0])[0]]);
        chartLabels = temp.map(x=>Object.keys(x)[0]);
        console.log(chartLabels);
        var id_increment = 1;
        //chartValues = values.map(([key, value]) =>{value});
        console.log(chartValues);
        const initialValue = 0;
    sumWithInitial = chartValues.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
        console.log("hii again")
        console.log(sumWithInitial);


    }


    return (
        
<div>
<div className={AdminPageStyle.pageColor}>

<div className="container-fluid">
  <div className={`row vh-100   ${LikesStatsStyle.widthSmall}`} >
    <div className={`col col-lg-2 col-md-3 col-sm-1 col-sm-1 ${LikesStatsStyle.navBorder} `}>
     <div className={`sticky-top ${LikesStatsStyle.barWidth}`} >

     <Sidebar />
     </div>
    </div>
    <div className={`col col-lg-10 col-md-9 col-sm-4 col-sm-4 ${LikesStatsStyle.borderStyle}`}>
    <div>
    
            <div className={LikesStatsStyle.textStyle}>Number of Likes</div>
            <div>

                <CalendarMonthIcon />
            </div>
            <div className={LikesStatsStyle.fromDateSelector}>

                Start Date <DateSelector setStart={setStartDate} dateChosen={startDate} minimumDate={new Date("01-01-2000")} />

            </div>
            <div><CalendarMonthIcon className={LikesStatsStyle.dateIcon} /></div>

            <div className={LikesStatsStyle.toDateSelector}>

                End Date <DateSelector setStart={setEndDate} dateChosen={endDate} minimumDate={startDate} />
            </div>
            <div>

                <button className={`btn btn-outline-primary ${LikesStatsStyle.buttonStyle}`} type="submit" onClick={buttonHandler}>Show Chart</button>
            </div>
           
            {!valuesLoading && <div><div className={LikesStatsStyle.chart}><DonutChart startDate={startDate} endDate={endDate} values={chartValues} labels={chartLabels} /></div>
            
           <div  className={LikesStatsStyle.retweetCard}> <Card title="Likes" value={sumWithInitial} type="3" /></div>
            </div>}

   
  
</div>


</div>
    </div>
  </div>
</div>







      
        </div>
    );
}
export default LikesStats