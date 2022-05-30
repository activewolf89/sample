import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';

// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
      Purpose
      <Li>
        <Div display='flex' flexDirection='column' >
          <Div display='flex'  alignItems='flex-end'>
            <input readOnly type='checkbox' style={{width:'30px', height:'30px'}} checked={true} />
            General Inquiry
          </Div>
          <Div   display='flex' >
            <Div onClick={()=>{props.onToggleDetail('service')}} hoverable display='flex'  alignItems='flex-end'>
              <input type='checkbox' style={{width:'30px', height:'30px'}}  />
              Custom/Repair Services
            </Div>
          </Div>
          <Div    >
            <Div onClick={()=>{props.onToggleDetail('appointment')}} hoverable display='flex'  alignItems='flex-end'>
              <input type='checkbox' style={{width:'30px', height:'30px'}}  />
              Schedule Appointment
            </Div>
          </Div>

        </Div>

      </Li>
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
//
// <Div
//   id="0"
//   onFocus = {(e)=>{handleFocusChange(0)}}
// >
//   <Div hoverable>
//     <Input type="radio" defaultChecked={true} />Inquiry<br />
//   </Div>
//   <Div hoverable onClick={()=>{this.props.onToggleDetail('appointment')}}>
//     <Input type="radio" /> Schedule Appointment<br />
//   </Div>
//   <StyledLink to ="/services/form" onClick={()=>{this.props.onToggleDetail('close')}}>
//     <Input type="radio"/> Request Service Form<br />
//   </StyledLink>
//
// </Div>
