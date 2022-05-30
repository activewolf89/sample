import React from 'react';
import Div from 'shared/Div';
import { CSSTransition } from 'react-transition-group';
import Item from 'containers/Item';
import "./styles.css";
import styled from 'styled-components';
// -----

const StyledDiv2 = styled(Div)`
  top: 10;
  height: 100%;
 position: fixed;
 right: 0;
 overflow-y: auto;
 z-index: 5;
  @media only screen and (min-width: 996px) {
    top: 0;

  }
`
const ItemDetail = (props) =>{
  return (
    <Div>

      <StyledDiv2  themed  >
        <CSSTransition
          in={props.isOn}
          timeout={0}
          classNames="detailPage"
        unmountOnExit>

          <Div  backgroundColor='white' color='black'>

            <Item
              fromShop
              itemNumber = {props.item ? props.item.ItemKey:''}
              item = {props.item}
              faqObject ={props.faqObject}
              onContactClick = {props.onContactClick}
              history={props.history}
              rootString = {props.rootString}
            />
          </Div>
          
        </CSSTransition>


      </StyledDiv2>
      <CSSTransition
        in={props.isOn}
        timeout={0}
        classNames="fadeBackground"
      unmountOnExit>
        <Div onClick={()=>{props.onViewDetails(null)}} position='fixed' top='0px' left='0px' zIndex='3' width='100%' height='100%' opacity='.7' backgroundColor='black'>
        </Div>
      </CSSTransition>
    </Div>
      )
}
ItemDetail.propTypes = {
}
export default ItemDetail;
