import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import Title from 'shared/Title';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='5px 0'>
      {
        !props.loadRest ?

          <Div>
            {props.productLength} Showing...
          </Div>:
        props.noJewelryFilter ?
          <Div>
            <Title bold > {props.productLength === 0 ? "0":props.productLength} <Span > <Span textDecoration='underline'>Total Stocked</Span> {props.productLength <= 1 ?'Diamond':'Diamonds'}</Span>

            </Title>
          </Div>:
          <Title bold > {props.productLength === 0 ? "0":props.productLength} <Span > <Span textDecoration='underline'>Total In Stock</Span> {props.productLength <= 1 ?'Style':'Styles'}</Span>

          </Title>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
