  import React,{Component} from "react";
import Div from 'shared/Div';
import {H5} from 'shared/H';
import Li from 'shared/Li';
import Ul from 'shared/Ul';
import { CSSTransition } from 'react-transition-group';
import './styles.css';
import StyledLink from 'shared/StyledLink'
class FaqSection extends Component{
  constructor(props){
    super(props)
    this.state = {
      arrayOfOptions: this.props.faqObject
    }
    this.handleOptionClick = this.handleOptionClick.bind(this)
  }
  handleOptionClick = function(toggle){
    var newArrayOfOptions = this.state.arrayOfOptions.slice()
    newArrayOfOptions.forEach((option)=>{
      if(toggle === option.id){
        if(option.open){
          option.open = false
        } else {
          option.open = true
        }
      }
    })
    this.setState({
      arrayOfOptions: newArrayOfOptions
    })
  }
  render(){
    return(
      <Div color="gray" fontStyle="italic" padding="0 10px"  >
        <H5>
          FAQ Section
        </H5>
        <Ul >
          {this.props.faqObject.map((object)=>{
            return(
              <Li key={object.id}>
                <Div hoverable>

                  <H5 onClick={()=>{this.handleOptionClick(object.id)}}>
                    {object.title}
                  </H5>
                  <CSSTransition
                    in={object.open}
                    timeout={500}
                    classNames="active"

                  unmountOnExit>
                    <Ul>
                      {object.options.map((option)=>{
                        return (
                          <Li key={option.title} onClick={()=>{this.props.onHamburgerClick('closed')}}>
                            <StyledLink color="black" to={option.url}>
                              {option.title}
                            </StyledLink>
                          </Li>
                        )
                      })}
                    </Ul>
                  </CSSTransition>
                </Div>

              </Li>
            )
          })}
        </Ul>
      </Div>
    )
  }
}

export default FaqSection;
