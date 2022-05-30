  import React,{Component} from "react";
  import Events from './Events';
  import NoUpcomingEvents from './NoUpcomingEvents';
  import Div from 'shared/Div';
class Class extends Component{
  render(){
    return(
      <Div themedAccent>
        {
          this.props.eventLength > 0 ?
            <Div>

              <Events
                contact = {this.props.contact}
                onContactClick = {this.props.onContactClick}
                name={this.props.name}
                shopLink={this.props.shopLink}
                learnLink={this.props.learnLink}
                category={this.props.category}
                month={this.props.month}
                start={this.props.start}
                end={this.props.end}
                title={this.props.title}
                promo={this.props.promo}
                picture={this.props.picture}
              />

            </Div>:
            <Div>
              <NoUpcomingEvents />

            </Div>
        }
      </Div>
        )
  }
}

export default Class;
