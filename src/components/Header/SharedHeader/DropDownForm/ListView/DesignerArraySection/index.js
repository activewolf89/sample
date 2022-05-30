import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import DesignerFolder from './DesignerFolder';
import StyledLink from 'shared/StyledLink';
import A from 'shared/A';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  maxHeight='400px' overflow='auto' >
      <Span onClick={()=>{props.travelTo()}}>
        <StyledLink to={'/knowledge-center/designers'}>
          <A >
            Designers Homepage
          </A>
        </StyledLink>
      </Span>

      <DesignerFolder
        categoryObject = {props.categoryObject}
        travelTo={props.travelTo}
        designersArray = {props.designersArray}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
