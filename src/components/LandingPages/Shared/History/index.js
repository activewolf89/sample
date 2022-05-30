import React from 'react';
import Div from 'shared/Div';
import Background from 'images/Tacori/background.jpg'

// -----
const funcC0mp = (props) =>{
  return (
    <Div position='relative' padding='20px' backgroundImg={Background} backgroundPosition='center' backgroundSize='cover' height='300px' width='100%'>
      <Div border='2px solid navy' backgroundColor='white' color='black' padding='10px' opacity='.85' position='absolute'   color='white' left='50%' top='50%' transform='translate(-50%,-50%)' width='90%' height='90%'>
        <Div padding='10px' textAlign='center' color='black'>
          <Div textDecoration='underline'>
            <h3> Tacori x L T Denny Story</h3>
          </Div>
          <p style={{fontStyle:'italic'}}>
            Tacori and L T Denny Jewelers' Journey began over 20 years ago, with L T Denny's strive for quality and detail found the perfect match with Tacori.
            Each Tacori is hand-made in Glendale, California.  For the entirety of our relationship,
            Tacori has been consistent with deliveries, quality of their craftmanship, and a fantastic design-house for new styles.
          </p>
        </Div>
      </Div>
      <Div></Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
