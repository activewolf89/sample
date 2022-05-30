import React,{Component} from "react";

import Div from 'shared/Div';
import Span from 'shared/Span';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Select from 'shared/Select';
import Option from 'shared/Option';
import P from 'shared/P';



class CommentGeneratorQuestion extends Component{
  constructor(props){
    super(props);
    this.state = {
      option1: '',
      option1Sentence:{'Service':'an existing','Select Value':'','Custom-Make':'a new'},

    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = function(name,evt){
    this.setState({
      [name]:evt
    })
  }
  render(){
    return(
      <Div >
        <NoMPUl display='flex' flexDirection='column' childrenPadding='5px 0'>
          Request Generator
          <Li>
            <Div width='100px' whiteSpace='nowrap'>
              {
                this.props.isRequired &&
                <Span color='red'>*</Span>
              }
            </Div>
            <P>
              Looking to {" "}
              <Select value={this.state.option1} onChange={(e)=>{this.handleChange('option1',e.target.value)}}>
                <Option>Select Value</Option>
                <Option>Service</Option>
                <Option>Custom-Make</Option>
              </Select>
            </P>
          </Li>
        </NoMPUl>
      </Div>
    )
  }
}

CommentGeneratorQuestion.propTypes = {
}
export default CommentGeneratorQuestion;
