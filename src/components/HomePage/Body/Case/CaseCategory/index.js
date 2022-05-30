import React from 'react';
import Div from 'shared/Div';
import CategoryOptions from 'containers/App/HelperFunctions/CategoryOptions';
import StyledLink from 'shared/StyledLink';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const funcC0mp = (props) =>{
  return (
    <Div position='relative' themed  opacity='.8' >
      <NoMPUl childrenPadding='5px'>
        {CategoryOptions(props.categoryObjects,props.titleColor).map((categoryObject,idx,arr)=>{
          return (
            <Li key={idx}>
              <StyledLink to ={categoryObject.link} >
                <Div whiteSpace='nowrap'>
                  {categoryObject.name}
                </Div>
              </StyledLink>
            </Li>
          )
        })}
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
