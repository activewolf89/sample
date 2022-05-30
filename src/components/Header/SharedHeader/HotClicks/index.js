import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import ClickableTitle from './ClickableTitle';
// -----
const HotClicks = (props) =>{
  return (
    <Div position='fixed' zIndex='10' width={props.mobile ? '100%':'auto'} right='0' bottom='0'  themed>
      <NoMPUl display='flex' width={props.mobile ? '100%':'auto'} childrenPadding='5px' border='1px solid gray' childrenBorderRight='1px solid white'>
        <Li width={props.mobile ? '20%':'200px'}>
          <Div position='relative'>
            <ClickableTitle
              name='TreasureChest'
              awesome = 'diamond'
              theLink = "/treasure-chest"
              color="gold"
            />
          </Div>

        </Li>
        <Li width={props.mobile ? '20%':'200px'} onClick={props.onWishlistClick}>
          <Div position='relative'>

            <ClickableTitle
              name='Wishlist'
              awesome = 'heart'
              color="red"
              wishlistItems = {props.wishlistItems}
            />

          </Div>
        </Li>
        <Li width={props.mobile ? '20%':'200px'} >

          <ClickableTitle
            name='KnowledgeCenter'
            awesome = 'book'
            theLink = "/knowledge-center"
            color="white"

          />
        </Li>
        <Li width={props.mobile ? '20%':'200px'}>

          <ClickableTitle
            name='Contact'
            awesome = 'bullhorn'
            theLink = "/contact-us"
            color="white"


          />
        </Li>
        <Li width={props.mobile ? '20%':'200px'}>

          <ClickableTitle
            name='Account'
            awesome = 'user'
            theLink = "/account"
            color="white"


          />
        </Li>
      </NoMPUl>
    </Div>
  )
}
HotClicks.propTypes = {
}
export default HotClicks;
