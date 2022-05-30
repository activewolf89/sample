import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import FontAwesome from 'react-fontawesome';
require('./numberWithItemz.css')

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <StyledLink to ="/cart">
        <FontAwesome  name="shopping-cart" style={{color:props.color ? props.color:'black'}}/>
        {props.checkoutString &&
          <span className='badge badge-warningz' id='lblCartCountz'>
            ({props.checkoutString.split(',').length})
          </span>
        }
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
