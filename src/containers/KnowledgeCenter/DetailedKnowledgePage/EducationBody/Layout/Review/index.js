import React from 'react';
import Div from 'shared/Div';
//shared
import Span from 'shared/Span';
import P from 'shared/P';

import starConverter from 'containers/App/HelperFunctions/starConverter.js';
import fromDate from 'containers/App/HelperFunctions/fromDate.js';
// -----
const Review = (props) =>{
  var googleReviews = props.googleReviews.reviews.map((review,index,arr)=>{
    if(review.rating > 4){

      return (
        <Div key={review.author_name} border='1px solid gray' >
          {review.author_name}(<Span fontStyle="italic">{review.relative_time_description}</Span>)
          {starConverter(review.rating)}
          <P> {review.text}</P>
        </Div>
      )
    } else {
      return ''
    }
  })
  var yelpReviews = props.yelpReviews.reviews.map((review,index)=>{
    if(review.rating > 4){
      return (
        <Div  key = {review.user.name} border='1px solid gray' >
          {review.user.name}(<Span fontStyle="italic">{fromDate(review.time_created)}</Span>)
          {starConverter(review.rating)}
            <P> {review.text}</P>
        </Div>
    )
  } else {
    return ''
  }
  })
  var merge = function(a,b){
    var ret = [];

for(var i = 0; i < a.length; i++){
 ret.push(a[i]);
 ret.push(b[i]);
}
return ret;
  }

  return (
    <Div >
      <Div  gridArea="description2" display="flex">
        {merge(googleReviews,yelpReviews)}
      </Div>

    </Div>
  )
}
Review.propTypes = {
}
export default Review;
