import 'rc-slider/assets/index.css';
import React from 'react';
import Slider from 'rc-slider';
import Div from 'shared/Div';
import Input from 'shared/Input';
import {UpperBound,LowerBound,UpperBoundRange,LowerBoundRange} from 'containers/App/HelperFunctions/PriceLookUp'
import UpdateSearchString from 'containers/App/HelperFunctions/UpdateSearchString.js';
import NumberFormat from 'react-number-format'

const Range = Slider.Range;

export default class Ranges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: this.props.history.location.search,
      triggeredLine: false,
      lowerBound: this.props.history.location.search.includes(this.props.rangeKey) ? LowerBound(this.props.history.location.search,this.props.rangeKey):this.props.arrayOfNumbers[0],
      upperBound: this.props.history.location.search.includes(this.props.rangeKey) ? UpperBound(this.props.history.location.search,this.props.rangeKey):this.props.arrayOfNumbers[this.props.arrayOfNumbers.length-1],
      initialLowerBound: this.props.arrayOfNumbers[0],
      initialUpperBound: this.props.arrayOfNumbers[this.props.arrayOfNumbers.length-1],
      value: [ this.props.history.location.search.includes(this.props.rangeKey) ? LowerBoundRange(LowerBound(this.props.history.location.search,this.props.rangeKey),this.props.maxValue): 0,  this.props.history.location.search.includes(this.props.rangeKey) ? UpperBoundRange(UpperBound(this.props.history.location.search,this.props.rangeKey),this.props.maxValue): 100],

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAfterChange = this.handleAfterChange.bind(this);
    this.handleToFixed = this.handleToFixed.bind(this);
  }
  handleToFixed = function(number,fixed){
    return Number(number)

}
  handleAfterChange = function(){
    if(this.state.triggeredLine !== (this.state.lowerBound + '-' + this.state.upperBound)){
      UpdateSearchString(this.props.rangeKey,this.state.lowerBound + '-' + this.state.upperBound,this.props.history,this.state.initialLowerBound + '-' + this.state.initialUpperBound)
      this.setState({
        triggeredLine: this.state.lowerBound + '-' + this.state.upperBound
      })
    }
  }
  handleSubmit = function(){

    const { lowerBound, upperBound } = this.state;
      if(lowerBound > upperBound){
        this.setState({
          lowerBound: this.state.initialLowerBound,
          upperBound: this.state.initialUpperBound,
          value: [0, 100]
        }
      );
    } else {
      //we now know that upperBound is > than lower bound, lets do some math..

        var lowerValue = Math.ceil(lowerBound/this.state.initialUpperBound * 100)
        var upperValue = Math.ceil(upperBound/this.state.initialUpperBound * 100)
        this.setState({
          value: [lowerValue,upperValue]
        }
      );
    }
  }


  componentDidMount(){


    var minInput = document.getElementById("min");
    minInput.addEventListener("keyup",(event) => {

      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Trigger the button element with a click
        this.handleSubmit()

      }
    });
    var maxInput = document.getElementById("max");
    maxInput.addEventListener("keyup",(event) => {
      // Cancel the default action, if needed
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        this.handleSubmit()

      }
    });
  }


  onLowerBoundChange = (e) => {
    this.setState({
       lowerBound: +e.target.value,
     });
  }
  onUpperBoundChange = (e) => {
    this.setState({
      upperBound: +e.target.value ,
    });
  }
  onSliderChange = (value) => {
    var low = Number(value[0])
    var high = Number(value[1])

    //value is 0 - 100, which means we have to do math here..
    //if we want to make lower value as one, [1,100] --> 100 + (40000/40000-1)
    var lowerValue = this.state.value[0];
    var upperValue = this.state.value[1];


      if(upperValue !== high){

        // upperValue = (Math.round(this.state.initialUpperBound - (this.state.initialUpperBound * (1-(high/100))) + this.state.initialLowerBound) * 10) / 10
          upperValue = (this.state.initialUpperBound - (this.state.initialUpperBound * (1-(high/100))) + this.state.initialLowerBound).toFixed(this.props.toFixed)
          upperValue = upperValue > this.state.lowerBound ? upperValue: this.state.lowerBound
          upperValue = upperValue > this.state.initialUpperBound ? this.state.initialUpperBound: upperValue;
          upperValue = low === high ? this.state.lowerBound: upperValue

        this.setState({
          value: value,
          upperBound: upperValue,
        })

// /engagement-rings/shop?/engagement-rings/shoponSale=true&?ItemRetailPrice=2517.7-77000

        //we modify the upper value
      } else {
        //modify lower value
          // lowerValue = (Math.round(this.state.initialUpperBound + (this.state.initialLowerBound + (this.state.initialUpperBound * ((low/100) - 1)))) * 10) / 10
          lowerValue = (this.state.initialUpperBound + (this.state.initialLowerBound + (this.state.initialUpperBound * ((low/100) - 1)))).toFixed(this.props.toFixed)
          lowerValue = lowerValue < this.state.upperBound ? lowerValue:this.state.upperBound
          // console.log(this.props.history.location.search.indexOf([this.props.DetailField]))

        this.setState({
          value: value,
          lowerBound: lowerValue,
        })
      }
  }
  UNSAFE_componentWillReceiveProps(props){
    if(this.state.searchString !== props.history.location.search){
      this.setState({
        searchString: this.props.history.location.search,
        lowerBound: this.props.history.location.search.includes(this.props.rangeKey) ? LowerBound(this.props.history.location.search,this.props.rangeKey):this.props.arrayOfNumbers[0],
        upperBound: this.props.history.location.search.includes(this.props.rangeKey) ? UpperBound(this.props.history.location.search,this.props.rangeKey):this.props.arrayOfNumbers[this.props.arrayOfNumbers.length-1],
        initialLowerBound: this.props.arrayOfNumbers[0],
        initialUpperBound: this.props.arrayOfNumbers[this.props.arrayOfNumbers.length-1],
        value: [ this.props.history.location.search.includes(this.props.rangeKey) ? LowerBoundRange(LowerBound(this.props.history.location.search,this.props.rangeKey),this.props.maxValue): 0,  this.props.history.location.search.includes(this.props.rangeKey) ? UpperBoundRange(UpperBound(this.props.history.location.search,this.props.rangeKey),this.props.maxValue): 100],
      })
    }
  }
  render() {
    return (
      <Div width="100%"  backgroundColor="white" padding="20px" >
        <Div display='flex' flexDirection='column' alignItems='center'>
          <Range
            step={.01} allowCross={false} value={this.state.value} onChange={this.onSliderChange} onAfterChange = {this.handleAfterChange}/>
        </Div>
        {
          this.props.rangeKey === 'ItemRetailPrice' ?
            <Div display="flex" flexWrap="nowrap" justifyContent="space-between"  padding="10px 0" minWidth="200px">
              <NumberFormat readOnly  thousandSeparator={true} prefix={'$'} id="min" style={{width:'100px', backgroundColor:'lightGray'}}   value={this.handleToFixed(this.state.lowerBound).toFixed()} step={'.01'}/>
              <NumberFormat readOnly thousandSeparator={true} prefix={'$'} id="max"  style={{width:'100px', backgroundColor:'lightGray'}}  value={this.handleToFixed(this.state.upperBound).toFixed()} step={'.01'}/>
            </Div>:
            <Div display="flex" flexWrap="nowrap" justifyContent="space-between"  padding="10px 0" minWidth="200px">
              <Input id="min" readOnly style={{width:'100px', backgroundColor:'lightGray'}}   type="number"  value={this.handleToFixed(this.state.lowerBound)} step={'.01'}/>
              <Input id="max" readOnly style={{width:'100px', backgroundColor:'lightGray'}} type="number" value={this.handleToFixed(this.state.upperBound)} step={'.01'}/>
          </Div>
        }
      </Div>
    );
  }
}
