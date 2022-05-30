  import React,{Component} from "react";
  import Collapsible from 'react-collapsible';
  import TitleFAQ from '../TitleFAQ';
  import Ul from 'shared/Ul';
  import Li from 'shared/Li';
  import ArticleFAQ2 from './ArticleFAQ2';
class ArticleFAQ extends Component{
  constructor(props){
    super(props)
    this.state = {
      open: this.props.open ? true: false
    }
    this.handleAdjustOpen = this.handleAdjustOpen.bind(this)
    this.onOpen = this.onOpen.bind(this)
  }
  handleAdjustOpen = function(){
    this.setState({
      open: this.state.open ? false: true

    })
  }
  onOpen = function(test){
    // scrollToComponent(this[test],{offset: -140, align: 'top', duration: 500})

  }
  render(){
    return(
      <Collapsible
        open={this.props.open}
        trigger={<TitleFAQ isOpen={this.state.open}>{this.props.title}</TitleFAQ>}
        onOpening  ={()=>{this.handleAdjustOpen()}}
        onClosing  ={()=>{this.handleAdjustOpen()}}
        onOpen ={()=>{this.props.onOpen(this.props.titleId)}}
      >
        <Ul>

          {this.props.options.map((option)=>{
            return (
              <Li
                ref={(section) => { this[option.id] = section; }}
                key={option.title}
                margin="0 5%"
              >
                <ArticleFAQ2
                  category = {this.props.category}
                  open={this.props.open && option.id === this.props.questionNumber}
                  title={option.title}
                  description={option.description}
                  onOpen  ={this.onOpen}
                  optionId = {option.id}
                  titleId = {this.props.titleId}
                />

              </Li>
            )
          })}
        </Ul>
              </Collapsible>
            )
  }
}

export default ArticleFAQ;
