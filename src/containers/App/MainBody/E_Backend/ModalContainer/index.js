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
import VibrantTops from './VibrantTops'

const FunctionalComponent = (props) =>{

  return (
    <div>

    <Modal show onHide={props.handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>Popup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
    props.whichModal == 'business_casual' ?
    <VibrantTops selectedStyle="Business Casual" passed event_detail_obj = {{
        "Business Casual":{
          name:'Business But Casual Event',
          date: '03-03-2022',
          guests: '1-5',
          theme: 'none',
          code: 'Event003',
          link: '/user-front-end/event-003',
          reference: 'It may be sunny today at our outside garden event business casual meeting, dont forget to bring sunglasses!'

        },
        "Zoom Casual":{
          name:'Vibrant Shirt Zoom Meeting',
          date: '2022-07-11',
          guests: '16-30',
          theme: 'Vibrant Tops',
          code: 'Event004',
          link: '/user-front-end/event-004',
          reference: 'We will be doing a zoom session catered to welcoming a new member, and thought it would be fun to try out a new experimental Armoire feature that caters to successful events!'
        }
      }
    }
     />
    :
      <VibrantTops selectedStyle="Zoom Casual"  event_detail_obj = {{
          "Business Casual":{
            name:'Business But Casual Event',
            date: '03-03-2022',
            guests: '1-5',
            theme: 'none',
            code: 'Event003',
            link: '/user-front-end',
            reference: 'It may be sunny today at our outside garden event business casual meeting, dont forget to bring sunglasses!'

          },
          "Zoom Casual":{
            name:'Vibrant Shirt Zoom Meeting',
            date: '2022-07-11',
            guests: '16-30',
            theme: 'Vibrant Tops',
            code: 'Event004',
            link: '/user-front-end',
            reference: 'We will be doing a zoom session catered to welcoming a new member, and thought it would be fun to try out a new experimental Armoire feature that caters to successful events!'
          }
        }
      } />
    }
      </Modal.Body>
      <Modal.Footer>
      <Div display='flex' justifyContent='space-between'  width='100%'>

      {
        props.showEdit ? <Div>
        <h5 style={{backgroundColor:'maroon', color:'white', padding:'20px'}}>To Edit please contact Armoire</h5>
        </Div>:
        <Button disabled = {props.showEdit} color='black' width='300px' onClick={props.handleEdit}>
          Edit
        </Button>
      }
        <Button variant="primary" Armoire onClick={props.handleClose} color='white' width='300px'>
          Exit
        </Button>
        </Div>
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
