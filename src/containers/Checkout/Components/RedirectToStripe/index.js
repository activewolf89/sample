  import React,{Component} from "react";
  import Div from 'shared/Div'
class Class extends Component{
  componentDidMount(){
    console.log(this.props)
    this.props.stripe.redirectToCheckout(this.props.stripeKey)

  }
  render(){
    return(
      <Div />
    )
  }
}

export default Class;
