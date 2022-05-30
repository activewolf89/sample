import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import P from 'shared/P';
import Span from 'shared/Span';
import Ul from 'shared/Ul';
import Li from 'shared/Li';
// -----
const funcC0mp = (props) =>{
  const hours = new Date().getHours()
  return (
    <Div display='flex' padding='0 5px' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
      <Div fontWeight='bold'>
        <Span >
          -{hours <= 12 ? "Good Morning! ":hours <=17 ? "Good Afternoon! ":"Good Evening! "}-
        </Span>
      </Div>
      <P textAlign='center'>
        We are a small independant jewelry store located near the stadium district in Seattle, Washington.
      </P>
      <P textAlign='center'>
        We started out of our home over 30 years ago with our customers coming to visit us in a home atmosphere, and that has carried with us in our approach and how we treat our guests.
      </P>
      <Span fontWeight='bold'>
        Our style tends to focus on:
      </Span>

      <Ul>
        <Li>relaxed environment to browse/shop/ask questions </Li>
        <Li>an education-first-approach and personal tailoring to fit the individuals styles and needs </Li>
        <Li>quality jewelry and loose diamonds hand-picked by our knowledgable staff</Li>
        <Li>chocolates and friendly shop dogs in case you need either</Li>
      </Ul>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
