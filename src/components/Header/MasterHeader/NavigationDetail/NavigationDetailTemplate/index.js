import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import Li from 'shared/Li';
import Title from 'shared/Title';
import NoMPUl from 'shared/NoMPUl';
// -----
const NavigationDetailTemplate = (props) =>{

  return (
    <NoMPUl display="flex" flexDirection="column" justifyContent="center" alignItems="center" childrenPadding="0 5px" themedBottomBorder>
      <Li>
        <Title>Engagement Home</Title>
      </Li>
      <Li>
        <Title>Shop Engagement Rings</Title>
      </Li>
  </NoMPUl>
  )
}
NavigationDetailTemplate.propTypes = {
}
export default NavigationDetailTemplate;
