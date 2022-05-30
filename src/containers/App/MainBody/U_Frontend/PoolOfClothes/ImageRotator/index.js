import React from 'react';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'

const FunctionalComponent = (props) =>{
//handleSelect = {this.handleSelect} selectedNumber = {this.state.selectedNumber
  return (
    <div style={{cursor:'pointer'}}>
    <NoMPUl>
    <Row>
    <Col xs={4}>
    <Li>
    <Div cursor='pointer' onClick={()=>{props.handleSelect(1)}} pr = {props.selectedNumber == 1} width='100%' height='170px' border='2px solid white' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][0]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div  cursor='pointer' onClick={()=>{props.handleSelect(2)}} pr = {props.selectedNumber == 2} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][1]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div  cursor='pointer' onClick={()=>{props.handleSelect(3)}} pr = {props.selectedNumber == 3} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][2]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    </Row>
    <Div padding='5px 0' />
    <Row>
    <Col xs={4}>
    <Li>
    <Div  cursor='pointer' onClick={()=>{props.handleSelect(4)}} pr = {props.selectedNumber == 4} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][3]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div  cursor='pointer' onClick={()=>{props.handleSelect(5)}} pr = {props.selectedNumber == 5} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][4]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div  cursor='pointer' onClick={()=>{props.handleSelect(6)}} pr = {props.selectedNumber == 6} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][5]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    </Row>
    </NoMPUl>
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
