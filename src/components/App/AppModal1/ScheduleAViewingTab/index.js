import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';

//shared
import Input from 'shared/Input';
import TextArea from 'shared/TextArea';
import Span from 'shared/Span';
import Button from 'shared/Button';
import Calendar from 'react-calendar';
import ClosedDate from 'components/App/HelperFunctions/ClosedDate';
import TimePicker from './TimePicker';
import Error from 'shared/Error';
import HoursTab from '../HoursTab';
import FontAwesome from 'react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import ToggleOneThenNext from 'containers/App/HelperFunctions/ToggleOneThenNext';
import NoImage from 'images/NoImage.png';
import WordCompressor from 'shared/WordCompressor';
import {H5} from 'shared/H';

require('../view.css')
require('./Calendar.css')

// -----
class ScheduleAViewing extends React.Component {
  constructor(){
    super();
    this.state = {
      onFocusArray: [true,true,false,false,false],
      isDateOpen: false,
      showTimes:false

    }
    this.handleFocusChange = this.handleFocusChange.bind(this)
    this.handleDateOpen = this.handleDateOpen.bind(this)
  }
  UNSAFE_componentWillReceiveProps(props){
    let array = this.state.onFocusArray;
    if(props.contactObject.submitFailed){
      array.forEach((input,index)=>{
        array[index] = false
      })
    if(props.contactObject.errors.fullName){
      array[2] = true;
    } else {
      array[2] = false;
    }
   if(props.contactObject.errors.phone || props.contactObject.errors.email){
      array[3] = true;
    } else {
      array[3] = false;
    }
    if(props.contactObject.errors.comment){
       array[4] = true;
     } else {
       array[4] = false;
     }
    if(props.contactObject.errors.date){
       array[5] = true;
     } else {
       array[5] = false;
     }

    this.setState({
      onFocusArray: array,
    })
  }

  }
  handleDateOpen(evt){
    if(evt){
    this.setState({
      isDateOpen: !this.state.isDateOpen,
      showTimes: true
    })
    } else {

    let array = this.state.onFocusArray;
    array.forEach((input,index)=>{
      array[index] = false
    })
    this.setState({
      isDateOpen: !this.state.isDateOpen,
      onFocusArray: array
    })

  }
  }
  handleFocusChange(index){

    this.setState({
      onFocusArray: ToggleOneThenNext(this.state.onFocusArray,index),
      isDateOpen: false

    })
  }
  render(){
  return (
    <Div >
      <form>

        <NoMPUl borderBottom="1px solid white" display="flex" flexDirection="column"  childrenPadding="5px 0" margin="10px 0">
          <Li width="100%">
            <Div display="flex" justifyContent="space-between" id="3" onClick= {(e)=>{this.handleFocusChange(0)}}>
              <H5>Item: <Span fontStyle="italic">{this.props.itemToView.ItemKey}</Span></H5>
              <FontAwesome name={this.state.onFocusArray[0] ? "caret-up":'caret-down'}/>
            </Div>
            <CSSTransition
              in={this.state.onFocusArray[0]}
              timeout={500}
              classNames="view"
              unmountOnExit
            >
              <Div display="flex" flexDirection="column" alignitems="center" justifyContent='center' >

              </Div>
            </CSSTransition>

          </Li>
          <Li>
            <Div onClick= {(e)=>{this.handleFocusChange(1)}}>
              <HoursTab dropdown = {this.state.onFocusArray[1]}/>
            </Div>
          </Li>
          <Li>
            <Div display="flex" justifyContent="space-between" id="2" onClick= {(e)=>{this.handleFocusChange(1)}}>
              <Div display="flex" alignItems="center" flexWrap="nowrap">
                <H5>Name: {this.props.contactObject.errors.fullName ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}</H5>
                <Span whiteSpace="nowrap" fontStyle="italic">
                  {
                    this.props.contactObject.fullName.length > 0 &&
                    <WordCompressor
                      text={this.props.contactObject.fullName}
                      size={10}
                    />
                  }
                </Span>
              </Div>

              <FontAwesome name={this.state.onFocusArray[2]? "caret-up":'caret-down'}/>
            </Div>
            <CSSTransition
              in={this.state.onFocusArray[2]}
              timeout={500}
              classNames="view"
              unmountOnExit
            >
              <Div>
                <Input
                  width="100%"
                  placeholder="Enter name"
                  error={this.props.contactObject.errors.fullName}
                  onChange={(e)=>{this.props.onContactChange('fullName',e.target.value)}}
                  value={this.props.contactObject.fullName}
                  name="name"
                  id="2"
                  onFocus = {(e)=>{this.handleFocusChange(2)}}
                />
                <Error>{this.props.contactObject.errors.fullName}</Error>
              </Div>
            </CSSTransition>

          </Li>
          <Li>
            <Div  display="flex" justifyContent="space-between" id="2" onClick= {(e)=>{this.handleFocusChange(3)}}>
              <Div display="flex" alignItems="center" flexWrap="nowrap">
                <H5>Contact: {(this.props.contactObject.errors.phone || this.props.contactObject.errors.email) ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}</H5>
                <Span whiteSpace="nowrap" fontStyle="italic">
                  {
                    this.props.contactObject.phone.length > 0 &&
                    <WordCompressor
                      text={this.props.contactObject.phone}
                      size={10}
                    />
                  }
                </Span>
              </Div>

              <FontAwesome name={this.state.onFocusArray[3] ? "caret-up":'caret-down'}/>
            </Div>
            <CSSTransition
              in={this.state.onFocusArray[3] }
              timeout={500}
              classNames="view"
              unmountOnExit
            >
              <Div display="flex" flexWrap="nowrap" flexDirection="column"  >
                <Div display="flex" margin="0 0 5px 0" flexDirection="column">
                  <Input
                    placeholder="Enter phone"
                    error={this.props.contactObject.errors.phone}
                    onChange={(e)=>{this.props.onContactChange(e.target.name,e.target.value)}}
                    value={this.props.contactObject.phone}
                    name="phone"
                    id="2"
                    onFocus = {(e)=>{this.handleFocusChange(3)}}
                  />
                  <Error>{this.props.contactObject.errors.phone}</Error>
                </Div>
                <Div display="flex" flexDirection="column">
                  <Input
                    placeholder="Enter email"
                    error={this.props.contactObject.errors.email}
                    onChange={(e)=>{this.props.onContactChange(e.target.name,e.target.value)}}
                    value={this.props.contactObject.email}
                    name="email"
                    id="2"
                    onFocus = {(e)=>{this.handleFocusChange(3)}}
                  />
                  <Error>{this.props.contactObject.errors.email}</Error>
                </Div>
              </Div>
            </CSSTransition>
          </Li>
          <Li width="100%">
            <Div display="flex" justifyContent="space-between" id="3" onClick= {(e)=>{this.handleFocusChange(4)}}>
              <Div display="flex" alignItems="center" flexWrap="nowrap">

                <H5>Comment: {this.props.contactObject.errors.comment ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}</H5>
                <Span whiteSpace="nowrap" fontStyle="italic">
                  {
                    this.props.contactObject.comment.length > 0 &&
                    <WordCompressor
                      text={this.props.contactObject.comment}
                      size={10}
                    />
                  }
                </Span>
              </Div>
              <FontAwesome name={this.state.onFocusArray[4] ? "caret-up":'caret-down'}/>

            </Div>
            <CSSTransition
              in={this.state.onFocusArray[4]}
              timeout={500}
              classNames="view"
              unmountOnExit
            >
              <Div display="flex"  width="100%" flexDirection="column" alignItems="flex-start">
                <TextArea
                  placeholder="Enter comment"
                  error={this.props.contactObject.errors.comment}
                  onChange={(e)=>{this.props.onContactChange(e.target.name,e.target.value)}}
                  value={this.props.contactObject.comment}
                  name="comment"
                  id="3"
                  onFocus = {(e)=>{this.handleFocusChange(4)}}
                ></TextArea>
                <Error>{this.props.contactObject.errors.comment}</Error>
              </Div>
            </CSSTransition>
          </Li>
          <Li>
            <Div onClick= {(e)=>{this.handleFocusChange(5)}} display="flex" justifyContent="space-between">
              <Div display="flex" alignItems="center" flexWrap="nowrap">
                <H5>Request Date: {this.props.contactObject.errors.date ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}</H5>
                <Span whiteSpace="nowrap" fontStyle="italic">
                  {
                    this.props.contactObject.date &&
                    <WordCompressor
                      text={this.props.contactObject.date.toDateString()}
                      size={10}
                    />
                  }
                </Span>
              </Div>
              <FontAwesome name={this.state.onFocusArray[5] ? "caret-up":'caret-down'}/>

            </Div>
            <CSSTransition
              in={this.state.onFocusArray[5]}
              timeout={500}
              classNames="view"
              unmountOnExit
            >
              <Div display="block" onClick= {(e)=>{this.handleFocusChange(5)}}>
                {
                  this.props.contactObject.date === '' &&
                  <Div error={this.props.contactObject.errors.date} display="inline-block">
                    <Calendar
                      className = "calendar"
                      tileDisabled = {(date) => ClosedDate(date)}
                      minDate= {new Date()}
                      onClickDay = {(day)=>{this.props.onCalendarClick(day)}}
                    />
                  </Div>
                }
                {
                  this.props.contactObject.date  &&
                  <TimePicker
                    onCalendarClick = {this.props.onCalendarClick}
                    startTime =  {this.props.contactObject.startTime}
                    endTime =  {this.props.contactObject.endTime}
                    date = {this.props.contactObject.date}
                    onTimesChange = {this.props.onTimeChange}
                  />
                }
                <Error textAlign="left">{this.props.contactObject.errors.date}</Error>
              </Div>
            </CSSTransition>

          </Li>
        </NoMPUl>
      </form>
      <Button onClick={()=>{this.props.onContactSubmit('scheduleAViewing',this.props.itemToView.ItemKey)}} themed width="100%" color="white" >Set Appointment</Button>
    </Div>
  )
}

}
ScheduleAViewing.propTypes = {
  onContactChange: PropTypes.func.isRequired,
  onContactSubmit: PropTypes.func.isRequired,
  contactObject: PropTypes.object.isRequired,
  onCalendarClick: PropTypes.func,
  onTimeChange: PropTypes.func.isRequired
}
export default ScheduleAViewing;
