import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Box from '../../OptionSelect/Box';

// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl display='flex' childrenPadding='5px' flexWrap='wrap'>

        {props.optionArray.map((obj,idx,arr)=>{
          return (
            <Li key={obj.link} onClick={()=>{props.history.location.pathname.includes(obj.link) ? props.history.goBack():props.history.push(obj.link)}}>
              <Box
                width="100px"
                height="100px"
                active={props.history.location.pathname.includes(obj.link) ?true : false}
                name={obj.name}
                backgroundImg={obj.backgroundImg}
              />
            </Li>
          )
        })}
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
