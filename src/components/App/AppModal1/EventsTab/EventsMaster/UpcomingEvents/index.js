import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import FontAwesome from 'react-fontawesome';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='5px' >
      {
        !props.noEvents &&
        <Div>
          <Div>
            <Button width='50%' onClick={()=>{props.index !== 0 && props.onSwapIndex(props.index - 1)}}>
              <FontAwesome name="caret-left"  style={{color:props.index !== 0 ?"black":'gray'}} />
            </Button>
            <Button width='50%' onClick={()=>{props.index !== (props.eventLength -1) && props.onSwapIndex(props.index + 1)}}>
              <FontAwesome name="caret-right"  style={{color:props.index !== props.eventLength -1 ?"black":'gray'}}  />
            </Button>
          </Div>
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
