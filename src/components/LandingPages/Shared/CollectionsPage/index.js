import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import Box from './Box';
// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl display='flex' flexWrap='wrap' childrenPadding='10px'>
      {
        props.arrayOfCollections.map((obj,idx)=>{

          return (
            <Li key={idx}>
              <Box
                long={idx % 2 == 0}
                name={obj.name}
                description={obj.description}
                link = {obj.link}
                img={obj.img}
              />
            </Li>
          )
        })
      }
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
