import React from 'react';
import Div from 'shared/Div';
import LineItem from './LineItem';
import NoMPUl from 'shared/NoMPUl';
import CommitCheckout from 'shared/CommitCheckout';
import Li from 'shared/Li';
import styled from 'styled-components';
import {SubTotal} from 'containers/Checkout/Helpers/CalculateSales';
import RefundPolicy from 'shared/RefundPolicy'

const StyledDiv = styled(Div)`
justify-content: center;
div: 10px;
  @media only screen and (min-width: 996px) {
    justify-content: space-between;
  }
`
// -----

const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl childrenBorderBottom='1px solid gray'>
        {props.inventoryList.map((item)=>{
          return(
            <Li key={item.ItemKey}>
              <LineItem
                item = {item}
                onRemoveItem = {props.onRemoveItem}
                onRemoveFromCartItem = {props.onRemoveFromCartItem}

              />
            </Li>
          )
        })}
      </NoMPUl>
      <RefundPolicy />
      <StyledDiv borderTop='1px solid gray' display='flex' flexWrap='wrap-reverse'  alignItems='center' padding='10px 0'>
        <Div >
          <CommitCheckout
            eventsChecklist = {props.eventsChecklist}
            endButton="Continue"
            to={"/cart/checkout"}
            onCheckout = {props.onCheckout}
            subTotal = {SubTotal(props.inventoryList)}
            inventoryList = {props.inventoryList}
            qty = {props.inventoryList.length}
          />
        </Div>
      </StyledDiv>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
