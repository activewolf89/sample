import React from 'react';
import Div from 'shared/Div';
import { Switch, Route } from 'react-router-dom';
import Shop from './Shop';
import Guarantee from './Guarantee';
import Homepage from './Homepage';
import ToggleButton from '../ToggleButton';
import KnowledgeCenter from './KnowledgeCenter';
import styled from 'styled-components'

const StyledDiv = styled(Div)`
  width: 370px;
  background-color: white;
  @media only screen and (min-width: 1550px) {

    position: sticky;
    z-index: 10;
    top:0;
  }
`

// -----
const funcC0mp = (props) =>{
  var isSpecific = !props.history.location.pathname.includes('item-')
  return (
    <Div borderRight='3px solid lightGray'>
      {props.mobile && !props.path &&
        <Shop
          selectCategoryValue = {props.selectCategoryValue}
          promoObject = {props.promoObject}
          onToggleSearchByItem = {props.onToggleSearchByItem}
          onSwapMessage = {props.onSwapMessage}
          onLoadItemNumbers = {props.onLoadItemNumbers}
          isSearchItemKey = {props.isSearchItemKey}
          itemKeys ={props.itemKeys}
          ratio = {props.ratio}
          filterCount = {props.filterCount}
          isOpen = {props.isOpen}
          onTheChange = {props.onTheChange}
          options = {props.options}
          revealedAmount = {props.revealedAmount}
          onToggleDetail = {props.onToggleDetail}
          history={props.history}
          searchableCategoryObject = {props.searchableCategoryObject}
          categoryObjects = {props.categoryObjects}
        />
      }
      {
        props.mobile && props.path === "events" &&
        <Homepage
          ourMessage = {props.ourMessage}
          onSwapMessage = {props.onSwapMessage}
          onSwapIndex = {props.onSwapIndex}
          eventsChecklist = {props.eventsChecklist}
          onContactClick = {props.onContactClick}
        />
      }
      {
        !props.mobile &&

        <StyledDiv  display={props.toggle ? 'none':'block'}>
          <ToggleButton
            toggle = {props.toggle}
            onToggle = {props.onToggle}
            ratio = {props.ratio}
            revealedAmount = {props.revealedAmount}
            totalCount = {props.totalCount}
            whichRoute = {props.whichRoute}
            history={props.history}
            isSpecific ={isSpecific}
          />
          <Div >

            <Div overflowY="auto" maxHeight='93vh' padding='0 0 40px 0'>
              <Switch>
                <Route path="/shop" render={routeProps => {
                  if(isSpecific){

                    return (<Shop
                      selectCategoryValue = {props.selectCategoryValue}
                      promoObject = {props.promoObject}
                      onToggleSearchByItem = {props.onToggleSearchByItem}
                      onSwapMessage = {props.onSwapMessage}
                      onLoadItemNumbers = {props.onLoadItemNumbers}
                      isSearchItemKey = {props.isSearchItemKey}
                      itemKeys ={props.itemKeys}
                      ratio = {props.ratio}
                      filterCount = {props.filterCount}
                      isOpen = {props.isOpen}
                      onTheChange = {props.onTheChange}
                      options = {props.options}
                      revealedAmount = {props.revealedAmount}
                      onToggleDetail = {props.onToggleDetail}
                      history={props.history}
                      searchableCategoryObject = {props.searchableCategoryObject}
                      categoryObjects = {props.categoryObjects}
                            />)
                  } else {
                    return (<Guarantee
                      ourMessage = {props.ourMessage}
                      onSwapMessage = {props.onSwapMessage}
                      onSwapIndex = {props.onSwapIndex}
                      eventsChecklist = {props.eventsChecklist}
                      onContactClick = {props.onContactClick}
                      googleReviewObject = {props.googleReviewObject}
                            />)

                  }

                }} />
                <Route path="/knowledge-center" render={routeProps => {
                  return <KnowledgeCenter
                    history={props.history}
                    knowledgeArray={props.knowledgeArray}
                         />
                }} />
                <Route  path="/" render={routeProps => {
                  return (<Homepage
                    ourMessage = {props.ourMessage}
                    onSwapMessage = {props.onSwapMessage}
                    onSwapIndex = {props.onSwapIndex}
                    eventsChecklist = {props.eventsChecklist}
                    onContactClick = {props.onContactClick}
                          />
                  )
                }} />
              </Switch>
            </Div>
          </Div>
        </StyledDiv>
      }

    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
