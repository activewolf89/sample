import React,{Component} from "react";
import Div from 'shared/Div';
import Button from 'shared/Button';
import {H3} from 'shared/H';
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';
// -----
class Class extends Component{
  componentDidMount(){
    this.props.onCreatePendingSold(this.props.checkOutCookie);
  }
  render(){
  return (
    <Div >
      <Div borderBottom='1px solid gray' padding='5px'>
        <H3 textAlign='center'>Purchase Success!</H3>
      </Div>
      <P textAlign='center'>
        You will receive email receipt and follow-up for shipping and logistics.
      </P>
      <P textAlign='center'>
        Thank you for your purchase at L T Denny Jewelers, we look forward to serving you.
      </P>
      <Div textAlign='center'>
        <StyledLink to='/'>
          <Button>Back to Homepage</Button>
        </StyledLink>
      </Div>
    </Div>
  )
}

}

export default Class;
