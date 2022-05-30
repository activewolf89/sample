import React from 'react';
import Div from 'shared/Div';
import Repair from './Repair';
import Custom from './Custom';
import Appraisal from './Appraisal';
import ServiceExamples from './ServiceExamples';

// -----
const FAQ = (props) =>{
  console.log(props)
  return (
    <Div >
      {
        props.generalId === "repair" &&
        <Repair
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "custom" &&
        <Custom
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "appraisal" &&
        <Appraisal
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "service-examples" &&
        <ServiceExamples
          detailedId = {props.detailedId}
        />
      }
    </Div>
  )
}
FAQ.propTypes = {
}
export default FAQ;
