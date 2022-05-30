import React,{Component} from "react";

import Div from 'shared/Div';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li'
import FontAwesome from 'react-fontawesome';
import HoursTimeInput from './HoursTimeInput';
class Time extends Component{

  render(){

  return (
    <Div backgroundColor='white' height='100%' border='1px solid black'  maxWidth='996px' width='100vw'>
      <Div  display="flex" alignItems='center' height='100%'  color="black" backgroundColor="white">
        <Div width="100%" display='flex'  alignItems='center' flexDirection='column' padding='10px 0' >
          <NoMPUl display="flex" flexDirection="column"  childrenPadding="5px 0" margin="10px 0">

            <Li>
              Tuesday - Saturday 11AM - 5PM
            </Li>
          </NoMPUl>
          <Div display='flex' flexWrap='nowrap' alignItems='flex-end' >
            <HoursTimeInput
              onCalendarChange = {this.props.onCalendarChange}
              BringHourSelect = {this.props.onInputChange} date={this.props.date}/>
            <FontAwesome name='check-square' style={{color:'green',padding:'0 5px'}} />
          </Div>

        </Div>
      </Div>
    </Div>
  )
}
}
export default Time;
