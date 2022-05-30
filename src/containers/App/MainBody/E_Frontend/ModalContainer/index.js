import React from 'react';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'shared/Button'
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';
const FunctionalComponent = (props) =>{

  return (
    <div>
    <Modal show onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Popup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          props.login &&
          <Row>
          <Col xs={12}>
          <div class="list-group-item list-group-item-action flex-column align-items-start ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control  onChange={(e)=>{props.handleLogin(e.target.value)}} value={props.loginEmail} placeholder="Your email" />
            <Form.Text className="text-muted">
            </Form.Text>
            </Form.Group>
          </div>
          </Col>
          </Row>
        }
        {
          props.success_confirmation &&
          <Row>
          <Col xs={12}>
          <div class="list-group-item list-group-item-action flex-column align-items-start ">

          <P>
          Success: <span style={{fontWeight:'bold'}}>{props.eventDetails.name}</span> has been created, your event will happen on  <span style={{fontWeight:'bold'}}>{props.eventDetails.date}</span>, for  <span style={{fontWeight:'bold'}}>{props.eventDetails.howManyInvited}</span> guests, the theme is <span style={{fontWeight:'bold'}}>{props.eventDetails.selectedTheme}</span>.
          An email will be sent to: <span style={{fontWeight:'bold'}}>{props.loginEmail}</span> with this information as well; here is the <h3>Your Event Code is: <span style={{fontWeight:'bold'}}>Event004</span></h3> you will give your guests.
          </P>
          <P>We recommend to send out invitations to your email list, with the promo code to the Armoire within <span style={{fontWeight:'bold'}}> 14 days of the event </span>, to see the landing page of your guests:  <span><StyledLink to='/user-front-end'> User Landing Page</StyledLink></span> </P>
            <P>
              For now, please notify us if you need anything changed. <StyledLink to='/'>Contact Us </StyledLink>
            </P>
          </div>
          </Col>
          </Row>
        }

      </Modal.Body>
      <Modal.Footer>

        <Button variant="primary" Armoire onClick={props.handleClose} color='white' width='100%'>
        <StyledLink to='/event-planner-back-end' >
        <span style={{color:'white'}}>
        Continue to Backend
        </span>
        </StyledLink>
        </Button>
      </Modal.Footer>
    </Modal>
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
