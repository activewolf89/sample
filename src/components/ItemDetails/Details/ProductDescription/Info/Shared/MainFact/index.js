import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import WordCompressor from 'shared/WordCompressor';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Span fontStyle='italic' underline>Facts</Span>
      <WordCompressor
        size={300}
        text = {props.facts.description}
        list = {props.facts.list}
        categoryDetails = {props.facts.categoryDetails}
        clickToExpand
        categoryName = {props.categoryName}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
