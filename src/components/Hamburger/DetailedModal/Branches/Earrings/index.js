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
            <StyledLink to="/shop/fine-jewelry/earring">
              <Option name="shopping-cart" title="Shop All Earrings" />
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
                {title:'White',link:'/shop/fine-jewelry/earring?ItemMetalColor=White'},
                {title:'Rose',link:'/shop/fine-jewelry/earring?ItemMetalColor=Rose'},
                {title:'Yellow',link:'/shop/fine-jewelry/earring?ItemMetalColor=Yellow'},
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
                {title:'Diamond',link:'/shop/fine-jewelry/earring?ItemStyle=Diamond'},
                {title:'Gemstone',link:'/shop/fine-jewelry/earring?ItemStyle=Gemstone'},
                {title:'Metal',link:'/shop/fine-jewelry/earring?ItemStyle=Metal'},
                {title:'Pearl',link:'/shop/fine-jewelry/earring?ItemStyle=Pearl'},
              ]} />
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/earring?Price=0-1000">
              <Option name="dollar" skip title="Earring Under $1,000" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/earring?sort=high-to-low&?ItemDetail_7=Stud">
              <Option name="diamond" multiply skip title="Diamond Studs" />
            </StyledLink>
          </Li>
          <Li >
            <StyledLink to="/shop/fine-jewelry/earring?sort=high-to-low">
              <Option name="fire" skip title="Popular Suggestions" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/knowledge-center/earrings">
              <Option name="book" title="Research" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/knowledge-center/earrings/earrings-styles">
              <Option name="book" title="Different Styles?" />
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to="/faq/earring">
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
