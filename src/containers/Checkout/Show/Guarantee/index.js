import React from 'react';
import Div from 'shared/Div';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
import Span from 'shared/Span'
import starConverter from 'containers/App/HelperFunctions/starConverter.js';
import WordCompressor from 'shared/WordCompressor';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Span fontWeight='bold'>
        Presentation includes:
      </Span>
      <Ul>
        <Li>Box & Packaging</Li>
        <Li>Gift-Wrapped<Span fontStyle='italic'>(on request)</Span></Li>
        <Li>Local Chocolate<Span fontStyle='italic'>(available)</Span></Li>
      </Ul>
      <Span fontWeight='bold'>
        Promise to you:
      </Span>
      <Ul>
        <Li>30 day return policy</Li>
        <Li>Jewelry is brand-new</Li>
        <Li>Free cleanings/checkups</Li>
        <Li>First Sizing/Adjustment Complimentary</Li>
        <Li>Shipping included</Li>
      </Ul>
      <Span fontWeight='bold'>
        Customer Testimonial:
      </Span>
      {
        props.googleReviewObject.reviews.length > 0 &&
        <Div padding='0 5px'>
          {
            props.googleReviewObject.reviews.map((review,index,arr)=>{
              if(index === 0){

                if(review.rating > 4){

                  return (
                    <Div key={review.author_name} >
                      {review.author_name}(<Span fontStyle="italic">{starConverter(review.rating)}</Span>)
                      <WordCompressor text = {review.text} size={80}  clickToExpand />
                    </Div>
                  )
                } else {
                  return ''
                }
              } else {
                return ''
              }

              })
          }
        </Div>
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
