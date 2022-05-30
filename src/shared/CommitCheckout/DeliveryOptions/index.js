import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' alignItems='center'>
      <Div width='40%'>
        <Button add width='100%' >Ship To</Button>
      </Div>
      -or-
      <Div opacity='.7' width='40%'>
        <Button faded width='100%'>Pick Up</Button>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
