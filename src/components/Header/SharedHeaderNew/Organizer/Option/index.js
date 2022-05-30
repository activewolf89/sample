import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const StyledDiv = styled(Div)`
  :hover {
    text-decoration: underline;
  }
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div whiteSpace='nowrap' cursor='pointer'>
      <StyledDiv>

        {
          props.name &&
          <FontAwesome name={props.name} style={{paddingRight:'5px'}}/>
        }
        {props.title}
      </StyledDiv>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
