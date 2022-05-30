import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span'
import FontAwesome from 'react-fontawesome';
// -----
const funcC0mp = (props) =>{
  return (
    <Div onClick={()=>{props.canEdit && props.onToggle(props.objKey)}}  cursor={props.canEdit ? 'pointer':''} padding='5px ' width='100%' display='flex' flexWrap='nowrap' justifyContent='space-between'>
      <Div style={{color:props.expanded || props.canEdit ? 'black':'gray'}} fontWeight={props.expanded ? 'bold':'normal'}>
        {props.name}
        {props.value &&
          <Span fontStyle='italic'>
            - {props.value}
          </Span>
        }
      </Div>
      <Div >
        <FontAwesome style={{color:props.expanded || props.canEdit ? 'black':'gray'}} name={props.expanded ? 'caret-up':'caret-down'} />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
