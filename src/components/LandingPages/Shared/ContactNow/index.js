import React from 'react';
import Div from 'shared/Div';
import Ribbon from './Ribbon';


// -----
const funcC0mp = (props) =>{
  return (
    <Div TacoriWriting  style={{textAlign:'center'}}  width='100%'  position='relative' >
      <Ribbon
        text={props.text}
      />

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
