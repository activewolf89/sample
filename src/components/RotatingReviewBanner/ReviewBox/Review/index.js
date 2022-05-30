import React from 'react';
import Div from 'shared/Div';
//shared
import Span from 'shared/Span';
import P from 'shared/P';

import starConverter from 'containers/App/HelperFunctions/starConverter.js';
// -----
const Review = (props) =>{
  const {review} = props
    if(review.rating > 4){

      return (
        <Div  cursor='pointer' key={review.author_name} border='1px solid gray' width='100%' alignItems='center' display='flex' flexDirection='column'>
          {review.author_name}
          <Div >
            <Span fontStyle="italic">{review.relative_time_description}</Span>
          </Div>
          <Div>
            {starConverter(review.rating)}
          </Div>
          <Div padding='0 5px'>

            <P textAlign='center'>
              <small>
                {review.text.substring(0,50) + "..."}
              </small>
            </P>
          </Div>
        </Div>
      )
    } else {
      return('')
    }
}
Review.propTypes = {
}
export default Review;
