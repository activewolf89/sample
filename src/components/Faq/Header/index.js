import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H';
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (
    <Div   onClick={()=>{props.onOnOpen(props.id)}} display='flex' flexWrap='none' justifyContent='space-between' cursor='pointer'>
      <H3>
        <Div fontWeight={props.id === props.isOpen ? 'bold':''}>

          {props.name}
        </Div>
      </H3>
      <FontAwesome name={props.id === props.isOpen ? 'minus':'plus'} />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
