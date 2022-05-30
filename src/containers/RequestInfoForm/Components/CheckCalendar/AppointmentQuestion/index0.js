import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';

//shared
import Input from 'shared/Input';
import TextArea from 'shared/TextArea';
import Button from 'shared/Button';
import Calendar from 'react-calendar';
import ClosedDate from 'components/App/HelperFunctions/ClosedDate';
import TimePicker from './TimePicker';
import Error from 'shared/Error';
import {H5} from 'shared/H';
import HoursTab from '../HoursTab';
import FontAwesome from 'react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import ToggleOneThenNext from 'containers/App/HelperFunctions/ToggleOneThenNext';
import Span from 'shared/Span';
import WordCompressor from 'shared/WordCompressor';
import Select from 'shared/Select';
import Option from 'shared/Option';
require('../view.css')
require('./Calendar.css')
// -----
class AppointmentTab extends React.Component {
  constructor(){
    super();
    this.state = {
      onFocusArray: [true,true,false,false],
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
      array[1] = true;
    }
   if(props.contactObject.errors.phone || props.contactObject.errors.email){
      array[2] = true;
    }

   if(props.contactObject.errors.comment){
      array[3] = true;
    }
    if(props.contactObject.errors.date){
       array[4] = true;
     }
    this.setState({
      onFocusArray: array,
    })
  }

  }
  handleDateOpen(evt){
    if(evt){
      this.setState({
        showTimes: true,
        onFocusArray: [false,false,false,false,true],
        isDateOpen: false
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
            <Li>
              <Div onClick= {(e)=>{this.handleFocusChange(0)}}>
                <HoursTab dropdown = {this.state.onFocusArray[0]}/>
              </Div>
            </Li>
            <Li>
              <Div display="flex" justifyContent="space-between" id="1" onClick= {(e)=>{this.handleFocusChange(1)}}>
                <Div display="flex" alignItems="center" flexWrap="nowrap">
                  <H5>Name: {this.props.contactObject.errors.fullName ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}
                  </H5>
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
                <FontAwesome name={this.state.onFocusArray[1]? "caret-up":'caret-down'}/>

              </Div>
              <CSSTransition
                in={this.state.onFocusArray[1]}
                timeout={500}
                classNames="view"
                unmountOnExit
              >
                <Div>

                  <Div display="flex" flexDirection="column" alignItems="flex-start">
                    <Input
                      placeholder="Your name"
                      width="100%"
                      error={this.props.contactObject.errors.fullName}
                      onChange={(e)=>{this.props.onContactChange('fullName',e.target.value)}}
                      value={this.props.contactObject.fullName}
                      name="name"
                      id="1"
                      onFocus = {(e)=>{this.handleFocusChange(1)}}
                    />
                    <Error>{this.props.contactObject.errors.fullName}</Error>
                  </Div>
                </Div>
              </CSSTransition>

            </Li>
            <Li>
              <Div  display="flex" justifyContent="space-between" id="2" onClick= {(e)=>{this.handleFocusChange(2)}}>
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
                <FontAwesome name={this.state.onFocusArray[2] ? "caret-up":'caret-down'}/>
              </Div>
              <CSSTransition
                in={this.state.onFocusArray[2] }
                timeout={500}
                classNames="view"
                unmountOnExit
              >
                <Div display="flex" flexWrap="nowrap" flexDirection="column"  >
                  <Div display="flex" margin="0 0 5px 0" flexDirection="column">
                    <Input
                      width="100%"
                      placeholder="Your phone number"
                      error={this.props.contactObject.errors.phone}
                      onChange={(e)=>{this.props.onContactChange(e.target.name,e.target.value)}}
                      value={this.props.contactObject.phone}
                      name="phone"
                      id="2"
                      onFocus = {(e)=>{this.handleFocusChange(2)}}
                    />
                    <Error>{this.props.contactObject.errors.phone}</Error>
                  </Div>
                  <Div display="flex" flexDirection="column">
                    <Input
                      width="100%"
                      placeholder="Your email"
                      error={this.props.contactObject.errors.email}
                      onChange={(e)=>{this.props.onContactChange(e.target.name,e.target.value)}}
                      value={this.props.contactObject.email}
                      name="email"
                      id="2"
                      onFocus = {(e)=>{this.handleFocusChange(2)}}
                    />
                    <Error>{this.props.contactObject.errors.email}</Error>
                  </Div>
                  <Div margin='10px 0' >
                    <Select  themed color="white">
                      <Option>Email Me</Option>
                      <Option>Call Me</Option>
                      <Option>Text Me</Option>
                    </Select>
                  </Div>
                </Div>
              </CSSTransition>
            </Li>
            <Li width="100%">
              <Div display="flex" justifyContent="space-between" id="4" onClick= {(e)=>{this.handleFocusChange(3)}}>
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

                <FontAwesome name={this.state.onFocusArray[3] ? "caret-up":'caret-down'}/>

              </Div>
              <CSSTransition
                in={this.state.onFocusArray[3]}
                timeout={500}
                classNames="view"
                unmountOnExit
              >
                <Div display="flex"  width="100%" flexDirection="column" alignItems="flex-start">
                  <TextArea
                    error={this.props.contactObject.errors.comment}
                    onChange={(e)=>{this.props.onContactChange(e.target.name,e.target.value)}}
                    value={this.props.contactObject.comment}
                    name="comment"
                    id="4"
                    onFocus = {(e)=>{this.handleFocusChange(3)}}
                  ></TextArea>
                  <Error>{this.props.contactObject.errors.comment}</Error>
                </Div>
              </CSSTransition>
            </Li>
            <Li>
              <Div onClick={()=>{this.handleDateOpen();this.handleFocusChange(4)}}>
                <Div display="flex" justifyContent="space-between" id="4" onClick= {(e)=>{this.handleFocusChange(4)}}>
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
                  <FontAwesome name={this.state.onFocusArray[4] ? "caret-up":'caret-down'}/>
                </Div>

              </Div>
              <CSSTransition
                in={this.state.onFocusArray[4]}
                timeout={500}
                classNames="view"
                unmountOnExit
              >
                <Div  >
                  {
                    this.props.contactObject.date === '' &&
                    <Div  error={this.props.contactObject.errors.date} >
                      <Calendar
                        className = "calendar"
                        tileDisabled = {(date) => ClosedDate(date)}
                        minDate= {new Date()}
                        onClickDay = {(day)=>{this.props.onCalendarClick(day)}}
                      />
                    </Div>
                  }
                  {
                    this.props.contactObject.date !== '' &&
                    <TimePicker
                      onCloseCalendar = {this.handleDateOpen}
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
        <Button themed color="white" width="100%" onClick={()=>{this.props.onContactSubmit('appointment')}}>Request Appointment</Button>
      </Div>
  )
}

}
AppointmentTab.propTypes = {
  onContactChange: PropTypes.func.isRequired,
  onContactSubmit: PropTypes.func.isRequired,
  contactObject: PropTypes.object.isRequired,
  onCalendarClick: PropTypes.func,
  onTimeChange: PropTypes.func.isRequired
}
export default AppointmentTab;
