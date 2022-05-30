import React from 'react';
import FontAwesome from 'react-fontawesome';
import Span from 'shared/Span';
import Button from 'shared/Button';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl childrenBorder = '1px solid gray' display='flex' flexWrap='wrap' >
      <Li width='45%'>
        {
          props.title
        }
      </Li>
      <Li width='45%'>
        <Span fontWeight='bold'>
          {
            props.value
          }
        </Span>
      </Li>
      <Li width='10%'>
        <Button width='100%' onClick={props.onAdjust}>
          <FontAwesome name='edit' />
        </Button>
      </Li>
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
