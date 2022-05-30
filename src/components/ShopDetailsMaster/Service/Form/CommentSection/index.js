import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Title from 'shared/Title'
// -----
const RepairStyle = (props) =>{

  return (
    <Div>

    <Div margin="10px 0" display="flex" flexDirection="column" justifyContent="center">
      <Title underline>Comment Section</Title>
      <textarea name="comment"  value={props.comment} onChange={(e)=>{props.onInputChange(e.target.name,e.target.value)}} type="comment" style={{minHeight:'200px',minWidth:'300px'}}/>
    </Div>
</Div>
  )
}
RepairStyle.propTypes = {
  comment: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
}
export default RepairStyle;
