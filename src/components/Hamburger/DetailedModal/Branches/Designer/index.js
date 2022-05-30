import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import DesignersLink from './DesignersLink';
import {H3} from 'shared/H';
// -----
const funcC0mp = (props) =>{
    return (
      <Div maxHeight='800px' overflowY='scroll'>
        <NoMPUl display='flex' flexDirection='column' childrenBorderBottom='1px solid gray'  childrenPadding='10px 0' alignItems='center' justifyContent='center'>
          {Object.keys(props.designerObject).sort().map((obj,idx)=>{
            return(
              <Li key={idx} width='100%'>
                <Div cursor='pointer' >
                  <DesignersLink
                    obj = {props.designerObject[obj]}
                    travelTo = {props.travelTo}
                  />

                </Div>
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
