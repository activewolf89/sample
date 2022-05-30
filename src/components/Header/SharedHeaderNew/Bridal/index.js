import React from 'react';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
import Div from 'shared/Div';

// -----
const funcC0mp = (props) =>{
    return (
    <NoMPUl display='flex' flexDirection='column'  childrenPadding='10px 0' alignItems='center' justifyContent='center'>

      <Li>
        <NoMPUl  padding='10px' width='100%' childenPadding='15px 0'>
          <Li>
            <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>

              <H3 textAlign='center' whiteSpace='nowrap' onClick={()=>{props.history.push('/shop/bridal/engagement-rings');props.travelTo(false)}}>Engagement Rings</H3>
            </Div>
            <NoMPUl  childrenPadding='10px' borderBottom='1px solid white'>
              <Li onClick={()=>{props.history.push('/shop/bridal/engagement-rings');props.travelTo(false)}}>
                <Option name="shopping-cart" title="Shop All Rings" />
              </Li>
              <Li onClick={()=>{props.history.push('/shop/bridal/engagement-rings?Price=0-1200&?sort=low-to-high');props.travelTo(false)}}>
                <Option name="money" title="Rings Under $1,200" />
              </Li>
              <Li  onClick={()=>{props.history.push('/shop/bridal/engagement-rings');props.travelTo(false)}}>
                <Option name="filter" title="Filter By Detail" />
              </Li>
              <Li onClick={()=>{props.history.push('/knowledge-center/engagement-rings');props.travelTo(false)}}>
                <Option name="book" title="Research" />
              </Li>
              <Li onClick={()=>{props.history.push('/knowledge-center/engagement-rings?faq=engagement');props.onContactClick('FAQ');props.travelTo(false)}}>
                <Option name="list" title="FAQ" />
              </Li>
            </NoMPUl>
          </Li>
        </NoMPUl>
      </Li>
      <Li>
        <NoMPUl  padding='10px' width='100%' childenPadding='15px 0' >
          <Li>
            <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
              <H3 textAlign='center'  whiteSpace='nowrap' onClick={()=>{props.history.push('/shop/bridal/loose-diamonds');props.travelTo(false)}}>Natural Diamonds</H3>
            </Div>
            <NoMPUl  childrenPadding='10px' borderBottom='1px solid white'>
              <Li onClick={()=>{props.history.push('/shop/bridal/loose-diamonds');props.travelTo(false)}}>
                <Option name="shopping-cart" title="Shop All Stones" />
              </Li>
              <Li  onClick={()=>{props.history.push('/shop/bridal/loose-diamonds');props.travelTo(false)}}>
                <Option name="filter" title="Filter By Detail" />
              </Li>
              <Li onClick={()=>{props.history.push('/knowledge-center/loose-diamonds');props.travelTo(false)}}>
                <Option name="book" title="Research" />
              </Li>
              <Li onClick={()=>{props.history.push('/knowledge-center/loose-diamonds?faq=diamonds');props.onContactClick('FAQ');props.travelTo(false)}}>
                <Option name="list" title="FAQ" />
              </Li>
            </NoMPUl>
          </Li>
        </NoMPUl>
      </Li>
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
