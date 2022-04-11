import React ,{useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export var dateSelected=new Date();
const DateSelector=()=>{
   // const [startDate, setStartDate] = useState(null);

  //const [endDate, setEndDate] =new Date("2014/02/10");
 const [dateRange,setDate]=useState({startDate:null})
 
  
  return (
  <div >
     <DatePicker
     selected={dateRange.startDate}
      onChange={date=>{
        setDate({startDate: date});
        dateSelected=date;
      }}
      dateFormat='dd/MM/yyyy'
      maxDate={new Date()}
      isClearable={true}
      showYearDropdown
      scrollableMonthYearDropdown
      showPreviousMonths
    
      />
    
</div>
  );
}
export default DateSelector