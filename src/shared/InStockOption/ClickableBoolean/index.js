import React from 'react';
import Div from 'shared/Div';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'
import Switch from "react-switch";
  var StyledDiv = styled(Div)`
    transition:  ease .5s;

    width: 80px;
    @media only screen and (min-width: 996px) {
    width: 140px;
    }

  `



// -----
const funcC0mp = (props) =>{
  return (
    // <label>
    //   <Div display='flex' alignItems='center' >
    //     <Switch
    //       onColor= '#f6e2bc'
    //       checked={!props.toggle}
    //     />
    //     <small>In-Stock</small>
    //   </Div>
    // </label>

      <StyledDiv position='relative'
        cursor='pointer'
        justifyContent='center'
        color='black'
        alignItems='center'
        display='flex'
      >
        
        <Div style={{whiteSpace:'nowrap'}}>
          <small >
            <input type='checkbox' checked={!props.toggle} />
            <span style={{padding:'0 10px',whiteSpace:'nowrap'}}>
              Out of Stock?
            </span>
          </small>
        </Div>
      </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
