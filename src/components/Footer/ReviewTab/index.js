import React from 'react';
import Div from 'shared/Div';
import fiveStar from 'shared/Shapes/5StarYelp.svg';
import Span from 'shared/Span';
import {H5} from 'shared/H';
import WordCompressor from 'shared/WordCompressor';
import DissapearringDiv from 'shared/DissapearringDiv';
import DissapearringCaret from 'shared/DissapearringCaret';
import { CSSTransition } from 'react-transition-group';
import ReapearringDiv from 'shared/ReapearringDiv';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div position="relative" display="flex" justifyContent="space-between" alignItems="center"  padding='0 10px'>
        <DissapearringDiv position="absolute" width="100%" height="100%" onClick={()=>{props.onContactDrop('reviews')}} />
        <H5 >
          Reviews
        </H5>
        <DissapearringCaret name={props.isOn ?"caret-up":"caret-down"}/>
      </Div>
      <DissapearringDiv>
        <CSSTransition
          in={props.isOn}
          timeout={300}
          classNames="footer"
        unmountOnExit>
          <Div>
            <H5> Yelp/Google: <Span fontWeight="bold">{props.yelpReviewObject.count}</Span> <img style={{width:'70px',height:'50px'}} alt="five star" src={fiveStar} /></H5>
            <WordCompressor
              to="/knowledge-center/who-we-are/our-reviews"
              color="white"
              readMore
              text={props.googleReviewObject.reviews.length > 0 ? props.googleReviewObject.reviews[1].text :'loading'}
              size={120}
            />
          </Div>
        </CSSTransition>
      </DissapearringDiv>
      <ReapearringDiv>
        <Div>
          <H5> Yelp/Google: <Span fontWeight="bold">{props.yelpReviewObject.count}</Span> <img style={{width:'70px',height:'50px'}} alt="five star" src={fiveStar} /></H5>
          <WordCompressor
            to="/knowledge-center/who-we-are/our-reviews"
            color="white"
            readMore
            text={props.googleReviewObject.reviews.length > 0 ? props.googleReviewObject.reviews[1].text :'loading'}
            size={120}
          />
        </Div>
      </ReapearringDiv>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
