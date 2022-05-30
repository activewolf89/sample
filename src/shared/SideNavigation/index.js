import React from 'react';
import StyledLink from 'shared/StyledLink';

//shared
import styled from 'styled-components';
import Ul from 'shared/Ul';
import Div from 'shared/Div';
import Li from 'shared/Li';
import Title from 'shared/Title';
import Button from 'shared/Button';
const SideUl =  styled(Ul)`
  list-style: none;
  margin: 0px ;
  padding: 0 0;
  height: 85%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-right: 5px solid black;
`;
const SideLi = styled(Li)`
  margin: 4px 0px;
  border-bottom: 1px solid white;
`;

//------

const SideNavigationTemplate = (props) =>{
  return (
    <Div className="sideNavigation" height="100vh"  position='fixed' top='130px' bottom="0px"  zIndex="0">

    <SideUl>
      {
        props.array.map((object)=>{
          if(object.name.includes("Home")){

          return (
          <StyledLink key={object.destination} to={object.destination}>
            <SideLi>
              <Button color="white" active={props.history.location.pathname === object.destination ? true:false} themed width="100%" ><Title>{object.name}</Title></Button>
          </SideLi>
        </StyledLink>
      )
    } else {
      return (
      <StyledLink key={object.destination} to={object.destination}>
        <SideLi>
          <Button color="white" active={ props.history.location.pathname.includes(object.destination)} themed width="100%" ><Title>{object.name}</Title></Button>
      </SideLi>
    </StyledLink>
  )
    }
        })
      }

    </SideUl>
  </Div>

  )
}
SideNavigationTemplate.propTypes = {
}
export default SideNavigationTemplate;
