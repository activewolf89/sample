import React from 'react';
import Div from 'shared/Div';
import Question from 'containers/RequestInfoForm/Components/Shared/Question';
import './Option';
import Option from './Option';
// -----
const funcC0mp = (props) =>{
  return (
    <Div  display={props.choice.active ? 'block':'none'}>
      <Question  question={"How would you like to receive your order?"} />
      <Option
        choice = {props.choice}
        onChoice = {props.onChoice}
      />

    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
