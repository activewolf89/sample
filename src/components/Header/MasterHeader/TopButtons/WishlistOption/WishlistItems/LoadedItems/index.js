import React from 'react';

import Div from 'shared/Div'
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import ProductBox1 from 'components/ShopDetails/ProductBox1';
//shared
class LoadedItems extends React.Component {

  render() {
    return (
      <Div position='relative'>
        <NoMPUl display='flex' childrenPadding='5px'>
          {
            this.props.wishlistItems.map((wishlist,idx)=>{
              <Li key={idx}>
                <ProductBox1
                  onListPage
                  history={this.props.history}
                  product={this.props.wishlistItems[idx]}
                  onAddToWishlist = {this.props.onAddToWishlist}
                  userProfile = {this.props.userProfile}

                />
              </Li>
            })
          }
        </NoMPUl>


      </Div>
    )

  }
}
// -----
export default LoadedItems;
