import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';


// -----
const ShopButton = (props) =>{
  return (
    <Div >
      <Div padding="10px">
        <Button active={true} onClick={()=>{props.onContactClick('Service Form')}} themed>
          Service Form
        </Button>
      </Div>

    </Div>
  )
}
ShopButton.propTypes = {
}
export default ShopButton;
