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
            <StyledLink to="/shop/fine-jewelry/bracelet">
              <Option name="shopping-cart" title="Shop All Bracelets" />
            </StyledLink>
          </Li>
          <Li >
            <Option
              travelTo={props.travelTo}
              history={props.history}
              name="ring"
              skip
              title="By Metal Color"
              options={[
                {title:'White',link:'/shop/fine-jewelry/bracelet?ItemMetalColor=White'},
                {title:'Rose',link:'/shop/fine-jewelry/bracelet?ItemMetalColor=Rose'},
                {title:'Yellow',link:'/shop/fine-jewelry/bracelet?ItemMetalColor=Yellow'},
              ]} />
          </Li>
          <Li >
            <Option
              travelTo={props.travelTo}
              history={props.history}
              name="ring"
              skip
              title="By Style"
              options={[
                {title:'Diamond',link:'/shop/fine-jewelry/bracelet?ItemStyle=Diamond'},
                {title:'Gemstone',link:'/shop/fine-jewelry/bracelet?ItemStyle=Gemstone'},
                {title:'Metal',link:'/shop/fine-jewelry/bracelet?ItemStyle=Metal'},
              ]} />
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/bracelet?Price=0-1000">
              <Option name="dollar" skip title="Bracelets Under $1,000" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/bracelet?ItemDetail_7=Flex-Bangle">
              <Option name="fire" skip title="Popular Suggestions" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/bracelet?ItemDetail_7=Flex-Bangle">
              <Option name="" skip title="Flex Bracelets" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/bracelet?ItemDetail_7=Tennis">
              <Option name="" skip title="Tennis Bracelets" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/knowledge-center/bracelets">
              <Option name="book" title="Research" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/knowledge-center/bracelets/bracelets-styles">
              <Option name="book" title="Different Styles?" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/faq/bracelet">
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
