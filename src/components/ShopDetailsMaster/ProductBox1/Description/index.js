import React from 'react';
import Div from 'shared/Div';
import WordCompressor from 'shared/WordCompressor';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import styled from 'styled-components';
import PriceFormatter from 'shared/PriceFormatter';
const StyledDiv = styled(Div)`
bottom: 30px;

  @media only screen and (min-width: 996px) {
  bottom: 30px;
  }
`
const StyledDiv2 = styled(Div)`
  position: absolute;
bottom: 0%;
  @media only screen and (min-width: 996px) {
    left: 0%;

  }
`
// -----
const Description = (props) =>{
  return (
    <Div padding='0 10px ' height='100%'  >
      <Div   padding='0 5px' height='100%' display='flex' flexDirection='column'  justifyContent='space-around' alignItems='center' color='gray'  overflow='hidden'>

        <Div  color='gray'  display='flex' textAlign='center' >
          <small style={{whiteSpace:'noWrap'}}>{props.name}</small>
        </Div>
        <StyledDiv  position='absolute'  >
          <PriceFormatter
            specialPrice = {props.specialPrice}
            price = {props.price}
          />
        </StyledDiv>

      </Div>
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
