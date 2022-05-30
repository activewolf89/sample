import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl display='flex' flexDirection='column' childrenBorderBottom='1px solid black'>
        <Li>
          All Engagement Rings
        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
