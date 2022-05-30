import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import StyledLink from 'shared/StyledLink';
// -----
const EducationNavigationDetail2 = (props) =>{
  const {pathname} = props.history.location

  var triggeredChosen = false;
  props.arrayOfOptions.forEach((obj1,idx)=>{
    obj1.chosen = false;
    if(pathname.includes(obj1.search)){
      obj1.chosen = true
      triggeredChosen = true;
    }
  })
  if(!triggeredChosen){
      props.arrayOfOptions[0].chosen = true;
  }
  return (
  <NoMPUl display='flex' childrenPadding="10px">
    {props.arrayOfOptions.map((mostDetailObj,idx)=>{
      return(
        <Li key={idx}>
          <Div fontWeight = {mostDetailObj.chosen ? 'bold':'normal'} >
            <StyledLink to={props.rootPath + '/' + mostDetailObj.search} color='black'>
              {CapitalizeFirstLetter(mostDetailObj.name)} 
            </StyledLink>
          </Div>
        </Li>
      )
    })}
  </NoMPUl>
  )
}
EducationNavigationDetail2.propTypes = {
}
export default EducationNavigationDetail2;
