/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Helmet from 'shared/Helmet'
import {handleAddToWishlist} from 'containers/App/actions';

import {
  PullStaticImages,
  handleUpdateItem,
  handleGetItem,
  handleUnmount,
  handlePullStyle,
  handleDetailClick,
  handleRecentlyBrowsed,
  handlePullRecentlyViewed,
} from './actions';
import {
  makeSelectItem,
  makeSelectRedirect,
  makeSelectMatching,
  makeSelectSimilar,
  makeSelectDetailItemObject,
  makeSelectRecentlyViewed
} from './selectors';
import {
  makeSelectKnowledgeObject,
  makeSelectCategoryObjects,
  makeSelectCheckOutCookie

} from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { withRouter } from 'react-router';

import Div from 'shared/Div';
import removeUntilLastSlash from './Helpers/removeUntilLastSlash.js';
import {Redirect} from 'react-router-dom';
import findItemNumber from 'containers/Shop/Helpers/findItemNumber';
import cookie from 'react-cookies'
import Details from 'components/ItemDetails/Details';
import ImageGallery from 'components/ItemDetails/ImageGallery';
import styled from 'styled-components';
import Skeleton,{ SkeletonTheme }  from 'react-loading-skeleton';

// -----
const StyledDiv = styled(Div)`


`
export class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      pullImages: false,
      pathname: props.location.pathname,
      cookieString: cookie.loadAll()[this.props.rootString]
    }
  }
  componentDidMount(){
    if(this.props.item){
      this.props.PullStaticImages(this.props.item.ItemKey)
      this.setState({
        pullImages: true
      })
    }
    var cookieString = cookie.loadAll()[this.props.rootString]
    if(cookieString){
      var CookieSplit = cookieString.split(',')
      if(CookieSplit.indexOf(this.props.itemNumber) !== -1){
        CookieSplit.splice(CookieSplit.indexOf(this.props.itemNumber),1)
      }
      if(CookieSplit.length > 0 && CookieSplit[0] !== ''){
        this.props.handlePullRecentlyViewed(CookieSplit)
      }
    }
    if(this.props.item && this.props.item.ItemStatus === "S" ){
      this.props.handleGetItem(findItemNumber(this.props.history.location.pathname))

    }
    if( !this.props.item || this.props.item === null){

      this.props.handleGetItem(findItemNumber(this.props.history.location.pathname))
    }
    this.props.handlePullStyle(this.props.itemNumber,CookieSplit)
    this.props.handleRecentlyBrowsed(this.props.itemNumber,this.props.rootString)
  }
  UNSAFE_componentWillReceiveProps(props){

    if(props.history.location.pathname !== this.state.pathname){
      this.props.handleGetItem(findItemNumber(this.props.history.location.pathname))


      //loading screen..
      //update recently viewed as last itemNumber by pushing to front.
      //once image has been loaded, unload.
      var cookieString = cookie.loadAll()[props.rootString]
      if(cookieString){
        var CookieSplit = cookieString.split(',')
        this.props.handlePullStyle(props.itemNumber,CookieSplit)
        if(CookieSplit.indexOf(props.itemNumber) !== -1){
          CookieSplit.splice(CookieSplit.indexOf(props.itemNumber),1)
        }
        if(CookieSplit.length > 0 && CookieSplit[0] !== ''){
          this.props.handlePullRecentlyViewed(CookieSplit)
        }
      }
      this.props.handleRecentlyBrowsed(props.itemNumber,this.props.rootString)
      if(!props.item){
        this.props.handleGetItem(findItemNumber(props.history.location.pathname))
      }
      this.setState({
        pathname: props.history.location.pathname
      })
    }

  }
  componentWillUnmount(){
    this.props.handleUnmount()
  }
  render() {
    return (
      <Div  >
        {
          this.props.redirect &&
          <Redirect to={removeUntilLastSlash(this.props.history.location.pathname)} />
        }
        {
          this.props.item ?
            <Div  >
              <Helmet
                title =  "Browse Inventory"
                name = "Browse Inventory"
                href =  {`www.ltdenny.com/shop/item-${this.props.item.ItemStyle}`}
                content={`${this.props.item.SearchableSentence} `}
              />
              <ImageGallery
                checkOutString = {this.props.checkOutString}
                onUpdateItem = {this.props.handleUpdateItem}
                item={this.props.item}
                onContactClick = {this.props.onContactClick}
                onAddToWishlist = {this.props.handleAddToWishlist}
                history={this.props.history}
                mainPage
              />
              <Details
                onUpdateItem = {this.props.handleUpdateItem}
                categoryObjects= {this.props.categoryObjects}
                knowledgeObjects= {this.props.knowledgeObjects}
                onContactClick = {this.props.onContactClick}
                LoadingItem = {!this.props.item}
                faqObject = {this.props.faqObject}
                onUnmount = {this.props.handleUnmount}
                onAddToWishlist = {this.props.handleAddToWishlist}
                matching={this.props.matching}
                item={this.props.item}
                onDetailClick = {this.props.handleDetailClick}
                detailItemObject = {this.props.detailItemObject}
                history={this.props.history}
                recentlyViewed = {this.props.recentlyViewed}
                similar={this.props.similar} />
            </Div>
          :
          <StyledDiv  width=''>
            <SkeletonTheme>
              <Skeleton
                height={1000}
                count={1}
              />
            </SkeletonTheme>
          </StyledDiv>
        }

      </Div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  checkOutString: makeSelectCheckOutCookie(),
  categoryObjects: makeSelectCategoryObjects(),
  knowledgeObjects: makeSelectKnowledgeObject(),
  detailItemObject: makeSelectDetailItemObject(),
  item: makeSelectItem(),
  redirect: makeSelectRedirect(),
  matching: makeSelectMatching(),
  similar: makeSelectSimilar(),
  recentlyViewed: makeSelectRecentlyViewed()
});

function mapDispatchToProps(dispatch) {
  return {
    PullStaticImages: (itemKey) => dispatch(PullStaticImages(itemKey)),
    handlePullRecentlyViewed: (array) => dispatch(handlePullRecentlyViewed(array)),
    handleRecentlyBrowsed: (string,rootPath) => dispatch(handleRecentlyBrowsed(string,rootPath)),
    handleDetailClick: (string) => dispatch(handleDetailClick(string)),
    handlePullStyle: (string,array) => dispatch(handlePullStyle(string,array)),
    handleUpdateItem: (obj) => dispatch(handleUpdateItem(obj)),
    handleGetItem: (string) => dispatch(handleGetItem(string)),
    handleUnmount: () => dispatch(handleUnmount()),
    handleAddToWishlist: (itemNumber,userProfile,typeOfCookie) => dispatch(handleAddToWishlist(itemNumber,userProfile,typeOfCookie)),

  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'Item', reducer });
const withSaga = injectSaga({ key: 'Item', saga });

export default withRouter(compose(
  withConnect,
  withReducer,
  withSaga,
)(Item));
