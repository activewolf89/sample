import React from 'react';
import PropTypes from 'prop-types';
//shared
import Div from 'shared/Div';
import DetailedFilterTab from './Tabs/DetailedFilterTab';
import Banner0 from 'shared/Banner0';
import FilterSelection from 'shared/FilterSelection';
export class FilterSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hide: false
    }
    this.handleHide = this.handleHide.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  handleHide = function(){
    this.setState({
      hide: true
    })
  }
  handleShow = function(){
    this.setState({
      hide: false
    })
  }
  // componentDidMount(){
  //   if (window.matchMedia("(min-width: 996px)").matches) {
  //     if(!this.props.isFilterOpen){
  //       this.props.onToggleFilter(true)
  //     }
  //   } else {
  //     if(this.props.isFilterOpen){
  //       this.props.onToggleFilter(false)
  //     }
  //   }
  //   window.addEventListener("resize", ()=> {
  //     if (window.matchMedia("(min-width: 996px)").matches) {
  //       if(!this.props.isFilterOpen){
  //         this.props.onToggleFilter(true)
  //       }
  //     } else {
  //       if(this.props.isFilterOpen){
  //         this.props.onToggleFilter(false)
  //       }
  //     }
  //   });
  // }

  render(){
    return (

        <Div position='relative' padding='0 10px' themed  >

          {
            this.state.hide &&
            <Div width='100%' height='100vh' position='absolute' backgroundColor='black' zIndex='1' opacity='.4' top='0' onClick={this.handleShow}>
            </Div>
          }
          <Div backgroundColor='white' width='100%' zIndex='1' >

            <FilterSelection
              history = {this.props.history}
              categoryObjects ={this.props.categoryObjects}
              searchableCategoryObject ={this.props.searchableCategoryObject}
              catId  = {this.props.catId}
              ratio = {this.props.ratio}
            />
          </Div>
          <Div cursor='pointer'>
            <Banner0
              bumper
              promoObject = {this.props.promoObject}
              selectCategoryValue = {this.props.selectCategoryValue}
              history={this.props.history}
            />
          </Div>
          <DetailedFilterTab
            onToggleSearchByItem = {this.props.onToggleSearchByItem}
            onLoadItemNumbers = {this.props.onLoadItemNumbers}
            isSearchItemKey = {this.props.isSearchItemKey}
            itemKeys ={this.props.itemKeys}
            onShow={this.handleShow}
            loadRest = {this.props.loadRest}
            noJewelryFilter = {this.props.catId === "190"}
            isShowAll = {this.props.isShowAll}
            vendorObject = {this.props.categoryObjects.vendorCategoryObject}
            filterObject = {this.props.categoryObjects.searchableCategoryObject[this.props.catId]}
            catId = {this.props.catId}
            onToggleDetail = {()=>{this.handleHide();this.props.onToggleDetail()}}
            search = {this.props.search}
            history={this.props.history}
            revealedProducts = {[]}
            allProducts = {[]}
          />
        </Div>
  )


}
}
FilterSection.propTypes = {
  history: PropTypes.object,
}
export default FilterSection;
