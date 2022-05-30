import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import StyledLink from 'shared/StyledLink'
// -----
const ClickableRectangle = (props) =>{
  return (
    <Div backgroundColor='white'>
      <StyledLink to={props.clickTo}>

        <Div backgroundImg={props.svgImg} backgroundSize='110px' backgroundRepeat='no-repeat' position='relative' width='200px' height='200px' border='2px solid white'>
          <Div themed  position='absolute' width='100%' bottom='15%'>
            <Title>
              ({props.count})
            </Title>
            <Title>
              {props.name}
            </Title>
          </Div>
        </Div>
      </StyledLink>
    </Div>
      )
      }

export default ClickableRectangle;
