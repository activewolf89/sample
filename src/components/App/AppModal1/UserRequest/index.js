import React,{Component} from "react";
import Div from 'shared/Div';
import ScheduleAViewing from './ScheduleAViewing';
import AskAQuestion from './AskAQuestion';
import DropAHintTab from './DropAHintTab';
import SpecialOrder from './SpecialOrder';
import Button from 'shared/Button';
import CheckValueIfError from './CheckValueIfError.js';
import ShowSuccess from './ShowSuccess';
import ServiceForm from './ServiceForm';
import ItemNotFound from './ItemNotFound';
import MyAccount from 'containers/MyAccount'

class UserRequest extends Component{
  constructor(props){
    super(props)
    this.state = {
      preferredContact: {
        email: {preference: true,value:'',showError:false,error:'Enter Valid Email'},
        call: {preference: false,value:'',showError:false,error:'Number Is Not In Proper Format'},
        text: {preference: false,value:'',showError:false,error:'Number Is Not In Proper Format'},
        name: {preference: false,value:'',showError:false,error:'Enter Name'},
        date: {preference: false,value:'',showError:false,error:'Enter Date'},
        time: {preference: false,value:'',showError:false,error:'Enter Time'},
        address: {preference: false,value:'',showError:false,error:'Enter Address'},
        zipcode: {preference: false,value:'',showError:false,error:'Enter Valid Zipcode'},
        city: {preference: false,value:'',showError:false,error:'Enter City'},
        state: {preference: false,value:'',showError:false,error:'Enter State'},
        comment: {preference: false,value:this.props.originalComment,showError:false,error:'Enter Comment'},
        service: {preference: false,value:'',detailedValue:'',showError:false,error:'Enter Service'},
        category: {preference: false,value:'',detailedValue:'',showError:false,error:'Enter Category'},
        metal: {preference: false,value:'',detailedValue:'',showError:false,error:'Enter Metal'},
        nextsteps: {preference: false,value:'',detailedValue:'',showError:false,error:'Enter Nextsteps'},
        details: {preference: false,value:'',detailedValue:'',showError:false,error:'Enter Details'},
      },
      photos:[],
      feedback:['start the conversation'],
      valuesToCheck: {
        'service':['name','email','call','text','comment','service','category','metal'],
        'schedule a viewing': ['name','email','call','text','date','time'],
        'appointment': ['name','email','call','text','date','time'],
        'ask a question':['name','email','call','text','comment'],
        'email':['name','email','call','text','comment'],
        'special order':['name','email','call','text','comment','address','zipcode'],
      },
      hintObject: {},
      showSuccess: false
      //spending night anniversary thursday - late thursday or early friday poulus
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePreferredContactChange = this.handlePreferredContactChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancelAppointment = this.handleCancelAppointment.bind(this)
    this.handleSendHint = this.handleSendHint.bind(this)
    this.handlePhotoChange = this.handlePhotoChange.bind(this)
    this.handlePhotoDelete = this.handlePhotoDelete.bind(this)
    this.handleFeedback = this.handleFeedback.bind(this)
    this.handleSendAdjustedPriceUpwards = this.handleSendAdjustedPriceUpwards.bind(this)

  }
  componentDidMount(){
    var obj = Object.assign({},this.state.preferredContact)
    if(this.props.userProfile.fName){
      obj.email.value = this.props.userProfile.email
      obj.name.value = this.props.userProfile.fName
      this.setState({
        preferredContact: obj
      })
    }
  }
  handleFeedback(value){
    var newArray = this.state.feedback.slice()
    var triggered = false;
    newArray.forEach((string,idx)=>{
      if(string === value){
        triggered = true
        newArray.splice(idx,1)
      }
    })
    if(!triggered){
      newArray.push(value)
    }
    this.setState({
      feedback: newArray
    })
  }
  handlePhotoDelete(index){
    var newPhotos = this.state.photos.slice()
    newPhotos.splice(index,1)
    this.setState({
      photos: newPhotos
    })
  }
  handlePhotoChange(e){
    var fileList = e.target.files;
    var newPhotos = this.state.photos.slice()
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
              newPhotos.push(base64String);
              this.setState({
                photos: newPhotos
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
  handleSendHint = function(obj){
    this.setState({
      showSuccess: true,
      hintObject: obj
    })
  }
  handleSendAdjustedPriceUpwards = function(nSpecialPrice){
      this.props.itemToView.ItemSpecialPrice = nSpecialPrice
  }

  handleSubmit = function(){
    var arrayToCheck = this.state.valuesToCheck[this.props.choiceKey];
    var newObj = Object.assign({},this.state.preferredContact)
    newObj['nextsteps'].value = this.state.feedback.join(',')
    newObj['category'].value = newObj['category'].value !== "Other" ? newObj['category'].value: newObj['category'].detailedValue
    newObj['service'].value = newObj['service'].value !== "Other" ? newObj['service'].value: newObj['service'].detailedValue
    newObj['metal'].value = newObj['metal'].value !== "Other" ? newObj['metal'].value: newObj['metal'].detailedValue
    var triggerError = false;
    arrayToCheck.forEach((key)=>{
      if(CheckValueIfError(key,newObj)){
        //found and error
        newObj[key].showError = true;
        triggerError = true;
      } else {
        newObj[key].showError = false;
      }
    })
    if(triggerError){
      this.setState({
        preferredContact:newObj
      })
      // this.props.onContactSubmit(this.state.preferredContact,this.props.itemToView.ItemKey)

    } else {
      //successfully submitted..
      this.props.onContactSubmit(newObj,this.props.choiceKey,this.props.itemToView,this.state.photos)
      this.setState({
        showSuccess: true
      })
    }

  }
  handleInputChange = function(objName,key,val,detailedValue){
    this.props.onCountInputs(key,val)

    var newObj = Object.assign({},this.state[objName])

    if(detailedValue){
      newObj[key].detailedValue = val

    } else {
      newObj[key].value = val

    }
    newObj[key].showError = false
    this.setState({
      [objName]: newObj
    })

  }
  handleCancelAppointment = function(date){
    var newObj = Object.assign({},this.state.preferredContact)
    newObj.date.value = '';
    newObj.time.value = '';
    this.setState({
      preferredContact: newObj
    })
  }
  handlePreferredContactChange = function(name){
    var newObj = Object.assign({},this.state.preferredContact)
    let alert = false;
    for(let key in newObj){
      if(name !== key){
        newObj[key].preference = false
      } else {
        newObj[key].preference = true
        alert = true;
      }
    }
    if(!alert){
      newObj['email'].preference = true;
    }
    if(name === 'text' && this.state.preferredContact.call.value){
      newObj['text'].value = newObj['call'].value
    }
    this.setState({
      preferredContact: newObj
    })


  }
  render(){
    return(
      <Div  >

        {
          this.state.showSuccess ?
            <ShowSuccess
              onToggleDetail = {this.props.onToggleDetail}
              preferredContact = {this.state.preferredContact}
              choiceKey = {this.props.choiceKey}
              product = {this.props.itemToView}
              hintObject = {this.state.hintObject}
            />:
            <Div>
              {
                this.props.choiceKey === 'login' &&
                <MyAccount
                  onToggleDetail = {this.props.onToggleDetail}
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}

                />
              }
              {
                this.props.choiceKey === 'email' &&
                <AskAQuestion
                  onToggleDetail = {this.props.onToggleDetail}
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}

                />
              }
              {
                this.props.choiceKey ==='drop a hint' &&
                <DropAHintTab
                  specificItems = {this.props.specificItems}
                  PullSpecificInfo = {this.props.PullSpecificInfo}
                  userProfile={this.props.userProfile}
                  history={this.props.history}
                  onContactChange = {this.props.onContactChange}
                  contactObject = {this.props.contactObject}
                  choiceKey = {this.props.choiceKey}
                  onSendHint = {(e,e2,e3)=>{this.handleSendHint(e);this.props.onSendHint(e,e2,e3)}}
                  product = {this.props.itemToView}

                />
              }
              {
                this.props.choiceKey === 'schedule a viewing' &&
                <ScheduleAViewing
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}
                  choiceKey = {this.props.choiceKey}
                  product = {this.props.itemToView}
                />
              }
              {
                this.props.choiceKey === 'appointment' &&
                <ScheduleAViewing
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}
                  choiceKey = {this.props.choiceKey}
                  product = {this.props.itemToView}
                />
              }
              {
                this.props.choiceKey === 'special order' &&
                <SpecialOrder
                  sendAdjustedPriceUpwards = {this.handleSendAdjustedPriceUpwards}
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}
                  product = {this.props.itemToView}
                  choiceKey = {this.props.choiceKey}

                />
              }
              {
                this.props.choiceKey === 'service' &&
                <ServiceForm
                  onFeedback = {this.handleFeedback}
                  feedback= {this.state.feedback}
                  onPhotoDelete = {this.handlePhotoDelete}
                  onPhotoChange = {this.handlePhotoChange}
                  onToggleDetail = {this.props.onToggleDetail}
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}
                  photos = {this.state.photos}

                />
              }
              {
                this.props.choiceKey === 'ask a question' &&
                <AskAQuestion
                  onToggleDetail = {this.props.onToggleDetail}
                  onCancelAppointment = {this.handleCancelAppointment}
                  onInputChange = {this.handleInputChange}
                  onPreferredContactChange = {this.handlePreferredContactChange}
                  preferredContact = {this.state.preferredContact}
                  valuesToCheckArray = {this.state.valuesToCheck[this.props.choiceKey]}
                  choiceKey = {this.props.choiceKey}
                  product = {this.props.itemToView}
                />
              }
              {
                this.props.choiceKey ==="item not found" &&
                <ItemNotFound
                  onToggleDetail = {this.props.onToggleDetail}

                />
              }
              {
                this.props.choiceKey !=='drop a hint' && this.props.choiceKey !== "login" && this.props.choiceKey !== "item not found" &&
                <Div padding="0 0 150px 0">
                  <Button onClick={this.handleSubmit} width='100%'  >Submit</Button>
                </Div>
              }
            </Div>
        }
      </Div>
    )
  }
}

export default UserRequest;
