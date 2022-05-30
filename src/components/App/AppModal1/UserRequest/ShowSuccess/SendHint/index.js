import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Span from 'shared/Span';
import Title from 'shared/Title';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl display='flex' flexDirection='column' alignItems='center' padding='10px 0'>
        <Li textAlign='center'>
          <Title fontWeight='bold'>
            Successfully sent <Span fontWeight='bold'>{props.hintObject.recipientName}</Span> at <Span fontWeight='bold'>{props.hintObject.recipientEmail}</Span>, <br />
            a link and any specific items.
          </Title>
        </Li>

      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
