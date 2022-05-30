import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
import { CSSTransition } from 'react-transition-group';
import Styles from '../Styles'
import FontAwesome from 'react-fontawesome';
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
            onClick={()=>{props.onDetailClick('similar')}}
          alignItems="center">
            <Title>Similar Styles</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>
          </Div>
        </Li>
        <Li>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Styles
              onUpdateItem = {props.onUpdateItem}
              similar={props.similar} history={props.history}
              onAddToWishlist = {props.onAddToWishlist}
              onUnmount = {props.onUnmount}
            />
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
