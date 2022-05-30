import React from 'react';
import Div from 'shared/Div';

import ReactPlayer from 'react-player/lazy'
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' justifyContent='center' width='100vw' maxWidth='1200px' height='100%' >
      <Div  padding='10px 0'>
        <ReactPlayer
          playing
          controls={true}
          url={props.tv}
          width='100%'
          height='100%'
        />
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
