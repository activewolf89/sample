  import React,{Component} from "react";
  import Modal from 'shared/Modal';
  import Div from 'shared/Div';

class Class extends Component{
  render(){
    console.log('back')
    return(
      <Div  >

        {
          (this.props.wishListObject.open || this.props.isHamburgerOpen || this.props.isOnShopToggle || this.props.isReachToggle || this.props.isOnSaleToggle || this.props.isKnowledgeToggle) &&
          <Div onClick={()=>{
            if(this.props.isOnShopToggle){
              (this.props.onShopClick())
            }
            if(this.props.wishListObject.open){
              (this.props.onWishlistClick())
            }
            if(this.props.isReachToggle){
              this.props.onReachClick()
            }
            if(this.props.isKnowledgeToggle){
              this.props.onKnowledgeCenterClick()
            }
            if(this.props.isOnSaleToggle){
              this.props.onOnSaleClick()
            }
            if(this.props.isHamburgerOpen){
              this.props.onHamburgerClick()
            }
          }}>
            <Modal active={true}
              onHoverNavigation = {this.props.onHoverNavigation}
            />
          </Div>
        }
      </Div>
        )
        }
        }

export default Class;
