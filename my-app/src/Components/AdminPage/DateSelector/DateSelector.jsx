import React ,{useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export var dateSelected=new Date();
const DateSelector=(props)=>{
   // const [startDate, setStartDate] = useState(null);
const {setStart, dateChosen}=props;
  //const [endDate, setEndDate] =new Date("2014/02/10");
//  const [dateRange,setDate]=useState({startDate:null})
 
  
  return (
  <div >
     <DatePicker
     selected={dateChosen}
      onChange={date=>{
      // setDate({startDate: date});
        // dateSelected=date;
        // dateChosen=date;
            setStart(date);
      }}
      onSelect={date=>{
      //   setDate({stcrtDate: date});
      //   dateSelected=date;

      //   dateChosen=date;
        
        setStart(date);
      }}
     
      dateFormat='dd/MM/yyyy'
      maxDate={new Date()}
      isClearable={true}
      showYearDropdown
      scrollableMonthYearDropdown
      showPreviousMonths
    
      />
  {/* {console.log(dateRange.startDate)} */}
</div>
  );
}
export default DateSelector