import React,{Component} from 'react';
import Div from 'shared/Div';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ol from 'shared/Ol'
import Li from 'shared/Li'
import styled from 'styled-components';
import StyledLink from 'shared/StyledLink';
import Banner from '../Banner'
import Button from 'shared/Button';
import Selection from './start_your_selection.jpg';
import ZoomCasual from './zoom_casual.jpg';
import Casual from './casual.jpg';
import ImageRotator from '../ImageRotator'
import FontAwesome from 'react-fontawesome'
import BF0 from './b_f_0.jpg'
import BF1 from './b_f_1.jpg'
import BF2 from './b_f_2.jpg'
import BF3 from './b_f_3.jpg'
import BF4 from './b_f_5.jpg'
import BF5 from './b_f_6.jpg'

import C0 from './c_0.jpg'
import C1 from './c_1.jpg'
import C2 from './c_2.jpg'
import C3 from './c_3.jpg'
import C4 from './c_4.jpg'
import C5 from './c_5.jpg'

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
import ModalContainer from './ModalContainer'
import P from 'shared/P';
import Form from './Form'
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
// backgroundImg={this.props.clothPool[this.props.selectedStyle][this.props.refreshNumber][0]
class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshNumber: 0,
      loginEmail: '',
      show_login: false,
      clothPool: {
        "Business Casual": [[BC0,BC1,BC2,BC3,BC4,BC5],[C0,C1,C2,C3,C4,C5]],
        "Casual": [[C0,C1,C2,C3,C4,C5],[BC0,BC1,BC2,BC3,BC4,BC5]],
        "Business Formal": [[BF0,BF1,BF2,BF3,BF4,BF5],[Z0,Z1,Z2,Z3,Z4,Z5]],
        "Zoom Casual": [[Z0,Z1,Z2,Z3,Z4,Z5],[BF0,BF1,BF2,BF3,BF4,BF5]],
      },
      eventDetails: {
        name:'',
        selectedStyle:'Business Casual',
        selectedTheme:false,
        date: false,
        howManyInvited: "1-5",
        eventReminders:'',
      },
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRefreshNumber = this.handleRefreshNumber.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
  }

  handleGenerate = function(){
    var eventDetails_1 = {
      name: "Vibrant Shirt Zoom Meeting",
      show_success: false,
      selectedStyle: "Zoom Casual",
      selectedTheme: "Vibrant Tops",
      date: "2022-07-11",
      howManyInvited: "16-30",
      eventReminders: "We will be doing a zoom session catered to welcoming a new member, and thought it would be fun to try out a new experimental Armoire feature that caters to successful events!"
    }
    this.setState({
      eventDetails: eventDetails_1,
      loginEmail: 'reedd2@uw.edu'
    })
  }
  handleRefreshNumber = function(key,value){
    this.setState(prevState => ({
      refreshNumber: this.state.refreshNumber == 0 ? 1:0
    }))
  }
  handleChange = function(key,value){
    this.setState(prevState => ({
      eventDetails: {
        ...prevState.eventDetails,
        [key]:value
      }

    }))
  }

  handleLogin = function(email_value){
    this.setState({
      loginEmail: email_value
    })
  }
  handleToggle = function(){
    if(this.state.loginEmail == ''){

    this.setState({
      show_login: !this.state.show_login
    })
  } else {
    this.setState({
      show_success: false
    })
  }
  }
  handleSubmit = function(){
    if(this.state.loginEmail == ''){
      this.setState({
        show_login: true
      })
    } else {
      this.setState({
        show_success: true,
      })

    }
  }

  render(){
    return (
      <Div position='relative'>
      {
          this.state.show_login &&
      <ModalContainer handleClose = {this.handleToggle} login handleLogin={this.handleLogin}   />
    }
    {
        this.state.show_success &&
    <ModalContainer handleClose = {this.handleToggle} success_confirmation handleLogin={this.handleLogin} loginEmail = {this.state.loginEmail} eventDetails={this.state.eventDetails}  />
  }
      <Container fluid>
      <Div Armoire margin='10px 0 0 0' >
      <Row>
      <Col xs={7}>
      <Div height='580px'>
      <Col >
      <Div   textAlign='center'>
        <h3 >Suggested Clothing Pool
        </h3>
        <Div textAlign='center'>
        <span style={{cursor:'pointer'}} onClick={this.handleRefreshNumber} > <FontAwesome name='recycle' lg /> </span>
        </Div>
          <small style={{fontStyle:'italics'}}> (These suggestions will change as you enter your event details) </small>

      </Div>
      <Div >

      <Div position='' height='50px' backgroundColor='beige' color='black'>Theme: <span style={{fontWeight:'bold'}}>{this.state.eventDetails.selectedTheme}</span>
      </Div>
      <Div height='340px'  backgroundSize='cover' width='100%'  Armoire>
      <ImageRotator selectedStyle={this.state.eventDetails.selectedStyle} clothPool={this.state.clothPool} refreshNumber={this.state.refreshNumber} />

      </Div>
      </Div>
      </Col>
      </Div>
      </Col>
      <Col xs={{span:4 }} style={{backgroundColor:'beige', width:'100%' }}>
      {
        this.state.selectedStyle == 'Business Formal' &&
        <Div>
        <Div  color='black' textAlign='center'>
        <h3 style={{textDecoration:'underline'}}>Business Casual</h3>
        <P>
        <Div overflowY='scroll' height='135px'>
        relating to or denoting a style of clothing that is less formal than traditional business wear, but is still intended to give a professional and businesslike impression.
        "I don't wear a dark suit to work, thanks to the business casual trend"
        </Div>
        </P>
        </Div>
        <Div height='300px' backgroundImg={Selection} backgroundSize='cover' width='100%' >
        </Div>
        </Div>
      }
      {
        this.state.eventDetails.selectedStyle == 'Casual' &&
        <Div>
        <Div  color='black' textAlign='center'>
        <h3 style={{textDecoration:'underline'}}>Business Casual</h3>
        <P>
        <Div overflowY='scroll' height='135px'>
This includes jeans, sweaters, t-shirts, sneakers, and much more. However, it usually excludes flip-flops, sweats or gym clothes, revealing clothes, stained clothes, heavily distressed or ripped items, and graphic shirts with offensive or controversial statements on them.
        </Div>
        </P>
        </Div>
        <Div height='300px' backgroundImg={Casual} backgroundSize='cover' width='100%' >
        </Div>
        </Div>
      }
      {
        this.state.eventDetails.selectedStyle == 'Business Casual' &&
        <Div>
        <Div  color='black' textAlign='center'>
        <h3 style={{textDecoration:'underline'}}>Business Casual</h3>
        <P>
        <Div overflowY='scroll' height='135px'>
        relating to or denoting a style of clothing that is less formal than traditional business wear, but is still intended to give a professional and businesslike impression.
        "I don't wear a dark suit to work, thanks to the business casual trend"
        </Div>
        </P>
        </Div>
        <Div height='300px' backgroundImg={Selection} backgroundSize='cover' width='100%' >
        </Div>
        </Div>
      }
      {
        this.state.eventDetails.selectedStyle == 'Zoom Casual' &&
        <Div>
        <Div  color='black' textAlign='center'>
        <h3 style={{textDecoration:'underline'}}>Zoom Casual</h3>
        <P>
        <Div overflowY='scroll' height='135px'>
          A collection specifically catered to Zoom events.
        </Div>
        </P>
        </Div>
        <Div height='300px' backgroundImg={ZoomCasual} backgroundSize='cover' width='100%' >
        </Div>
        </Div>

      }
      <Div  height='100px' display='flex' justifyContent='center' alignItems='center'>
      <Button onClick={this.handleGenerate}>Auto Generate Form </Button>
      </Div>
      </Col>
      </Row>
      </Div>
      <Row>
        <Col xs={12}>
        {
          this.state.loginEmail == '' ?
        <Div  padding='10px 0'>
        <h4> Welcome, please <span onClick={(e)=>{e.preventDefault();this.handleToggle()}}  style={{textDecoration:'underline', 'cursor':'pointer'}} >login</span> to save your changes </h4>

        </Div>:
        <Div padding='10px 0'>
        Welcome, <span style={{textDecoration:'underline', fontWeight:'bold'}}>{this.state.loginEmail}</span> - your event will be saved in the backend to track metrics.
        </Div>
      }

      </Col>
        <Col xs={6}>

        </Col>
      </Row>
        <Row>
          <Col xs={12}>
          <Form
            eventDetails = {this.state.eventDetails}
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
           />
        </Col>
          <Col xs={6}>

          </Col>
        </Row>
        <Row>
        <Col xs={12}>

        </Col>
        </Row>
        </Container>
        </Div>


    )
  }
}


Template.propTypes = {

}
export default Template;
