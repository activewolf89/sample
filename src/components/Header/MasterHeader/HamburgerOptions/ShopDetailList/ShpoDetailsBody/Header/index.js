import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';

// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' backgroundColor='white' flexWrap='nowrap' width='100%' >
      <Div grayedOut = {!props.isShop} width='50%' onClick={()=>{props.onSwap(true)}}>

        <Button  grayedOut={!props.isShop} themed  width='100%' >
          {
            (props.isDetails ==="Services" || props.isDetails ==="About") ?
            "Actions":"Shop"
          }
        </Button>
      </Div>
      <Div grayedOut = {props.isShop} width='50%' onClick={()=>{props.onSwap(false)}}>
        <Button grayedOut={props.isShop} themed  width='100%'>
          Learn
        </Button>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
