import React from 'react';
import Div from 'shared/Div';
import DeeperSaleWord from './DeeperSaleWord';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      {(props.categoryObjects.saleName && props.categoryObjects.saleName.ends !== '') ?
        <Div>
          <DeeperSaleWord
            saleName = {props.categoryObjects.saleName}
          />

        </Div>:
        <Div  >
          Sale
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
