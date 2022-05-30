import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P'
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Span from 'shared/Span';
import Button from 'shared/Button';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  padding='50px'>
      <NoMPUl>
        <Li>
          <P textAlign='center'>
            A reset password link was emailed to <Span fontWeight='bold'>{props.email}</Span>.
            Please check your inbox.
          </P>
        </Li>
        <Li>
          <Button themed width='100%' onClick={props.onClose}>
            Close
          </Button>
        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
