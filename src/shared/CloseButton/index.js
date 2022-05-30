import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';

// -----
const funcC0mp = (props) =>{
  return (
    <Div onClick={props.onClose} display='flex' justifyContent='space-between' padding='10px' cursor='pointer'>
      <Div />
      <FontAwesome name='close' size='lg' />
    </Div>
  )
}

export default funcC0mp;
