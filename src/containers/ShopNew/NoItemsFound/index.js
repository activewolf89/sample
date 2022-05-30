import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import Span from 'shared/Span';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='10px'>
      <Title >
        <Div fontWeight='bold'>
          No Items Found
        </Div>
        <Span fontWeight='bold'  textDecoration='underline' color='maroon' cursor='pointer' onClick={()=>{props.history.push('/shop')}}>
          reset search
        </Span>
        <Span >
          {" or "}
        </Span>
        <Span fontWeight='bold'  textDecoration='underline' color='maroon' cursor='pointer' onClick={()=>{props.onContactClick('service')}}>
          request a match
        </Span>
      </Title>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
