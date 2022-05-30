import React from 'react';
import styled from 'styled-components'
const StyledImg = styled.div`
  width: 100%;
  height: 100%;

@media only screen and (min-width: 996px) {
  width: 400px;
  height: 350px;
  background-color: gray;
}
`
// -----
const funcC0mp = (props) =>{
  return (
    <StyledImg display="flex" justifyContent='center'>
      Loading....
    </StyledImg>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
