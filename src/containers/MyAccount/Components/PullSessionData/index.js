  import React,{Component} from "react";
import Div from 'shared/Div';
class Class extends Component{
  componentDidMount(){
    this.props.onPullSessionData(this.props.tokenKey)
  }
  render(){
    return(
      <Div>
        Loading...
      </Div>
    )
  }
}

export default Class;
