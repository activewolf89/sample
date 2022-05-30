import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360'
import Span from 'shared/Span'
import P from 'shared/P'
import StyledLink from 'shared/StyledLink'
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <P>
        <Span fontStyle='italic' display='inline-block'>
          <StyledLink to={props.obj.link}>
            {props.obj.title} -
          </StyledLink>
        </Span>
        {props.obj.description}
      </P>
      <Div display='flex' maxWidth='80vw' flexWrap='nowrap'  overflow='auto'>

        {
          props.obj.images.map((img)=>{
            return (
              <Vision360 key={img} ItemKey={img} />
            )
          })
        }
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
