import React from 'react';
import Div from 'shared/Div'
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import ProductBox1 from 'components/ShopDetails/ProductBox1';
import {H2} from 'shared/H';
//shared
class LoadedItems extends React.Component {

  render() {

    return (
      <Div >
        <Div textAlign='center'>
          <H2>
            Wishlist({this.props.wishlistItems.length})
          </H2>
        </Div>
        <Div  display='flex' flexWrap='wrap' justifyContent='center'>
          <NoMPUl  position="relative" display='flex' justifyContent='center' flexWrap='wrap' overflow='auto' maxHeight='600px'  childrenPadding='5px'>
            {
              this.props.wishlistItems.reverse().map((object,idx)=>{
                return (
                  <Li key={idx}>
                    <Div border='2px solid black'  color='black'>

                      <ProductBox1
                        onViewDetails = {this.props.onViewDetails}
                        justShow={true}
                        justRotate={false}
                        onListPage = {true}
                        onContactClick = {this.props.onContactClick}
                        history={this.props.history}
                        product={object}
                        onAddToWishlist = {this.props.onAddToWishlist}
                        userProfile = {this.props.userProfile}

                      />
                    </Div>
                  </Li>
                )
              })
            }
          </NoMPUl>

        </Div>
      </Div>
    )

  }
}
// -----
export default LoadedItems;
