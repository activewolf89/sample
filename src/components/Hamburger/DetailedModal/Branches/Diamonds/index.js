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
          <StyledLink to="/shop/loose-diamonds">
            <Option name="shopping-cart" title="Shop Natural Stones" />
          </StyledLink>
        </Li>
        <Li >
          <Option
            name="shape"
            skip
            title="By Shape"
            options={[
              {title:'Round',link:'/shop/bridal/loose-diamonds?MainShape=round'},
              {title:'Cushion',link:'/shop/bridal/loose-diamonds?MainShape=cushion'},
              {title:'Heart',link:'/shop/bridal/loose-diamonds?MainShape=heart'},
              {title:'Oval',link:'/shop/bridal/loose-diamonds?MainShape=oval'},
              {title:'Princess',link:'/shop/bridal/loose-diamonds?MainShape=princess'},
            ]} />
        </Li>
        <Li>
          <StyledLink to="/knowledge-center/loose-diamonds/reading-a-certificate">
            <Option name="book" title="How to read a diamond certificate" />
          </StyledLink>
        </Li>
        <Li >
          <StyledLink to="/faq/diamonds">
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
