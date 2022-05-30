import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
import { CSSTransition } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import RefundPolicy from 'shared/RefundPolicy'
require('../details.css')

// -----
const SimilarTab = (props) =>{
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
            <Title>Returns and Refund' Policy</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>
          </Div>
        </Li>
        <Li>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Div>
              <RefundPolicy ignore />
            </Div>

          </CSSTransition>
        </Li>
      </NoMPUl>
    </Div>
  )
}
SimilarTab.propTypes = {
  onAddToWishlist: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
}
export default SimilarTab;
