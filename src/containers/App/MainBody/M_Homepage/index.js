import React,{Component} from 'react';
import Div from 'shared/Div';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ol from 'shared/Ol'
import Li from 'shared/Li'
import styled from 'styled-components';
import CorporateEvent from './event-plan.jpg';
import Circle from './Circular-Arrows-Template.png'
import StyledLink from 'shared/StyledLink';
import Guarantee from './guarantee.JPG'
import Banner from '../Banner'
import Button from 'shared/Button';
const StyledDiv =  styled(Div)`
  width: 100vw;
  height: 100vw;
  @media only screen and (min-width: 500px) {
    width: 500px;
    height: 500px;
  }
@media only screen and (min-width: 996px) {
  width: 400px;
  height: 400px;
}
@media only screen and (min-width: 1500px) {
  width: 600px;
  height: 600px;
}

`

const MasterGrid = styled(Div)`
  display: grid;
  grid-template-areas:
  "weAreBack weAreBack weAreBack weAreBack weAreBack weAreBack"
  "notSure notSure notSure notSure notSure notSure"
  "filler filler filler filler filler filler"
  "lookingFor lookingFor lookingFor lookingFor lookingFor lookingFor"
  "beautyShots beautyShots beautyShots beautyShots beautyShots beautyShots"
  "freshOptions freshOptions freshOptions freshOptions freshOptions freshOptions"
  "q q q q q q"
  "b b b c c c"
  "d d d e e e"
  "happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters"
  "reactGallery reactGallery reactGallery reactGallery reactGallery reactGallery"

  ;

  grid-template-rows: auto ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;


`
class Template extends Component {

  render(){
    return (
      <Container fluid>
        <Row>
        <Col xs={12}>
          <Banner  WebImage={[CorporateEvent,CorporateEvent]}  buttonObj={{url:"/event-planner-front-end", text:"Start Planning"}} />
        </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <div class="list-group-item list-group-item-action flex-column align-items-start ">
            <div class="d-flex w-100 justify-content-between">
              <h3 class="mb-1">We are here for you!</h3>
              <small>:)</small>
            </div>
            <p class="mb-1">Corporate Events can be tricky, who is wearing what, how casual should it be, and potentially what my co-workers are going to be wearing are all questions your guests could have.  What if we told you, there is a way to
            offer business clothing tailored to your user and event to improve attendance and overall satisfaction of the event? Enter <span style={{fontWeight:'bold'}}>Armoire Dress To Impress Event Planner! </span></p>
            <small class="text-muted">You can start answering questions now, or scroll down to see the step-by-step of value gain</small>

          </div>
          </Col>
        </Row>
        <Row >
        <Col xs={6}>
        <div class="list-group">
  <div class="list-group-item list-group-item-action flex-column align-items-start ">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Step 1</h5>
      <small>5 minutes</small>
    </div>
    <p class="mb-1">Tell us about your event! What type of business scenerio will it be? How many will be attending, and we will suggest styles for your guests</p>
    <small class="text-muted">We set you up as best as we can for a successful themed event</small>

  </div>
  <div class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Step 2</h5>
      <small class="text-muted">5 minutes</small>
    </div>
    <p class="mb-1">We provide an event landing page for your guests, just send the event code out when your ready</p>
    <small class="text-muted">You will be able to see the landing page for modification prior to sending</small>
  </div>
  <div class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Step 3</h5>
      <small class="text-muted">async</small>
    </div>
    <p class="mb-1">Get notifications on when your guests have received their clothes and get ready for event</p>
    <small class="text-muted">Kick back and relax</small>
  </div>
  <div class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Step 4</h5>
      <small class="text-muted">one week post event</small>
    </div>
    <p class="mb-1">Check on how answers to the guest survey post event, and check out metrics in your backend</p>
    <small class="text-muted">This information will be used for improving the next event</small>
  </div>
</div>
        </Col>
          <Col xs={6}>
            <Div padding='10% 0'>
             <img src={Circle} width='100%' height='100%' />
             </Div>
          </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Div  height='150px' backgroundImg={Guarantee} backgroundRepeat='no-repeat' backgroundSize='center' backgroundPosition='center'>
        </Div>
        </Col>
        </Row>
        <Row>
          <Col xs={12} >
          <Div display='flex' justifyContent='center' padding='10px'>
          <StyledLink to={'/event-planner-front-end'}>
          <Button Armoire color='white' padding='10px' width='300px' >
          Start Planning
          </Button>
          </StyledLink>
          </Div>
          </Col>
        </Row>

        </Container>

    )
  }
}


Template.propTypes = {

}
export default Template;

//https://www.socialtables.com/blog/event-planning/corporate-event-themes/
