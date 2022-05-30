import React from 'react';
import Div from 'shared/Div';
import Review from './Review';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  border='1px solid gray' width='300px'>
      <Review
        review = {props.review}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
