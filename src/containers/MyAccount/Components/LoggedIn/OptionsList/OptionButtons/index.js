import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl display='flex' childrenBorder='1px solid gray'  >
      {
        props.options.map((option,idx)=>{
          return (
            <Li key={idx}>
              <Div grayedOut = {option !== props.active}>
                <Button themed onClick={()=>{props.onOptionChange(option)}}>
                  {option}
                </Button>
              </Div>
            </Li>
          )
        })

      }
      
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
