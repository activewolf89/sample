import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import P from 'shared/P';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  display='flex'  flexDirection={props.sameLine ? "row":"column"}>
      <P>
        {
          props.giftWrap &&
          <FontAwesome name='gift' style={{color:'maroon'}}/>

        }
        {props.question}
      </P>
      {
        props.asterisk &&
        <P fontStyle='italic'>
          <small>
            *{props.asterisk}
          </small>
        </P>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
