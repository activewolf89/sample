import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Div from 'shared/Div';
import LandingPage from './LandingPage';
// -----
var checkIfAnySale = false;
const ReachOption = (props) =>{
    for(let key in props.onSaleObject){
      if(props.onSaleObject[key].count !== 0){
        checkIfAnySale = true;
      }
    }
  return (
    <CSSTransition
      in={props.isOnSaleToggle}
      timeout={400}
      classNames="shopTheToggle"
    unmountOnExit>
      <Div themed padding='10px'>
        <LandingPage
          checkIfAnySale = {!checkIfAnySale}
          categoryObjects = {props.categoryObjects}
          knowledgeArray = {props.knowledgeArray}
          onSaleObject = {props.onSaleObject}
          history={props.history}
        />
        {
          !checkIfAnySale &&
          <Div themed display='flex' justifyContent='center'>
            No Sales Happening At This Time, Try Back Later
          </Div>
        }

        </Div>
      </CSSTransition>
  )
}
ReachOption.propTypes = {
}
export default ReachOption;
