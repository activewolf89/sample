import React,{Component} from "react";

import Div from 'shared/Div';
import PropTypes from 'prop-types';
import '../styles.css';
import GeneralList from './GeneralList';
// -----
class HamburgerOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDetails: false
    }
    this.handleDetailList = this.handleDetailList.bind(this);
  }
  handleDetailList = function(name){
    if(Object.keys(this.props.categoryObjects).length !== 0){
    this.setState({
      isDetails: name
    })
  }
  }

  render(){
  return (
    <Div  height='100%' backgroundColor='white' width ='100vw' maxWidth='500px' >
      <Div backgroundColor='white' color='black' >

        <GeneralList
          onDetailClick = {this.props.onDetailClick}
          designerObject = {this.props.designerObject}
          onDetaillist = {this.handleDetailList}
          onHamburgerClick = {this.props.onHamburgerClick}
          isDetails = {this.state.isDetails}
          travelTo={this.props.travelTo}
          history={this.props.history}
          onContactClick={this.props.onContactClick}

        />
      </Div>

    </Div>
  )
}
}

HamburgerOptions.propTypes = {
  onHamburgerClick: PropTypes.func.isRequired,
  navigationArray: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  onNavigationClick: PropTypes.func.isRequired
}
export default HamburgerOptions;
