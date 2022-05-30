import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H5} from 'shared/H';
import GeneralOption from './GeneralOption';
// -----
const funcC0mp = (props) =>{
  return (
    <NoMPUl childrenBorderBottom ="1px solid black" >
      <Li key="home" onClick={()=>{props.onHamburgerClick('closed')}}>
        <StyledLink to="/" >
          <Div color='black' padding="10px 0" display="flex" justifyContent="space-between" flexWrap="nowrap">
            <H5>
              Home
            </H5>
          </Div>
        </StyledLink>
      </Li>
      <Li>
        <GeneralOption
          name="Engagement"
          firstOption = {false}
          onDetaillist = {props.onDetaillist}
        />
      </Li>
      <Li>
        <GeneralOption
          name="Diamond"
          firstOption = {false}
          onDetaillist = {props.onDetaillist}
        />
      </Li>
      <Li>
        <GeneralOption
          name="Bands"
          firstOption = {['Ladies Bands','Gents Bands']}
          onDetaillist = {props.onDetaillist}
        />
      </Li>
      <Li>
        <GeneralOption
          name="Jewelry"
          firstOption = {['Necklaces','Earrings','Fine Ring','Bracelets','Watches','Other']}
          onDetaillist = {props.onDetaillist}
        />
      </Li>
      <Li>
        <GeneralOption
          name="Services"
          firstOption = {false}
          onDetaillist = {props.onDetaillist}
        />
      </Li>
      <Li>
        <GeneralOption
          name="Designers"
          firstOption = {false}
          onDetaillist = {props.onDetaillist}

        />
      </Li>
      <Li>
        <GeneralOption
          name="About"
          firstOption = {false}
          onDetaillist = {props.onDetaillist}

        />
      </Li>
    </NoMPUl>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
