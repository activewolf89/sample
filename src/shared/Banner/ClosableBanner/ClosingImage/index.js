import React from 'react';
import Div from 'shared/Div';
import styled,{css} from 'styled-components'

const StyledDiv = styled(Div)`
  width: 0px;
  transition: width .5s ease-in;

  ${props => props.isOpen && css`
    width: 100%;
    transition: width .5s ease-in;
  `}
`

// -----
const RightImage = (props) =>{
  return (
    <StyledDiv isOpen={props.isOpen} position="absolute" backgroundColor="white" transform="translate(-50%, -50%)" left="50%" top="50%" height="100%"  zIndex="2">
    </StyledDiv>
  )
}
RightImage.propTypes = {
}
export default RightImage;
