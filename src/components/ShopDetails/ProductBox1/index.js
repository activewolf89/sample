import React,{Component} from "react";
//----------------------------------
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router';
//----------------------------------
import PropTypes from 'prop-types';
import Div from 'shared/Div';
import styled from 'styled-components';
import DesktopProductBox from './DesktopProductBox';
import MobileProductBox from './MobileProductBox';
import {
  handleUpdateItem
} from 'containers/Item/actions';
import {
  handleShutFooter
} from 'containers/App/actions';

const StyledDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
  display: block;
  }
`
const StyledDiv1 = styled(Div)`
display: block;
  @media only screen and (min-width: 996px) {
    display: none;
  }
`
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
  return (
    <Div backgroundColor='white' >
      <StyledDiv>
        <DesktopProductBox
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
          onContactClick = {this.props.onContactClick}
          onAddToWishlist = {this.props.onAddToWishlist}
        />
      </StyledDiv>
      <StyledDiv1>
        <MobileProductBox
          onShutFooter = {this.props.handleShutFooter}
          history={this.props.history}
          onViewDetails = {this.props.handleUpdateItem}
          onToggle = {this.handleToggle}
          product = {this.props.product}
          onContactClick = {this.props.onContactClick}
          onAddToWishlist = {this.props.onAddToWishlist}

        />
      </StyledDiv1>
    </Div>


    )
  }
}
const mapStateToProps = createStructuredSelector({

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
)(ProductBox1));
