import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import StyledLink from "shared/StyledLink";
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  console.log(props)
  return (
    <Div >
      <NoMPUl childrenPadding="10px" backgroundColor='white' color='black' childrenBorderBottom="1px solid gray" maxHeight="500px" overflow="auto">

        {props.optionsArray.categories.sort().map((option)=>{
          if(option !== ''){
            return (
              <Li  key={option} onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick('close')) && props.travelTo()}}>
                <StyledLink  underline to={props.rootPath + '?' + props.optionsArray.DetailField + '=' + option} >
                  <A  color='black'>
                    {CapitalizeFirstLetter(option)}
                  </A>
                </StyledLink>
              </Li>
            )
          } else {
            return ('')
          }
        })}
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
