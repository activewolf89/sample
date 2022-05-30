import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//shared
import Title from 'shared/Title';
import Lorum from 'shared/lorum';
import RepairStyle from './RepairStyle';
import NumberOfRequests from './NumberOfRequests';
import ImageSection from './ImageSection';
import CommentSection from './CommentSection';
import CustomerInfo from './CustomerInfo';
import {validateEmail} from 'containers/App/HelperFunctions/Validators'
import Type from './Type';
// -----
const ParentGrid = styled(Div)`
display: grid;
grid-template-rows: auto;
grid-template-columns: repeat(8,1fr);
grid-column-gap: 10px;
grid-template-areas:
" firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne"
" form form form form form form form form ";

;
@media only screen and (min-width: 996px) {

  grid-template-columns: 1fr repeat(6,150px) 1fr;
  grid-template-areas:
  " firstOne firstOne firstOne firstOne firstOne firstOne firstOne firstOne"
  " . form form form form form form . ";

}

`
class RepairPage extends React.Component {
  constructor(props){
    super()
    this.state ={
      name: 'Reed Denny',
      phone: '2066825555',
      email: 'reeddenny@gmail.com',
    repairRequests:[{type:'Repair',category:'Engagement Ring',metal:'Platinum',comment:'Test',photos:[],requestValidators:{}}],
    originalBlank: {type:'Repair',category:'Engagement Ring',metal:'Platinum', comment:'Test',photos:[],requestValidators:{}},
    currentRequest:0,
    contactValidators: {},
    repairRequestErrorIndex: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);
    this.handleIncrementRequest = this.handleIncrementRequest.bind(this);
    this.handleTransitionRequest = this.handleTransitionRequest.bind(this);
    this.handleRemoveRequest = this.handleRemoveRequest.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handlePhotoDelete = this.handlePhotoDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }
  handleSubmit(){
    var successfulSubmit = false;
    //check our validators
    var validationErrors = {};
    var RepairRequestError = false;
    var {name,phone,email,repairRequests,repairRequestErrorIndex} = this.state;
    repairRequests.forEach((repair,index)=>{
      if(repair.metal === ''){
        repairRequestErrorIndex = index;
        RepairRequestError = true;
        repair.requestValidators['metal'] = "enter metal"
      } else {
        repair.requestValidators['metal'] = ""
        repairRequestErrorIndex = false;
      }
      if(repair.comment === ''){
        repairRequestErrorIndex = index;
        RepairRequestError = true;
        repair.requestValidators['comment'] = "enter comment information"

      } else {
        repair.requestValidators['comment'] = ""
        repairRequestErrorIndex = false;

      }
      // if(repair.photos.length < 1){
      //   repairRequestErrorIndex = index;
      //   repair.requestValidators['photo'] = "enter at least one photo"
      //   RepairRequestError = true;
      // } else {
      //   repair.requestValidators['photo'] = ""
      //   repairRequestErrorIndex = false;
      // }
    })
    if(name === ''){
      validationErrors.name = "please enter full name"
    }
    if( phone ==='' || phone === '1' || phone === '+' || phone === '+1'){
      validationErrors.phone = "please submit phone"
    }
    if(!validateEmail(email)){
      validationErrors.email = "email isn't in correct format"
    }
    if(email === ''){
      validationErrors.email = "please submit email"
    }
    if(Object.keys(validationErrors).length === 0 && !RepairRequestError){
      successfulSubmit = true;
      const {repairRequests,name,phone,email} = this.state;
      this.props.onServiceSubmit({repairRequests:repairRequests,name:name,phone:phone,email:email})
    }
    if(successfulSubmit){
      this.setState({
        name: '',
        phone: '',
        email: '',
        contactValidators: validationErrors,
        repairRequests: [this.state.originalBlank],
        repairRequestErrorIndex: repairRequestErrorIndex,
        currentRequest: 0,
      })
    } else {
    this.setState({
      contactValidators: validationErrors,
      repairRequests: repairRequests,
      repairRequestErrorIndex: repairRequestErrorIndex,
      currentRequest: repairRequestErrorIndex ? repairRequestErrorIndex: this.state.currentRequest
    })
  }
  }
  handlePhoneChange(value){
    var {contactValidators} = this.state
    contactValidators.phone = '';
    this.setState({
      phone: value,
      contactValidators: contactValidators
    })
  }
  handlePhotoDelete(index){
    var {repairRequests,currentRequest} = this.state;
    repairRequests[currentRequest].photos.splice(index,1)
    this.setState({
      repairRequests: repairRequests
    })
  }
  handlePhotoChange(e){
    var {repairRequests,currentRequest} = this.state;

    var fileList = e.target.files;
    if(fileList.length > 0){
      Object.keys(fileList).forEach((keyName,keyIndex)=>{
          var fileReader = new FileReader();
          var file = fileList[keyName];
        //iterate thru object, and for each of these lets check if its a jpg/pdf/png/jpeg or if the file is too large
        if(file.type.match(/(png|jpg|jpeg)$/)){
          if(file.size <= 5120000){
            //matches
            fileReader.readAsDataURL(file);
            fileReader.onload = (e)=>{
              const base64String = e.target.result;
              var currentRepairObject = repairRequests[currentRequest];
              currentRepairObject['photos'].push(base64String);

              currentRepairObject.requestValidators.photos = '';
                repairRequests[currentRequest] = currentRepairObject

              this.setState({
                repairRequests: repairRequests
              })
            }
          } else {
            return ('')

          }
        } else {
          return ('')
        }
      })
}
  }
  handleInputChange(name,value){
    var {repairRequests,currentRequest} = this.state;
    //repairRequests[currentRequest].name = value
    var currentRepairObject = repairRequests[currentRequest];
    currentRepairObject[name] = value;
    repairRequests[currentRequest] = currentRepairObject
    this.setState({
      repairRequests: repairRequests
    })
  }
  handleRemoveRequest(index){
    var {repairRequests,currentRequest} = this.state;
    repairRequests.splice(index,1)
    var currentNum = currentRequest - 1;
    if(currentNum === -1){
      currentNum = 0;
    }
    this.setState({
      currentRequest: currentNum,
      repairRequests: repairRequests

    })
  }
  handleStringChange(name,value){
    var reg = /^[a-zA-Z]+$/;
    var {contactValidators} = this.state;
    switch(name) {
    case 'name':
    if(reg.test(value) || value === ''){
      contactValidators.name = '';
    this.setState({
      [name]:value,
      contactValidators: contactValidators

    })
  }
        break;
    case 'email':
    contactValidators.email = '';
    this.setState({
      [name]:value,
      contactValidators: contactValidators

    })
        break;
    default:
    this.setState({
      [name]:value
    })
}


  }
  handleTransitionRequest(currentRequest){
    this.setState({
      currentRequest: currentRequest
    })
  }
  handleIncrementRequest(){
    var {repairRequests,originalBlank} = this.state;
    var newOriginalBlank = Object.assign({},originalBlank)
    repairRequests.push(newOriginalBlank)
    this.setState({
      repairRequests: repairRequests,
      currentRequest: this.state.repairRequests.length -1
    })
  }
  render(){
    return (

    <ParentGrid>
      <Div  gridArea="firstOne" display="flex" flexDirection="column" themed>
        <Title pageTitle>Service Form</Title>
        <Lorum half/>
      </Div>
      <Div  gridArea="form" border="1px solid black" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <CustomerInfo
          contactValidators = {this.state.contactValidators}
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          onStringChange = {this.handleStringChange}
          onPhoneChange = {this.handlePhoneChange}
        />
        <NumberOfRequests
          onRemoveRequest = {this.handleRemoveRequest}
          onTransitionRequest = {this.handleTransitionRequest}
          onIncrementRequest = {this.handleIncrementRequest}
          repairRequests = {this.state.repairRequests}
          currentRequest = {this.state.currentRequest}
        />
        {this.state.repairRequests.map((request,index,array)=>{
          if(index === this.state.currentRequest){
            return (
              <Div key={index}>
                <Type
                  type = {request.type}
                  onTypeChange = {this.handleInputChange}
                />
                <RepairStyle error ={request.requestValidators} metal={request.metal} category={request.category} onInputChange = {this.handleInputChange}/>
                <ImageSection onPhotoDelete = {this.handlePhotoDelete} requestObject = {request} onPhotoChange = {this.handlePhotoChange}/>
                <CommentSection comment = {request.comment} onInputChange = {this.handleInputChange}/>
              </Div>
            )
          } else {
            return ('')
          }
        })}
        <input type="submit" onClick={()=>{this.handleSubmit()}} />
      </Div>
    </ParentGrid>
  )

}
}
RepairPage.propTypes = {
  onServiceSubmit: PropTypes.func.isRequired
}
export default RepairPage;
