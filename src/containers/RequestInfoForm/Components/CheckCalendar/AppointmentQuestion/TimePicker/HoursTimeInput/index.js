import React,{Component} from "react";
import Div from 'shared/Div';

var generateOptions = function(pickedDate){
  var whatDay = pickedDate.getDay();
  var NonSaturday = ["10:00AM","10:30AM","11:00AM","11:30AM","12:00PM","12:30PM","1:00PM","1:30PM","2:00PM","2:30PM","3:00PM","3:30PM","4:00PM","5:00PM","5:30PM"]
  var Saturday = ["11:00AM","11:30AM","12:00PM","12:30PM","1:00PM","1:30PM","2:00PM","2:30PM","3:00PM","3:30PM","4:00PM","5:00PM"]

  return Saturday
}
// -----
class Class extends Component {

  render(){

  return (
    <Div  >
      <select onClick={(e)=>{this.props.BringHourSelect('preferredContact','time',e.target.value)}}>
        {generateOptions(this.props.date).map((option1)=>{
          return (
            <option key={option1}>{option1}</option>
          )
        })}
      </select>
    </Div>
  )
}
}
Class.propTypes = {
}
export default Class;
