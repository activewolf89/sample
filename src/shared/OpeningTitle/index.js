import React from 'react';
import Div from 'shared/Div';
import {H1,H3,H4} from 'shared/H';

// -----
const OpeningTitle = (props) =>{
  return (
    <Div>
      <H1 textAlign='center'>{props.mainTitle}</H1>
      <H3 textAlign='center'>~{props.title}~</H3>
      <H4 textAlign='center' fontStyle="italic">by Reed Denny</H4>
      <img src={props.image} style={{width:'100%', maxWidth:'800px',height:'400px'}} alt="inside store" />
  </Div>
  )
}
OpeningTitle.propTypes = {
}
export default OpeningTitle;
