import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  width='100%' padding='0 5px'>
      <Div>
        <Div >
          <Div padding='10px 0' onClick={()=>{props.onToggleDetail('closeIt')}}>
            <Button  width='100%'>Continue Shopping</Button>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
