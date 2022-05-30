import React from 'react';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink'
import TacoriLogo from 'images/tacori_logo.png'
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
            title="Metal Color"
            options={[
              {title:'White',link:'/shop/wedding-bands/ladies-bands?ItemMetalColor=White'},
              {title:'Rose',link:'/shop/wedding-bands/ladies-bands?ItemMetalColor=Rose'},
              {title:'Yellow',link:'/shop/wedding-bands/ladies-bands?ItemMetalColor=Yellow'},
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
              {title:'Three-Stone',link:'/shop/wedding-bands/ladies-bands?ItemStyle=Three-Stone'},
              {title:'Five-Stone',link:'/shop/wedding-bands/ladies-bands?ItemStyle=Five-Stone'},
              {title:'Plain',link:'/shop/wedding-bands/ladies-bands?ItemStyle=plain'},
              {title:'Eternity',link:'/shop/wedding-bands/ladies-bands?ItemStyle=eternity'},
              {title:'Half-way',link:'/shop/wedding-bands/ladies-bands?ItemStyle=half-way'},
              {title:'One-Quarter',link:'/shop/wedding-bands/ladies-bands?ItemStyle=one-quarter'},
              {title:'Three-Quarter',link:'/shop/wedding-bands/ladies-bands?ItemStyle=three-quarters'},
            ]} />
        </Li>
        <Li >
          <StyledLink to="/shop/wedding-bands/ladies-bands?ItemVendorName=Memoire">
            <Option name="fire" skip title="Popular Suggestions" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/shop/wedding-bands/ladies-bands?ItemVendorName=Tacori">
            <Option pic={TacoriLogo} name="square" skip title="Tacori Bands" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/shop/wedding-bands/ladies-bands?ItemStyle=plain">
            <Option name="square" skip title="Plain Bands" />
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/knowledge-center/ladies-bands">
            <Option name="book" title="Research" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/faq/ladies">
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
