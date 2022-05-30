import React from 'react';
import Div from 'shared/Div';
import TextArea from 'shared/TextArea';
import Question from 'containers/RequestInfoForm/Components/Shared/Question';
// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='3px'>
      <Div cursor='pointer' display='flex' alignItems='flex-start' onClick={(e)=>{props.onInputChange(props.choiceKey,'giftWrap',props.giftWrap.value === 'on' ? 'off':'on','text')}}>

        <Div >
          <Question giftWrap sameLine question="Would you like us to gift wrap?" />
        </Div>
        <Div padding='0 5px'>
          <input checked={props.giftWrap.value === 'on' ? true:false} value={props.giftWrap.value}  type="checkbox" />

        </Div>
      </Div>

      <Question sameLine question="Comment Box"/>
      <TextArea
        value = {props.textValue}
        onChange={(e)=>{props.onInputChange(props.choiceKey,'comment',e.target.value,'text')}}
        placeholder="Any comments or requests(color of wrap etc)"
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
