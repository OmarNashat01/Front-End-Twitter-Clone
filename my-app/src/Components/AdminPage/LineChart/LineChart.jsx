import React ,{useState} from 'react';
 import ChartStyle from"./LineChart.module.css";

import Chart from 'chart.js/auto';



import {Line} from 'react-chartjs-2';

const LineChart=(props)=>{
//const date=startDate;
const {startDate, endDate,values,labels}=props;
    const state = {
   labels:labels,
   datasets: [
     {
       label: 'Tweets',
       fill: false,
       lineTension: 0.5,
       backgroundColor: 'rgba(10, 161, 221,0.8)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data:values,
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
               fontSize:20,
              
             },
             legend:{
               display:true,
               position:'right'
             },
             plugins:{
              responsive:true
             }
           }}
         />
        
         </div>
 </div>
   );
 }
 export default LineChart