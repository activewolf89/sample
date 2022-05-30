import React,{Component} from "react";

import Div from 'shared/Div';
import WishlistLink from './WishlistLink';
// -----
class WishlistDropdown extends Component {

  render(){
    return (
      <Div   cursor='pointer'   height='100%' >
        <Div  position='relative'   height='100%'  display='flex' justifyContent='center'>
          <WishlistLink
            history={this.props.history}
            mobile = {this.props.mobile}
            userProfile={this.props.userProfile}
            onContactClick={this.props.onContactClick}
            onToggle = {this.handleToggle}
            onWishlistClick = {this.props.onWishlistClick}
          />
        </Div>

    </Div>
  )
}
}
WishlistDropdown.propTypes = {
}
export default WishlistDropdown;
