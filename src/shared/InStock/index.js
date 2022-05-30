import React from 'react';
import Div from 'shared/Div';
//shared
import {H5} from 'shared/H'
// -----
const InStock = (props) =>{

  return (
    <Div fontStyle="italic" fontWeight="bold" color="green">
      <H5>
        In-Stock
      </H5>
    </Div>
  )
}

export default InStock;
