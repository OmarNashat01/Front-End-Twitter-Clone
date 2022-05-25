import React, { useState, componentDidUpdate, useEffect } from 'react'
import { format } from 'date-fns'
import DateSelector, { dateSelected } from "../DateSelector/DateSelector"
import VerticalBarChart from '../VerticalBarChart/VerticalChart'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import RetweetsStatsStyle from "../RetweetsStats/RetweetsStats.module.css"
import { getNewAccountsCount,getReTweetCount } from "../../../Api/admin";
import RepeatIcon from '@mui/icons-material/Repeat';
import Card from "../Card/Card"
import AdminPageStyle from "../AdminPage.module.css"
import Sidebar from '../AdminNavBar/Sidebar'
import NewAccountStyles from './NewAccountsStats.module.css'
const NewAccountsStats = (props) => {

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
   else{     const fetchData = async () => {
            const data = await getNewAccountsCount(setValuesLoading, setValues, `?start_date=${format(startDate, 'yyyy-MM-dd')}&end_date=${format(endDate, 'yyyy-MM-dd')}`);
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
        var temp = values.data[Object.keys(values.data)[0]];
        chartValues = temp.map(x => x[Object.keys(x)[0]]);
        console.log(temp[0][Object.keys(temp[0])[0]]);
        chartLabels = temp.map(x => Object.keys(x)[0]);
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
                    <div className={`row vh-100   ${NewAccountStyles.widthSmall}`} >
                        <div className={`col col-lg-2 col-md-3 col-sm-1 col-sm-1 ${NewAccountStyles.navBorder} `}>
                            <div className={`sticky-top ${NewAccountStyles.barWidth} `} >

                                <Sidebar />
                            </div>
                        </div>
                        <div className={`col col-lg-10 col-md-9 col-sm-4 col-sm-4 ${NewAccountStyles.borderStyle}`}>
                            <div>

                                    <div className={NewAccountStyles.textStyle}>Number of New Accounts</div>
                                    <div>

                                        <CalendarMonthIcon />
                                    </div>
                                    <div className={NewAccountStyles.fromDateSelector}>

                                        Start Date <DateSelector setStart={setStartDate} dateChosen={startDate} minimumDate={new Date("01-01-2000")} />

                                    </div>
                                    <div><CalendarMonthIcon className={NewAccountStyles.dateIcon} /></div>

                                    <div className={NewAccountStyles.toDateSelector}>

                                        End Date <DateSelector setStart={setEndDate} dateChosen={endDate} minimumDate={startDate} />
                                    </div>
                                    <div>

                                        <button className={`btn btn-outline-primary ${NewAccountStyles.buttonStyle}`} type="submit" onClick={buttonHandler}>Show Chart</button>
                                    </div>

                                    {!valuesLoading && <div><div className={NewAccountStyles.chart}><VerticalBarChart startDate={startDate} endDate={endDate} values={chartValues} labels={chartLabels} /></div>

                                        <div className={NewAccountStyles.retweetCard}> <Card title="New Accounts" value={sumWithInitial} type="4" /></div>
                                    </div>}

                      

                            </div>


                        </div>
                    </div>
                </div>
            </div>








        </div>
    );
}
export default NewAccountsStats