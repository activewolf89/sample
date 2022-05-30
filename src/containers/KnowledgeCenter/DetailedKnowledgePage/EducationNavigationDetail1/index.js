import React from 'react';
import Div from 'shared/Div';
import ReturnObjThatMatches from 'containers/KnowledgeCenter/Functions/ReturnObjThatMatches';
import StyledLink from 'shared/StyledLink';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import A from 'shared/A';
// -----
const EducationNavigationDetail1 = (props) =>{
  const {pathname} = props.history.location
  var obj = ReturnObjThatMatches(props.knowledgeArray,pathname)
  var arrayOfObj = obj.obj;
  var triggeredChosen = false;
  arrayOfObj.forEach((obj1,idx)=>{
    obj1.chosen = false;
    if(pathname.includes(obj1.url)){
      obj1.chosen = true
      triggeredChosen = true;
    }
  })
  if(!triggeredChosen){
    arrayOfObj[0].chosen = true;
  }
  return (
    <Div slightBottomShadow display='flex'  overflow='auto' maxWidth='100vw' >

      <NoMPUl display='flex' childrenPadding="10px" alignItems='center'>
        {arrayOfObj.length > 1 && arrayOfObj && arrayOfObj.map((obj1,idx,arr)=>{

          return (
            <Li key={idx}>
              <StyledLink to={obj1.url} color='black'>
                <Div fontWeight = {"bold"} capitalize whiteSpace='nowrap'>
                  <A color='black'>
                    <small style={{fontWeight:obj1.chosen ? 'bold':'normal'}}>
                      {obj1.title}
                    </small>
                  </A>
                </Div>
              </StyledLink>
            </Li>
          )
        })}

      </NoMPUl>
    </Div>
  )
}
EducationNavigationDetail1.propTypes = {
}
export default EducationNavigationDetail1;
