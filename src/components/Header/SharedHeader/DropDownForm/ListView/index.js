import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import Jewelry from './Jewelry';
import KnowledgeCenter from './KnowledgeCenter';
import StyledLink from 'shared/StyledLink';
import HighlightSpan from 'shared/HighlightSpan';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import DesignerArraySection from './DesignerArraySection';
import styled,{css} from 'styled-components'
import VideoMaster from 'containers/VideoMaster'
const StyledDiv = styled(Div)`
height:100%;

  @media only screen and (min-width: 996px) {
    border: 1px solid lightGray;
    padding: 5px;
  }

`
const StyledLi = styled(Li)`
${props => props.displayOff && css`
  display:none;
`
}
  width: 100%;
  @media only screen and (min-width: 996px) {
    display:block;
    width: 50%;
  }

`
// -----

const ListView = (props) =>{
  return (
    <Div  opacity='.85'>
      <Div padding='5px 0' >
        <VideoMaster />
      </Div>
      <NoMPUl display='flex'  justifyContent='space-around'>
        <StyledLi   displayOff = {!props.isShop} >
          <StyledDiv >
            {
              props.categoryObject.title ==='About' &&
              <AboutSection
                onContactClick={props.onContactClick}
                travelTo={props.travelTo}
                onHamburgerClick = {props.onHamburgerClick}
              />
            }
            {!props.nonShop ?
              <Div>
                <Div   display='inline-flex' >
                  {/* <Span onClick={()=>{(props.onHamburgerClick && props.onHamburgerClick('close')) && props.travelTo()}}>

                    <StyledLink to={props.categoryObject.rootPath}>
                      <HighlightSpan >
                    Shop All {props.categoryObject.knowledgeSection.name}
                      </HighlightSpan>
                    </StyledLink>
                  </Span> */}
                </Div>
              </Div>:
              <Div height='100%' themedAccent >
                {
                  props.serviceButton &&
                  <ServiceSection
                    onContactClick={props.onContactClick}
                    travelTo={props.travelTo}
                  />

                }
                {props.designersArray &&
                  <DesignerArraySection
                    categoryObject = {props.categoryObject}
                    travelTo={props.travelTo}
                    designersArray={props.designersArray}
                  />
                }
              </Div>
            }
            {
              !props.nonShop &&
              <Jewelry
                primaryCategoryChoices = { props.primaryCategoryChoices}
                history={props.history}
                categoryObject = {props.categoryObject}
                onHamburgerClick = {props.onHamburgerClick}
                travelTo={props.travelTo}
                title={props.title}
                designersArray={props.designersArray}
                onFaqClick = {props.onFaqClick}
                categoryArray={props.categoryArray}
              />
            }
          </StyledDiv>
        </StyledLi>
        <StyledLi  displayOff = {props.isShop} >
          <StyledDiv >

            <Div  display='inline-flex' >
              <StyledLink to={props.categoryObject.knowledgeRootPath}>
                <Div themedAccent>
                  <HighlightSpan onClick={()=>{props.travelTo()}}>
                    Learn More
                  </HighlightSpan>
                </Div>
              </StyledLink>
            </Div>

            <Div height='300px' overflow='auto'>

              <KnowledgeCenter
                onHamburgerClick = {props.onHamburgerClick}
                travelTo={props.travelTo}
                knowledgeSection = {props.categoryObject.knowledgeSection}
                topId = {props.categoryObject.knowledgeSection.id}
                knowledgeArray = {props.categoryObject.knowledgeSection.obj}
                onFaqClick={props.onFaqClick}
                categoryObject = {props.categoryObject}
              />

            </Div>
          </StyledDiv>
        </StyledLi>

      </NoMPUl>

    </Div>

  )
}
ListView.propTypes = {
}
export default ListView;
