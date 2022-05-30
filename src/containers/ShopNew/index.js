/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {handleSwapMessage,handleContactClick,handleAddToWishlist} from 'containers/App/actions';
import {handleUpdateItem} from 'containers/Item/actions';
import {updateExactPath,initiateLoading,handleResetView,handleReorganizeProducts,handleProductsLoading,handleExtendProduct,toggleFilter,handleToggleDetail,fetchProducts,saveSearchQuery} from './actions';
import {makeSelectPath,makeSelectLoading,masterProductArray,makeSelectRevealedAmount,makeSelectTotalCount} from './selectors';
import {makeSelectUserProfile} from 'containers/MyAccount/selectors';
import {makeSelectEventsChecklist,makeSelectPrimaryCategoryChoices,makeSelectCategoryValue,makeSelectCategoryObjects,makeSelectSearchableCategoryObjects} from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { withRouter } from 'react-router';

//shared
import ProductSection from 'components/ShopDetailsMaster/ProductSection';
import Div from 'shared/Div';
import styled,{css} from 'styled-components';
import SkeletonLoader from './SkeletonLoader';
import IntroSection from './components/IntroSection';
import ActiveSale from './components/ActiveSale';
import CheckHistoryLink from 'containers/Bumper/Helpers/CheckHistoryLink';
import {makeSelectPromo} from 'containers/Bumper/selectors';
import CheckHistory from 'containers/Bumper/Show/Shop/CategoryChoices/CheckHistory'
import SendListToCustomer from 'containers/SendListToCustomer';
import scrollToComponent from 'react-scroll-to-component';
import HeaderTitle from 'shared/HeaderTitle';
import CapitalizeRemoveDash from 'containers/App/HelperFunctions/CapitalizeRemoveDash.js';
import Helmet from 'shared/Helmet';
import InStockOption from 'shared/InStockOption';
require('./shadow.css')
const StyledDiv = styled(Div)`
  width: 100vw;

  @media only screen and (min-width: 996px) {
    width: calc(100vw - 300px);
    ${props => props.greaterThan6 && css`
      width: 100%;
      `};
  }
`
const StyledDiv2 = styled(Div)`
  width: 100%;
  position: sticky;
  z-index: 2;
  top: 125px;
  @media only screen and (min-width: 996px) {
    top:160px;
  }
`
export class MasterShop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.handleScrollToFilter = this.handleScrollToFilter.bind(this);
    this.state = {

    }
  }

  componentDidMount(){
    const {pathname,search} = this.props.history.location
    var combined = pathname + search
    this.props.fetchProducts(this.props.history,this.props.revealedAmount,true,this.props.promoObject)
    this.props.updateExactPath(combined)

  }

  UNSAFE_componentWillReceiveProps(props){
    const {pathname,search} = props.history.location
    var combined = pathname + search
    if(combined !== props.exactPath){
      this.props.fetchProducts(this.props.history,this.props.revealedAmount,true,this.props.promoObject)
      this.props.updateExactPath(combined)
    }
  }
  handleScrollToFilter = function(){
    scrollToComponent(this.Violet)
  }
  render() {
    var filteredEvents = this.props.eventsChecklist.events.filter((e)=>{
      return e.active
    })
    return (
      <Div >
        <Div >
          <Helmet
            title =  "Browse Inventory"
            name = "Browse Inventory"
            href =  "www.ltdenny.com/shop"
            content="Shop our selection of in-stock and special-order engagement rings, wedding bands, and gifts under $1,000"
          />
        </Div>
        <StyledDiv   ref={(section) => { this.Violet = section; }}  backgroundColor='white' greaterThan6 = {true}   textAlign='center' >

          <IntroSection
            primaryCategoryChoices = {this.props.primaryCategoryChoices}
            promoObject = {this.props.promoObject}
            selectCategoryValue = {this.props.selectCategoryValue}
            revealedAmount = {this.props.revealedAmount}
            totalCount = {this.props.totalCount}
            whichRoute = {CheckHistoryLink(this.props.history.location.pathname)}
            ratio = {this.props.revealedAmount + "/" + this.props.totalCount}
            history={this.props.history}
            searchableCategoryObject = {this.props.searchableCategoryObject}
            categoryObjects = {this.props.categoryObjects}

          />
        </StyledDiv>

        <StyledDiv2   backgroundColor='white' borderBottom='1px solid gray' >
          <SendListToCustomer
            onScrollToFilter = {this.handleScrollToFilter}
            ratio = {this.props.revealedAmount + "/" + this.props.totalCount}
            history={this.props.history}
            searchableCategoryObject = {this.props.searchableCategoryObject}
            categoryObjects = {this.props.categoryObjects}
            catId = {CheckHistory(this.props.history.location.pathname,CheckHistoryLink(this.props.history.location.pathname))}

          />


        </StyledDiv2>
        {
          this.props.loading ?
            <Div>
              <SkeletonLoader />
            </Div>:
            <ProductSection
              userProfile = {this.props.userProfile}
              onFetchProducts = {this.props.fetchProducts}
              totalCount = {this.props.totalCount}
              loadRest = {[]}
              onContactClick = {this.props.handleContactClick}
              filterArray = {[]}
              rootString = {this.props.rootString}
              onAddToWishlist = {this.props.handleAddToWishlist}
              revealedAmount = {this.props.revealedAmount}
              onExtendProduct = {this.props.handleExtendProduct}
              products = {this.props.masterProductArray}
              history={this.props.history}
            />
        }

      </Div>

    );
  }
}



const mapStateToProps = createStructuredSelector({
  eventsChecklist: makeSelectEventsChecklist(),
  exactPath: makeSelectPath(),
  primaryCategoryChoices: makeSelectPrimaryCategoryChoices(),
  userProfile: makeSelectUserProfile(),
  masterProductArray: masterProductArray(),
  revealedAmount: makeSelectRevealedAmount(),
  totalCount: makeSelectTotalCount(),
  loading: makeSelectLoading(),
  selectCategoryValue: makeSelectCategoryValue(),
  searchableCategoryObject: makeSelectSearchableCategoryObjects(),
  categoryObjects: makeSelectCategoryObjects(),

  promoObject: makeSelectPromo()
});

function mapDispatchToProps(dispatch) {
  return {
    handleSwapMessage: (e) => dispatch(handleSwapMessage(e)),
    updateExactPath: (path) => dispatch(updateExactPath(path)),
    initiateLoading: ()=>{dispatch(initiateLoading())},
    handleUpdateItem: (item)=> dispatch(handleUpdateItem(item)),
    handleContactClick: (evt,evt1) => dispatch(handleContactClick(evt,evt1)),
    handleResetView: (evt) => dispatch(handleResetView(evt)),
    handleAddToWishlist: (itemNumber,userProfile) => dispatch(handleAddToWishlist(itemNumber,userProfile)),
    handleReorganizeProducts: (evt,evt1,evt2) => dispatch(handleReorganizeProducts(evt,evt1,evt2)),
    handleProductsLoading: () => dispatch(handleProductsLoading()),
    handleExtendProduct: (evt) => dispatch(handleExtendProduct(evt)),
    handleToggleFilter: (evt) => dispatch(toggleFilter(evt)),
    handleToggleDetail: (evt,evt1) => dispatch(handleToggleDetail(evt,evt1)),
    fetchProducts: (history,maxLimit,reset,promoObject) => dispatch(fetchProducts(history,maxLimit,reset,promoObject)),
    saveSearchQuery: (evt1) => dispatch(saveSearchQuery(evt1)),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'ShopNew', reducer });
const withSaga = injectSaga({ key: 'ShopNew', saga });

export default withRouter(compose(
  withConnect,
  withReducer,
  withSaga,
)(MasterShop));
