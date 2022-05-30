import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import Span from 'shared/Span';
import WishlistLink from './WishlistLink';
import ShoppingLink from './ShoppingLink';
import A from 'shared/A';
const StyledDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
  display: block;
  }
`

const StyledNoMPUl = styled(NoMPUl)`

  @media only screen and (min-width: 996px) {
    >li: {
      border-right: 0px solid white;
      height: auto;
    }
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <StyledNoMPUl  alignItems='center' display='flex' childrenPadding='0 30px 0 0'>
        <Li >
          <WishlistLink
            history={props.history}
          />
        </Li>
        <Li >
          <ShoppingLink
            history={props.history}
          />
        </Li>
      </StyledNoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
