import React from 'react';
import Div from 'shared/Div';
import {H2,H3} from 'shared/H';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        props.choiceKey === 'special order' &&
        <Div fontStyle='italic' textAlign='center'>
          Orders will be quoted via email within 24 hours with shipping information
          fill out info. below along with any modifications/questions
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
