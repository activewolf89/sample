import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import WriteOut from 'shared/WriteOut';
import styled from 'styled-components';
import ShopCategoryName from 'containers/App/HelperFunctions/ShopCategoryName';
import {H3} from 'shared/H'
import FontAwesome from 'react-fontawesome';
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
      {
        props.bumper ?
          <Li onClick={()=>{props.onShowSelect()}} display='flex' justifyContent='space-between'  alignItems='flex-end' pr>
            {ShopCategoryName(props.selectCategoryValue)}
            <FontAwesome name="caret-down" style={{padding:'0 3px'}} />
          </Li>:
          <Li>
            <Div fontStyle='italic' textAlign='center' width='100%'>
              <H3 >
                I'm Shopping for
              </H3>
            </Div>
            <StyledDiv  display="flex" flexDirection="column" flexWrap="wrap" margin="10px" alignItems="center" justifyContent="center" onClick={()=>{props.onShowSelect()}}>
              <Div display="flex" alignItems="center" margin="0 0 0 10px" cursor="pointer"  >
                <WriteOut
                  word={ShopCategoryName(props.selectCategoryValue)}
                />
                <Div cursor="pointer">
                  <FontAwesome name="caret-down" style={{marginLeft:'6px'}} />
                </Div>
              </Div>
            </StyledDiv>
          </Li>
      }
      </NoMPUl>
  )
}
InSearchingFor.propTypes = {
}
export default InSearchingFor;
