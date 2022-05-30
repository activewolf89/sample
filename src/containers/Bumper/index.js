/**
 *
 * Shop
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {} from 'containers/App/actions';
import {handleLoadItemNumbers,handleToggleDetail,handleToggleSearchByItem} from 'containers/ShopNew/actions';
import {} from 'containers/Item/actions';
import {handleSwapIndex,handleSwapMessage,handleToggleBumper} from './actions';
import {makeSelectToggle,makeSelectPromo,makeSelectEventsChecklist,makeSelectOurMessage} from './selectors';
import {} from 'containers/MyAccount/selectors';
import {makeSelectSearchByItem,makeSelectItemKeys, makeSelectRevealedAmount,makeSelectTotalCount} from 'containers/ShopNew/selectors';
import {makeSelectCategoryValue,makeSelectCategoryObjects,makeSelectSearchableCategoryObjects} from 'containers/App/selectors';
import {} from 'containers/Item/selectors';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Div from 'shared/Div';
import findSplitOfRoute from './Helpers/findSplitOfRoute';
import findFilterNumber from './Helpers/findFilterNumber';
import Show from './Show';
import Hide from './Hide';
import CheckHistoryLink from 'containers/Bumper/Helpers/CheckHistoryLink';
import CountFilters from 'containers/Bumper/Helpers/CountFilters';

var ConnectValueWithLink = function(value,options){
  var linkToSend = '/shop'
  options.forEach((option)=>{
    if(option.name === value){
      linkToSend = option.link
    }
  })
  return linkToSend
}
var StyledDiv = styled(Div)`
display: none;
  @media only screen and (min-width: 996px) {
    display: block;
  }
`
export class Bumper extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
    this.state = {
      options: [ {name:"Show All",link:'/shop',catId:'All'},
      {name:"Engagement Rings",link:'/shop/engagement-rings',catid:140},
      {name:"Loose Diamonds",link:'/shop/loose-diamonds',catid:190},
      {name:"Ladies Bands",link:'/shop/ladies-bands',catid:115},
      {name:"Mens Bands",link:'/shop/mens-bands',catid:110},
      {name:"Necklaces",link:'/shop/necklaces',catid:165},
      {name:"Fine Rings",link:'/shop/fine-rings',catid:130},
      {name:"Earrings",link:'/shop/earrings',catid:150},
      {name:"Bracelets",link:'/shop/bracelets',catid:170},
      {name:"Watches",link:'/shop/watches',catid:500},
      {name:"Other",link:'/shop/other',catid:999}],
      isOpen: CheckHistoryLink(this.props.history.location.pathname),
      toggle: window.matchMedia("(max-width: 1550px)").matches ? true : false
    }
    this.handleTheChange = this.handleTheChange.bind(this)

  }
  UNSAFE_componentWillReceiveProps(props){
    this.setState({
      isOpen:CheckHistoryLink(props.history.location.pathname)
    })
  }
  handleTheChange = function(value,options){
    this.setState({
      isOpen:CheckHistoryLink(ConnectValueWithLink(value,options))
    })

  }

  render() {
    var CheckEventsList = function(checklist){
      return checklist.events.length > 0;
    }
    return (
      <Div display='none'  zIndex='100' backgroundColor='white'   position={this.props.mobile ? 'block':'sticky'}  top={this.props.promoObject.active ? "115px":'68px'} >
        {
          this.props.mobile ?
            <Show
              flash ={CheckEventsList(this.props.eventsChecklist)}
              path={this.props.path}
              mobile={this.props.mobile}
              selectCategoryValue = {this.props.selectCategoryValue}
              onToggleSearchByItem = {this.props.handleToggleSearchByItem}
              promoObject = {this.props.promoObject}
              ourMessage = {this.props.ourMessage}
              onSwapMessage = {this.props.handleSwapMessage}
              onSwapIndex = {this.props.handleSwapIndex}
              onContactClick = {this.props.onContactClick}
              onLoadItemNumbers = {this.props.handleLoadItemNumbers}
              isSearchItemKey = {this.props.isSearchItemKey}
              itemKeys ={this.props.itemKeys}
              knowledgeArray={this.props.knowledgeArray}
              filterCount = {CountFilters(this.props.history.location)}
              isOpen = {this.state.isOpen}
              onTheChange = {this.handleTheChange}
              options = {this.state.options}
              whichRoute = {findSplitOfRoute(this.props.history.location.pathname)}
              toggle={this.props.toggle}
              onToggle = {this.props.handleToggleBumper}
              filterNumber = {findFilterNumber(this.props.history.location)}
              searchableCategoryObject = {this.props.searchableCategoryObject}
              categoryObjects = {this.props.categoryObjects}
              history={this.props.history}
              ratio = {this.props.revealedAmount + "/" + this.props.totalCount}
              onToggleDetail={this.props.handleToggleDetail}
              onToggleFilter={this.props.handleToggleFilter}
              eventsChecklist = {this.props.eventsChecklist}
              googleReviewObject = {this.props.googleReviewObject}

            />:
            <StyledDiv >
              {
                !this.props.toggle &&
                <Show
                  flash ={CheckEventsList(this.props.eventsChecklist)}
                  selectCategoryValue = {this.props.selectCategoryValue}
                  onToggleSearchByItem = {this.props.handleToggleSearchByItem}
                  promoObject = {this.props.promoObject}
                  ourMessage = {this.props.ourMessage}
                  onSwapMessage = {this.props.handleSwapMessage}
                  onSwapIndex = {this.props.handleSwapIndex}
                  onContactClick = {this.props.onContactClick}
                  onLoadItemNumbers = {this.props.handleLoadItemNumbers}
                  isSearchItemKey = {this.props.isSearchItemKey}
                  itemKeys ={this.props.itemKeys}
                  knowledgeArray={this.props.knowledgeArray}
                  filterCount = {CountFilters(this.props.history.location)}
                  isOpen = {this.state.isOpen}
                  onTheChange = {this.handleTheChange}
                  options = {this.state.options}
                  whichRoute = {findSplitOfRoute(this.props.history.location.pathname)}
                  toggle={this.props.toggle}
                  onToggle = {this.props.handleToggleBumper}
                  filterNumber = {findFilterNumber(this.props.history.location)}
                  searchableCategoryObject = {this.props.searchableCategoryObject}
                  categoryObjects = {this.props.categoryObjects}
                  history={this.props.history}
                  ratio = {this.props.revealedAmount + "/" + this.props.totalCount}
                  onToggleDetail={this.props.handleToggleDetail}
                  onToggleFilter={this.props.handleToggleFilter}
                  eventsChecklist = {this.props.eventsChecklist}
                  googleReviewObject = {this.props.googleReviewObject}
                />
              }
              {
                this.props.toggle &&
                <Hide
                  flash ={CheckEventsList(this.props.eventsChecklist)}
                  ratio = {this.props.revealedAmount + "/" + this.props.totalCount}
                  isOpen = {this.state.isOpen}
                  filterCount = {CountFilters(this.props.history.location)}
                  history={this.props.history}
                  totalCount = {this.props.totalCount}
                  whichRoute = {findSplitOfRoute(this.props.history.location.pathname)}
                  toggle={this.props.toggle}
                  onToggle = {this.props.handleToggleBumper}
                  revealedAmount = {this.props.revealedAmount}
                />
              }
            </StyledDiv>
        }

      </Div>

        );
  }
}



const mapStateToProps = createStructuredSelector({
  toggle: makeSelectToggle(),
  selectCategoryValue: makeSelectCategoryValue(),
  promoObject: makeSelectPromo(),
  ourMessage: makeSelectOurMessage(),
  isSearchItemKey: makeSelectSearchByItem(),
  itemKeys: makeSelectItemKeys(),
  totalCount: makeSelectTotalCount(),
  revealedAmount: makeSelectRevealedAmount(),
  searchableCategoryObject: makeSelectSearchableCategoryObjects(),
  categoryObjects: makeSelectCategoryObjects(),
  eventsChecklist: makeSelectEventsChecklist()

});

function mapDispatchToProps(dispatch) {
  return {
    handleToggleBumper: ()=> dispatch(handleToggleBumper()),
    handleToggleSearchByItem: ()=> dispatch(handleToggleSearchByItem()),
    handleSwapIndex: (idx) => dispatch(handleSwapIndex(idx)),
    handleSwapMessage: () => dispatch(handleSwapMessage()),
    handleLoadItemNumbers: () => dispatch(handleLoadItemNumbers()),
    handleToggleDetail: (evt) => dispatch(handleToggleDetail(evt)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'Bumper', reducer });

export default withRouter(compose(
  withConnect,
  withReducer,
)(Bumper));
