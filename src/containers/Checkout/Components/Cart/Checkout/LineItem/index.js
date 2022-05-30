import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';
import ChoiceDescription from './ChoiceDescription';
import PriceFormatter from 'shared/PriceFormatter'
import {H5} from 'shared/H';
import RemoveItem from './RemoveItem';
import Span from 'shared/Span';
import styled from 'styled-components';
import MasterItemStyleConverter from 'containers/App/HelperFunctions/MasterItemStyleConverter.js'
const StyledDiv = styled(Div)`
display: flex;
flex-wrap: wrap;
align-items: center;
  @media only screen and (min-width: 996px) {
  flex-wrap: nowrap;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div backgroundColor='lightGray' width='100%' color='black' padding='5px' display='flex' justifyContent='space-between' alignItems='center'>
        <H5>
          {props.item.CategoryName}
          <Span fontStyle='italic'>
          </Span>
        </H5>
        <RemoveItem
          ItemKey = {props.item.ItemKey}
          onRemoveItem = {props.onRemoveItem}
          onRemoveFromCartItem = {props.onRemoveFromCartItem}
        />
      </Div>

      <StyledDiv  >
        <Div padding='5px' >
          <Vision360 height='200px' width='200px' MasterStyle={MasterItemStyleConverter(props.item)}  ItemKey ={props.item.ItemKey} />
        </Div>
        <Div  padding='5px'  display='flex' flexDirection='column'  maxWidth='800px'>
          <ChoiceDescription
            item={props.item}
          />
          <Div display='flex'   width='100%' padding='10px' >
            <Div >
              <PriceFormatter
                noBold
                onSameLine
                price = {props.item.Price}
              />
            </Div>
          </Div>
          <Div>
          </Div>
        </Div>
      </StyledDiv>


    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
