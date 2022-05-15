import React ,{useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import ChartStyle from"./DonutChart.module.css";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart} from 'chart.js';
import { fontSize } from '@mui/system';
Chart.register(ChartDataLabels);


const DonutChart=(props)=> {
    const {startDate, endDate,values,labels}=props;
    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ","+"0.8"+")";
     };
     var color = [];
     var percentages=[];
     const initialValue = 0;
    var sumWithInitial = values.reduce(
           (previousValue, currentValue) => previousValue + currentValue,
           initialValue
         );
     for (var i in values) {
        percentages.push(i*100/sumWithInitial);
        color.push(dynamicColors());
     }

    const options = {
        plugins: {
            datalabels: {
                // backgroundColor: function(context) {
                //   return context.dataset.backgroundColor;
                // },
                // borderColor: 'white',
                // borderRadius: 25,
                // borderWidth: 2,
                color: 'black',
               
                font: {
                  weight: 'bold',
             size:'16px'
                },
                padding: 6,
                formatter:(value,context)=>{
                    const datapoints=context.chart.data.datasets[0].data;
                    var sumWithInitial = values.reduce(
                        (previousValue, currentValue) => previousValue + currentValue,
                        initialValue);
                        return (value*100/sumWithInitial).toFixed(1)+'%' ;

                },         
                display: function(context) {
                    var dataset = context.dataset;
                    var count = dataset.data.length;
                    var value = dataset.data[context.dataIndex]*100;
                    return value;
                  },
              },
            title: {
                display: false,
                text: 'Likes',
                color:'blue',
                font: {
                    size:24
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                
                animation:{
                    animateScale: true,
                               }
            }
        }
    
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Attendance for Week 1',
                data: values,
                
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: color,
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]
    }
    return (
        <div className={ChartStyle.chartBox}>
            <Doughnut data={data} options={options} />
        </div>
    );
}

export default DonutChart