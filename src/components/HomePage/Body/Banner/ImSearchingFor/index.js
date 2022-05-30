import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import WriteOut from 'shared/WriteOut';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import ShopCategoryName from 'containers/App/HelperFunctions/ShopCategoryName';
import A from 'shared/A';
import {H3} from 'shared/H'
const StyledDiv = styled(Div)`
flex-direction: column;
  @media only screen and (min-width: 996px) {
    flex-direction: row;
  }
`
// -----
const InSearchingFor = (props) =>{
  return (
      <NoMPUl  height="100%" display="flex" flexDirection="column" alignItems='center' justifyContent="space-between">
        <Li>
          <StyledDiv  display="flex" flexDirection="column" flexWrap="wrap" margin="10px" alignItems="center" justifyContent="center" onClick={()=>{props.onShowSelect()}}>
            <H3>
              I'm searching for
            </H3>
            <Div display="flex" alignItems="center" margin="0 0 0 10px" cursor="pointer" >
              <A>
                <WriteOut
                  word={ShopCategoryName(props.selectCategoryValue)}
                />
              </A>
              <Div cursor="pointer">
                <FontAwesome name="caret-down" style={{marginLeft:'6px'}} />
              </Div>
            </Div>
          </StyledDiv>
        </Li>
      </NoMPUl>
  )
}
InSearchingFor.propTypes = {
}
export default InSearchingFor;
