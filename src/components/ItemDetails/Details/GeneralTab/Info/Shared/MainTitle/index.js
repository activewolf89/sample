import React from 'react';
import Div from 'shared/Div';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter'
// -----
const funcC0mp = (props) =>{
  return (
    <Div display='flex' flexWrap='nowrap'  padding='5px' highlighted >
      {CapitalizeFirstLetter(props.name)}
      - {CapitalizeFirstLetter(props.selectedValue)}
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
