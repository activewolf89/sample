import React,{Component} from "react";

import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Span from 'shared/Span';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
import {H4} from 'shared/H';
// -----


class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = function(){
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render(){
  return (
    <Div >
      {
        !this.props.ignore &&
        <Div onClick={()=>{this.handleToggle()}}  style={{cursor:'pointer'}} display='flex' justifyContent='space-between' alignItems='center'>

          <H4  >
            Return Policy
          </H4>
          <FontAwesome name={this.state.toggle ? 'caret-up':'caret-down'} />
        </Div>
      }
      <Div >
        {
          (this.state.toggle || this.props.ignore) &&
          <Ul childrenPadding='10px 0'>
            <Li>
              30 Day Stock Return Policy on Unmodified Stock.
            </Li>

            <Li>
              We pay for shipping there, you pay for shipping back.
            </Li>
            <Li>
              Any special orders or modified inventory is non-returnable.
            </Li>
            <Li>
              Tacori items purchased can be returned for up to 65% trade-in value for life towards an equal or greater value Tacori piece.
            </Li>
            <Li>
              Any natural diamond purchased from L T Denny Jewelers can be traded in for full value towards equal or greater value.
            </Li>
            <Li>
              <Div display='flex'>
                <Div>
                  See
                </Div>
                <Span padding='0 3px'>
                  <StyledLink to="/knowledge-center/who-we-are/return-policy">

                    {" Refund & Return Page " }
                  </StyledLink>
                </Span>
                <Div>{" "}
                  for more details
                </Div>
              </Div>
            </Li>
          </Ul>
        }
      </Div>
    </Div>

  )
}
}
Class.propTypes = {
}
export default Class;
