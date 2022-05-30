import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H3} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  border='1px solid gray' padding='0 5px'>
      <H3 fontStyle='italic'>
        This video shows...
      </H3>
      <NoMPUl  display='flex' flexDirection='column' childrenBorderBottom='1px solid gray'>
        {
          props.desList.map((line,idx)=>{
            return (
              <Li key={idx}>
                {line}
              </Li>
            )
          })
        }
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
