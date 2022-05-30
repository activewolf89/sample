import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import GeneralOption from './GeneralOption';
import GeneralName from './GeneralName';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';

import {H5} from 'shared/H'
// -----
const funcC0mp = (props) =>{
  return (
    <Div  overflowY='scroll' height='95vh' padding='0 0 20px 0'>
      <Div cursor='pointer' onClick={()=>{props.onHamburgerClick('closed')}} display='flex' justifyContent='space-between' padding='10px' alignItems='center' fontWeight='bold' textAlign='center'>
        <FontAwesome name='caret-left' />
        <H5 bold>MENU</H5>
        <Div />
      </Div>
      <Div backgroundColor='black' color='white' padding='10px' onClick={()=>{props.onHamburgerClick('closed');props.onContactClick('appointment')}}>
        <StyledLink to="/contact-us">
          <GeneralName
            bold
            color='white'
            name="calendar"
            title="Schedule Appointment"
          />
        </StyledLink>
      </Div>
      <NoMPUl childrenBorderBottom ="1px solid black" childrenPadding='0 10px'>
        <Li>
          <Div cursor='pointer' padding='10px 0' onClick={()=>{props.onContactClick('search')}}>
            <GeneralName
              color='black'
              name="search"
              title="Search"
            />
          </Div>
        </Li>
        <Li >
          <StyledLink to="/shop">
            <Div padding='10px 0' >
              <GeneralName
                color='black'
                name="shopping-cart"
                title="Shop All"
              />
            </Div>
          </StyledLink>
        </Li>
        <Li onClick={()=>{props.onDetailClick('engagement_rings')}}>

          <GeneralOption
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            name="Engagement Rings"
            title="Engagement Rings"
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('loose_diamonds')}}>
          <GeneralOption
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            name="Loose Diamonds"
            title="Loose Diamonds"
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('ladies_bands')}}>
          <GeneralOption
            name="Ladies Bands"
            title="Ladies Bands"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('gents_bands')}}>
          <GeneralOption
            name="Gent's Bands"
            title="Gent's Bands"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('necklaces')}}>
          <GeneralOption
            name="Necklaces"
            title="Necklaces"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('earrings')}}>
          <GeneralOption
            name="Earrings"
            title="Earrings"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('bracelets')}}>
          <GeneralOption
            name="Bracelets"
            title="Bracelets"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('fine_rings')}}>
          <GeneralOption
            name="Fine Rings"
            title="Fine Rings"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li onClick={()=>{props.onDetailClick('misc')}}>
          <GeneralOption
            name="Misc"
            title="Misc"
            travelTo={props.travelTo}
            history={props.history}
            onContactClick={props.onContactClick}
            firstOption = {false}
            onDetaillist = {props.onDetaillist}
            isDetails = {props.isDetails}
          />
        </Li>
        <Li key="knowledge2">
          <StyledLink to="/contact-us">
            <Div padding='10px 0' >
              <GeneralName
                color='gray'
                fontStyle='italic'
                name="envelope"
                title="Contact Us"
              />
            </Div>
          </StyledLink>
        </Li>
        <Li key="events" >
          <StyledLink to="/events">

            <Div padding='10px 0' >
              <GeneralName
                color='gray'
                fontStyle='italic'
                name=""
                title="Events"
              />
            </Div>
          </StyledLink>
        </Li>
        <Li key="knowledge" >
          <StyledLink to="/knowledge-center">

            <Div padding='10px 0' >
              <GeneralName
                color='gray'
                fontStyle='italic'
                name="book"
                title="Learn"
              />
            </Div>
          </StyledLink>
        </Li>
        <Li key="home" >
          <StyledLink to="/faq">

            <Div padding='10px 0' >
              <GeneralName
                color='gray'
                fontStyle='italic'
                name="list"
                title="FAQ"
              />
            </Div>
          </StyledLink>
        </Li>



      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
