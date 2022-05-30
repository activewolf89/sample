import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';
import Description from '../Description';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter'
import ColorCircle from 'shared/ColorCircle';
import WordCompressor from 'shared/WordCompressor';

// -----
const funcC0mp = (props) =>{
  const {StoneTWT,StoneMake,StoneHue,StoneClarity,MainShape,CategoryId,CategoryName,ItemStyle,ItemKey,ItemMetalType, ItemMetalColor,ItemRetailPrice,ItemSpecialPrice,_Vision360Static} = props.product

  return (
    <Div   width='100vw' height='auto' padding='10px 0'  slightBoxShadow position='relative' color='gray' display='flex' flexWrap='nowrap' onClick={()=>{props.onShutFooter();props.history.push(props.product.ItemDirectLink);props.onViewDetails(props.product)}}>
      <Div >
        <Vision360
          width='160px'
          height='160px'
          ItemKey = {ItemKey}
          V360StaticImages = {_Vision360Static ? _Vision360Static.ArrayOfImages:[]}
        />
      </Div>

      <Div    width='100%'   flexDirection='column'  display='flex'  height='160px'  >
        {
          CategoryId !== 190 &&
          <Div display='flex' alignItems='center' justifyContent='center' width='100%' >
            <Div style={{padding:'0 5px'}}>
              <ColorCircle
                colorArray={ItemMetalColor.split('/')}
              />
            </Div>
            <WordCompressor
              text={CapitalizeFirstLetter(ItemMetalType)}
              size={15}
            />
          </Div>
        }
        <Div display='flex' alignItems='center' justifyContent='center' width='100%' padding='10px 0'>
          <Description
            mobile
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
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
