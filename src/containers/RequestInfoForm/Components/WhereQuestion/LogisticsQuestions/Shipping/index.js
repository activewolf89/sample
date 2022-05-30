import React from 'react';
import Div from 'shared/Div';
import Question from 'containers/RequestInfoForm/Components/Shared/Question';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <NoMPUl childrenBorderBottom='1px solid gray'>
        <Li>
          <Question number={1} question={'When would you be available to sign for your package?'} asterisk ={"Ships within two business days, we require adult signature, shipping is insured and free of charge"} />
          Arrival is in two-days on 9/7/2020, click here to adust.
        </Li>
        <Li>
          <Question number={2} question={'What is the shipping address?'} asterisk ={"We can ship to commercial or residential (requires adult signature), we cannot ship to PO boxes"} />
        </Li>
      </NoMPUl>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
