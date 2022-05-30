import React,{Component} from "react";
//----------------------------------
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router';
//----------------------------------
import PropTypes from 'prop-types';
import Div from 'shared/Div';
import DesktopProductBox from './DesktopProductBox';
import MobileProductBox from './MobileProductBox';
import { Media,withBreakpoints  } from 'react-breakpoints'
import SaleRibbon from './SaleRibbon'
import HeartContainer from './HeartContainer';
import MasterItemStyleConverter from 'containers/App/HelperFunctions/MasterItemStyleConverter'

import {
  makeSelectUserProfile
} from 'containers/MyAccount/selectors'
import {
  handleUpdateItem
} from 'containers/Item/actions';
import {
  handleShutFooter
} from 'containers/App/actions';


class ProductBox1 extends Component{
  constructor(props){
    super(props)
    this.state = {
      isActive: false,
      loading: false,
      ItemKey: this.props.product.ItemKey
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  UNSAFE_componentWillReceiveProps(props){
    if(this.state.ItemKey !== props.product.ItemKey){
      this.setState({
        loading: true,
        ItemKey: props.product.ItemKey
      },()=>{
        this.setState({
          loading: false
        })
      })
    }
  }
  handleToggle = function(){
    this.setState({
      isActive: !this.state.isActive
    })
  }
render(){
  var generatedLink = '/shop/item-' + this.props.product.ItemKey
  return (
    <Div  position='relative' backgroundColor='white' cursor='pointer'>
      {
        this.props.product.ItemSpecialPrice &&
        <Div position='absolute' top='0' right='0' zIndex='1'>
          <SaleRibbon
            salePrice = {this.props.product.ItemSpecialPrice}
            retailPrice = {this.props.product.ItemRetailPrice}
          />
        </Div>
      }
      <Div position='absolute' top='0' left='0' zIndex='1'>
        <HeartContainer
          ItemKey = {this.props.product.ItemKey}
          userProfile = {this.props.userProfile}
          onContactClick = {this.props.onContactClick}
          onAddToWishlist = {this.props.onAddToWishlist}

        />
      </Div>
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          this.props.currentBreakpoint === 'desktop' ? (
            <DesktopProductBox
              MasterStyle={MasterItemStyleConverter(this.props.product)}
              generatedLink = {generatedLink}
              userProfile = {this.props.userProfile}
              onContactClick = {this.props.onContactClick}
              onListPage = {this.props.onListPage}
              product = {this.props.product}
              isCurrentHovered = {this.props.isCurrentHovered}
              isActive={this.state.isActive}
              loading = {this.state.loading}
              onShutFooter = {this.props.handleShutFooter}
              history={this.props.history}
              onViewDetails = {this.props.handleUpdateItem}
              onHoveredItem = {this.props.onHoveredItem}
              onToggle = {this.handleToggle}
              onAddToWishlist = {this.props.onAddToWishlist}
            />
          ) : (
            <Div>
              <MobileProductBox
                MasterStyle={MasterItemStyleConverter(this.props.product)}
                generatedLink = {generatedLink}
                userProfile = {this.props.userProfile}
                onShutFooter = {this.props.handleShutFooter}
                history={this.props.history}
                onViewDetails = {this.props.handleUpdateItem}
                onToggle = {this.handleToggle}
                product = {this.props.product}
                onContactClick = {this.props.onContactClick}
                onAddToWishlist = {this.props.onAddToWishlist}
              />
            </Div>
          )
        }
      </Media>

    </Div>


    )
  }
}
const mapStateToProps = createStructuredSelector({
  userProfile: makeSelectUserProfile()
});

function mapDispatchToProps(dispatch) {
  return {
    handleShutFooter: ()=>{dispatch(handleShutFooter())},
    handleUpdateItem: (item) => dispatch(handleUpdateItem(item)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

ProductBox1.propTypes = {
  onAddToWishlist: PropTypes.func,
  product: PropTypes.object.isRequired,
  history: PropTypes.object
}
export default withRouter(compose(
  withConnect,
)(withBreakpoints(ProductBox1)));
