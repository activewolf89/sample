  import React,{Component} from "react";
  import Div from 'shared/Div';
  import OutsiderAlert from 'shared/OutsiderAlert';
  import Vision360 from 'shared/Vision360';
  import Description from '../Description';
  import ButtonsToShop from '../ButtonsToShop';
  import ActionDetails from 'shared/ActionDetails';
  import FontAwesome from 'react-fontawesome';
  import StyledLink from 'shared/StyledLink';
  import cookie from 'react-cookies'
  import styled from 'styled-components';
  import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter'
  import ColorCircle from 'shared/ColorCircle';
  import WordCompressor from 'shared/WordCompressor';

  const StyledDiv = styled(Div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    @media only screen and (min-width: 600px) {
    width: 300px;
    height: 550px;
    }

  `

class Class extends Component{
  render(){
    const {StoneTWT,StoneMake,StoneHue,StoneClarity,MainShape,CategoryId,CategoryName,ItemStyle,ItemKey,ItemMetalType, ItemMetalColor,ItemRetailPrice,ItemSpecialPrice,_Vision360Static} = this.props.product
    var isHovering = this.props.isCurrentHovered === ItemKey ? true:false;
    var isSelected = cookie.loadAll()['wishlistItems'] ? cookie.loadAll()['wishlistItems'].includes(ItemKey):false
    return(
      <StyledDiv   backgroundColor='white' onMouseOver = {()=>{this.props.onHoveredItem && this.props.onHoveredItem(ItemKey)}} padding='0 0 75px 0'  slightBoxShadow position='relative' color='gray' >
        {
          this.props.onListPage ?
            <Div>

              {
                isSelected &&
                <Div position='absolute' top='1px' zIndex='1' left='1px' width='30px' height='30px' >
                  <FontAwesome name='heart' style={{color:'red'}} />
                </Div>
              }
              {

                ItemMetalColor &&
                <Div display='flex' alignItems='center' flexWrap='nowrap' position='absolute' top='5px' zIndex='1' right='5px'  height='30px' >
                  <Div display='flex' alignItems='center'>

                    <ColorCircle
                      colorArray={ItemMetalColor.split('/')}
                    />
                    <WordCompressor
                      text={CapitalizeFirstLetter(ItemMetalType)}
                      size={15}
                    />
                  </Div>
                </Div>
              }

              {
                this.props.isActive &&
                <Div backgroundColor='black' opacity='.3' position='absolute' top='0' left='0' height='100%' width='100%' zIndex='1'>
                </Div>
              }
              <Div  onClick={()=>{this.props.onShutFooter();this.props.history.push(this.props.product.ItemDirectLink);this.props.onViewDetails(this.props.product)}}>
                {
                  this.props.loading ?
                    <Div>
                      loading..
                    </Div>:
                    <Vision360
                      ItemKey = {ItemKey}
                      V360StaticImages = {_Vision360Static ? _Vision360Static.ArrayOfImages:[]}
                    />
                }
              </Div>
              {
                !this.props.justRotate &&
                <Div >
                  <Div >

                    <Description
                      ItemKey={ItemKey}
                      name={(CategoryId === 190 ? CapitalizeFirstLetter(MainShape):CapitalizeFirstLetter(ItemStyle)) +" " + CategoryName }
                      metalType = {ItemMetalType}
                      metalColor = {ItemMetalColor}
                      price = {ItemRetailPrice}
                      specialPrice={ItemSpecialPrice}
                      catId = {CategoryId}
                      fourC = {StoneTWT + " " + StoneMake + " " + StoneHue + " " + StoneClarity}
                    />


                  </Div>
                  <Div position='absolute' left='0px' width='100%' bottom='0%' overflow='hidden' backgroundColor='white' zIndex='1' >
                    <OutsiderAlert callback={()=>{this.props.isActive && this.props.onToggle()}}>
                      <Div display={(isHovering || this.props.isActive || this.props.justShow) ? 'block':'none'}>
                        <ButtonsToShop
                          fromListView = {this.props.fromListView}
                          onToggle = {this.props.onToggle}
                          isActive = {this.props.isActive}
                          onViewDetails = {this.props.onViewDetails}
                          item = {this.props.product}
                        />
                        <ActionDetails
                          userProfile = {this.props.userProfile}
                          onWishlistClick={this.props.onWishlistClick}
                          ItemKey = {ItemKey}
                          item = {this.props.product}
                          isActive = {this.props.isActive}
                          onContactClick = {this.props.onContactClick}
                          onAddToWishlist = {this.props.onAddToWishlist}
                        />
                      </Div>
                    </OutsiderAlert>

                  </Div>
                </Div>
              }
            </Div>:
            <Div onClick={()=>{this.props.onViewDetails(this.props.product ? this.props.product:null)}}  >
              <StyledLink to={this.props.product.ItemDirectLink}>
                <Vision360
                  ItemKey = {ItemKey}
                  V360StaticImages = {_Vision360Static ? _Vision360Static.ArrayOfImages:[]}
                />
              </StyledLink>
      </Div>
  }

      </StyledDiv>
    )
  }
}

export default Class;
