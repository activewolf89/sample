import React from 'react';
import Emerald  from 'shared/Shapes/EC.png';
import Cushion  from 'shared/Shapes/F_CUS.png';
import Asscher  from 'shared/Shapes/AC.png';
import Heart  from 'shared/Shapes/HR.png';
import Oval  from 'shared/Shapes/OV.png';
import Princess  from 'shared/Shapes/PR.png';
import Round  from 'shared/Shapes/RD.png';
import Pear  from 'shared/Shapes/PS.png';
import NoMPUl from 'shared/NoMPUl';
import PropTypes from 'prop-types';
import Li from 'shared/Li';
import SearchCheckKeyForValue from 'containers/Shop/Helpers/SearchCheckKeyForValue';

// -----
const ShapesTab = (props) =>{
  return (
    <NoMPUl clickable childrenPadding="10px" display="flex" justifyContent="space-between" flexWrap="wrap">
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','round')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','round')}
      >
        <img src={Round} alt="Round" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','cushion')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','cushion')}
      >
        <img src={Cushion} alt="Cushion" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','emerald')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','emerald')}
      >
        <img src={Emerald} alt="Emerald" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','oval')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','oval')}
      >
        <img src={Oval} alt="Oval" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','princess')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','princess')}
      >
        <img src={Princess} alt="princess" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','asscher')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','asscher')}
      >
        <img src={Asscher} alt="Asscher" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','heart')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','heart')}
      >
        <img src={Heart} alt="Heart" style={{width:'80px',height:'80px'}} />
      </Li>
      <Li
        onClick={()=>{props.onToggleClickableSearch('shape','pear')}}
        selected={SearchCheckKeyForValue(props.history.location.search,'shape','pear')}
      >
        <img src={Pear} alt="Pear" style={{width:'80px',height:'80px'}} />
      </Li>
    </NoMPUl>
  )
}
ShapesTab.propTypes = {
  onToggleClickableSearch: PropTypes.func.isRequired
}
export default ShapesTab;
