import React from 'react';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'

const FunctionalComponent = (props) =>{

  return (
    <div>
    <NoMPUl>
    <Row>
    <Col xs={4}>
    <Li>
    <Div width='100%' height='170px' border='2px solid white' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][0]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][1]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][2]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    </Row>
    <Div padding='5px 0' />
    <Row>
    <Col xs={4}>
    <Li>
    <Div width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][3]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][4]} backgroundSize='100%'></Div>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][5]} backgroundSize='100%'></Div>
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
