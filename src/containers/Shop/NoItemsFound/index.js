import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import Span from 'shared/Span';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='10px'>
      <Title >
        No Items Found,   {" "}
        <Span fontWeight='bold'  textDecoration='underline' color='maroon' cursor='pointer' onClick={()=>{props.history.push(props.history.location.pathname )}}>
          reset search
        </Span>
      </Title>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
