import React from 'react';
import Div from 'shared/Div';
import WordCompressor from 'shared/WordCompressor';
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (
    <Div cursor='pointer' display='flex' flexWrap='nowrap' alignItems='center' position='relative'>
      <FontAwesome name="user" />
      <Div  padding='0 3px'>
        {
          props.email ? <WordCompressor size={4} shouldNotExpand text={props.email}/>:"Login"
        }
      </Div>
      <Div position='absolute' left='95%' bottom="0%"  display='flex' alignItems='flex-end'>
        <FontAwesome name={props.isOpen ? "caret-up":"caret-down"} style={{padding:'0 3px'}} />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
