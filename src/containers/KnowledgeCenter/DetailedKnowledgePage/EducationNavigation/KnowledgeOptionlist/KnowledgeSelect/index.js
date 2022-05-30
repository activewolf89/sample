import React,{Component} from "react";
import Div from 'shared/Div';
import Select from 'shared/Select';
import Option from 'shared/Option';
var FindAddress = function(props){
  var name = ''
  props.knowledgeArray.forEach((obj)=>{
    if(props.history.location.pathname.includes(obj.clickTo)){
      name = obj.name
    }
  })
  return name
}
class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      select: FindAddress(props)
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange = function(e){
    var clickTo = '';
    var nameTo = '';
    this.props.knowledgeArray.forEach((obj)=>{
      if(obj.name === e){
        nameTo = obj.name
        clickTo = obj.clickTo
      }
    })
    this.props.history.push(clickTo)
    this.setState({
      select: nameTo
    })
  }

  render(){
    return(
      <Div >
        <Select value={this.state.select} width='100%' onChange={(e)=>{this.handleSelectChange(e.target.value)}}>
          {
            this.props.knowledgeArray && this.props.knowledgeArray.map((obj,idx)=>{
              return (
                <Option key={idx} width='100%' >
                  {obj.name}
                </Option>
              )
            })
          }
        </Select>
      </Div>
    )
  }
}

export default Class;
