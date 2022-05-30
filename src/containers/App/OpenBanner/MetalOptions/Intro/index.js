import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome'
// -----
const funcC0mp = (props) =>{
  return (
    <Div textAlign='center' >
      <NoMPUl display='flex' justifyContent='center' childrenPadding='5px '>
        <Li >
          100% of your Metal Transformed
          <FontAwesome name='toggle-off' style={{color:'gold'}} />
        </Li>
        <Li >
          <FontAwesome name={'caret-right'} />
        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
