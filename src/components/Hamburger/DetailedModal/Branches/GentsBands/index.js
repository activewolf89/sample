import React from 'react';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink'
// -----
const funcC0mp = (props) =>{
    return (
    <Div >
      <NoMPUl  childrenPadding='10px' borderBottom='1px solid black'>
        <Li >
          <StyledLink to="/shop/wedding-bands/ladies-bands">
            <Option name="shopping-cart" title="Shop All Bands" />
          </StyledLink>
        </Li>
        <Li >
          <Option
            travelTo={props.travelTo}
            history={props.history}
            name="ring"
            skip
            title="Metal Type"
            options={[
              {title:'White',link:'/shop/wedding-bands/mens-bands?ItemMetalColor=White'},
              {title:'Rose',link:'/shop/wedding-bands/mens-bands?ItemMetalColor=Rose'},
              {title:'Yellow',link:'/shop/wedding-bands/mens-bands?ItemMetalColor=Yellow'},
              {title:'Yellow',link:'/shop/wedding-bands/mens-bands?ItemMetalColor=Black'},
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
              {title:'Diamond',link:'/shop/wedding-bands/mens-bands?ItemStyle=Diamond'},
              {title:'Metal',link:'/shop/wedding-bands/mens-bands?ItemStyle=Metal'},
            ]} />
        </Li>
        <Li >
          <StyledLink to="/shop/wedding-bands/mens-bands?ItemVendorName=Benchmark">
            <Option name="ring" skip title="Comfort-Fit Bands" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/shop/wedding-bands/mens-bands?ItemMetalType=Tantalum">
            <Option name="ring" skip title="Tantalum Dark Bands" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/shop?ItemVendorName=ChrisPloof">
            <Option name="ring" skip title="Meteorite/Mokume-Gane Bands" />
          </StyledLink>
        </Li>

        <Li>
          <StyledLink to="/knowledge-center/gents-bands">
            <Option name="book" title="Research" />
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/knowledge-center/gents-bands/band-finish">
            <Option name="book" title="What kind of finishes are there?" />
          </StyledLink>
        </Li>

        <Li >
          <StyledLink to="/faq/gents">
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
