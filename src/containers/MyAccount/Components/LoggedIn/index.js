import React,{Component} from "react";

import Div from 'shared/Div';
import Welcome from './Welcome';
import OptionsList from './OptionsList';
import LogOut from './LogOut';
import CookieFunction from 'containers/App/HelperFunctions/CookieString';
// -----

var CheckHistory = function(history){
  if(history.location.pathname.includes('customer-info')){
    return 'Customer Info'
  } else {
    return 'My Wishlist'
  }
}

class MyAccountComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: CheckHistory(this.props.history),
      options: ['My Wishlist','Customer Info'],
    }
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }
  handleOptionChange = function(option){
    this.setState({
      active: option
    })
    var newPush = 'customer-info'
    if(option ==='My Wishlist'){
      newPush = 'my-wishlist'
    }
    this.props.history.push('/my-account/' + newPush)
  }
  componentDidMount(){
    if(this.props.userProfile._Customer._Wishlist ){
      var CookieString = CookieFunction('wishlistItems')
      var cookieArray = []
      if(CookieString){
         cookieArray = CookieString.split(',');
      }
      this.props.userProfile._Customer._Wishlist.forEach((wish)=>{
        if(!cookieArray.includes(wish._Item.ItemKey)){
          this.props.onAddToWishlist(wish._Item.ItemKey)
        }
      })

    }
  }
render(){
  return (
    <Div  >
      <Welcome
        firstName={this.props.userProfile.fName}
        loggedEmail = {this.props.userProfile.email}
        userProfile = {this.props.userProfile}
      />

      <LogOut onLogOut = {this.props.onLogOut} />
      <OptionsList
        serverErrorObject = {this.props.serverErrorObject}
        onCheckIfEmailExists = {this.props.onCheckIfEmailExists}
        onEditUser = {this.props.onEditUser}
        onContactClick = {this.props.onContactClick}
        history={this.props.history}
        onUpdateItem = {this.props.onUpdateItem}
        onAddToWishlist = {this.props.onAddToWishlist}
        onOptionChange = {this.handleOptionChange}
        options = {this.state.options}
        active = {this.state.active}
        userProfile = {this.props.userProfile}

      />
    </Div>
  )
}
}
MyAccountComponent.propTypes = {
}
export default MyAccountComponent;
