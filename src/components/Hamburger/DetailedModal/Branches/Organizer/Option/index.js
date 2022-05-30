import React,{Component} from "react";

import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import NoMPUl from 'shared/NoMPUl';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Button from 'shared/Button'
import Span from 'shared/Span';
import StyledLink from 'shared/StyledLink';

// -----
class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      isClicked: false

    }
    this.triggerClick = this.triggerClick.bind(this);
  }
  triggerClick = function(){
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
  render(){

    return(
      <Div>

        <Div color='black' whiteSpace='nowrap' cursor='pointer' >
          <NoMPUl display='flex' childrenPadding='0 5px'>
            <Li>
              {
                this.props.name &&
                <Div >
                  {
                    this.props.pic ? <img src={this.props.pic} style={{width:'30px',height:'30px'}} />:
                    <Div>
                      {this.props.multiply ?
                        <Div>
                          <FontAwesome name={this.props.name} style={{paddingRight:'5px'}}/>
                          <FontAwesome name={this.props.name} style={{paddingRight:'5px'}}/>

                        </Div>:
                        <FontAwesome name={this.props.name} style={{paddingRight:'5px'}}/>
                      }
                    </Div>
                  }
                </Div>
              }
              {this.props.skip &&
                <Div margin='0 0 0 20px' />
              }
            </Li>
            <Li>
              <Div display='flex' flexWrap='nowrap' onClick={this.triggerClick}>

                <Div padding={this.props.options ? '0 3px':''} >
                  {this.props.title}
                  {
                    this.props.options &&
                    <FontAwesome name={this.state.isClicked ? 'caret-up':'caret-down'} />
                  }
                </Div>
              </Div>
            </Li>

          </NoMPUl>
        </Div>
        {
          this.state.isClicked &&
          <Ul childrenPadding='0 0 0 40px'>
            {
              this.props.options && this.props.options.map((option)=>{
                return (
                  <Li key={option.title}>
                    <StyledLink to={option.link} >
                      <Div color='black'>
                        {option.title}
                      </Div>
                    </StyledLink>
                  </Li>
                )
              })
            }
          </Ul>
        }
      </Div>

        )
  }
}

export default Class;
