import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import DesignersLink from './DesignersLink';
import styled from 'styled-components';

const StyledNoMPUl = styled(NoMPUl)`
@media only screen and (min-width: 996px) {
>li {
  border-bottom: 1px slid white;
}
}
`
// -----
const funcC0mp = (props) =>{
  return (
    <StyledNoMPUl childrenPadding='5px' >
      {Object.entries(props.designersArray).map((designer,idx)=>{
        let obj = designer[1]
        return(
          <Li key={idx}>
            <DesignersLink
              categoryObject={props.categoryObject}
              designer={designer[0]}
              obj = {obj}
              travelTo={props.travelTo}
            />
          </Li>
        )
      })}
    </StyledNoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
