import React from 'react';
import Div from 'shared/Div';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
// -----
const funcC0mp = (props) =>{
    return (
    <NoMPUl display='flex' flexDirection='column'   alignItems='center' justifyContent='center'>
      <Li  width='100%'>
        <NoMPUl   padding='10px' width='100%' childenPadding='15px 0'>
          <Li>
            <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
              <H3 onClick={()=>{props.history.push('/shop/wedding-bands/ladies-bands');props.travelTo(false)}} textAlign='center' whiteSpace='nowrap'>Ladies Bands</H3>
            </Div>
            <NoMPUl childrenBorderBottom='1px solid white' childrenPadding = "10px">
              <Li onClick={()=>{props.history.push('/shop/wedding-bands/ladies-bands');props.travelTo(false)}}>
                <Option name="shopping-cart" title="Shop All Bands" />
              </Li>
              <Li onClick={()=>{props.history.push('/shop/wedding-bands/ladies-bands?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                <Option name="money" title="Under $1,000" />
              </Li>
              <Li  onClick={()=>{props.history.push('/shop/wedding-bands/ladies-bands');props.travelTo(false)}}>
                <Option name="filter" title="Filter By Detail" />
              </Li>
              <Li onClick={()=>{props.history.push('/knowledge-center/ladies-bands');props.travelTo(false)}}>
                <Option name="book" title="Research" />
              </Li>
              <Li onClick={()=>{props.history.push('/ladies-bands?faq=ladies');props.onContactClick('FAQ');props.travelTo(false)}}>
                <Option name="list" title="FAQ" />
              </Li>
            </NoMPUl>
          </Li>
        </NoMPUl>
      </Li>
      <Li  width='100%'>
        <NoMPUl   padding='10px'  width='100%'  childenPadding='15px 0'>
          <Li>
            <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
              <H3 onClick={()=>{props.history.push('/shop/wedding-bands/mens-bands');props.travelTo(false)}} textAlign='center'  whiteSpace='nowrap' >Gents Bands</H3>
            </Div>
            <Div >

              <NoMPUl  childrenPadding='10px' borderBottom='1px solid white'>
                <Li onClick={()=>{props.history.push('/shop/wedding-bands/mens-bands');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop All Bands" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/wedding-bands/mens-bands?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li  onClick={()=>{props.history.push('/shop/wedding-bands/mens-bands');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/gents-bands');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/gents-bands?faq=gents');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>
              </NoMPUl>
            </Div>
          </Li>
        </NoMPUl>
      </Li>
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
