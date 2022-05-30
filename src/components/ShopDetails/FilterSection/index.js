import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

//shared
import Title from 'shared/Title';
import Div from 'shared/Div';
import { CSSTransition } from 'react-transition-group';
import DetailedFilterTab from './Tabs/DetailedFilterTab';
require('./filter.css')

const DissapearTitle = styled(Title)`
  display: block;
@media only screen and (min-width: 996px) {
  display: none;
}
`
const StyledDiv = styled(Div)`
overflow-y: auto;
  @media only screen and (min-width: 996px) {
    overflow-y: visible;

  }
`

const UnderlineDiv = styled(Div)`
border-bottom: 0px solid gray;

@media only screen and (min-width: 996px) {
  border-bottom: 1px solid gray;
}`
export class FilterSection extends React.Component {
  componentDidMount(){
    if (window.matchMedia("(min-width: 996px)").matches) {
      if(!this.props.isFilterOpen){
        this.props.onToggleFilter(true)
      }
    } else {
      if(this.props.isFilterOpen){
        this.props.onToggleFilter(false)
      }
    }
    window.addEventListener("resize", ()=> {
      if (window.matchMedia("(min-width: 996px)").matches) {
        if(!this.props.isFilterOpen){
          this.props.onToggleFilter(true)
        }
      } else {
        if(this.props.isFilterOpen){
          this.props.onToggleFilter(false)
        }
      }
    });
  }

  render(){

    return (
      <UnderlineDiv  display="flex" flexDirection="column" justifyContent="space-between" alignItems="center"  >

        <Div backgroundColor="lightGray" width="100%" onClick={()=>{this.props.onToggleFilter()}}>
          <DissapearTitle>Filter & Sort <FontAwesome name={this.props.isFilterOpen ?"caret-up":'caret-down'} /></DissapearTitle>
        </Div>
        <CSSTransition
          in={this.props.isFilterOpen}
          timeout={0}
          classNames="filter"
        unmountOnExit>

          <StyledDiv width="100%"  maxHeight='30vh' overflowY='auto'>
            <DetailedFilterTab
              loadRest = {this.props.loadRest}
              noJewelryFilter = {this.props.catId === "190"}
              isShowAll = {this.props.isShowAll}
              vendorObject = {this.props.categoryObjects.vendorCategoryObject}
              filterObject = {this.props.categoryObjects.searchableCategoryObject[this.props.catId]}
              catId = {this.props.catId}
              onToggleDetail = {this.props.onToggleDetail}
              search = {this.props.search}
              history={this.props.history}
              revealedProducts = {this.props.products.reveal}
              allProducts = {this.props.products.all}
            />
          </StyledDiv>
        </CSSTransition>

      </UnderlineDiv>
  )


}
}
FilterSection.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.bool.isRequired,
  onToggleFilter: PropTypes.func,
  onToggleDetail: PropTypes.func,
  history: PropTypes.object,
}
export default FilterSection;
