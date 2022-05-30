import React from 'react';
import Div from 'shared/Div';
import MetalOptions from './MetalOptions';
// -----
const funcC0mp = (props) =>{
  return (
      <Div padding='0'
        position='fixed'
        bottom='0'
        zIndex='100'
        width='100vw'
        themedAccent
        display='none'

        justifyContent='center'
      >
        <Div >
          {
            props.dailys.metalObjects &&
            <MetalOptions
              onContactClick = {props.onContactClick}
              metalObjects = {props.dailys.metalObjects}
            />
          }
        </Div>

      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
