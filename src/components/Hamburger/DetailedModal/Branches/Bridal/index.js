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
          <StyledLink to="/shop/bridal/engagement-rings">
            <Option name="shopping-cart" title="Shop All Rings" />
          </StyledLink>
        </Li>
        <Li >
          <Option
            travelTo={props.travelTo}
            history={props.history}
            name=""
            skip
            title="By Metal"
            options={[
              {title:'Platinum',link:'/shop/bridal/engagement-rings?ItemMetalType=Platinum'},
              {title:'White-Gold',link:'/shop/bridal/engagement-rings?ItemMetalColor=White'},
              {title:'Rose-Gold',link:'/shop/bridal/engagement-rings?ItemMetalType=Rose'},
              {title:'Yellow-Gold',link:'/shop/bridal/engagement-rings?ItemMetalType=Yellow'},
            ]} />
        </Li>
        <Li >
          <Option
            travelTo={props.travelTo}
            history={props.history}
            name=""
            skip
            title="By Style"
            options={[
              {title:'Solitaire',link:'/shop/bridal/engagement-rings?ItemStyle=solitaire'},
              {title:'Pave',link:'/shop/bridal/engagement-rings?ItemStyle=pave'},
              {title:'Halo',link:'/shop/bridal/engagement-rings?ItemStyle=halo'},
              {title:'Three-Stone',link:'/shop/bridal/engagement-rings?ItemStyle=threestone'},
              {title:'Vintage',link:'/shop/bridal/engagement-rings?ItemStyle=vintage'},
            ]} />
        </Li>
        <Li >
          <StyledLink to="/shop/bridal/engagement-rings?ItemVendorName=PrecisionSet">
            <Option name="fire" skip title="Popular Suggestions" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/shop/bridal/engagement-rings?ItemVendorName=Tacori">
            <Option name="fire" pic={TacoriLogo} skip title="Tacori Rings" />
          </StyledLink>
        </Li>

        <Li>
          <StyledLink to="/knowledge-center/engagement-rings/ring-size">
            <Option name="question-circle" title="How to discreetly find ring size?" />
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/knowledge-center/engagement-rings">
            <Option name="book" title="Research Center" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/faq/engagement">
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
