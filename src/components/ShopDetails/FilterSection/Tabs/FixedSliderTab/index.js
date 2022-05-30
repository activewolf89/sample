import React,{Component} from "react";
import Div from 'shared/Div';
import Slider from 'rc-slider';
import UpdateSearchString from 'containers/App/HelperFunctions/UpdateSearchString';
import SearchCheckKeyForRange from 'containers/Shop/Helpers/SearchCheckKeyForRange';
const Range = Slider.Range;
class FixedSliderTab extends Component{
  constructor(props){
    super(props)
    this.state = {
      triggeredLine:false,
      search: this.props.history.location.search,
      refresh: false
    }
    this.handleAfterChange = this.handleAfterChange.bind(this)
  }
  handleAfterChange = function(test){

    var {organizedArray,incrementBy} = this.props
    var newArray = organizedArray;
    var cutFront = (test[0]/incrementBy) + 1
    var cutBack = (test[1]/incrementBy) + 1

    if(test[1] > (100-incrementBy)){
      cutBack = newArray.length - 1
    }
    if(test[1] === 100){
      cutBack = newArray.length
    }
    if(test[0] === 0){
      cutFront = 0
    }
    //
    var newCutArray = []
    for(var i = cutFront - 1; i < cutBack;i++){
      if(newArray[i]){
      newCutArray.push(newArray[i])
    }
    }
    var cutArrayString = newCutArray.join(',');
    if(this.state.triggeredLine !== cutArrayString){
      UpdateSearchString(this.props.rangeKey,cutArrayString,this.props.history)
      this.setState({
        triggeredLine: cutArrayString
      })
    }
  }
  UNSAFE_componentWillReceiveProps(props){
    if(this.state.search !== props.history.location.search){
      this.setState({
        search:props.history.location.search
      })
    }
    if(!props.history.location.search.includes(props.rangeKey) && this.state.search.includes(props.rangeKey)){
      this.setState({
        refresh: true,
        triggeredLine:false,

      },()=>{
        this.setState({
          refresh: false
        })
      })
    }
  }
  render(){
    return(

      <Div padding="20px">
        {
          !this.state.refresh &&
          <Div>
            <Range dots
              step={100}
              defaultValue={SearchCheckKeyForRange([0, 100],this.props.history.location.search,this.props.rangeKey,this.props.marks,this.props.organizedArray,this.props.incrementBy)}
              marks={this.props.marks}
              onAfterChange = {this.handleAfterChange}
            />
          </Div>

        }
        {
          this.state.refresh &&
          <Div>
            <Range dots
              step={100}
              defaultValue={[0,100]}
              marks={this.props.marks}
              onAfterChange = {this.handleAfterChange}
            />
          </Div>
        }
      </Div>
    )
  }
}

export default FixedSliderTab;
