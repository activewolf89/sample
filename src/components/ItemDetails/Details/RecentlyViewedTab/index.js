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
const RecentlyViewedTab = (props) =>{
  return (
    <Div >
      <NoMPUl display="flex" flexDirection="column"  >
        <Li >
          <Div backgroundColor="lightgray"
            display="flex"
            padding="20px"
            justifyContent="space-between"
            onClick={()=>{props.onDetailClick('recentlyViewed')}}
          alignItems="center">
            <Title>Recently Viewed</Title>
            <FontAwesome name={props.isOn ?"minus":"plus"}/>

          </Div>
        </Li>
        <Div>
          <CSSTransition
            in={props.isOn}
            timeout={300}
            classNames="footer"
          unmountOnExit>
            <Styles
              onUpdateItem = {props.onUpdateItem}
              similar={props.recentlyViewed}
              history={props.history}
              onAddToWishlist = {props.onAddToWishlist}
              onUnmount = {props.onUnmount}

            />
          </CSSTransition>
        </Div>

      </NoMPUl>
    </Div>
  )
}
RecentlyViewedTab.propTypes = {
  onAddToWishlist: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
}
export default RecentlyViewedTab;
