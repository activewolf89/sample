import React,{Component} from "react";
import Collapsible from 'react-collapsible';
import TitleFAQ2 from './TitleFAQ2';
import FAQFolders from 'shared/FAQFolders';
import Div from 'shared/Div';
class ArticleFAQ extends Component{
constructor(props){
  super(props)
  this.state = {
    open: this.props.open ? true: false
  }
  this.handleAdjustOpen = this.handleAdjustOpen.bind(this)
}
handleAdjustOpen = function(){
  this.setState({
    open: this.state.open ? false: true

  })
}
render(){
  return(
    <Collapsible
      open={this.props.open}
      trigger={<TitleFAQ2 isOpen={this.state.open}>{this.props.title}</TitleFAQ2>}
      onOpening  ={()=>{this.handleAdjustOpen()}}
      onClosing  ={()=>{this.handleAdjustOpen()}}
      onOpen ={()=>{this.props.onOpen(this.props.optionId)}}

    >
      {
        this.state.open &&
        <Div margin="2% 5%">
          <FAQFolders
            descriptionOnly
            generalId = {this.props.titleId}
            detailedId = {this.props.optionId}
            category = {this.props.category}
          />
        </Div>
      }
    </Collapsible>
          )
}
}

export default ArticleFAQ;
