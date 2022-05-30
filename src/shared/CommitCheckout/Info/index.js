import React from 'react';
import Div from 'shared/Div';
import PriceFormatter from 'shared/PriceFormatter';


// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      <Div display='flex' justifyContent='space-between' padding='5px 0'>
        <small>
          {props.name1}
        </small>
        {
          props.price ?
            <PriceFormatter price={props.name2} />
          :
          <small>
            {
              props.name2
            }
          </small>
        }
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
