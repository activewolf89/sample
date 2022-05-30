  import React,{Component} from "react";
  import Div from 'shared/Div';
  import Vision360 from 'shared/Vision360';
  import Description from '../Description';
  import StyledLink from 'shared/StyledLink';
  import styled from 'styled-components';
  import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter'

  const StyledDiv = styled(Div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    @media only screen and (min-width: 600px) {
    width: 250px;
    height: 410px;
    }

  `

class Class extends Component{
  render(){
    const {StoneTWT,StoneMake,StoneHue,StoneClarity,MainShape,CategoryId,ItemStyle,ItemKey,ItemMetalType, ItemMetalColor,ItemRetailPrice,ItemSpecialPrice,_Vision360Static,CategoryName} = this.props.product
    return(
      <StyledDiv   slightBoxShadow position='relative' color='gray' >

        {
          this.props.onListPage ?
            <Div >

              {
                  this.props.isActive &&
                <Div backgroundColor='black' opacity='.3' position='absolute' top='0' left='0' height='100%' width='100%' zIndex='1'>
                </Div>
              }
              <Div >
                <StyledLink  to={this.props.generatedLink}>
                  <Div   onClick={()=>{this.props.onShutFooter();this.props.onViewDetails(this.props.product)}}>
                    {
                      this.props.loading ?
                        <Div>
                          loading..
                        </Div>:
                        <Vision360
                          MasterStyle={this.props.MasterStyle}
                          small
                          ItemKey = {ItemKey}
                          V360StaticImages = {_Vision360Static ? _Vision360Static.ArrayOfImages:[]}
                        />
                    }
                  </Div>
                  {
                    !this.props.justRotate &&
                    <Div >
                      <Div   >
                        <Description
                          ItemKey={ItemKey}
                          name={CategoryName}
                          metalType = {ItemMetalType}
                          metalColor = {ItemMetalColor}
                          price = {ItemRetailPrice}
                          mainStone ={this.props.product.ContainsStones}
                          specialPrice={ItemSpecialPrice}
                          catId = {CategoryId}
                          fourC = {StoneTWT + " " + StoneMake + " " + StoneHue + " " + StoneClarity}
                        />

                      </Div>
                      <Div  color='lightGray' font='italic' position='absolute'   style={{fontSize:'14px'}} bottom='0' right='0' zIndex='1'>
                        {ItemKey}
                      </Div>


                    </Div>
                  }
                </StyledLink>

              </Div>
            </Div>:
            <Div onClick={()=>{this.props.onViewDetails(this.props.product ? this.props.product:null)}}  >
              <StyledLink  to={this.props.product.ItemDirectLink}>
                <Vision360
                  MasterStyle={this.props.MasterStyle}
                  small
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
