import React from 'react';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li'
import StyledLink from 'shared/StyledLink'
// -----
const DescriptionOfService = (props) =>{
  return (
    <NoMPUl display="flex" alignItems='center' flexDirection="column">
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us/atmosphere">
          Relaxed Atmosphere
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us/guidance">
          Education and Guidance
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline"  color="black" to="about-us/jeweler">
          Master Jeweler On-Site
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us/jeweler">
          Custom-Made Designs
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us/flexible-services">
          Flexible Services
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us">
          30 Day Return Policy*
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us">
          Lifetime Cleaning/Polishing
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us">
          Financing Options
        </StyledLink>
      </Li>
      <Li>
        <StyledLink textDecoration="underline" color="black" to="about-us">
          Insurance Guidance
        </StyledLink>
      </Li>
    </NoMPUl>
  )
}
DescriptionOfService.propTypes = {
}
export default DescriptionOfService;
