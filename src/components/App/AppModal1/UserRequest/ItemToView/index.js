  import React,{Component} from "react";
import ProductBox1 from 'components/ShopDetails/ProductBox1'
import Div from 'shared/Div';
import {H3} from 'shared/H';
class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle = function(){
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render(){
    return(
      <Div display='flex' flexDirection='column' alignItems='center'>
        <H3>

          {
            "Item:" +
            this.props.product.ItemKey
          }
        </H3>
        <Div >
          <H3 underline onClick={this.handleToggle}>
            Click To { this.state.toggle ? 'Hide':'Show'} Image
          </H3>
        </Div>
        {
          this.state.toggle &&
          <ProductBox1
            justRotate
            product = {this.props.product}

          />
        }
      </Div>
    )
  }
}

export default Class;
