import React,{Component} from "react";

import Div from 'shared/Div';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li'
import {getEarlyTime} from './getTime.js';
import P from 'shared/P'
import FontAwesome from 'react-fontawesome';
import HoursTimeInput from './HoursTimeInput';
class Time extends Component{
  componentDidMount(){
    this.props.onInputChange('preferredContact','time',getEarlyTime(this.props.date))
  }
  render(){

  return (
    <Div backgroundColor='white' height='100%'>
      <Div  display="flex" alignItems='center' height='100%'  color="black" backgroundColor="white">
        <Div width="100%" display='flex'  alignItems='center' flexDirection='column' padding='10px 0' >
          <P fontWeight='bold' textAlign='center'>
            Appointments are not necessary but strongly recommended due to event traffic.
          </P>
          <NoMPUl display="flex" flexDirection="column"  childrenPadding="5px 0" margin="10px 0">

            <Li>
              Tuesday - Saturday 11AM - 5PM
            </Li>
          </NoMPUl>
          <Div display='flex' flexWrap='nowrap' alignItems='flex-end' >
            <HoursTimeInput BringHourSelect = {this.props.onInputChange} date={this.props.date}/>
            <FontAwesome name='check-square' style={{color:'green',padding:'0 5px'}} />
          </Div>

        </Div>
      </Div>
    </Div>
  )
}
}
export default Time;
