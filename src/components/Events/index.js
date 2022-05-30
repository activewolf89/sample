import React from 'react';
import Div from 'shared/Div';
import HeaderTitle from 'shared/HeaderTitle';
import EventsTab from 'components/App/AppModal1/EventsTab'
import Helmet from 'shared/Helmet'
// -----
const funcC0mp = (props) =>{
  return (
    <Div textAlign='center' maxWidth='996px'>
      <HeaderTitle
        title="Events"
      />
      <Helmet
        title =  "Events"
        name = "Events"
        href =  "www.ltdenny.com/events"
        content="This is a list of our upcoming jewelry events, in-store and online promotions that happen periodically throughout the year"
      />
      <EventsTab
        onSwapIndex = {props.onSwapIndex}
        eventsChecklist = {props.eventsChecklist}
        onContactClick = {props.onContactClick}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
