  import React,{Component} from "react";
  import Div from 'shared/Div'
  import {H5} from 'shared/H';
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
      <Div>
        <Div cursor='pointer'   onClick={()=>{this.props.isDetails === this.props.name ? this.props.onDetaillist(''):this.handleDropdown()}} display='flex' justifyContent='space-between' alignItems='center'>
          <Div padding="10px 0"  >
            <H5>
              {this.props.title}
            </H5>
          </Div>
        </Div>
      </Div>
    )
  }
}

export default Class;
