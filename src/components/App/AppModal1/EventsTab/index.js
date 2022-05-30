import React,{Component} from 'react'


import Div from 'shared/Div';
import EventsMaster from './EventsMaster';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import StyleBox from './StyleBox';
import Store from 'images/TKimages/jpg/fine-rings.jpg';

// -----
class Class extends Component {
  constructor(props){
    super(props)


    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle = function(index){
    this.setState({
      index: index
    })
  }
  render(){
    var filteredEvents = this.props.eventsChecklist.events.filter((e)=>{
      return e.upcoming
    })
    return (
      <Div border='2px solid black' backgroundColor='gray'>

        {
          filteredEvents.length > 0 ?
            <NoMPUl  childrenPadding='10px 0'>
              {filteredEvents.map((event,idx)=>{
                return (
                  <Li key={idx}>
                    <EventsMaster
                      onSwapIndex = {this.props.onSwapIndex}
                      contactButton = {event.contactButton}
                      name={event.name}
                      name2={event.name2}
                      contact={event.contact}
                      resets={event.resets}
                      index={idx}
                      eventLength={this.props.eventsChecklist.events.length }
                      onToggle ={this.handleToggle}
                      time={event.time}
                      onContactClick = {this.props.onContactClick}
                      shopLink={event.shopLink}
                      learnLink={event.learnLink}
                      category={event.category}
                      month={event.month}
                      start={event.start}
                      end={event.end}
                      description={event.description}
                      title={event.name}
                      promo={event.promo}
                      picture={event.picture}
                    />
                  </Li>
                )
              })}

            </NoMPUl>
          :
          <Div>
            <StyleBox
              title="No Current Events"
              link="/shop"
              currentDate
              description = "We current do not have any events going on, but please check back periodically.  Click on the button below to browse our selection to build a wishlist in the meantime"
              boxImage ={Store}
              name="Start Shopping"
            />

          </Div>
        }
      </Div>
    )
        }
        }


      export default Class;
