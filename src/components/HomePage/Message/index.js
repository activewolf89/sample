import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';
import A2 from 'shared/A2'
import FontAwesome from 'react-fontawesome'
// -----
const funcC0mp = (props) =>{
  return (
    <Div backgroundSize="cover" backgroundPosition="center" background width='100vw' maxWidth='2000px' textAlign='center' padding='5px 0'>
      <Div display='flex' justifyContent='center' alignItems='center'>
        {props.name + " "}
      </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
