import React from 'react';
import Div from 'shared/Div'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectSearchableCategoryObjects,makeSelectPrimaryCategoryChoices,makeSelectCategoryObjects} from 'containers/App/selectors';
import {makeSelectMoreFilters,makeSelectCurrentOpen} from 'containers/ShopNew/selectors';
import { compose } from 'redux';
import ChoiceButton from './ChoiceButton'
import getParameterByName from 'containers/ShopNew/Helpers/getParameterByName.js'
import {handleAdjustMoreFilters,handleOpenFilterQuestion} from 'containers/ShopNew/actions'
import ConvertVendorObject from 'containers/ShopNew/Helpers/ConvertVendorObject';
import CloseFilters from './CloseFilters';
import { Tab, Tabs, TabList } from 'react-tabs';
// -----
var findRange = function(itemKey,search){
  var currentQuery = 'All'
  if(search.includes(itemKey)){
    var result = getParameterByName(itemKey,search)
    currentQuery = result
  }
  return currentQuery
}
var findName = function(itemKey,categoryObjects){
  var result = "Loading.."
  if(categoryObjects){

    Object.keys(categoryObjects).forEach((obj)=>{
      categoryObjects[obj].forEach((ofChoice)=>{
        if(ofChoice.DetailField === itemKey){
          result = ofChoice.DetailName
        }
      })
    })
  }
  return result
}
var findCategories = function(name,scO){
  var result = "Loading.."
  if(scO){
    Object.keys(scO).forEach((obj)=>{
      scO[obj].forEach((ofChoice)=>{
        if(ofChoice.DetailField === name){
          result = ofChoice.categories
        }
      })

    })
  }
  return result
}
var filterOppositeForChoices = function(arrayOfChoices,selectCat){
  var returnedChoices = []
  selectCat.jewelry.forEach((obj)=>{
    if(!arrayOfChoices.includes(obj.DetailField)){
      returnedChoices.push(obj.DetailField)
    }
  })
  selectCat.stones.forEach((obj)=>{
    if(!arrayOfChoices.includes(obj.DetailField)){
      returnedChoices.push(obj.DetailField)
    }
  })
  return returnedChoices
}
var pullDesigners = function(categoryObjects,catId){
  const {vendorCategoryObject} = categoryObjects
  return ConvertVendorObject(vendorCategoryObject,catId).categories
}
const QueryMaster = (props) =>{
  var isSale=(props.history.location.search.includes("ItemSignage=10%") || props.history.location.search.includes("ItemSignage=20%") ||props.history.location.search.includes("ItemSignage=30%"))
  const objForChoices = props.primaryCategoryChoices[props.catId]
  return (
    <Div  padding='10px 0'  width='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'  >
      <Tabs selectedIndex = {"-1"}>


        <TabList>
          <Tab onClick={()=>{isSale ? props.history.push('/shop'): props.history.push('/shop?ItemSignage=10%,20%,30%')}}>
            <ChoiceButton
              name={"On Sale"}
              currentFilter={isSale ? "On":"Off"}
              alternativeClick
              itemKey = {"More Filters"}
            />
          </Tab>
          {objForChoices && objForChoices.map((choice,idx)=>{
            if(choice !== "" && choice !== false && choice !== undefined){
              return(

                <Tab key={idx}>
                  <ChoiceButton
                    name={findName(choice,props.searchableCategoryObjects[props.catId])}
                    currentFilter={findRange(choice,props.history.location.search)}
                    itemKey = {choice}
                    onOpenFilterQuestion = {props.handleOpenFilterQuestion}
                    currentOpen = {props.currentOpen}
                    categories = {findCategories(choice,props.searchableCategoryObjects[props.catId])}
                    catId={props.catId}
                    history={props.history}
                    categoryObjects = {props.categoryObjects}

                  />
                </Tab>
              )
            } else {
              return('')
            }
          })}

          <Tab>
            {
              props.catId !== 190 &&
              <ChoiceButton
                name={"Designer"}
                currentFilter={findRange("ItemVendorName",props.history.location.search)}
                itemKey = {"ItemVendorName"}
                onOpenFilterQuestion = {props.handleOpenFilterQuestion}
                currentOpen = {props.currentOpen}
                categories = {pullDesigners(props.categoryObjects,props.catId)}
                catId={props.catId}
                history={props.history}
                categoryObjects = {props.categoryObjects}

              />
            }
          </Tab>
          <Tab>
            <ChoiceButton
              name={"Price"}
              itemKey={"Price"}
              onOpenFilterQuestion = {props.handleOpenFilterQuestion}
              currentFilter={findRange("Price",props.history.location.search)}
              currentOpen = {props.currentOpen}
              categories = {findCategories("Price",props.searchableCategoryObjects[props.catId])}
              catId={props.catId}
              history={props.history}
              categoryObjects = {props.categoryObjects}

            />
          </Tab>

          <Tab onClick={()=>{props.handleAdjustMoreFilters()}}>
            <Div >
              <ChoiceButton
                name={props.moreFilters ? "Less Filters":"More Filters"}
                currentFilter={"Hide"}
                alternativeClick
                itemKey = {"More Filters"}
              />
            </Div>
          </Tab>


        </TabList>
      </Tabs>
      <Tabs selectedIndex = {"-1"}>
        <TabList>
          {
            props.moreFilters &&
            filterOppositeForChoices(objForChoices,props.categoryObjects.searchableCategoryObject[props.catId]) && filterOppositeForChoices(objForChoices,props.categoryObjects.searchableCategoryObject[props.catId]).map((choice,idx)=>{
              if(choice !== "" && choice !== false && choice !== undefined){

                return(
                  <Tab key={idx}>
                    <ChoiceButton
                      name={findName(choice,props.searchableCategoryObjects[props.catId])}
                      currentFilter={findRange(choice,props.history.location.search)}
                      itemKey = {choice}
                      onOpenFilterQuestion = {props.handleOpenFilterQuestion}
                      currentOpen = {props.currentOpen}
                      categories = {findCategories(choice,props.searchableCategoryObjects[props.catId])}
                      catId={props.catId}
                      history={props.history}
                      categoryObjects = {props.categoryObjects}

                    />
                  </Tab>
                )
              } else {
                return('')
              }
            })

          }
        </TabList>
      </Tabs>

      <Div  backgroundColor='lightGray' width='100vw' maxWidth='996px' overFlowX='scroll' whiteSpace='nowrap'>
        {
          Object.keys(props.categoryObjects).length > 1 &&
          <CloseFilters
            history={props.history}
            categoryObjects = {props.categoryObjects}
            catId = {props.catId}
          />
        }
      </Div>

    </Div>

  )
}
export function mapDispatchToProps(dispatch){
  return {
    handleAdjustMoreFilters: ()=> dispatch(handleAdjustMoreFilters()),
    handleOpenFilterQuestion:(currentOpen) => dispatch(handleOpenFilterQuestion(currentOpen)),
  }
}
const mapStateToProps = createStructuredSelector({
  categoryObjects: makeSelectCategoryObjects(),
  moreFilters: makeSelectMoreFilters(),
  currentOpen: makeSelectCurrentOpen(),
  searchableCategoryObjects: makeSelectSearchableCategoryObjects(),
  primaryCategoryChoices: makeSelectPrimaryCategoryChoices()
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withConnect
)(QueryMaster));
