import React from 'react';
import Div from 'shared/Div';
import Li from 'shared/Li';
import styled from 'styled-components';
import NoMPUl from 'shared/NoMPUl';
import {H3} from 'shared/H';
import WriteOut from 'shared/WriteOut';
import ShopButton from 'shared/ShopButton';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import ContactButton from 'shared/ContactButton';
import ServiceButton from 'shared/ServiceButton';
import Title from 'shared/Title';
const StyledDiv = styled(Div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 996px) {
    flex-direction: row;
  }
`
// -----
const HomePageCenter = (props) =>{
  return (
<Div >

  <NoMPUl display="flex" flexDirection="column" alignItems="center" >
    <Li>
      <Title >
        <StyledDiv   margin="10px" alignItems="center" justifyContent="center"
          onClick={props.options.length > 1  && props.onShowSelect}
        >
          <H3>
            I'm searching for
          </H3>
          <Div display="flex" alignItems="center" margin="0 0 0 10px">
            <WriteOut
              word={props.options[0].name}
              clickable={props.onHandleShowSelect}
            />
            {
                props.options.length > 1 &&
              <FontAwesome style={{marginLeft:'5px'}} name="caret-down" />
            }
          </Div>
        </StyledDiv>
      </Title>
    </Li>


  </NoMPUl>
  <Div   borderBottom="3px solid lightGray" backgroundColor="white" textAlign="center">
    {
      props.contactUs ?
        <ContactButton
          onContactClick = {props.onContactClick}
        />
      :
      props.serviceForm ?
        <ServiceButton
          onContactClick = {props.onContactClick}
        />
      :
      <ShopButton
        selectCategoryValue = {props.options[0]}
        destination = {props.destination}
      />
    }
  </Div>
</Div>
  )
}
HomePageCenter.propTypes = {
  onShowSelect: PropTypes.func
}
export default HomePageCenter;
