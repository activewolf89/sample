import React from 'react';
import Div from 'shared/Div';
import { CSSTransition } from 'react-transition-group';
import HamburgerOptions from './HamburgerOptions';
import styled from 'styled-components';
import DetailedModal from './DetailedModal'
import DetailedHeader from './DetailedHeader';
import './styles.css';
var StyledDiv = styled(Div)`
  position: fixed;
  z-index: 40000000;
  top: 60px;

  @media only screen and (min-width: 996px) {
    top: 0px;
  }
  max-width: 500px;
  height: 100vh;
  overflow-y: auto;
  background-color: white;
  left: 0;
`

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <StyledDiv isReachToggle = {props.isReachToggle}>
        <CSSTransition
          in={props.isHamburgerOpen}
          timeout={300}
          classNames="hamburger"
          unmountOnExit
          onExited={()=>{props.onNavigationClick('')}}
        >
          <Div>

            <HamburgerOptions
              isDetailHamburgerOpen = {props.isDetailHamburgerOpen}
              onDetailClick = {props.onDetailClick}
              primaryCategoryChoices = {props.primaryCategoryChoices}
              onContactClick={props.onContactClick}
              knowledgeArray = {props.knowledgeArray}
              travelTo = {()=>{  props.onHamburgerClick('close')}}
              history = {props.history}
              onFaqClick = {props.onFaqClick}
              faqObject={props.faqObject}
              onHamburgerClick = {props.onHamburgerClick}
              designerObject={props.categoryObjects.vendorCategoryObject}
              searchableCategoryObject = {props.searchableCategoryObject}
              categoryObjects = {props.categoryObjects}
              navigationArray = {props.navigationArray}
              onNavigationClick = {props.onNavigationClick}
              navigationObject = {props.navigationObject}
            />
          </Div>

        </CSSTransition>

      </StyledDiv>
      <CSSTransition
        in={props.isDetailHamburgerOpen ? true:false}
        timeout={300}
        classNames="hamburger"
        unmountOnExit
        onExited={()=>{props.onNavigationClick('')}}
      >
        <StyledDiv >
          <DetailedHeader
            onDetailClick = {props.onDetailClick}
            isDetailHamburgerOpen = {props.isDetailHamburgerOpen}/>
          <DetailedModal
            travelTo = {()=>{  props.onHamburgerClick('close')}}
            designerObject={props.categoryObjects.vendorCategoryObject}
            history={props.history}
            categoryObjects = {props.categoryObjects}
            isDetailHamburgerOpen = {props.isDetailHamburgerOpen}

          />
        </StyledDiv>

      </CSSTransition>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
