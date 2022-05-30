import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Button  width='100%' onClick={()=>{props.onFlip(props.color)}}>
        Options
        <FontAwesome name={props.isFlipped ? 'caret-up':'caret-down'} />
      </Button>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
