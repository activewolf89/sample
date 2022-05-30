import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PropTypes from 'prop-types';

//shared
import {validateEmail} from 'containers/App/HelperFunctions/Validators'
import GetParameterByname from 'containers/ShopNew/Helpers/getParameterByName'

import Input from 'shared/Input';
import Button from 'shared/Button';
import Error from 'shared/Error';
import ToggleOneThenNext from 'containers/App/HelperFunctions/ToggleOneThenNext';
import SetupMessage from 'containers/App/HelperFunctions/SetupMessage';
import Title from 'shared/Title';
import ListLink from './ListLink';
import TextareaAutosize from 'react-textarea-autosize';
// -----
class DropAHint extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      LtdennyLink: "ltdenny.com" + this.props.history.location.pathname,
      stringOfItemKeys: GetParameterByname('ItemKey'),
      onFocusArray: [true,true,false,false,false],
      isDateOpen: false,
      showTimes:false,
      dropAHintSuccessful: false,
      infoObject: {
        recipientEmail: '',
        message: ''
      },
      errorObject: {
        recipientEmail: '',
        message: ''
      },
    }
    this.handleFocusChange = this.handleFocusChange.bind(this)
    this.handleDateOpen = this.handleDateOpen.bind(this)
    this.handleInfoChange = this.handleInfoChange.bind(this)
    this.onSendHint = this.onSendHint.bind(this)
  }
  UNSAFE_componentWillReceiveProps(props){
    var obj = Object.assign({},this.state.infoObject)
    if(props.specificItems.length > 0){

      this.setState({
        infoObject: SetupMessage(obj,props.specificItems)
      })
    }
  }
  componentDidMount(){
    const {stringOfItemKeys} = this.state
    if(stringOfItemKeys !== ""){
      this.props.PullSpecificInfo(stringOfItemKeys)
    }
  }
  handleInfoChange(value,name){
    var newObject = Object.assign({},this.state.infoObject)
    newObject[name] = value
    this.setState({
      infoObject: newObject
    })
  }
  onSendHint(e){
    e.preventDefault()
    var errorObject = {}
    var triggered = false;
    var infoObject = Object.assign({},this.state.infoObject)

    if(infoObject.recipientEmail === ""){
      triggered = true;
      errorObject.recipientEmail = "this field is required"
    }
    if(!validateEmail(infoObject.recipientEmail) && !errorObject.recipientEmail){
      triggered = true;
      errorObject.recipientEmail = "Please enter a valid email address"
    }

    this.setState({
      errorObject: errorObject,
    })
    if(!triggered){
      //no errors can submit
      var newObject = Object.assign({},this.state.infoObject)
      newObject.link = this.props.history.location.pathname
      this.props.onSendHint(this.state.infoObject,this.props.specificItems,this.state.LtdennyLink)
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
      <Div height="100%">
        <form>
          <NoMPUl borderBottom="1px solid white" display="flex" flexDirection="column"  childrenPadding="5px 0" margin="10px 0">

            <Li width="100%">
              <Div display="flex" flexWrap="nowrap"  alignItems="flex-end" id="0" >
                <Title>To:</Title>

              </Div>

              <Div display="flex"  width="100%" flexDirection="column" alignItems="flex-start">
                <Div width="100%" padding="5px 0">
                  <Input
                    error={this.state.errorObject.recipientEmail}
                    value={this.state.infoObject.recipientEmail}
                    onChange={(e)=>{this.handleInfoChange(e.target.value,'recipientEmail')}}
                    placeholder="Recipient email"
                    name="email"
                    width="100%"
                    id="1"
                  ></Input>
                </Div>
                <Error>{this.state.errorObject.recipientEmail}</Error>
              </Div>

            </Li>

            <Li>
              <Div display="flex" alignItems="flex-end" justifyContent="space-between" id="2" onClick= {(e)=>{this.handleFocusChange(3)}}>
                <Div display="flex"  >
                  <Title>Comment: </Title>
                </Div>
              </Div>
              <Div>
                <Div display="flex" flexDirection="column" alignItems="flex-start">
                  <TextareaAutosize
                    minRows={3}
                    rows={4}
                    style={{width:'100%'}}
                    onClick= {(e)=>{this.handleFocusChange(3)}}
                    onChange={(e)=>{this.handleInfoChange(e.target.value,e.target.name)}}
                    value={this.state.infoObject.message}
                    name="message"
                    id="1"
                  />
                </Div>
              </Div>
            </Li>
            <Li width="100%">
              <ListLink
                ltdennyLink = {this.state.LtdennyLink}
                stringOfItemKeys = {this.state.stringOfItemKeys}
                history={this.props.history}
              />

            </Li>
          </NoMPUl>
          <Div padding='5px 0'>
            <Title>
              <Button   width="100%" onClick={(e)=>{this.onSendHint(e)}}>Send Email</Button>
            </Title>
          </Div>
        </form>
      </Div>
  )
}

}
DropAHint.propTypes = {
  PullSpecificInfo: PropTypes.func.isRequired,
  onContactChange: PropTypes.func.isRequired,
  contactObject: PropTypes.object.isRequired,
}
export default DropAHint;
