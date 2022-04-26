import React ,{useState} from 'react';
 import ChartStyle from"./LineChart.module.css";

import Chart from 'chart.js/auto';



import {Line} from 'react-chartjs-2';

const LineChart=(props)=>{
//const date=startDate;
const {startDate, endDate}=props;
    const state = {
   labels: [startDate.toLocaleDateString(), 'February', 'March',
            'April', endDate.toLocaleDateString()],
   datasets: [
     {
       label: 'Tweets',
       fill: false,
       lineTension: 0.5,
       backgroundColor: 'rgba(75,192,192,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: [65, 59, 80, 81, 56]
     }
   ]
 }
   
   return (
   <div >
     
     <div className={ChartStyle.chartBox}>
     <Line
    
           data={state}
           options={{
             title:{
               display:true,
               text:'Average Rainfall per month',
               fontSize:20
             },
             legend:{
               display:true,
               position:'right'
             }
           }}
         />
        
         </div>
 </div>
   );
 }
 export default LineChart