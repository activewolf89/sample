import React from 'react';
import Div from 'shared/Div';
import Layout from './Layout'
import ReturnObjThatMatches from 'containers/KnowledgeCenter/Functions/ReturnObjThatMatches';
import ReturnCategoryIdViaPathname from 'containers/KnowledgeCenter/Functions/ReturnCategoryIdViaPathname';
// -----
const EducationBody = (props) =>{
  var FilterFurther = function(detailsArray,searchableCategoryObject,pathname){
  var ObjToLookInto = searchableCategoryObject[ReturnCategoryIdViaPathname(pathname)]
    var newArray = []
    detailsArray.forEach((obj,idx)=>{
      let isPush = false
      ObjToLookInto.jewelry.forEach((jO)=>{
        if(jO.DetailField === obj.matchingEdgeKey){
          obj.matchingEdge.forEach((str)=>{

            if(jO.categories.includes(str)){
              isPush = true
            }
          })
        }
      })
      if(isPush){
        newArray.push(obj)
      }

    })
    return newArray
  }
  const {pathname} = props.history.location
  var obj = ReturnObjThatMatches(props.knowledgeArray,pathname)
  var topId = obj.id
  var arrayOfObj = obj.obj;
  var dontShowFAQ = false;
  var triggeredChosen = false;
  arrayOfObj.forEach((obj1,idx)=>{
    obj1.chosen = false;
    if(!obj1.faqArray){
      dontShowFAQ = true;
    }
    if(pathname.includes(obj1.url)){
      obj1.chosen = true
      triggeredChosen = true;
    }
  })
  if(!triggeredChosen){
    arrayOfObj[0].chosen = true;
  }
  return (
    <Div >

      {
        props.categoryObjects.searchableCategoryObject &&
        arrayOfObj.filter((obj)=>{
          return obj.chosen
        }).map((obj1,theIndex)=>{
          return(
            <Div  key={theIndex} >

              {
                obj1.details &&
                <Layout
                  dontShowFAQ = {dontShowFAQ}
                  googleReviewObject = {props.googleReviewObject}
                  yelpReviewObject = {props.yelpReviewObject}
                  faqLink = {pathname + '?faq=' + topId + ',' + obj1.id}
                  categoryObjects = {props.categoryObjects}
                  pathname = {pathname}
                  onFaqClick = {props.onFaqClick}
                  arrayOfConversation = {!obj1.filterable ? obj1.details:FilterFurther(obj1.details,props.categoryObjects.searchableCategoryObject,props.history.location.pathname)}
                />
              }

            </Div>
          )
        })
      }
    </Div>
  )
}
EducationBody.propTypes = {
}
export default EducationBody;
