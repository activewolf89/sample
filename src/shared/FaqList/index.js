import React from "react";
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Span from 'shared/Span';
import Answer  from './Answer';
// -----
const FaqList = (props) =>{
  return (
    <Div>
      <Span underline>
        FAQ
      </Span>
      <NoMPUl>
        {props.faqArray.map((obj,idx)=>{
          return(
            <Li key={idx}>
              <Answer
                obj ={obj}
              />
            </Li>
          )
        })}
      </NoMPUl>
    </Div>
  )
}
FaqList.propTypes = {
}
export default FaqList;
