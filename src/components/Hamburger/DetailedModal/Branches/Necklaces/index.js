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
            <StyledLink to="/shop/fine-jewelry/necklace">
              <Option name="shopping-cart" title="Shop All Necklaces" />
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
                {title:'White',link:'/shop/fine-jewelry/necklace?ItemMetalColor=White'},
                {title:'Rose',link:'/shop/fine-jewelry/necklace?ItemMetalColor=Rose'},
                {title:'Yellow',link:'/shop/fine-jewelry/necklace?ItemMetalColor=Yellow'},
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
                {title:'Diamond',link:'/shop/fine-jewelry/necklace?ItemStyle=Diamond'},
                {title:'Gemstone',link:'/shop/fine-jewelry/necklace?ItemStyle=Gemstone'},
                {title:'Metal',link:'/shop/fine-jewelry/necklace?ItemStyle=Metal'},
                {title:'Pearl',link:'/shop/fine-jewelry/necklace?ItemStyle=Pearl'},
              ]} />
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/necklace?Price=0-1000">
              <Option name="dollar" skip title="Necklace Under $1,000" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/necklace?ItemDetail_7=Diamonds-By-The-Yard">
              <Option name="fire" skip title="Popular Suggestions" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/knowledge-center/necklaces">
              <Option name="book" title="Research" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/knowledge-center/necklaces/necklaces-styles">
              <Option name="book" title="Different Styles?" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/faq/necklace">
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
