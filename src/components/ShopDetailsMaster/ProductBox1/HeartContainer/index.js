import React,{Component} from "react";

import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import cookie from 'react-cookies'
import Button from 'shared/Button';
import P from 'shared/P';
import {H4} from 'shared/H';
import pauseLoginAsk from 'containers/MyAccount/Helpers/pauseLoginAsk'
import OutsiderAlert from 'shared/OutsiderAlert';
// -----


class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggle: false
    }
    this.handleAsk = this.handleAsk.bind(this)
  }
  handleAsk = function(){
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render(){
    var isSelected = cookie.loadAll()['wishlistItems'] ? cookie.loadAll()['wishlistItems'].includes(this.props.ItemKey):false
    var checkIfPaused = function(){
      var cookieString = cookie.loadAll()['pauseRequest'];

      if(cookieString){
        return true;
      }
      return false;
    }
  return (
    <Div position='relative' cursor='pointer' onClick={()=>{((Object.keys(this.props.userProfile).length < 1 && !checkIfPaused()) && this.handleAsk());this.props.onAddToWishlist(this.props.ItemKey,this.props.userProfile)}}>
      <FontAwesome name="heart" style={{color:isSelected ? "red":'lightGray', padding:'10px',border:'1px solid lightGray'}}  />
      {
        this.state.toggle &&
        <OutsiderAlert callback={()=>{this.handleAsk()}}>

          <Div backgroundColor='lightGray' color='white' opacity='.9' width='100vw' maxWidth='300px'>
            <H4>
              <P textAlign='center'>
                Sync your account to save your wishlist?
              </P>
            </H4>
            <Div display='flex' justifyContent='center'>
              <Div padding='10px'>
                <Button onClick={()=>{this.props.onContactClick('login')}}>Yes</Button>
              </Div>
              <Div padding='10px'>
                <Button
                  onClick={()=>{pauseLoginAsk();this.handleAsk()}}
                >No</Button>
              </Div>
            </Div>
          </Div>
        </OutsiderAlert>

      }
    </Div>
  )
}
}
Class.propTypes = {
}
export default Class;
