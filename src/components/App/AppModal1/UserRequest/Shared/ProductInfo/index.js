import React,{Component} from "react";
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';
import PriceFormatter from 'shared/PriceFormatter';
import PromoInput from 'containers/PromoInput';
import NumberFormat from 'react-number-format'
import Span from 'shared/Span';
// -----
function RoundTo10(num){
  return Math.floor(num/10) * 10
}
class PromoCodeItUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      difference: false,
      price: this.props.product.ItemRetailPrice,
      specialPrice: this.props.product.ItemSpecialPrice,
      applied: false
    }
    this.handleApply = this.handleApply.bind(this);
  }
  handleApply = function(value,isPercent){
    var {specialPrice,price,difference} = this.state;
    var nSpecialPrice = 0;
    if(specialPrice){
    if(isPercent){
      nSpecialPrice = specialPrice * (1 - value)
    } else {
      nSpecialPrice = specialPrice - value;
    }
    difference = specialPrice - nSpecialPrice;
    } else {
      if(isPercent){
        nSpecialPrice = price * (1 - value)
      } else {
        nSpecialPrice = price - value;
      }
      difference = price - nSpecialPrice;

    }

    this.props.sendAdjustedPriceUpwards(nSpecialPrice)
    this.setState({
      difference: difference,
      specialPrice: nSpecialPrice,
      applied: true
    })
  }

  render(){
  return (
    <Div >
      <Vision360
        ItemKey = {this.props.product.ItemKey}
        floatItemNumber
      />

      <Div display='flex'>
        Price:
        <PriceFormatter
          price={this.state.price}
          specialPrice = {this.state.specialPrice}
        />
      </Div>
      {
        this.state.difference &&
        <Div display='flex' flexWrap='nowrap'>
          Adjustment:
          <Span fontStyle="italic">
            <NumberFormat value={RoundTo10(this.state.difference)} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
          </Span>

        </Div>
      }
      <Div>
        <PromoInput
          applied = {this.state.applied}
          onApply = {this.handleApply}
        />
      </Div>
    </Div>
  )
}
}
export default PromoCodeItUp
