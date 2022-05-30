import React,{Component} from 'react';
import Div from 'shared/Div';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ol from 'shared/Ol'
import Li from 'shared/Li'
import styled from 'styled-components';
import CorporateEvent from './corporate_event.jpg';
import Circle from './Circular-Arrows-Template.png'
import StyledLink from 'shared/StyledLink';
import Guarantee from './guarantee.JPG'
import Banner from '../Banner'
import Countdown from 'react-countdown';
import Button from 'shared/Button';
import Table from 'react-bootstrap/Table'
import ThemedStyle from './zoom_casual.jpg';
import PoolOfClothes from './PoolOfClothes';

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
    var date1 = new Date('2022-07-11');
    return (
      <Container fluid>
        <Row>
        <Col xs={12}>
          <Banner  WebImage={[CorporateEvent,CorporateEvent]} noButton buttonObj={{url:"/event-planner-front-end", text:"Start Your Event"}} />
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Div display='flex' justifyContent='center' fontWeight='bold' Armoire> Your Event is |
        <Div padding='0 20px' >
        <Countdown date={date1} />
        </Div>
        <Div>
        | Days from Now
        </Div>
        </Div>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <div style={{padding:'30px 0'}} class="list-group-item list-group-item-action flex-column align-items-start ">
          <p>
          <span style={{fontWeight:'bold'}}>Event004 </span> is a complimentary try-on event sponsered by your company, that allows you to pick one article of clothing for <span style={{fontWeight:'bold'}}>free</span>, see details and pool of clothes that may work well below, or you can pick one outside the recommendation.  This functionality of powered by <span style={{fontWeight:'bold',color:'#520844'}}> Armoire </span>.
          </p>
          </div>
        </Col>
        </Row>
        <Row>
          <Col xs={8}>
          <div style={{padding:'30px 0'}} class="list-group-item list-group-item-action flex-column align-items-start ">
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>General</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name of Event</td>
          <td >Vibrant Shirt Zoom Meeting</td>
        </tr>
        <tr>
          <td>Date</td>
          <td>2022-07-11</td>
        </tr>
        <tr>
          <td>Theme</td>
          <td>Vibrant Tops</td>
        </tr>
        <tr>
          <td>Formalness</td>
          <td>Zoom Casual</td>
        </tr>
        <tr>
          <td>Reminders</td>
          <td>We will be doing a zoom session catered to welcoming a new member, and thought it would be fun to try out a new experimental Armoire feature that caters to successful events!</td>
        </tr>
        <tr>
          <td>Tip for Clothing Selection</td>
          <td>See below for a pool of clothes that may work for you for this event, if you do not find any below to your liking feel free to check out link to Armoire page -
<a href='https://www.armoire.style/closet/brand/brass/aoOAyXXVGl?occasions=occasion_work&seasons=summer&seasons=fall&seasons=winter&seasons=spring' target="_blank">Link</a>
          </td>
        </tr>

      </tbody>
      </Table>


          </div>
          </Col>
          <Col xs={4}>
          <Div >
          <Div backgroundColor='beige' border='2px solid black'>
  <Div textAlign='center' textDecoration='underline'>Description</Div>
          <h4 style={{textAlign:'center'}}>
        A collection specifically catered to Zoom events.
          </h4>
          </Div>
           <img src={ThemedStyle} width='100%' height='100%' />
           </Div>
          </Col>
        </Row>
        <PoolOfClothes />


        </Container>

    )
  }
}


Template.propTypes = {

}
export default Template;

//https://www.socialtables.com/blog/event-planning/corporate-event-themes/
