import React,{Component} from "react";
import Div from 'shared/Div';
import Checkout from './Checkout';
import NothingInCart from './NothingInCart';
import LoadingIndicator from 'shared/LoadingIndicator';

// -----
class Class extends Component{

    componentDidMount(){
      this.props.onPullCartInfo(this.props.checkOutCookie)
    }
    componentWillUnmount(){
      this.props.onResetView()
    }
  render(){
  return (
    <Div >
      {
        this.props.hasInventoryPulled ?
          <Div >
            {
              this.props.inventoryList.length > 0 ?
                <Checkout
                  eventsChecklist = {this.props.eventsChecklist}
                  history={this.props.history}
                  inventoryList = {this.props.inventoryList}
                  onRemoveItem = {this.props.onRemoveItem}
                  onRemoveFromCartItem = {this.props.onRemoveFromCartItem}
                  onContactClick = {this.props.onContactClick}
                  onCheckout = {this.props.onCheckout}
                />:
                <NothingInCart
                  history={this.props.history}
                />
            }
          </Div>:
          <LoadingIndicator />
      }
    </Div>
  )
}

}
export default Class;
