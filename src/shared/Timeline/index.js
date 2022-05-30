import React from 'react';
import Div from 'shared/Div';
import Time from './Time';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' justifyContent='center'>
      <Div >

        <NoMPUl display='flex' justifyContent='center'  justifyContent='space-between' >
          {props.dates.map((date)=>{
            return (
              <Li key={date.title}>
                <Time date={date}  />
              </Li>
            )
          })}
        </NoMPUl>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
