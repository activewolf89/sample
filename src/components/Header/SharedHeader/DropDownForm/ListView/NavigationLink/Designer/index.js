  import React,{Component} from "react";
  import Div from 'shared/Div';
  import styled from 'styled-components';
  import FontAwesome from 'react-fontawesome';
  import { CSSTransition } from 'react-transition-group';
  import OutsideAlerter from "shared/OutsiderAlert";

  import Span from 'shared/Span';
  import PriceTab from './PriceTab';
  import IsText from './IsText';

  const StyledDiv = styled(Div)`
  width: auto;
  position: relative;

  `
class Designer extends Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      isAlertOpen: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAllowButton = this.handleAllowButton.bind(this)
  }
  handleAllowButton = function(){
    this.setState({
      isAlertOpen: false
    })
  }
  handleToggle = function(whereFrom){
  this.setState({
    isOpen: !this.state.isOpen,
    isAlertOpen: true
  })
  }
  render(){
    var FindToFixed = function(detailField){
      switch(detailField){
        case 'ItemSize':
        return 1;
        case 'ItemLength':
        return 1;
        case 'ItemMetalWeight':
        return 1
        default:
        return 0
      }
    }
    return(
      <Div  position="relative" >
        <Div themedNoBorder
          width="100%"
          onClick={()=>{  isNaN(this.props.optionsArray.categories[0]) && !this.state.isAlertOpen && this.handleToggle('button')}}
        >
          <Div display="flex"  alignItems="center">
            <Span whiteSpace="nowrap" clickable>
              {this.props.optionsArray.DetailName}
              {
                isNaN(this.props.optionsArray.categories[0]) &&
                <FontAwesome style={{marginLeft:'3px'}} name={this.state.isOpen ? "caret-up": "caret-down"}></FontAwesome>
              }
            </Span>
          </Div>
        </Div>
        <CSSTransition
          in={this.state.isOpen}
          timeout={300}
          classNames="footer"
          onExited={this.handleAllowButton}
        unmountOnExit>
          <OutsideAlerter callback = {()=>{this.handleToggle('button')}}>
            <StyledDiv  border="1px solid gray"   themed  zIndex="100" width="100%"  opacity="100%" >

              {
                isNaN(this.props.optionsArray.categories[0]) ?
                  <IsText
                    onHamburgerClick = {this.props.onHamburgerClick}
                    rootPath = {this.props.rootPath}
                    optionsArray = {this.props.optionsArray}
                    travelTo={this.props.travelTo}
                  />:
                  <Div>

                  </Div>
              }
            </StyledDiv>
          </OutsideAlerter>
        </CSSTransition>
        {
          !isNaN(this.props.optionsArray.categories[0]) && 
          <PriceTab
            catId={140}
            rangeKey={this.props.optionsArray.DetailField}
            onHamburgerClick = {this.props.onHamburgerClick}
            toFixed={FindToFixed(this.props.optionsArray.DetailField)}
            history={this.props.history}
            maxValue={Math.max(...this.props.optionsArray.categories)}
            arrayOfNumbers={this.props.optionsArray.categories.map((val)=>{
              if(typeof val ==='string'){
                return Number(parseFloat(
                  val.replace(/,/g, ".")
                ).toFixed(2))
              } else {
                return val
              }
            }).sort((a,b)=>{return Number(a) -Number(b)})}
            DetailField={this.props.optionsArray.DetailField}
            searchableKey={this.props.optionsArray.DetailField}
            travelTo={this.props.travelTo}
            rootPath = {this.props.rootPath}
            allProducts = {[]}
            numberForReveal = {0}
          />
        }

      </Div>
    )
  }
}

export default Designer;
