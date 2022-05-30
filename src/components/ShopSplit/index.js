import React,{Component} from "react";

import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Shop from 'containers/Shop/Loadable'
import Item from 'containers/Item/Loadable';
import findItemNumber from 'containers/Shop/Helpers/findItemNumber.js';
// -----
  class ShopSplit extends Component{
    constructor(props){
      super(props)
      this.state = {
        showCert: false
      }
      this.handleShowCert = this.handleShowCert.bind(this)
    }
    handleShowCert = function(product){

    }
    render(){
      return (
        <Div >
          {
            (this.props.history.location.pathname.includes('/Item-') || this.props.history.location.pathname.includes('/item-')) ?
              <Div  justifyContent='center' display='flex' >
                <Item
                  onShowCert = {(e)=>{this.props.onContactClick('Certificate',e)}}
                  faqObject ={this.props.faqObject}
                  onContactClick = {this.props.onContactClick}
                  history={this.props.history}
                  rootString = {this.props.rootString}
                  itemNumber = {findItemNumber(this.props.history.location.pathname)}
                  item = {''}
                />
              </Div>:
              <Shop
                onFaqClick = {this.props.onFaqClick}
                onShowCert = {(e)=>{this.props.onContactClick('Certificate',e)}}
                faqObject ={this.props.faqObject}
                onContactClick = {this.props.onContactClick}
                history={this.props.history}
                categoryNames={this.props.categoryNames}
                rootString={this.props.rootString}   />

          }

        </Div>
      )
    }
  }

ShopSplit.propTypes = {
  onFaqClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  onContactClick: PropTypes.func.isRequired
}
export default ShopSplit;
