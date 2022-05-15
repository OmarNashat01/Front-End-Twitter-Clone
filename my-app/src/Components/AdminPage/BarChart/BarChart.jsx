
import {Bar} from 'react-chartjs-2';
import BarChartStyles from './BarChart.module.css'


const BarChart=(props)=>
{
  const {startDate, endDate,values,labels}=props;
    
  const state = {
    labels: labels,
    datasets: [
      {
        label: 'Retweets',
        backgroundColor: 'rgba(10, 161, 221,0.8)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: values
      }
    ]
  }
  return (
        <div className={BarChartStyles.chartBox}>
          <Bar
            data={state}
            options={{
              plugins:{
                datalabels:{display:false}
              },
               indexAxis: 'y' ,
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20,
               
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
}
export default BarChart