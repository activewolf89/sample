import React,{Component} from "react";
import styled from 'styled-components';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ListView from './ListView';
import MasterHours from 'containers/MasterHours';
import OutsiderAlert from 'shared/OutsiderAlert';
import RollUp from './RollUp';
import ShoppingOptions from './ShoppingOptions';
  const StyledDiv = styled(Div)`
    width: 100%;
    @media only screen and (min-width: 1001px) {
    width: 1000px;
    }
    @media only screen and (min-width: 1550px) {
    width: 100%;
    }
  `
  const StyledDivRoll = styled(Div)`
    display: none;
    @media only screen and (min-width: 996px) {
      display: block;
    }
  `
  const StyledLi = styled(Li)`
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1500px) {
    width: 1500px;
    }

  `
  var AnotherDissapearingDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 1000px) {
  display: block;
  }

  `
const StyledMaxHeight = styled(Div)`
max-height: calc(100vh - 140px);
min-height: 50vh;
overflow-y: auto;

`
const StyledReduceTo100 = styled(Div)`
  width: auto;
  @media only screen and (min-width: 996px) {

  }
`
class DropDownForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: props.number ? props.number:0
    }
    this.handleIndexChange = this.handleIndexChange.bind(this)
  }
  handleIndexChange = function(idx){
    this.setState({
      index: idx
    })
  }
  render(){
    return (
      <StyledReduceTo100  >

        <NoMPUl
          display='flex'
          flexWrap="wrap"
          justifyContent="center"
        >
          <StyledLi >

            <StyledDiv   gridArea="listView" height="100%"  themedAccent>
              <OutsiderAlert callback={()=>{this.props.travelTo()}}>
                <Div>

                  <StyledMaxHeight    overflowY='auto' >

                    {
                      (  this.props.searchObj.name !== "Designer Form" &&  this.props.searchObj.name !== "About Form") ?
                        <AnotherDissapearingDiv>
                          <ShoppingOptions
                            history={this.props.history}
                            onContactClick = {this.props.onContactClick}
                            chosenIndex = {this.state.index}
                            categoryArray = {this.props.categoryArray}
                            fromHeader
                            onChange={this.handleIndexChange}
                            travelTo = {this.props.travelTo}
                            serviceButton ={this.props.serviceButton}
                            fromDesigner = {this.props.fromDesigner}
                            searchObj = {this.props.searchObj}
                          />
                        </AnotherDissapearingDiv>:
                        <Div textAlign='center'>
                          <MasterHours
                            center
                            noTitle
                            dropdown={true}
                            noCaret
                          />
                        </Div>
                    }

                    <ListView
                      primaryCategoryChoices = {this.props.primaryCategoryChoices}
                      mobile={this.props.mobile}
                      isShop = {this.props.isShop}
                      history={this.props.history}
                      serviceButton ={this.props.serviceButton}
                      nonShop = {this.props.nonShop}
                      knowledgeArray = {this.props.knowledgeArray}
                      onHamburgerClick = {this.props.onHamburgerClick}
                      travelTo = {this.props.travelTo}
                      designersArray = {this.props.designersArray}
                      title = {this.props.title}
                      onFaqClick = {this.props.onFaqClick}
                      onContactClick = {this.props.onContactClick}
                      categoryObject={this.props.categoryArray[this.state.index]} />
                  </StyledMaxHeight>
                  <StyledDivRoll onClick={()=>this.props.travelTo()}>
                    <RollUp />
                  </StyledDivRoll>
                </Div>

              </OutsiderAlert>
            </StyledDiv>

          </StyledLi>
        </NoMPUl>
      </StyledReduceTo100>

    )
  }
}
DropDownForm.propTypes = {
}
export default DropDownForm;
