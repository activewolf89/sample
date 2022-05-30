import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H'
import FontAwesome from 'react-fontawesome';

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='0 5px' borderBottom='1px solid white' display='flex'  justifyContent='space-between' alignItems='center' flexWrap='nowrap'  width='100%'>
      <Div />
      <H3 textAlign='center'>
        { "Update " + props.selectedEdit.title}
      </H3>
      <FontAwesome name='close' size='lg' onClick={()=>{props.onClose()}} style={{cursor:'pointer'}} />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
