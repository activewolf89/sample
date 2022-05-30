import React from 'react';
import Div from 'shared/Div';
import DesignerList from './DesignerList';
import DiamondList from './DiamondList';

// -----
const DesignerFAQ = (props) =>{
  return (
    <Div >
      {
        props.generalId === "designer-list" &&
        <DesignerList
          detailedId = {props.detailedId}
        />
      }
      {
        props.generalId === "diamond-list" &&
        <DiamondList
          detailedId = {props.detailedId}
        />
      }

    </Div>
  )
}
DesignerFAQ.propTypes = {
}
export default DesignerFAQ;
