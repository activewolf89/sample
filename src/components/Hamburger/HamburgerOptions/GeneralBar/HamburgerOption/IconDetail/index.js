import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H5} from 'shared/H';
import FontAwesome from 'react-fontawesome';
// -----
const IconDetail = (props) =>{
  return (
    <NoMPUl childrenBorderBottom="1px solid gray" listStyle="none">
      {props.options.map((option,idx)=>{
        return (
          <Li key={idx} width="100%" onClick={()=>{props.onNavigationClick(option.destination)}}>
            <Div padding="10px 0" display="flex" justifyContent="space-between" flexWrap="nowrap">
              <H5>
                {option.name}
              </H5>
              <FontAwesome size="2x" name="caret-right" />
            </Div>
          </Li>
        )
      })}
    </NoMPUl>
  )
}
IconDetail.propTypes = {
}
export default IconDetail;
