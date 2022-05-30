import React from 'react';
import Div from 'shared/Div';
import Vision360 from 'shared/Vision360';



// -----
const funcC0mp = (props) =>{
  return (
    <Div  position='relative' height='100%' width='100%' display='flex'  justifyContent={props.second ? 'flex-end':''}>
      <Div fontStyle='italic' left='5px' bottom='5px' color='lightGray'  position='absolute' >
        {props.moviename}
      </Div>
      <Vision360
        width={window.matchMedia( "(min-width: 960px)" ).matches ? "500px":'300px'}
        height={window.matchMedia( "(min-width: 960px)" ).matches ? "500px":'300px'}
        ItemKey = {props.moviename}
        V360StaticImages = {[]}
      />

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
