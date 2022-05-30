import React from 'react';
import Div from 'shared/Div';
import {H5} from 'shared/H'
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (
    <Div  onClick={()=>{props.onDetaillist(false)}} padding='10px 0' display='flex'  justifyContent='space-between' borderBottom='1px solid black'>
      <Div padding='0 5px'>
        <FontAwesome name='caret-left' size="lg" />
      </Div>
      <H5>
        {props.isDetails}
      </H5>
      <Div padding='0 5px'>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
