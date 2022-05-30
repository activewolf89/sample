import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import Title from 'shared/Title'

// -----
const RepairStyle = (props) =>{
  return (
    <Div>
    <Div margin="10px 0">
      <Title underline>Item Information</Title>
    </Div>
      <NoMPUl  display="flex" flexWrap="wrap" justifyContent="center" childrenPadding="0 5px">
      <Li>
        <Title>Category</Title>
      <select name="category" value={props.category} onChange={(e)=>{props.onInputChange(e.target.name,e.target.value)}}>
        <option>Engagement Ring</option>
        <option>Ladies Band</option>
        <option>Mens Band</option>
        <option>Pendant</option>
        <option>Bracelet</option>
        <option>Earrings</option>
        <option>Watch</option>
        <option>Other</option>
      </select>
    </Li>
    <Li>
      <Title>Metal</Title>
      <select name="metal" value={props.metal} onChange={(e)=>{props.onInputChange(e.target.name,e.target.value)}} type="text" >
        <option>Platinum</option>
        <option>White-gold</option>
        <option>Rose-gold</option>
        <option>Yellow-gold</option>
        <option>Palladium</option>
        <option>Other</option>
      </select>
      <Title fontStyle="italic" fontSize="14px">{props.error.metal}</Title>
  </Li>
  </NoMPUl>
</Div>
  )
}
RepairStyle.propTypes = {
  category: PropTypes.string.isRequired,
  metal: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default RepairStyle;
