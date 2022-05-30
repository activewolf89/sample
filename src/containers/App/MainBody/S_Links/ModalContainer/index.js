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

import Wireframes from './wireframes.pdf'
import EmailConfirmation from './email_receipt_final.pdf'
import EmailConfirmationRecipient from './for_sure.pdf'

const FunctionalComponent = (props) =>{

  return (
    <div>
    <Modal show onHide={props.handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>Popup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
    props.whichModal == 'wireframe' &&
    <embed src={Wireframes} frameborder="0" width="100%" height="400px" />
    }
    {


      props.whichModal == 'recipient_email' &&
      <embed src={EmailConfirmationRecipient} frameborder="0" width="100%" height="400px" />

    }
    {
      props.whichModal =='event_email' &&
      <embed src={EmailConfirmation} frameborder="0" width="100%" height="400px" />
    }
      </Modal.Body>
      <Modal.Footer>

        <Button variant="primary" Armoire onClick={props.handleClose} color='white' width='100%'>
          Exit
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
