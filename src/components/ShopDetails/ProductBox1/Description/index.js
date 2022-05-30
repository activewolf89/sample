import React from 'react';
import Div from 'shared/Div';
import WordCompressor from 'shared/WordCompressor';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';

import PriceFormatter from 'shared/PriceFormatter';
// -----
const Description = (props) =>{
  return (
    <Div padding='0 10px' >
      <Div padding='0 5px' color='gray'  height={props.mobile ? 'auto':'85px'} overflow='hidden'>
        <Div  color='gray' textAlign='center' >
          <WordCompressor
            showMetal
            metalColor={props.metalColor}
            metalType={CapitalizeFirstLetter((props.metalType))}
            text={RemoveLoose(props.name)}
            size={35}
            fourC = {props.catId === 190 ? props.fourC:null}
          />
        </Div>
      </Div>
      <PriceFormatter
        specialPrice = {props.specialPrice}
        price = {props.price}
      />


    </Div>
  )
}
Description.propTypes = {
}
export default Description;


var RemoveLoose = function(name){
  if(name.includes('- Loose')){
    return name.substring(0,name.indexOf('- Loose'))
  } else {
    return name
  }
}
