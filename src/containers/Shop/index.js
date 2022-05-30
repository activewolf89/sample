/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {handleContactClick,handleAddToWishlist} from 'containers/App/actions';
import {handleUpdateItem} from 'containers/Item/actions';
import {initiateLoading,handleResetView,handleReorganizeProducts,handleProductsLoading,handleExtendProduct,toggleFilter,handleToggleDetail,fetchProducts,saveSearchQuery} from './actions';
import {makeSelectFilterOpen,makeSelectRevealedAmount,makeSelectMasterProductObject,makeSelectMasterProducts,makeSelectSearchPath,makeSelectToggle,makeSelectShop,makeSelectLoading,makeSelectPulledProducts,makeSelectSearchQuery} from './selectors';
import {makeSelectUserProfile} from 'containers/MyAccount/selectors';
import {makeSelectContactForm,makeSelectSearchableCategoryObjects,makeSelectCategoryObjects} from 'containers/App/selectors';
import {makeSelectItem} from 'containers/Item/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Skeleton,{ SkeletonTheme }  from 'react-loading-skeleton';

//shared
import FilterSection from 'components/ShopDetails/FilterSection';
import ItemDetail from 'components/ShopDetails/ItemDetail';
import ProductSection from 'components/ShopDetails/ProductSection';
import IntroSection from 'components/ShopDetails/IntroSection';
import ClickableFilters from 'components/ShopDetails/ClickableFilters'
import Div from 'shared/Div';
import findTitleNames from 'containers/Shop/Helpers/findTitleNames'
import NoItemsFound from './NoItemsFound';
import SkeletonLoader from './SkeletonLoader';
import StockCount from 'shared/StockCount';
import HelmetDescription from './HelmetDescription'
const Adjustable = styled(Div)`
  width: 100vw;


  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
@media only screen and (min-width: 1600px) {
  width: 1600px;
}
`
export class Shop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      name: findTitleNames(this.props.masterProductObject,this.props.categoryNames,this.props.history),
      root: props.history.location.pathname,
      search: props.history.location.search,
      currentCatId: findTitleNames(this.props.masterProductObject,this.props.categoryNames,this.props.history,true),
      redirect: false,
      itemObject: null
    }
    this.handleViewDetails = this.handleViewDetails.bind(this)
  }
  handleViewDetails = function(obj){
    this.setState({
      itemObject: obj
    })
  }
  componentDidMount(){
    if(!this.state.redirect){
      var search = this.props.history.location.search
      search = search.replace(/\s/g,'')
      if(!this.props.masterProductObject[this.state.currentCatId].products.all){
         //never had it
        this.props.fetchProducts(this.state.currentCatId,search,false,this.props.oneMoreFilter)

      } else {
        this.props.initiateLoading()
         //had it, needs the search to reorganize
        this.props.handleReorganizeProducts(this.state.currentCatId,search,false)

      }
    }

  }

  UNSAFE_componentWillReceiveProps(props){
    if(this.state.redirect){
      if(!this.props.masterProductObject[this.state.currentCatId].products.all ){
        this.props.fetchProducts(this.state.currentCatId,this.props.history.location.search,false,this.props.oneMoreFilter)
      }
      this.setState({
          redirect: false
      })
    } else {

      var currentCategoryId = findTitleNames(this.props.masterProductObject,props.categoryNames,this.props.history,true)
      var newPathname = props.history.location.pathname
      var search = props.history.location.search
      var oldPathname = this.state.root
      search = search.replace(/\s/g,'')
      if(search !== this.state.search && newPathname === oldPathname){

        this.props.handleReorganizeProducts(this.state.currentCatId,search,false)
        this.setState({
          search: search,
        })
      }

      if(newPathname !== oldPathname){
        this.props.handleExtendProduct(20)
        if(!this.props.masterProductObject[currentCategoryId].products.all){
          this.props.handleProductsLoading()
          this.props.fetchProducts(currentCategoryId,this.props.history.location.search,false,this.props.oneMoreFilter)
        }
        this.props.initiateLoading()
        this.props.handleReorganizeProducts(currentCategoryId,search,false)

        this.setState({
          root: newPathname,
          search: search == null ? '':search,
          currentCatId: currentCategoryId,
          name: findTitleNames(this.props.masterProductObject,props.categoryNames,this.props.history)
        })
      }
    }
  }

  render() {
    return (
      <Div position='relative' pr>
        <HelmetDescription
          categoryNames={this.props.categoryNames}
          history={this.props.history}
        />
        {
          this.props.contactForm === '' &&
          <ItemDetail
            isOn ={this.props.item === null ? false: true}
            item = {this.props.item}
            onViewDetails = {this.props.handleUpdateItem}
            faqObject ={this.props.faqObject}
            onContactClick = {this.props.onContactClick}
            history={this.props.history}
            rootString = {this.props.rootString}
          />
        }
        <Div>

          {
            !this.props.noIntro &&
            <IntroSection
              promoObject = {this.props.promoObject}
              categoryNames = {this.props.categoryNames}
              title={this.state.name}
              description={this.props.masterProductObject[this.state.currentCatId] ? this.props.masterProductObject[this.state.currentCatId].description:""}
              history = {this.props.history}
              rootString = {this.props.rootString}
              onFaqClick = {this.props.onFaqClick}
              onContactClick = {this.props.handleContactClick}

            />
          }
          {
            ( this.props.loading || this.props.masterProductObject[this.state.currentCatId].products.reveal === null) &&
            <SkeletonTheme>
              <Div width='100%' >
                <Div display='flex' height='50px' alignItems='center' justifyContent='center' backgroundColor="black" color="white">
                  Loading...
                </Div>
                { this.props.bla ||
                  <Skeleton height={100}  count={1}  />
                }
              </Div>
            </SkeletonTheme>
          }
          {
            ( this.props.categoryObjects.searchableCategoryObject && this.props.masterProductObject[this.state.currentCatId].products.reveal) ?
              <Div >
                <Div  display='flex' justifyContent='center' themed>
                  {

                    ( this.props.masterProductObject[this.state.currentCatId].products.all === null ||  this.props.masterProductObject[this.state.currentCatId].products.reveal === null) ?
                      <SkeletonTheme>
                        <Div width='100%' >
                          { this.props.bla ||
                            <Skeleton height={100}  count={1}  />
                          }
                        </Div>
                      </SkeletonTheme>:
                      <StockCount
                        loadRest = {this.props.masterProductObject[this.state.currentCatId].loadRest}
                        productLength ={this.props.masterProductObject[this.state.currentCatId].products.reveal.length}
                        noJewelryFilter = {this.state.currentCatId === "190"}

                      />
                  }

                </Div>
                <Div  >
                  <FilterSection
                    loadRest = {this.props.masterProductObject[this.state.currentCatId].loadRest}
                    categoryObjects = {this.props.categoryObjects}
                    filterArray = {this.props.masterProductObject[this.state.currentCatId].filters}
                    catId = {this.state.currentCatId}
                    onToggleDetail={this.props.handleToggleDetail}
                    toggle={this.props.toggle}
                    onToggleFilter={this.props.handleToggleFilter}
                    history={this.props.history}
                    products = {this.props.masterProductObject[this.state.currentCatId].products}
                    search = {this.props.history.location.search}
                    isFilterOpen = {this.props.isFilterOpen}
                    isShowAll = {this.props.isShowAll}
                  />
                </Div>

                <ClickableFilters
                  history={this.props.history}
                  categoryObjects={this.props.categoryObjects}
                  catId={this.state.currentCatId}
                />

                {
                  this.props.masterProductObject[this.state.currentCatId].products.reveal.length > 0 ?
                    <ProductSection
                      loadRest = {this.props.masterProductObject[this.state.currentCatId].loadRest}
                      userProfile = {this.props.userProfile}
                      onViewDetails = {this.props.handleUpdateItem}
                      categoryObjects = {this.props.categoryObjects}
                      catId = {this.state.currentCatId}
                      onContactClick = {this.props.handleContactClick}
                      onShowCert={this.props.onShowCert}
                      filterArray = {this.props.masterProductObject[this.state.currentCatId].filters}
                      rootString = {this.props.rootString}
                      onAddToWishlist = {this.props.handleAddToWishlist}
                      revealedAmount = {this.props.revealedAmount}
                      onExtendProduct = {this.props.handleExtendProduct}
                      products = {this.props.masterProductObject[this.state.currentCatId].products.reveal ? this.props.masterProductObject[this.state.currentCatId].products.reveal: []}
                      history={this.props.history}
                    />:
                    <Div>
                      {
                        (this.props.masterProductObject[this.state.currentCatId].products.all !== null && this.props.masterProductObject[this.state.currentCatId].products.reveal.length === 0)  ?
                          <NoItemsFound
                            history={this.props.history}
                          />:
                          <Div>
                            <SkeletonTheme>
                              <Div width='100%' >
                                { this.props.bla ||
                                  <Skeleton height={100}  count={1}  />
                                }
                              </Div>
                            </SkeletonTheme>
                          </Div>
                      }

                    </Div>
                }
              </Div>:
              <SkeletonLoader />
          }
        </Div>
      </Div>

    );
  }
}



const mapStateToProps = createStructuredSelector({
  contactForm: makeSelectContactForm(),
  searchableCategoryObject: makeSelectSearchableCategoryObjects(),
  categoryObjects: makeSelectCategoryObjects(),
  userProfile: makeSelectUserProfile(),
  item: makeSelectItem(),
  masterProductObject: makeSelectMasterProductObject(),
  revealedAmount: makeSelectRevealedAmount(),
  Shop: makeSelectShop(),
  path: makeSelectSearchPath(),
  toggle: makeSelectToggle(),
  loading: makeSelectLoading(),
  pulledProducts: makeSelectPulledProducts(),
  searchQuery: makeSelectSearchQuery(),
  masterProducts: makeSelectMasterProducts(),
  isFilterOpen: makeSelectFilterOpen()

});

function mapDispatchToProps(dispatch) {
  return {
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
    fetchProducts: (evt,evt2,evt3,evt4) => dispatch(fetchProducts(evt,evt2,evt3,evt4)),
    saveSearchQuery: (evt1) => dispatch(saveSearchQuery(evt1)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'Shop', reducer });
const withSaga = injectSaga({ key: 'Shop', saga });

export default withRouter(compose(
  withConnect,
  withReducer,
  withSaga,
)(Shop));
