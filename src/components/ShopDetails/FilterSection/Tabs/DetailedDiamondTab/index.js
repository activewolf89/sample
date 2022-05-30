import React,{Component} from "react";

import Div from 'shared/Div';
import Li from 'shared/Li';
import {H4} from 'shared/H';
import styled,{css} from 'styled-components';
import Ranges from '../PriceTab';
import FixedSliderTab from '../FixedSliderTab';
import ShapesTab from '../ShapesTab';
import LabTab from '../LabTab';
import FontAwesome from 'react-fontawesome';
import AdjustableNoMPUl from 'shared/AdjustableNoMPUl'
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment'
// -----
  const StyledLi = styled(Li)`
    width: 100%;
    padding: 20px 0;
    @media only screen and (min-width: 996px) {
      width: 45%;
      ${props => props.isShape && css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 0%;
      `}
    }

  `
  const DissapearDiv = styled(Div)`
  display: block;
    @media only screen and (min-width: 996px) {
      display: none;

    }
  `
  const StyledNoMPUl = styled(AdjustableNoMPUl)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  `
  const RevealingDiv = styled(Div)`
    display: none;
  ${props => props.reveal && css`
    display: block;
    `}
    @media only screen and (min-width: 996px) {
    display: block;
    }
  `
  var RearrangeDiamondArray = function(array){
    array.forEach((object,index)=>{
      let key = Object.keys(object)[0];
      let temp = ''
      if(key === "itRetailPrice"){
        temp = array[index]
        array[index] = array[array.length - 2]
        array[array.length - 2] = temp;
        temp = ''
      }
      if(key === 'caret'){
        temp = array[index]
        array[index] = array[array.length -6]
        array[array.length -6] = temp;
        temp = ''
      }
      if(key === 'lab'){
        temp = array[index]
        array[index] = array[array.length -3]
        array[array.length -3] = temp;
        // temp = ''
      }


    })
    return array
  }

  class DiamondTab extends Component{
    constructor(props){
      super(props)
      this.state = {
        active: '',
        search: this.props.search
      }
      this.handleCategoryShow = this.handleCategoryShow.bind(this)
      this.handleToggleClickableSearch = this.handleToggleClickableSearch.bind(this)
    }
    handleToggleClickableSearch = function(key,value,checked){
      AddOntoSearchSegment(key,value,this.props.history)

    }
    handleCategoryShow = function(category){
      if(this.state.active === category){
        this.setState({
          active: ''
        })
      } else {

      this.setState({
        active: category
      })
    }

  }

    render(){
      var allObject = this.props.filterArray.all

        return (
          <Div>

            <StyledNoMPUl >
              {RearrangeDiamondArray(allObject).map((categoryObject,index)=>{
                var category =  Object.keys(categoryObject)[0]
                if(this.props.filterArray.reveal.includes(category)){
                  return (
                    <StyledLi onClick={()=>{this.handleCategoryShow(category)}} key={category} isShape={category === "shape"}>
                      <Div display="flex" justifyContent="space-between">

                        <H4 capitalize>
                          {
                            category === "itRetailPrice" ? "Price":category
                          }
                        </H4>
                        <DissapearDiv>
                          <FontAwesome name={category === this.state.active ?"angle-up":"angle-down"} style={{marginLeft:'3px'}}/>
                        </DissapearDiv>
                      </Div>
                      <RevealingDiv reveal={this.state.active ==="shape"}>
                        {
                          (category === "shape" ) &&
                          <ShapesTab
                            onToggleClickableSearch={this.handleToggleClickableSearch}
                            history = {this.props.history}
                          />
                        }
                      </RevealingDiv>
                      <RevealingDiv reveal={this.state.active ==="itRetailPrice"}>
                        {
                          category === "itRetailPrice"  &&
                          this.props.filterArray.all[index][category].length > 2 &&
                          <Ranges
                            toFixed={0}
                            rangeKey={category}
                            history = {this.props.history}
                            maxValue={ Math.max(...this.props.filterArray.all[index][category])}
                            arrayOfNumbers={this.props.filterArray.all[index][category].sort((a, b) => a - b)}
                          />
                        }
                      </RevealingDiv>
                      <RevealingDiv reveal={"caret" ===this.state.active}>
                        {
                          ( category === "caret") &&
                          this.props.filterArray.all[index][category].length > 2 &&
                          <Ranges
                            toFixed={2}
                            rangeKey={category}
                            history = {this.props.history}
                            maxValue={ Math.max(...this.props.filterArray.all[index][category])}
                            arrayOfNumbers={this.props.filterArray.all[index][category].sort((a, b) => a - b)}
                          />
                        }
                      </RevealingDiv>
                      <RevealingDiv reveal={"color" ===this.state.active}>
                        {
                          (category === "color" ) &&
                          <FixedSliderTab
                            history = {this.props.history}
                            rangeKey="color"
                            incrementBy={13}
                            organizedArray={["L","K","J","I","H","G","F","E","D"]}
                            marks = {{0:"L",13:"K",26:"J",39:"I",52:"H",65:"G",78:"F",91:"E",100:"D"}}
                          />
                        }
                      </RevealingDiv>
                      <RevealingDiv reveal={this.state.active ==="clarity"}>
                        {
                          category === "clarity"  &&
                          <FixedSliderTab
                            history = {this.props.history}
                            rangeKey="clarity"
                            incrementBy={13}
                            organizedArray={["SI3","SI2","SI1","VS2","VS1","VVS2","VVS1","IF","FL"]}
                            marks = {{0:"SI3",13:"SI2",26:"SI1",39:"VS2",52:"VS1",65:"VVS2",78:"VVS1",91:"IF",100:"FL"}}
                          />
                        }
                      </RevealingDiv>
                      <RevealingDiv reveal={this.state.active ==="cut" }>
                        {
                          category === "cut" &&
                          <FixedSliderTab
                            rangeKey="cut"
                            history = {this.props.history}
                            incrementBy={25}
                            organizedArray={["Good","Very Good","Excellent","Ideal","Black Label"]}
                            marks = {{0:"Good",25:"Very Good",50:"Excellent",75:"Ideal",100:"Black Label"}}
                          />
                        }
                      </RevealingDiv>
                      <RevealingDiv reveal={this.state.active ==="lab" }>
                        {
                          category === "lab"  &&
                          <LabTab
                            onToggleClickableSearch={this.handleToggleClickableSearch}
                            history = {this.props.history}
                          />
                        }
                      </RevealingDiv>
                    </StyledLi>
                  )
                } else {
                  return('')
                }
              })}
            </StyledNoMPUl>
          </Div>
        )
  }
}
export default DiamondTab;
