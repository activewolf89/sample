import React,{Component} from "react";
import Designer from './Designer';
import Div from 'shared/Div';

class NavigationLink extends Component{

  render(){
    return(
      <Div>
        <Designer
          onHamburgerClick = {this.props.onHamburgerClick}
          travelTo={this.props.travelTo}
          optionsArray = {this.props.optionsArray}
          rootPath={this.props.rootPath}
          title={this.props.title}
          history={this.props.history}
        />
      </Div>

    )
  }
}

export default NavigationLink;
