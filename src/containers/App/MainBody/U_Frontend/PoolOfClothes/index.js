import React,{Component} from 'react';
import Div from 'shared/Div';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import ImageRotator from './ImageRotator'
import Z0 from './z_0.jpg'
import Z1 from './z_1.jpg'
import Z2 from './z_2.jpg'
import Z3 from './z_3.jpg'
import Z4 from './z_4.jpg'
import Z5 from './z_5.jpg'
import BC0 from './bc_0.jpg'
import BC1 from './bc_1.jpg'
import BC2 from './bc_2.jpg'
import BC3 from './bc_3.jpg'
import BC4 from './bc_4.jpg'
import BC5 from './bc_5.jpg'
import FontAwesome from 'react-fontawesome'
import Button from 'shared/Button';
import ModalContainer from './ModalContainer';
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
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      whichModal: 'wireframe',
      refreshNumber: 0,
      selectedNumber: false,
      loginEmail: 'reedd2@uw.edu'
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSwap = this.handleSwap.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleFind = this.handleFind.bind(this)
  }
  handleFind = function(){
    var zero = this.state.refreshNumber
    var selectedNumber = this.state.selectedNumber

    if(zero == 1){
      if(selectedNumber == 1){
        return BC0
      } else if(selectedNumber == 2){
        return BC1

      }
      else if(selectedNumber == 3){
        return BC2

      }
      else if(selectedNumber == 4){
        return BC3

      }
      else if(selectedNumber == 5){
        return BC4
      }

      else {
        return BC5
      }
       //look in b
    } else {
      if(selectedNumber == 1){
        return Z0
      } else if(selectedNumber == 2){
        return Z1

      }
      else if(selectedNumber == 3){
        return Z2

      }
      else if(selectedNumber == 4){
        return Z3

      }
      else if(selectedNumber == 5){
        return Z4
      }

      else {
        return Z5
      }
    }
  }
  handleChange = function(value){
    this.setState({
      loginEmail:value
    })
  }
  handleClose = function(value){
    this.setState({
      showModal: false
    })
  }
  handleSelect = function(value){
    this.setState({
      selectedNumber: value == this.state.selectedNumber ? false:value
    })
  }
  handleToggle = function(value){
    this.setState({
      showModal: !this.state.showModal
    })
  }
  handleSwap = function(){
    this.setState({
      selectedNumber: false,
      refreshNumber: this.state.refreshNumber == 0 ? 1:0
    })
  }

  render(){
    var clothPool =  {
      "Business Casual": [[BC0,BC1,BC2,BC3,BC4,BC5],[Z0,Z1,Z2,Z3,Z4,Z5]],
      "Zoom Casual": [[Z0,Z1,Z2,Z3,Z4,Z5],[BC0,BC1,BC2,BC3,BC4,BC5]],

    }
    return (
      <Div >
      {
        this.state.showModal &&
      <ModalContainer handleClose = {this.handleClose} handleChange = {this.handleChange} loginEmail = {this.state.loginEmail} loginEmail = {this.state.loginEmail} pic = {this.handleFind()}/>
    }
      <Div padding='10px 20px 5px 0' display='flex' justifyContent='space-between'>
      <Button onClick={this.handleSwap} width='90px'>
      <FontAwesome name='recycle' lg />
      </Button>
      </Div>
      <ImageRotator handleSelect = {this.handleSelect} selectedNumber = {this.state.selectedNumber} selectedStyle={"Zoom Casual"} clothPool = {clothPool} refreshNumber={this.state.refreshNumber} />
        <Div display='flex' justifyContent='center' padding='10px'>
        <Button  disabled = {!this.state.selectedNumber} Armoire = {this.state.selectedNumber}  padding='10px' width='100%' onClick={this.handleToggle}>
        Continue
        </Button>
        </Div>
      </Div>

    )
  }
}


Template.propTypes = {

}
export default Template;



















// <Row >
// <Col xs={6}>
// <div class="list-group">
// <div class="list-group-item list-group-item-action flex-column align-items-start ">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 1</h5>
// <small>5 minutes</small>
// </div>
// <p class="mb-1">Tell us about your event! What type of business scenerio will it be? How many will be attending, and we will suggest styles for your guests</p>
// <small class="text-muted">We set you up as best as we can for a successful themed event</small>
//
// </div>
// <div class="list-group-item list-group-item-action flex-column align-items-start">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 2</h5>
// <small class="text-muted">5 minutes</small>
// </div>
// <p class="mb-1">We provide an event landing page for your guests, just send the event code out when your ready</p>
// <small class="text-muted">You will be able to see the landing page for modification prior to sending</small>
// </div>
// <div class="list-group-item list-group-item-action flex-column align-items-start">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 3</h5>
// <small class="text-muted">async</small>
// </div>
// <p class="mb-1">Get notifications on when your guests have received their clothes and get ready for event</p>
// <small class="text-muted">Kick back and relax</small>
// </div>
// <div class="list-group-item list-group-item-action flex-column align-items-start">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 4</h5>
// <small class="text-muted">one week post event</small>
// </div>
// <p class="mb-1">Check on how answers to the guest survey post event, and check out metrics in your backend</p>
// <small class="text-muted">This information will be used for improving the next event</small>
// </div>
// </div>
// </Col>
//   <Col xs={6}>
//     <Div padding='10% 0'>
//      <img src={Circle} width='100%' height='100%' />
//      </Div>
//   </Col>
// </Row>
// <Row>
// <Col xs={12}>
// <Div  height='150px' backgroundImg={Guarantee} backgroundRepeat='no-repeat' backgroundSize='center' backgroundPosition='center'>
// </Div>
// </Col>
// </Row>
