import React from 'react';
import Ul from 'shared/Ul';
import {H3} from 'shared/H';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Option from '../Organizer/Option';
import styled from 'styled-components';
import Div from 'shared/Div';

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
    <StyledNoMPUl   display='flex' childrenPadding='10px 0' alignItems='center' justifyContent='center'>
      <NoMPUl  padding='10px' width='100%' childenPadding='15px 0'>
        <Li width='100%' >
          <NoMPUl  flexWrap='nowrap'  padding='10px'>
            <Li>
              <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
                <H3  onClick={()=>{props.history.push('/shop/fine-jewelry/necklace');props.travelTo(false)}} textAlign='center' whiteSpace='nowrap'>Necklaces</H3>
              </Div>

            </Li>
            <Li>
              <NoMPUl  childrenBorderBottom='1px solid white' childrenPadding='10px'>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/necklace');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop All" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/necklace?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li  onClick={()=>{props.history.push('/shop/fine-jewelry/necklace');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/necklaces');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/necklaces?faq=necklaces');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>

              </NoMPUl>
            </Li>
          </NoMPUl>
        </Li>
        <Li>
          <NoMPUl  flexWrap='nowrap'  padding='10px'>
            <Li >
              <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
                <H3 textAlign='center'  onClick={()=>{props.history.push('/shop/fine-jewelry/earrings');props.travelTo(false)}}  whiteSpace='nowrap' >Earrings</H3>
              </Div>
            </Li>
            <Li>
              <NoMPUl childrenBorderBottom='1px solid white' childrenPadding='10px'>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/earrings');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/earrings?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/earrings');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/earrings');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/earrings?faq=earrings');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>
              </NoMPUl>
            </Li>
          </NoMPUl>
        </Li>
        <Li>
          <NoMPUl  flexWrap='nowrap'  padding='10px'>
            <Li >
              <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
                <H3 textAlign='center' onClick={()=>{props.history.push('/shop/fine-jewelry/bracelets');props.travelTo(false)}}  whiteSpace='nowrap' >Bracelets</H3>
              </Div>

            </Li>
            <Li>
              <NoMPUl  childrenBorderBottom='1px solid white' childrenPadding='10px'>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/bracelets');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/bracelets?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/bracelets');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/bracelets');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/bracelets?faq=bracelets');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>
              </NoMPUl>
            </Li>
          </NoMPUl>
        </Li>
      </NoMPUl>
      <NoMPUl padding='10px' width='100%' childenPadding='15px 0'>
        <Li width='100%'>
          <NoMPUl  flexWrap='nowrap'  padding='10px'>
            <Li >
              <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
                <H3 textAlign='center' onClick={()=>{props.history.push('/shop/fine-jewelry/fine-rings');props.travelTo(false)}}  whiteSpace='nowrap' >Fine Rings</H3>
              </Div>

            </Li>
            <Li>
              <NoMPUl childrenBorderBottom='1px solid white' childrenPadding='10px'>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/fine-rings');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/fine-rings?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/fine-rings');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/fine-rings');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/fine-rings?faq=fine-rings');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>
              </NoMPUl>
            </Li>
          </NoMPUl>
        </Li>
        <Li>
          <NoMPUl  flexWrap='nowrap'  padding='10px'>
            <Li >
              <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>

                <H3 textAlign='center' onClick={()=>{props.history.push('/shop/fine-jewelry/watches');props.travelTo(false)}}  whiteSpace='nowrap' >Watches</H3>
              </Div>
            </Li>
            <Li>
              <NoMPUl childrenBorderBottom='1px solid white' childrenPadding='10px'>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/watches');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/watches?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/watches');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/watches');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/watches?faq=watches');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>
              </NoMPUl>
            </Li>
          </NoMPUl>
        </Li>
        <Li>
          <NoMPUl  flexWrap='nowrap'  padding='10px'>
            <Li >
              <Div fontWeight='bold' borderBottom='1px solid pink' cursor='pointer'>
                <H3 textAlign='center'  whiteSpace='nowrap' onClick={()=>{props.history.push('/shop/fine-jewelry/other');props.travelTo(false)}} >Other</H3>
              </Div>

            </Li>
            <Li>
              <NoMPUl childrenBorderBottom='1px solid white' childrenPadding='10px'>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/other');props.travelTo(false)}}>
                  <Option name="shopping-cart" title="Shop" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/other?Price=0-1000&?sort=low-to-high');props.travelTo(false)}}>
                  <Option name="money" title="Under $1,000" />
                </Li>
                <Li onClick={()=>{props.history.push('/shop/fine-jewelry/other');props.travelTo(false)}}>
                  <Option name="filter" title="Filter By Detail" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/others');props.travelTo(false)}}>
                  <Option name="book" title="Research" />
                </Li>
                <Li onClick={()=>{props.history.push('/knowledge-center/others?faq=other');props.onContactClick('FAQ');props.travelTo(false)}}>
                  <Option name="list" title="FAQ" />
                </Li>
              </NoMPUl>
            </Li>
          </NoMPUl>
        </Li>
      </NoMPUl>

    </StyledNoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
