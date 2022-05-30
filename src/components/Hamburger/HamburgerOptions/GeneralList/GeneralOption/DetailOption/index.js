import React from 'react';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Div from 'shared/Div';
import {H5} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Ul>
        {props.firstOption.map((option)=>{
          return (
            <Li key={option} onClick={()=>{props.onDetaillist(option)}}>
              <H5>
                {option}
              </H5>
            </Li>
          )
        })}
      </Ul>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
