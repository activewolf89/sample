  import React,{Component} from "react";
import Div from 'shared/Div'
import Header from './Header';
import Body from './Body';
class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShop: true
    }
    this.handleSwap = this.handleSwap.bind(this)
  }
  handleSwap = function(boolean){
    this.setState({
      isShop: boolean
    })
  }
  render(){
    return(
      <Div position='relative'  >
        <Header
          isShop = {this.state.isShop}
          onSwap = {this.handleSwap}
          isDetails = {this.props.isDetails}
          history = {this.props.history}
          travelTo = {this.props.travelTo}
          onHamburgerClick = {this.props.onHamburgerClick}
        />
        <Div  >
          <Body
            primaryCategoryChoices = {this.props.primaryCategoryChoices}
            onContactClick={this.props.onContactClick}
            isShop = {this.state.isShop}
            isDetails = {this.props.isDetails}
            categoryObjects = {this.props.categoryObjects}
            knowledgeArray = {this.props.knowledgeArray}
            travelTo = {this.props.travelTo}
            history = {this.props.history}
            onFaqClick = {this.props.onFaqClick}
            faqObject={this.props.faqObject}
            onHamburgerClick = {this.props.onHamburgerClick}
          />
        </Div>
      </Div>
    )
  }
}

export default Class;
