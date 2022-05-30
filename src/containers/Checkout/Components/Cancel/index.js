import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import Cart from '../../Components/Cart';
import P from 'shared/P';
import {H3} from 'shared/H';
import OutsiderAlert from 'shared/OutsiderAlert';
// -----
const funcC0mp = (props) =>{
  return (
    <Div cursor='pointer'>

      <Div maxWidth='300px' width='100vw' border='2px solid black' position='fixed' transform='translate(-50%, -50%)' zIndex='2'  top='40%'  left='50%' backgroundColor='white'>
        <OutsiderAlert callback={()=>{props.history.replace('/cart')}}>
          <Div borderBottom='1px solid gray' padding='5px'>
            <H3 textAlign='center'>Purchase Failed</H3>
          </Div>
          <P textAlign='center' padding='10px' fontStyle='italic'>
            There was an issue processing checkout, please try again or call 206-682-5555 for assistance.
          </P>
        </OutsiderAlert>
          <Div textAlign='center' padding='5px' >
            <Button onClick={()=>{props.history.replace('/cart')}}>Got it</Button>
          </Div>
        </Div>
        <Div position='fixed' backgroundColor='black' opacity='.4' zIndex='1' top='0' left='0' width='100vw' height='100vh' />
        <Cart
          checkOutCookie = {props.checkOutCookie}
          inventoryList = {props.inventoryList}
          hasInventoryPulled = {props.hasInventoryPulled}
          history={props.history}
          onRemoveItem = {props.onRemoveItem}
          onRemoveFromCartItem = {props.onRemoveFromCartItem}
          onContactClick = {props.onContactClick}
          onCheckout = {props.onCheckout}
          />
        </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
