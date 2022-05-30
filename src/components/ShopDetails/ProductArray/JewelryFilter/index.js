import React from 'react';
import Div from 'shared/Div';
import ProductBox1 from '../../ProductBox1';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';

  const StyledDiv = styled(Div)`
    display: flex;
    flex-direction: column;
    >div {
      width: 100%;
    }
    @media only screen and (min-width: 996px) {
      justify-content: center;
    flex-direction: row;
    >div {
      width: auto;
      padding: 5px;
    }
    }

  `


// -----
class JewelryFilter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      wayPointIndex: 0,
      revealedAmount: this.props.revealedAmount,
      currentHoveredItem: false,

    }
    this.handleWayPointEnter = this.handleWayPointEnter.bind(this)
    this.handleHoveredItem = this.handleHoveredItem.bind(this)

  }

  handleWayPointEnter = function(idx){

    if(idx < this.props.products.length - 1){
      this.props.onExtendProduct()
  }
  }
  handleHoveredItem = function(idx){
    this.setState({
      currentHoveredItem: idx
    })
  }
  render(){
    return (
      <StyledDiv   >
        {
          this.props.products.slice(0,this.props.revealedAmount).map((product,index,arr)=>{
            return (
              <Div
                key={index}
              >
                <ProductBox1
                  userProfile = {this.props.userProfile}
                  onListPage = {true}
                  isCurrentHovered = {this.state.currentHoveredItem}
                  onHoveredItem = {this.handleHoveredItem}
                  fromListView = {true}
                  onViewDetails = {this.props.onViewDetails}
                  onContactClick = {this.props.onContactClick}
                  onAddToWishlist = {this.props.onAddToWishlist}
                  history={this.props.history}
                  justShow = {window.matchMedia( "(max-width: 960px)" ).matches}
                  product={product}
                  rootString = {this.props.rootString}
                />
                {
                  (index === arr.length - 1) &&
                  <Waypoint onEnter = {()=>{this.handleWayPointEnter(index)}} />
                }
              </Div>

            )

          })
        }

      </StyledDiv>

    )
  }
}

JewelryFilter.propTypes = {
}
export default JewelryFilter;
