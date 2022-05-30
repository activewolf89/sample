import React from 'react';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import OnSale from 'shared/OnSale';
import NavigationLink from '../NavigationLink';
import DesignerDropdown from './DesignerDropdown'
import styled from 'styled-components';

const StyledUl = styled(Ul)`

  @media only screen and (max-width: 996px) {
    padding: 0;
    margin: 0;
    list-style: none;
    >li {
      padding: 5px 0;
      border-bottom: 1px solid white;
      text-decoration: none;
    }
  }
`

// -----
var filterOppositeForChoices = function(primaryCategoryChoices,selectCat){
  var returnedChoices = []
  selectCat.jewelry.forEach((obj)=>{
    if(!primaryCategoryChoices.includes(obj.DetailField)){
      returnedChoices.push(obj.DetailField)
    }
  })
  selectCat.stones.forEach((obj)=>{
    if(!primaryCategoryChoices.includes(obj.DetailField)){
      returnedChoices.push(obj.DetailField)
    }
  })
  return returnedChoices
}

var FilterSearch = function(primaryCategoryChoices, selectCat){

  var returnedChoices = []
  selectCat.forEach((obj)=>{
    if(primaryCategoryChoices.includes(obj.DetailField)){
      returnedChoices.push(obj)
    }
  })
  return returnedChoices


}
const funcC0mp = (props) =>{
  return (
    <Div >
      {
        props.categoryObject &&
        <Div>
          {
            props.categoryObject.shopDetails.specialPrice && props.categoryObject.shopDetails.specialPrice[0].categories.length > 0 &&
            <OnSale
              onHamburgerClick={props.onHamburgerClick}
              to={props.categoryObject.rootPath + '?onSale=true'}
              travelTo={props.travelTo}
            />
          }
          <StyledUl listStyle="none"   height="100%" >


            {props.categoryObject && props.categoryObject.designersArray &&
              <Li>
                <DesignerDropdown
                  catId = {props.categoryObject.catId}
                  designersArray = {props.categoryObject.designersArray}
                  travelTo={props.travelTo}
                  rootPath = {props.categoryObject.rootPath}
                  onHamburgerClick = {props.onHamburgerClick}

                />
              </Li>
            }

            {props.categoryObject.shopDetails && props.categoryObject.shopDetails.jewelry && FilterSearch(props.primaryCategoryChoices, props.categoryObject.shopDetails.jewelry).map((section,idx)=>{
              if(section.categories.length > 0){

                return (
                  <Li key={idx}>
                    <Div themedAccent>
                      <NavigationLink
                        history={props.history}
                        onHamburgerClick = {props.onHamburgerClick}
                        travelTo={props.travelTo}
                        section={section}
                        rootPath={props.categoryObject.rootPath}
                        optionsArray={section}
                        title={props.categoryObject.title}
                      />
                    </Div>
                  </Li>
                )
              } else {
                return ('')
              }
            })}
            {props.categoryObject.shopDetails && props.categoryObject.shopDetails.stones &&  FilterSearch(props.primaryCategoryChoices, props.categoryObject.shopDetails.stones).map((section,idx)=>{
              if(section.categories.length > 0){

                return (
                  <Li key={idx}>
                    <Div themedAccent>
                      <NavigationLink
                        history={props.history}
                        onHamburgerClick = {props.onHamburgerClick}
                        travelTo={props.travelTo}
                        section={section}
                        rootPath={props.categoryObject.rootPath}
                        optionsArray={section}
                        title={props.categoryObject.title}
                      />
                    </Div>
                  </Li>
                )
              } else {
                return ('')
              }
            })}

            {props.categoryObject.shopDetails && props.categoryObject.shopDetails.price && props.categoryObject.shopDetails.price.map((section,idx)=>{
              if(section.categories.length > 0){

                return (
                  <Li key={idx}>
                    <Div themedAccent>
                      <NavigationLink
                        history={props.history}
                        onHamburgerClick = {props.onHamburgerClick}
                        travelTo={props.travelTo}
                        section={section}
                        rootPath={props.categoryObject.rootPath}
                        optionsArray={section}
                        title={props.categoryObject.title}
                      />
                    </Div>
                  </Li>
                )
              } else {
                return ('')
              }
            })}
          </StyledUl>
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
