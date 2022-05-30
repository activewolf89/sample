

import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'shared/Button'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import StyledLink from 'shared/StyledLink';
const FunctionalComponent = (props) =>{

  return (
    <div>
    <Form>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>1) Event Name</Form.Label>
        <Form.Control  onChange={(e)=>{props.handleChange('name',e.target.value)}} value={props.eventDetails.name} placeholder="Young Kim's Business Party" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
      </div>
      </Col>
      </Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>2) Event Type</Form.Label>
        </div>
        <Form.Select aria-label="Event Type"  onChange={(e)=>{props.handleChange('selectedStyle',e.target.value)}} value={props.eventDetails.selectedStyle}>
        <option value="Business Casual">Business Casual</option>
        <option value="Zoom Casual">Zoom Casual</option>
          <option value="Casual">Casual</option>
          <option value="Business Formal">Business Formal</option>
        </Form.Select>
      </div>
      </Col>
      </Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>3) Special Theme</Form.Label>
        </div>
        <Form.Select aria-label="Event Type" onChange={(e)=>{props.handleChange('selectedTheme',e.target.value)}} value={props.eventDetails.selectedTheme}>
          <option >Optional</option>
          <option value="White Clothes Event">White Clothes Event</option>
          <option value="Black Dress Party">Black Dress Party</option>
          <option value="Summer Cocktail Celebration">Summer Cocktail Celebration</option>
          <option value="Vibrant Tops">Vibrant Tops</option>
        </Form.Select>
      </div>
      </Col>
      </Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>3) What day is your event? <span style={{fontWeight:'bold'}}>*closest event date is 14 calendar days from today </span> </Form.Label>
        </div>
        <input type='date' onChange={(e)=>{props.handleChange('date',e.target.value)}} value={props.eventDetails.date} />
      </div>
      </Col>
      </Row>
      <Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>3) How many will be invited?</Form.Label>
        </div>
        <Form.Select aria-label="Event Type" onChange={(e)=>{props.handleChange('howManyInvited',e.target.value)}} value={props.eventDetails.howManyInvited}>
          <option value="1">1-5</option>
          <option value="2">6-15</option>
          <option value="3">16-30</option>
          <option value="3">31-60</option>
          <option value="3">61-100</option>
          <option value="3">101-200</option>
          <option value="3">200+</option>
        </Form.Select>
      </div>
      </Col>
      </Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start " >
      <div class="d-flex w-100 justify-content-between">
      <Form.Label>4) Event Reminders For Recipients</Form.Label>
      </div>
        <textarea onChange={(e)=>{props.handleChange('eventReminders',e.target.value)}} value={props.eventDetails.eventReminders} style={{width:'500px',height:'500px', border:'2px solid gray'}} placeholder="This will be generated on the quick copy for your recipients" />

      </div>
      </Col>
      </Row>
      <Row>
        <Col xs={{span:12}} >
        <Div  padding='10px' >
        <Button Armoire color='white' padding='10px' width='510px' onClick={(e) =>{e.preventDefault();props.handleSubmit()}}>
        Start Your Event
        </Button>
        </Div>
        </Col>
      </Row>
    </Form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  className: PropTypes.string,
};

FunctionalComponent.defaultProps = {
  className: null,
};

export default FunctionalComponent;

// eventDetails: {
//   name:'',
//   selectedStyle:'Business Casual',
//   selectedTheme:false,
//   date: false,
//   howManyInvited: "1-5",
//   eventReminders:'test'
// }
