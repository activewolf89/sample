import React from 'react';
import Div from 'shared/Div';
import StyleBox2 from '../../StyleBox2';
import TikTok from './TikTok';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <Div >

        <TikTok
          start={props.start}
          end={props.end}
        />
      </Div>

      <StyleBox2
        resets = {props.resets}
        onContactClick = {props.onContactClick}
        contactButton = {props.contactButton}
        name={props.category}
        name2={props.name2}
        title={props.title}
        title2={props.category}
        boxImage={props.picture}
        description={props.description}
        link={props.shopLink}
        month = {props.month}
      />
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
