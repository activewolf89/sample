import React from 'react';
import Div from 'shared/Div';
import {H2,H3} from 'shared/H';
// -----

const WhyUs = (props) =>{
  return (
    <Div  display='flex' justifyContent='center'>

      <Div width='100%' maxWidth='1825px' border='1px solid black'>
        <Div width='100%' display='flex' alignItems='center' flexDirection='column' themed>
          <H2 underline noClick>
            Lifetime Jeweler Checklist
          </H2>
        </Div>
        <Div display='flex' border='1px solid black'>

          <Div width='50%'  height='400px' textAlign='center' borderRight='1px solid black'>
            <H3 underline noClick>
              Our Services
            </H3>
          </Div>
          <Div width='50%'  height='400px' textAlign='center'>
            <H3 underline noClick>
              Our Products
            </H3>
          </Div>
        </Div>
      </Div>
  </Div>

  )
}
WhyUs.propTypes = {
}
export default WhyUs;
