import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';
import Description from '../Description';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter'
import StyledLink from 'shared/StyledLink';
// -----
const funcC0mp = (props) =>{
  const {StoneTWT,StoneMake,StoneHue,StoneClarity,MainShape,CategoryId,CategoryName,ItemStyle,ItemKey,ItemMetalType, ItemMetalColor,ItemRetailPrice,ItemSpecialPrice,_Vision360Static} = props.product

  return (
      <StyledLink to={props.generatedLink}>
        <Div   width='100vw'
          height='100%'
          padding='10px 0'
          slightBoxShadow
          position='relative'
          color='gray'
          display='flex'
          flexWrap='nowrap'
          onClick={()=>{props.onShutFooter();props.onViewDetails(props.product)}}>
          <Div >
            <Vision360
              MasterStyle={props.MasterStyle}
              small
              mobile
              width='250px'
              height='150px'
              ItemKey = {ItemKey}
              V360StaticImages = {_Vision360Static ? _Vision360Static.ArrayOfImages:[]}
            />
          </Div>

          <Div    width='100%'   flexDirection='column'  display='flex'  padding='15px 0 0 0' >

            <Div display='flex' alignItems='center' justifyContent='center' width='100%' padding='10px 0'  height='100%'>
              <Description
                mobile
                mainStone ={props.product.ContainsStones}

                ItemKey={ItemKey}
                name={CategoryName }
                metalType = {ItemMetalType}
                metalColor = {ItemMetalColor}
                price = {ItemRetailPrice}
                specialPrice={ItemSpecialPrice}
                catId = {CategoryId}
                fourC = {StoneTWT + " " + StoneMake + " " + StoneHue + " " + StoneClarity}
              />
            </Div>
          </Div>
        </Div>
        <Div  color='lightGray' font='italic' position='absolute'   style={{fontSize:'14px'}} bottom='0' right='0' zIndex='1'>
          {ItemKey}
        </Div>
      </StyledLink>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
