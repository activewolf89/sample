import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title';
// -----
const Type = (props) =>{

  return (
    <Div display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Title>Service Type</Title>
      <select name="type" value={props.type} onChange={(e)=>{props.onTypeChange(e.target.name,e.target.value)}}>
      <option>Repair</option>
      <option>Custom</option>
      <option>Appraisal</option>
    </select>
    </Div>
  )
}
Type.propTypes = {
  onTypeChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}
export default Type;
