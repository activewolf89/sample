import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PriceFormatter from 'shared/PriceFormatter';
// -----
const funcC0mp = (props) =>{

  return (
    <Div >
      <NoMPUl display='flex'>
        <Li>

          <Div >
            <PriceFormatter
              specialPrice = {props.Item.ItemSpecialPrice}
              price = {props.Item.Price}
            />
          </Div>
        </Li>

      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
