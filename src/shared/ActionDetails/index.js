import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import { CSSTransition } from 'react-transition-group';
import './styles.css';
import FontAwesome from 'react-fontawesome';
import cookie from 'react-cookies'
import StyledFa from 'shared/StyledFa';

import P from 'shared/P';
import cookies from 'react-cookies'
import CustomerMessage from 'shared/CustomerMessage'
import ShoppingButton from './ShoppingButton';
var ShouldSendIndividual = function(item,history,callback){
    callback('Drop A Hint',item)
}
// -----
var checkIfPaused = function(){
  var cookieString = cookies.loadAll()['pauseRequest'];

  if(cookieString){
    return true;
  }
  return false;
}
const ActionDetails = (props) =>{

  var isSelected = cookie.loadAll()['wishlistItems'] ? cookie.loadAll()['wishlistItems'].includes(props.ItemKey):false
  return (
    <CSSTransition
      in={props.isActive}
      timeout={400}
      classNames="shopTheToggle"
    unmountOnExit>
      <Div  maxHeight='95%' color='white' maxWidth='600px'>
        <Div color='black' padding='10px'>

          <P>
            <Div display='flex' fontWrap='nowrap'>
              <Div>
                <CustomerMessage
                  isPending = {props.item.pending_sale_end}
                  item={props.item}
                />
              </Div>
            </Div>
          </P>

        </Div>
        <Div  padding='10px 0' >
          <ShoppingButton
            isPending = {props.item.pending_sale_end}
            checkOutString = {props.checkOutString}
            onAddToWishlist = {props.onAddToWishlist}
            ItemKey = {props.ItemKey}
            ItemStatus = {props.ItemStatus}
            userProfile = {props.userProfile}
            onContactClick = {props.onContactClick}
            item={props.item}
          />


        </Div>
        <Div margin='10px 0' color='black' textAlign='center'>
          ~Additional Options~
        </Div>
        <NoMPUl childrenPadding='5px' childrenBorder="1px solid gray"  display='flex'  alignItems='center'  onClick={()=>{props.onWishlistClick && props.onWishlistClick()}}>

          <Li width='50%'  onClick={()=>{(!props.userProfile && !checkIfPaused() && props.onContactClick('login'));props.onAddToWishlist(props.ItemKey,props.userProfile)}}>
            <Div color='black'>

              {
                isSelected ?
                  <Div whiteSpace='nowrap' cursor='pointer'  display='flex' flexWrap='nowrap' alignItems='center'>
                    <Div color='black' >
                      <FontAwesome name="heart" style={{color:'red',marginRight:'5px'}}/>
                      Remove Wishlist
                    </Div>
                  </Div>:
                  <Div whiteSpace='nowrap' cursor='pointer'>
                    <FontAwesome name="heart" style={{color:'gray',marginRight:'5px'}}/>
                    Add Wishlist
                  </Div>
              }
            </Div>
          </Li>
          <Li width='50%'  onClick={()=>{ShouldSendIndividual(props.item,props.history,props.onContactClick)}}>
            <Div color='black'  cursor='pointer'>
              <StyledFa  name="paper-plane"  style={{marginRight:'5px', color: 'black'}} />
              Send Hint
            </Div>
          </Li>
        </NoMPUl>
        <NoMPUl childrenBorder="1px solid gray" childrenPadding='5px' display='flex'  alignItems='center'  onClick={()=>{props.onWishlistClick && props.onWishlistClick()}}>

          <Li width='50%'  onClick={()=>{props.onContactClick('Ask A Question',props.item)}}>
            <Div cursor='pointer' color='black'>
              <StyledFa  name="question-circle"  style={{marginRight:'5px', color: 'black'}} />
              Ask A Question
            </Div>
          </Li>
          <Li   width='50%' onClick={()=>{props.onContactClick('Schedule A Viewing',props.item)}}>
            <Div cursor='pointer' color='black'>
              <FontAwesome name="calendar" style={{marginRight:'5px',color: 'black'}}/>
              Appointment
            </Div>
          </Li>
        </NoMPUl>
      </Div>
    </CSSTransition>
  )
}
ActionDetails.propTypes = {
}
export default ActionDetails;
