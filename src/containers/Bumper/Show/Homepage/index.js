import React,{Component} from 'react'


import Div from 'shared/Div';
import EventsMaster from './EventsMaster';
import NoUpcomingEvents from './NoUpcomingEvents';
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

    return (
      <Div >
        <Div>
          {
            this.props.eventsChecklist.events.length > 0 ?
              <EventsMaster
                onSwapIndex = {this.props.onSwapIndex}
                name={this.props.eventsChecklist.events[this.props.eventsChecklist.index].name}
                contact={this.props.eventsChecklist.events[this.props.eventsChecklist.index].contact}
                index={this.props.eventsChecklist.index}
                eventLength={this.props.eventsChecklist.events.length }
                onToggle ={this.handleToggle}
                time={this.props.eventsChecklist.events[this.props.eventsChecklist.index].time}
                onContactClick = {this.props.onContactClick}
                shopLink={this.props.eventsChecklist.events[this.props.eventsChecklist.index].shopLink}
                learnLink={this.props.eventsChecklist.events[this.props.eventsChecklist.index].learnLink}
                category={this.props.eventsChecklist.events[this.props.eventsChecklist.index].category}
                month={this.props.eventsChecklist.events[this.props.eventsChecklist.index].month}
                start={this.props.eventsChecklist.events[this.props.eventsChecklist.index].start}
                end={this.props.eventsChecklist.events[this.props.eventsChecklist.index].end}
                title={this.props.eventsChecklist.events[this.props.eventsChecklist.index].name}
                promo={this.props.eventsChecklist.events[this.props.eventsChecklist.index].promo}
                picture={this.props.eventsChecklist.events[this.props.eventsChecklist.index].picture}
              />:
              <Div>
                <NoUpcomingEvents
                  onContactClick = {this.props.onContactClick}

                />
              </Div>
          }
        </Div>
      </Div>
      )
      }
      }


      export default Class;
