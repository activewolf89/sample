import React from 'react';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink'
import styled from 'styled-components';
const StyledNoMPUl = styled(NoMPUl)`
  flex-direction:column;
  @media only screen and (min-width: 996px) {
    >ul:first-child {
      border-right: 2px solid pink;
    }
    flex-direction: row;
  }
`

// -----
const funcC0mp = (props) =>{
    return (
      <Div >
        <NoMPUl  childrenPadding='10px' borderBottom='1px solid black'>
          <Li >
            <StyledLink to="/shop/fine-jewelry/other?ItemStyle=brooch">
              <Option name="shopping-cart" title="Shop Brooches" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/other?ItemStyle=charm">
              <Option name="shopping-cart" title="Shop Charms" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/other?ItemStyle=locket">
              <Option name="shopping-cart" title="Shop Locket" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/other?ItemStyle=tiebar">
              <Option name="shopping-cart" title="Shop Tiebars" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/faq/other">
              <Option name="list" title="FAQ" />
            </StyledLink>
          </Li>
        </NoMPUl>
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
