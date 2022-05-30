import React from 'react';
import Div from 'shared/Div';
import PriceFormatter from 'shared/PriceFormatter';

// -----
const funcC0mp = (props) =>{
  return (
      <Div  display='flex' justifyContent='space-between' padding='5px 0'>
        <small>
          {props.name}
        </small>
        {
          props.percent ?
            <Div>
              {
                Math.ceil((10 * props.subTotal) * 100) / 10
              }%
            </Div>:
            <PriceFormatter noBold={props.noBold} small price={props.subTotal} />
        }
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
