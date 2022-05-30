import React,{Component} from "react";

import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import { CSSTransition } from 'react-transition-group';
import "./stylesz.css";

import Crossings from './Crossings';
import styled from 'styled-components';
const StyledDiv2 = styled(Div)`
top: 60px;
  height: 100%;
 position: fixed;
 width: 100%;
 max-width; 100vw;
 right: 0;
 overflow-y: auto;
 z-index: 4000000000000000;
  @media only screen and (min-width: 996px) {
    top: 0;
    width: auto;
    width: 996px;

  }
`
class AppModal extends Component{
  constructor(props){
    super(props)
    this.state = {
        email: '',
        call: '',
        text: '',
        name: '',
        date: '',
        time: '',
        address: '',
        zipcode: '',
        city: '',
        state: '',
        comment: '',
        service: '',
        category: '',
        metal: '',
        nextsteps: '',
        details: '',
        photos:'',
    }
    this.checkIfData = this.checkIfData.bind(this)
    this.handleCountInputs = this.handleCountInputs.bind(this)

  }
  UNSAFE_componentWillReceiveProps(props){
    if(props.active === ''){
      this.setState({
        email: '',
        call: '',
        text: '',
        name: '',
        date: '',
        time: '',
        address: '',
        zipcode: '',
        city: '',
        state: '',
        comment: '',
        service: '',
        category: '',
        metal: '',
        nextsteps: '',
        details: '',
        photos:'',
      })
    }
  }
  handleCountInputs = function(key,value){
    this.setState({
      [key]:value
    })
  }
  checkIfData = function(){
    var foundAnInput = false;
    for(let key in this.state){
      if(this.state[key] !== ''){
        foundAnInput = true;
      }
    }
    if(foundAnInput && !this.props.isUserData){
      var resultOfRequest = window.confirm("Would you like to leave unfinished form?")
      if(resultOfRequest){
        this.props.onToggleDetail('closeIt')
      }
    } else {
      this.props.onToggleDetail('closeIt')

    }
  }
  render(){
    var checkedKey = this.props.choiceKey !== undefined ? this.props.choiceKey.toLowerCase():"";
    return (
      <Div >

        <CSSTransition
          in={this.props.active ? true:false}
          timeout={400}
          classNames="zAppPage"
        unmountOnExit>
          <StyledDiv2  themed   overflow='hidden' >
            <Crossings
              dailys = {this.props.dailys}
              onSwapIndex = {this.props.onSwapIndex}
              eventsChecklist = {this.props.eventsChecklist}
              specificItems = {this.props.specificItems}
              PullSpecificInfo = {this.props.PullSpecificInfo}
              originalComment = {this.props.originalComment}
              active = {this.props.active}
              onContactClick = {this.props.onContactClick}
              onSearchChange={this.props.onSearchChange}
              searchInput={this.props.searchInput}
              isSearching = {this.props.isSearching}
              searchItems = {this.props.searchItems}
              searchItemsFrom = {this.props.searchItemsFrom}
              history = {this.props.history}
              onAddToWishlist = {this.props.onAddToWishlist}
              onToggleDetail = {this.props.onToggleDetail}
              choiceKey={this.props.choiceKey}
              checkedKey = {checkedKey}
              knowledgeArray = {this.props.knowledgeArray}
              doNotScroll={true}
              questionToScrollTo = {
                {
                  topic:this.props.faqClickObject.topic,
                  question: this.props.faqClickObject.question
                }
              }
              category={this.props.faqClickObject.category}
              noBrowse = {true}
              faqObject={this.props.faqObject}
              rootPath={'/'}
              userProfile = {this.props.userProfile}
              onCountInputs = {this.handleCountInputs}
              onContactChange = {this.props.onContactChange}
              contactObject = {this.props.contactObject}
              onCalendarClick = {this.props.onCalendarClick}
              onTimeChange = {this.props.onTimeChange}
              onContactSubmit = {this.props.onContactSubmit}
              onRemoveDate = {this.props.onRemoveDate}
              onSendHint = {this.props.onSendHint}
              itemToView = {this.props.itemToView}
            />
          </StyledDiv2>
        </CSSTransition>
        <CSSTransition
          in={this.props.active ? true:false}
          timeout={0}
          classNames="fadeBackground"
        unmountOnExit>
          <Div onClick={()=>{this.checkIfData()}} position='fixed' top='0px' left='0px' zIndex='120000' width='100vw' height='100%' opacity='.7' backgroundColor='black'>
          </Div>
        </CSSTransition>
      </Div>
      )
      }

      }
AppModal.propTypes = {
  updatePreferredContact: PropTypes.func.isRequired,
  onAddToWishlist: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  onContactSubmit: PropTypes.func,
  contactObject: PropTypes.object,
  sendEmailConfirmation: PropTypes.func,
  onCalendarClick: PropTypes.func,
  maxPrice: PropTypes.number,
  onToggleDetail: PropTypes.func,
  choiceKey: PropTypes.string,
  active: PropTypes.string,
  category: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onTimeChange: PropTypes.func

}
export default AppModal;
