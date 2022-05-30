import React from 'react';
import Div from 'shared/Div';
import {H2} from 'shared/H';
import styled from 'styled-components';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import ShopCategoryName from 'containers/App/HelperFunctions/ShopCategoryName'
// -----
const StyledDiv = styled(Div)`
  white-space: nowrap;
  :hover {
    .Blackground {
      opacity: 0;
    }
  }
`

const AnotherStyledDiv = styled(Div)`
  font: 14px;
  @media only screen and (min-width: 996px) {
    font: 16px;

  }
`
const Rectangle = (props) =>{
  return (
    <Div height="100%" >
      {
        !props.pillars ?
          <StyledDiv borderRadius="50%" width='100%' height="100%"  cursor="pointer" position="relative" backgroundImg={props.backgroundImg}  border="1px solid gray" >
            <StyledLink to={props.link}>
              <Div className="Blackground" themed opacity=".7" width="100%" height="100%" >
              </Div>
              <AnotherStyledDiv  textAlign="center" left="50%" top="50%" transform="translate(-50%, -50%)" color="white" position="absolute" >
                <Div>
                  {
                    props.name1
                    &&
                    <H2>
                      {ShopCategoryName(props.name1)}
                    </H2>
                  }
                  <H2>
                    {props.name}
                  </H2>
                  {
                      props.icon &&
                    <FontAwesome name={props.icon} />
                  }
                </Div>
              </AnotherStyledDiv>
            </StyledLink>
          </StyledDiv>:
          <Div   position='relative' height="100%" border="1px solid gray" >
            <Div flexWrap="nowrap" opacity=".9"  position="absolute" top='0%' width='100%' zIndex="1" themed display="flex" alignItems="center" justifyContent="center">
              <H2>
                {props.name}
              </H2>
            </Div>
            <StyledLink to={props.link} >
              <Div minHeight="200px" width='100%' height="100%"  cursor="pointer" position="relative" backgroundPosition='center' backgroundImg={props.backgroundImg} backgroundSize="cover"   >
              </Div>
            </StyledLink>
          </Div>
      }

    </Div>

  )
}
Rectangle.propTypes = {
}
export default Rectangle;
