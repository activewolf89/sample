import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
import { CSSTransition } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import Promises from 'images/Promises.jpg'
import Guarantee from 'shared/Guarantee';
require('../details.css')

// -----
const GuaranteeTab = (props) =>{
  return (
    <Div >
      <NoMPUl display="flex" flexDirection="column"  >
        <Li >
          <Div backgroundColor="lightgray"
            display="flex"
            padding="20px"
            justifyContent="space-between"
            onClick={()=>{props.onDetailClick('gaurantee')}}
          alignItems="center">
            <Title>Purchase Promises</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>
          </Div>
        </Li>
        <Div>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Div position='relative' height='400px' backgroundImg={Promises} backgroundRepeat='no-repeat' >
              <Div width='100%' height='100%'  backgroundColor='gray' opacity='.3' color='white' display='flex' justifyContent='center'>
              </Div>
              <Div height='100%' justifyContent='center' display='flex' alignItems='center'  width='100%' position='absolute' backgroundColor='black' opacity='.7' top='50%' left='50%' transform="translate(-50%,-50%)" color='white'>
                <Guarantee />
              </Div>
            </Div>
          </CSSTransition>
        </Div>
      </NoMPUl>
    </Div>
  )
}
GuaranteeTab.propTypes = {
  onAddToWishlist: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
}
export default GuaranteeTab;
