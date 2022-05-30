import React from 'react';
import PropTypes from 'prop-types';
import Ul from 'shared/Ul'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'shared/Button'
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';
import ImageRotator from '../../../ImageRotator'
import Selection from './start_your_selection.jpg';
import ZoomCasual from './zoom_casual.jpg';
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

const FunctionalComponent = (props) =>{
  console.log(props)
  var clothPool =  {
    "Business Casual": [[BC0,BC1,BC2,BC3,BC4,BC5]],
    "Zoom Casual": [[Z0,Z1,Z2,Z3,Z4,Z5]],
  }
  return (
    <div>
    <Container fluid>

    <Row>
    <Col xs={3} offset={1}>
    <h5>
    # Invited: <span style={{textDecoration:'underline'}}>10</span>
    </h5>

    </Col>
    <Col xs={3} offset={1}>
    <h5>
    # Registered: <span style={{textDecoration:'underline'}}>8</span>
    </h5>
    </Col>
    <Col xs={3} offset={1}>
    <h5>
    # Filled Survey: <span style={{whiteSpace:'nowrap',textDecoration:'underline'}}>{props.passed ? 6: ""}</span>
    </h5>
    </Col>
    </Row>

    <Row>
    <Row>
    <Col xs={12}>
    <div class="list-group-item list-group-item-action flex-column align-items-start ">
      <div class="d-flex w-100 justify-content-between">
      <h4 style={{textDecoration:'underline'}}>Selected Clothing Pool </h4>
      </div>
      </div>
    </Col>
  </Row>
  <Row>
  <Col xs={12}>
  <ImageRotator selectedStyle={props.selectedStyle} clothPool = {clothPool} refreshNumber={0} />
  </Col>
  </Row>
    <Col xs={12}>
    <div class="list-group-item list-group-item-action flex-column align-items-start ">
      <div class="d-flex w-100 justify-content-between">
      <h4 style={{textDecoration:'underline'}}>Event Details </h4>
      </div>
      </div>
      <Ul>
      <Li>Name:<span style={{fontWeight:'bold'}}> {props.event_detail_obj[props.selectedStyle].name}</span></Li>
      <Li>Date:<span style={{fontWeight:'bold'}}>{props.event_detail_obj[props.selectedStyle].date}</span> </Li>
      <Li>Guests:<span style={{fontWeight:'bold'}}>{props.event_detail_obj[props.selectedStyle].guests}</span></Li>
      <Li>Theme: <span style={{fontWeight:'bold'}}>{props.event_detail_obj[props.selectedStyle].theme}</span></Li>
      <Li>Event Code:<span style={{fontWeight:'bold'}}> {props.event_detail_obj[props.selectedStyle].code}</span></Li>
      <Li>Event Reminders:<span style={{fontWeight:'bold'}}> {props.event_detail_obj[props.selectedStyle].reference}</span></Li>
      </Ul>
    </Col>
    </Row>
    <Row>
    <Col xs={6}>
    <div class="list-group-item list-group-item-action flex-column align-items-start ">
      <div class="d-flex w-100 justify-content-between">
      <StyledLink to={props.event_detail_obj[props.selectedStyle].link}>Event Guest Landing Page</StyledLink>
      </div>
      </div>
    </Col>
    <Col xs={6}>
    <div class="list-group-item list-group-item-action flex-column align-items-start " style={{cursor:'pointer'}}>
      <div class="d-flex w-100 justify-content-between">
      <h4>
      {props.passed ?
        <a href='https://docs.google.com/forms/d/1wijEtM95RY9cu2ucam_KK3XsT644ao1Ix9_l1AU6wX0/edit?ts=629275f1#responses' target="_blank" style={{textDecoration:'none'}}>
        Post-Event Survey Results
        </a>
        :'Post-Event Survey Results - TBD'}
        </h4>
      </div>
      </div>
    </Col>
    </Row>
    </Container>
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
