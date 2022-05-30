import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Button onClick={()=>{props.onRemoveFromCartItem(props.ItemKey);props.onRemoveItem(props.ItemKey)}}>Remove</Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
