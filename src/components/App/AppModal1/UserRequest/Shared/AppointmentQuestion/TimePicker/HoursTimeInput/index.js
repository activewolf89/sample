import React,{Component} from "react";
import Div from 'shared/Div';

class Class extends Component {

  render(){

  return (
    <Div  >
      <select onClick={(e)=>{this.props.BringHourSelect('preferredContact','time',e.target.value)}}>
        {["11:00AM","11:30AM","12:00PM","12:30PM","1:00PM","1:30PM","2:00PM","2:30PM","3:00PM","3:30PM","4:00PM","5:00PM"].map((option1)=>{
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
