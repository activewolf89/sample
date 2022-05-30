import React from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import NoMPUl from 'shared/NoMPUl';

// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      <NoMPUl childrenPadding='5px'>
        <Li>
          206-682-5555
        </Li>
        <Li>
          customerservice@ltdenny.com
        </Li>
        <Li>
          515 occidental ave south, Seattle WA 98144
        </Li>
        <Li>
          Open Tuesday - Friday 10AM - 6PM
        </Li>
        <Li>
          Open
          Saturday 11AM - 5:30PM

        </Li>
      </NoMPUl>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
