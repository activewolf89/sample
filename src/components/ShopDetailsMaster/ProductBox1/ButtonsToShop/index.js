import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
// -----
const ButtonsToShop = (props) =>{
  return (
    <Div  borderRadius='0 5px' display='flex' >
      <Div width='100%' borderRadius='5px' onClick={props.onToggle} themedAccent flexWrap='nowrap' display='flex' alignItems='flex-end' justifyContent='center'>
        <Div>
          Actions
        </Div>
        <FontAwesome name={props.isActive ? 'caret-down':'caret-up'} style={{marginLeft:'5px'}}/>
      </Div>
    </Div>
  )
}
ButtonsToShop.propTypes = {
}
export default ButtonsToShop;
