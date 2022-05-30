import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Vision360 from 'shared/Vision360';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl display='flex' flexWrap='wrap' childrenPadding='5px'>
        {
          props.arrayOfItemKeys.map((string)=>{
            return(
              <Li key={string}>
                <Vision360 showItemNumber thumbnail ItemKey={string} />
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
