import React from 'react';
import Div from 'shared/Div';
import ProductBox1 from 'components/ShopDetails/ProductBox1'
import FindPreference from '../FindPreference.js'
import P from 'shared/P';

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='20px 0' display='flex' justifyContent='center' alignItems='center'>

      <Div>
        <P textAlign='center'>
          Thank you {props.preferredContact.name.value} for checking out this piece,<br />
          we will reach out to you via {FindPreference(props.preferredContact)} at {props.preferredContact[FindPreference(props.preferredContact)].value} <br />
          to answer your question about item: {props.product.ItemKey}
        </P>
      </Div>
      <Div display='flex' justifyContent='center' themed>

        <ProductBox1
          justRotate
          product = {props.product}

        />
      </Div>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
