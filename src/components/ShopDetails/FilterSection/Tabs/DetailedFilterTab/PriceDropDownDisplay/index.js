import React,{Component} from "react";
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import styled,{css} from 'styled-components';
import OutsideAlerter from "shared/OutsiderAlert";
import Ranges from '../../PriceTab';
import StaticOptions from '../StaticOptions';
const DropdownContainer = styled(Div)`
  background-color: white;
${props => props.sortThis && css`
  display: block;
  max-width: auto;
  margin: 0 auto;

  `}
  ${props => !props.range && css`
    display: block;
    max-width: auto;
    margin: 0 auto;

    `}
    @media only screen and (min-width: 996px) {
      position: absolute;
      width:auto;
      z-index: 10;
      border: 2px solid maroon;
      top: 40px;
      max-height: 600px;
      overflow-y:auto;
      }
      `

class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      isActive: false
    }

    this.handleDropdown = this.handleDropdown.bind(this)
  }
  handleDropdown = function(){
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render(){
    // name={'Price'}
    // arrayOfOptions = {props.filterObject.price}
    return(
      <OutsideAlerter callback = {()=>{this.state.isActive && this.handleDropdown()}}>

        <Div position='relative'  onClick={this.handleDropdown}>
          <Div cursor="pointer" display="flex" flexWrap="no-wrap" alignItems="flex-end">
            {this.props.name}
            <FontAwesome name={"angle-down"} style={{marginLeft:'3px'}}/>
          </Div>
          {
            this.state.isActive &&
            <DropdownContainer>
              <Div>
                {
                  typeof this.props.arrayOfOptions[0] == 'number' ?
                    <Div>
                      <Ranges  rangeKey={this.props.rangeKey} toFixed={1} history = {this.props.history} maxValue={Math.max(...this.props.arrayOfOptions)} arrayOfNumbers={this.props.arrayOfOptions.sort((a,b)=>{return a -b})} />
                    </Div>:
                    <StaticOptions
                      rangeKey={this.props.rangeKey}
                      arrayOfOptions={this.props.arrayOfOptions}
                      history={this.props.history}
                    />
                }
              </Div>
            </DropdownContainer>
          }

        </Div>
      </OutsideAlerter>
    )
  }
}

export default Class;
