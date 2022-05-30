import React from 'react';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import MainTitle from '../Shared/MainTitle';
import MainFact from '../Shared/MainFact';
import Ul from 'shared/Ul';
import FaqList from 'shared/FaqList';
import PullParagraph from './PullParagraph'
// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl childrenBorderBottom="1px solid black">
      {props.jewelryArray.map((obj,idx)=>{
        var Facts = PullParagraph(obj.DetailField,props.knowledgeArray,props.item)
        var selectedValue = props.item[obj.DetailField]
        if(selectedValue){
          return (
            <Li key={idx}>
              <MainTitle
                name={obj.DetailName}
                selectedValue = {selectedValue}
              />
              <Ul>
                {
                  Facts && Facts.description &&
                  <Li>
                    <MainFact
                      categoryName = {props.item.CategoryName}
                      facts = {Facts}
                    />
                  </Li>
                }
                {
                    Facts.description !== '' && Facts.faqArray.length > 0 &&
                  <Li>
                    <FaqList
                      faqArray = {Facts.faqArray}
                    />
                  </Li>
                }
              </Ul>
            </Li>
          )
        } else {
          return('')
        }
      })}
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
