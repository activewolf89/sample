  import React,{Component} from "react";
  import Div from 'shared/Div'
  import {H5} from 'shared/H';
  import DetailOption from './DetailOption';
class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
    isOn: false
    }
     this.handleDropdown = this.handleDropdown.bind(this)
  }
   handleDropdown = function(){
     if(this.props.firstOption){

     this.setState({
       isOn: !this.state.isOn
     })
   } else {
     this.props.onDetaillist(this.props.name)
   }
  }

  render(){
    return(
      <Div    >
        <Div padding="10px 0"  onClick={()=>{this.handleDropdown()}}>
          <H5>
            {this.props.name}
          </H5>
        </Div>
        {
          this.props.firstOption && this.state.isOn &&
          <Div>
            <DetailOption
              onDetaillist = {this.props.onDetaillist}
              firstOption = {this.props.firstOption}
            />
          </Div>
        }
      </Div>
    )
  }
}

export default Class;
