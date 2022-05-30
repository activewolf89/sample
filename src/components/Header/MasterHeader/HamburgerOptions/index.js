import React,{Component} from "react";

import Div from 'shared/Div';
import PropTypes from 'prop-types';
import GeneralBar from './GeneralBar'
import DetailBar from './DetailBar';
//shared
import { CSSTransition } from 'react-transition-group';
import '../styles.css';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import GeneralList from './GeneralList';
import ContactInfo from './ContactInfo';
import ShopDetailList from './ShopDetailList';
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
    this.setState({
      isDetails: name
    })
  }

  render(){
  return (
    <Div  height='100%' backgroundColor='white' >
      {
        !this.state.isDetails &&
        <Div backgroundColor='white' color='black' >

          <GeneralList
            onDetaillist = {this.handleDetailList}
            onHamburgerClick = {this.props.onHamburgerClick}

          />
        </Div>
      }
      {
        this.state.isDetails &&
        <Div themed>

          <ShopDetailList
            onHamburgerClick = {this.props.onHamburgerClick}
            onDetaillist = {this.handleDetailList}
            isDetails = {this.state.isDetails}
            categoryObjects = {this.props.categoryObjects}
            knowledgeArray = {this.props.knowledgeArray}
            travelTo = {this.props.travelTo}
            history = {this.props.history}
            onFaqClick = {this.props.onFaqClick}
            faqObject={this.props.faqObject}
            onHamburgerClick = {this.props.onHamburgerClick}
            onContactClick={this.props.onContactClick}

          />
        </Div>
      }
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
