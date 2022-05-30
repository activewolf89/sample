import React,{Component} from "react";
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import ReactTable from "react-table";
import OrganizeData from './OrganizeData';
import {CreateAddressTransition,CreatePhoneTransition} from './Helpers/HelperObject';
import {CheckPassword,CheckPhone,CheckDate,CheckAddress,CheckEmail,CheckName} from 'containers/App/HelperFunctions/CheckInputs';
import A from 'shared/A';
import PasswordMask from 'shared/PasswordMask';
import Modal from './Modal';

class Class extends Component{
  constructor(props){
    super(props);
    this.state = {
      CustomerFirstName: {visible:{remove:false,value:""},transition:'', name:'First Name',changed:false,original:this.props.userProfile._Customer.CustomerFirstName,new:this.props.userProfile._Customer.CustomerFirstName,indexSelected:0},
      CustomerLastName: {visible:{remove:false,value:""},transition:'',name:'Last Name',changed: false, original:this.props.userProfile._Customer.CustomerLastName,new:this.props.userProfile._Customer.CustomerLastName,indexSelected:0},
      Email: {visible:{remove:false,value:"Email"},transition:'',name:'Email',changed:false,original:this.props.userProfile.email,new:this.props.userProfile.email},
      Password: {visible:{remove:false,value:""},transition:'',name:'Password',changed: false, original:'',new:'',confirmNew:'',indexSelected:0},
      Addresses: {visible:{remove:true,value:["AddressStreet","AddressStreet2","AddressCity","AddressState","AddressZip"]},errorObject:{},transition:CreateAddressTransition(),name:'Addresses',changed:false,original:JSON.parse(JSON.stringify(this.props.userProfile._Customer.Addresses)),
      new:this.props.userProfile._Customer.Addresses.length === 0 ?[CreateAddressTransition()]:JSON.parse(JSON.stringify(this.props.userProfile._Customer.Addresses)),indexSelected:0},
      Phones: {visible:{remove:true,value:["PhonePhone"]},transition:CreatePhoneTransition(),name:"Phones",changed:false,original:JSON.parse(JSON.stringify(this.props.userProfile._Customer.Phones)),
      new:this.props.userProfile._Customer.Phones.length === 0 ? [CreatePhoneTransition()]:JSON.parse(JSON.stringify(this.props.userProfile._Customer.Phones)),indexSelected:0},
      CustomerBirthdate: {visible:{remove:false,value:"CustomerBirthDate"},transition:'',name:"Birthdate",changed:false,original:this.props.userProfile._Customer.CustomerBirthDate,new:this.props.userProfile._Customer.CustomerBirthDate,indexSelected:0},
      CustomerWeddingAnniv: {visible:{remove:false,value:"CustomerWeddingAnniv"},transition:'',name:"Anniversary",changed:false,original:this.props.userProfile._Customer.CustomerWeddingAnniv,new:this.props.userProfile._Customer.CustomerWeddingAnniv,indexSelected:0},
      modal: false,
      selectedEdit: {key:'',title:'',error:false,messageString:''},
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleUpdateUserProfile = this.handleUpdateUserProfile.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleStringInputChange = this.handleStringInputChange.bind(this);
    this.handleUpdateSubUserProfile = this.handleUpdateSubUserProfile.bind(this);
    this.handleObjectChange = this.handleObjectChange.bind(this);
    this.handleChangeFocus = this.handleChangeFocus.bind(this);
    this.handleClearInputs = this.handleClearInputs.bind(this);
    this.handleAddTemplate = this.handleAddTemplate.bind(this);

  }

  handleAddTemplate = function(){
    var newSelectedEdit= Object.assign({},this.state.selectedEdit);
    var objToEdit = this.state[newSelectedEdit.key];

    var transitionObj = JSON.parse(JSON.stringify(objToEdit.transition))
    objToEdit.new.push(transitionObj);
    objToEdit.indexSelected = objToEdit.indexSelected + 1;
    newSelectedEdit.error= false;

    this.setState({
      [newSelectedEdit.key]:objToEdit,
      selectedEdit: newSelectedEdit
    })

  }
  handleChangeFocus = function(key,idx){
    var newObj = Object.assign({},this.state[key])
    newObj.indexSelected = idx
    this.setState({
      [key]:newObj
    })

  }
  handleClearInputs = function(){
    var newSelectedEdit = Object.assign({},this.state.selectedEdit)
    const {key} = newSelectedEdit
    var Obj = this.state[key];
    if(Array.isArray(Obj.new)){
      //find which spot
      Obj.new[Obj.indexSelected] = JSON.parse(JSON.stringify(Obj.transition))

    } else {
      Obj.new = '';
      if(Obj.confirmNew){
        Obj.confirmNew = ''
      }
    }
    newSelectedEdit.messageString = 'Cleared Selected Inputs'
    this.setState({
      [key]:Obj,
      selectedEdit: newSelectedEdit

    })
  }
  handleObjectChange = function(name,value){
    var newSelectedEdit= Object.assign({},this.state.selectedEdit);

    var key = this.state.selectedEdit.key
    var newObj = Object.assign({},this.state[key])
    newObj.new[newObj.indexSelected].PairValue[name] = value
    // newObj.new = newNewObj
    newSelectedEdit.messageString = "Typing Input..."
    this.setState({
      selectedEdit:newSelectedEdit,
      [key]:newObj
    })
  }

  handleClose = function(){
    var newCustomerFirstName = Object.assign({},this.state.CustomerFirstName)
    newCustomerFirstName.new = newCustomerFirstName.original
    var newCustomerLastName = Object.assign({},this.state.CustomerLastName)
    newCustomerLastName.new = newCustomerLastName.original
    var newEmail = Object.assign({},this.state.Email)
    newEmail.new = newEmail.original
    var newAddresses = Object.assign({},this.state.Addresses)
    newAddresses.new = JSON.parse(JSON.stringify(newAddresses.original))

    var newPhones = Object.assign({},this.state.Phones)
    newPhones.new = JSON.parse(JSON.stringify(newPhones.original))
    var newCustomerBirthdDate = Object.assign({},this.state.CustomerBirthdate)
    newCustomerBirthdDate.new = newCustomerBirthdDate.original
    var newCustomerWeddingAnniv = Object.assign({},this.state.CustomerWeddingAnniv)
    newCustomerWeddingAnniv.new = newCustomerWeddingAnniv.original
    //--------------------
    var {key} = this.state.selectedEdit
    var newSelectedEdit = Object.assign({},this.state.selectedEdit)
    var MainObject = Object.assign({},this.state[key])
    var PasswordObject = Object.assign({},this.state['Password']);
    PasswordObject.new = '';
    PasswordObject.confirmNew = '';
    MainObject.new = MainObject.original;
    newSelectedEdit.error = false;
    newSelectedEdit.messageString = '';
    newSelectedEdit.masterError = ''

    this.setState({
      checkedExistingEmail: false,
      selectedEdit:newSelectedEdit,
      modal: false,
      [key]:MainObject,
      Password:PasswordObject,
      CustomerFirstName: newCustomerFirstName,
      CustomerLastName: newCustomerLastName,
      Email: newEmail,
      Addresses:newAddresses,
      Phones:newPhones,
      CustomerBirthdate: newCustomerBirthdDate !== '' ? newCustomerBirthdDate:'',
      CustomerWeddingAnniv: newCustomerWeddingAnniv !== '' ? newCustomerWeddingAnniv:'',
    })
  }
  handleUpdateSubUserProfile = function(ifRemoved){
    var cutAddress = false
    var cutPhones = false
    const {key,title} = this.state.selectedEdit;
    var {Password,CustomerFirstName,CustomerLastName,Email,Phones,Addresses,CustomerBirthdate,CustomerWeddingAnniv} = this.state
    var newSelectedEdit = Object.assign({},this.state.selectedEdit)
    var ifPassed = false;
    switch(key){
      case "CustomerFirstName":
       var {passed,error} = CheckName(CustomerFirstName.new,title,CustomerFirstName.original)

      if(passed){
         ifPassed = true;
        newSelectedEdit.error = false
        newSelectedEdit.messageString = "Updated First Name"
        var newCustomerFirstName = JSON.parse(JSON.stringify(CustomerFirstName))
        newCustomerFirstName.original = newCustomerFirstName.new;
        this.setState({
          CustomerFirstName: newCustomerFirstName
        })
      } else {
        ifPassed = false;
        newSelectedEdit.error = error
        newSelectedEdit.messageString = "Fix Errors"


      }
      break;
      case "CustomerLastName":

      if(CheckName(CustomerLastName.new,title,CustomerLastName.original).passed){
        ifPassed = true;
        newSelectedEdit.error = false
        newSelectedEdit.messageString = "Updated Last Name"
        var newCustomerLastName = JSON.parse(JSON.stringify(CustomerLastName))
        newCustomerLastName.original = newCustomerLastName.new;
        this.setState({
          CustomerLastName: newCustomerLastName
        })

      } else {
        ifPassed = false;
        newSelectedEdit.error = CheckName(CustomerLastName.new,title,CustomerLastName.original).error
        newSelectedEdit.messageString = "Fix Errors"

      }
      break;
      case "Email":
      if(CheckEmail(Email.new,title,Email.original).passed && this.props.serverErrorObject.registerExistingEmail === ''){
        ifPassed = true;
        newSelectedEdit.error = false
        newSelectedEdit.messageString = "Updated Email"

        var newEmail = JSON.parse(JSON.stringify(Email))
        newEmail.original = newEmail.new;
        this.setState({
          Email: newEmail
        })

      } else {
        ifPassed = false;
        newSelectedEdit.error = CheckEmail(Email.new,title,Email.original).error
        newSelectedEdit.messageString = "Fix Errors"

      }
      break;
      case "Password":
      if(CheckPassword(Password,title).passed){
        ifPassed = true;
        newSelectedEdit.messageString = "Updated Password"
        newSelectedEdit.error= false
      } else {
        ifPassed = false;
        newSelectedEdit.messageString = "Fix Errors"
        newSelectedEdit.error= CheckPassword(Password,title).passwords;

      }
      break;
      case "Addresses":
      if(CheckAddress(Addresses.new,title,Addresses.original).passed && isNaN(ifRemoved)){
        newSelectedEdit.messageString = "Updated Address"
        newSelectedEdit.error= false;
        ifPassed = true;
        var newAddresses = JSON.parse(JSON.stringify(Addresses))
        newAddresses.original = newAddresses.new;
        this.setState({
          Addresses: newAddresses
        })
      } else if(isNaN(ifRemoved)) {
        ifPassed = false;
        newSelectedEdit.error= CheckAddress(Addresses.new,title,Addresses.original).addresses;
        newSelectedEdit.masterError = CheckAddress(Addresses.new,title,Addresses.original).error
        newSelectedEdit.messageString = "Fix Errors"

      } else {
         newAddresses = JSON.parse(JSON.stringify(this.state.Addresses))
        newAddresses.new.splice(ifRemoved)
        newAddresses.original.splice(ifRemoved)
           cutAddress = newAddresses
          ifPassed = true;

      }

      break;
      case "Phones":
      if(CheckPhone(Phones.new,title,Phones.original).passed && isNaN(ifRemoved)){
        newSelectedEdit.messageString = "Updated Phone"
        newSelectedEdit.error = false;
        ifPassed = true;
        var newPhones = JSON.parse(JSON.stringify(Phones))
        newPhones.original = newPhones.new;
        this.setState({
          Phones: newPhones
        })
      } else if(isNaN(ifRemoved)){
        ifPassed = false;
        newSelectedEdit.error = CheckPhone(Phones.new,title,Phones.original).phones
        newSelectedEdit.messageString = "Fix Errors"
        newSelectedEdit.masterError = CheckPhone(Phones.new,title,Phones.original).error
      }
       else {
          newPhones = JSON.parse(JSON.stringify(this.state.Phones))
         newPhones.new.splice(ifRemoved)
         newPhones.original.splice(ifRemoved)
            cutPhones = newPhones
           ifPassed = true;
      }
      break;
      case "CustomerBirthdate":
        if(CheckDate(CustomerBirthdate.new,title,CustomerBirthdate.original).passed){
          newSelectedEdit.messageString = "Updated Birthdate"
          newSelectedEdit.error= false;
          ifPassed = true;

          var newCustomerBirthdate = JSON.parse(JSON.stringify(CustomerBirthdate))
          newCustomerBirthdate.original = newCustomerBirthdate.new;
          this.setState({
            CustomerBirthdate: newCustomerBirthdate
          })


        } else {
          ifPassed = false;
          newSelectedEdit.error= CheckDate(CustomerBirthdate.new,title,CustomerBirthdate.original).error;
          newSelectedEdit.messageString = "Fix Errors"


        }
      break;
      case "CustomerWeddingAnniv":
      if(CheckDate(CustomerWeddingAnniv.new,title,CustomerWeddingAnniv.original).passed){
        newSelectedEdit.messageString = "Updated Anniversary"
        newSelectedEdit.error= false;
        ifPassed = true;

        var newCustomerWeddingAnniv = JSON.parse(JSON.stringify(CustomerWeddingAnniv))
        newCustomerWeddingAnniv.original = newCustomerWeddingAnniv.new;
        this.setState({
          CustomerWeddingAnniv: newCustomerWeddingAnniv
        })

      } else {
        ifPassed = false;
        newSelectedEdit.error= CheckDate(CustomerWeddingAnniv.new,title,CustomerWeddingAnniv.original).error;
        newSelectedEdit.messageString = "Fix Errors"


      }
      break;
      default:
      break;
    }
    if(ifPassed){
      if(!cutAddress && !cutPhones){
      this.props.onEditUser(newSelectedEdit.key,this.state[newSelectedEdit.key],this.props.userProfile._Customer._id);
    }
    this.setState({
      modal: false,
    },()=>{
      if(cutAddress){
      this.setState({
    Addresses:cutAddress
  },()=>{
    this.props.onEditUser(newSelectedEdit.key,this.state[newSelectedEdit.key],this.props.userProfile._Customer._id);

  })
    }
    if(cutPhones){
    this.setState({
  Phones:cutPhones
},()=>{
  this.props.onEditUser(newSelectedEdit.key,this.state[newSelectedEdit.key],this.props.userProfile._Customer._id);

})
  }
    })
    }
    this.setState({
      "selectedEdit": newSelectedEdit
    })
  }

  handleStringInputChange = function(key,value,fromPassword){
    var newSelectedEdit = Object.assign({},this.state.selectedEdit)
    var newObj = Object.assign({},this.state[key])
    if(fromPassword){
      newObj.confirmNew = value;
    } else {
      newObj.new = value;
    }
    newSelectedEdit.messageString = "Typing Input..."
    this.setState({
      selectedEdit: newSelectedEdit,
      [key]:newObj
    })

  }
  handleUpdateUserProfile = function(key){
    var newObj = Object.assign({},this.state.selectedEdit)
    newObj.title = this.state[key].name
    newObj.key = key
    var newAddresses = JSON.parse(JSON.stringify(this.state.Addresses))
    if(key === 'Addresses' && newAddresses.original.length === 0){
      newAddresses.new = [CreateAddressTransition()]
      this.setState({
        Addresses: newAddresses
      })

    }
    var newPhones = JSON.parse(JSON.stringify(this.state.Phones))
    if(key === 'Phones' && newPhones.original.length ===0){
      newPhones.new = [CreateAddressTransition()]
      this.setState({
        Phones: newPhones
      })
    }
    this.setState({
      modal: true,
      selectedEdit: newObj

    })

  }
   handleOptionChange = function(fieldName,idx){
    var newObj = Object.assign({},this.state[fieldName])
    newObj.indexSelected = Number(idx);
    this.setState({
      [fieldName]:newObj
    })
  }
  render(){
    const columns = [{
      Header: 'Field',
      accessor: 'fieldName',
      Cell: (props) =>{
        return (
          <Div fontWeight='bold'>
            {props.value}
          </Div>
        )
      }

    },
    {
      Header:"Value",
      accessor:"fieldValue",
      Cell: (props) =>{
        if(typeof props.value ==='string' && props.value){
        return (
        <Div>
          {props.value}
        </Div>
      )
    } else if(Array.isArray(props.value)  && props.value.length > 0) {
      return(
        <select onChange={(e)=>{this.handleOptionChange(props.original.fieldName,e.target.value)}}>
          {props.value.map((option,idx)=>{
            return(
              <option value={idx} key={idx}>{option.value}</option>
            )
          })}
        </select>

      )
    } else if(props.original.fieldName ==='Password'){
      return (
        <Div>
          <PasswordMask />
        </Div>
      )
    }

    else {
      return (
      <Div>
        Empty
      </Div>
    )
    }
      }
    },
    {
      Header:"Actions",
      accessor:"actions",
      Cell: (props) =>{
        return (
          <NoMPUl display='flex' flexWrap='nowrap' childrenPadding='0 5px'>
            <Li>
              <A color='maroon' active onClick={()=>{this.handleUpdateUserProfile(props.original.key)}}>
                {props.value}
              </A>
            </Li>
          </NoMPUl>
        )
      }
    },
    ]

    return(
      <Div>
        <Modal
          messageString = {this.state.selectedEdit.messageString}
          onAddTemplate = {this.handleAddTemplate}
          onClearInputs = {this.handleClearInputs}
          onObjectChange = {this.handleObjectChange}
          onChangeFocus = {this.handleChangeFocus}
          objToEdit = {this.state[this.state.selectedEdit.key]}
          selectedEdit = {this.state.selectedEdit}
          modalObject = {this.state.modal}
          onClose = {this.handleClose}
          onStringInputChange = {this.handleStringInputChange}
          onUpdateUserProfile = {this.handleUpdateSubUserProfile}
          serverErrorObject = {this.props.serverErrorObject}
          onCheckIfEmailExists = {this.props.onCheckIfEmailExists}
        />
        <Div width='100vw' maxWidth='996px' >
          <ReactTable
            minRows={0}
            data={OrganizeData(this.state)}
            columns={columns}
            className ='-striped -highlight'
          >
          </ReactTable>
        </Div>
      </Div>
        )
        }
        }

export default Class;
