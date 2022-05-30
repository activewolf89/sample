import React from 'react';
import Div from 'shared/Div';
import P from 'shared/P';
import {H4} from 'shared/H'
// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <hr />
      <H4 underline textAlign='center'>
        A Little About Us
      </H4>
      <P textAlign='center'>
        We are a small family-owned business(have served the PNW for 30 years), focusing on taking the time to educate, show quality pieces, in a relaxed environment!

      </P>
      <hr />
      <H4 underline textAlign='center'>
        Directions & Parking
      </H4>
      <P textAlign='center'>
        We are located at  <a href="http://maps.google.com/?q=1200 515 occidental ave south, Washington, Seattle, 98104">515 Occidental Ave South, Seattle WA 98104</a>,
        right next to Lumen(CenturyLink) field.  For parking, we recommend street parking or a building called { " " }
        <a href="https://www.google.com/maps/place/Stadium+Pl+S,+Seattle,+WA/@47.5977846,-122.333769,17z/data=!3m1!4b1!4m5!3m4!1s0x54906aa36eb66ee9:0x77fd35246937ec8b!8m2!3d47.5977846!4d-122.3315803">Stadium Place</a>.active
        We look forward to serving you, feel free to text us at <a href="tel:206-682-5555">206-682-5555</a> any other questions!
      </P>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
