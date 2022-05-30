import { fromJS } from 'immutable';
import {
  INPUT_FIELD,
  INPUT_SUBMIT,
  SUBMIT_USER_INPUT,
  CLEAR_USER_INPUT,
  LOG_OUT,
  LOAD_USER,
  RESET_SUBMIT,
  FORGOT_PASSWORD,
  HANDLE_CLOSE,
  RESET_LINK_SENT
} from './constants';

import {CheckForLoginErrors} from './Helpers/CheckErrors'
import SyncWishlist from 'containers/App/HelperFunctions/SyncWishlist'

const initialState = fromJS(
  {
      registerInfo: {submit:false,fName:{value:'',error:''},lName:{value:'',error:''},email:{value:'',error:''},password:{value:'',error:''},confirmPassword:{value:'',error:''}},
      loginInfo: {submit:false,email:{value:'',error:''},name:{value:'',error:''},password:{value:'',error:''},forgotEmail:{value:'',error:''}},
      serverErrors: {login:'',register:'',registerExistingEmail:'',forgottenEmail:''},
      requestPasswordReset: false,
      requestPasswordSuccess: false,
      haventLoggedInYet: true,
      userProfile:{},
}
);

function MyAccountReducer(state = initialState, action) {
  switch (action.type) {

    case HANDLE_CLOSE:
    return state
    .set('requestPasswordReset',false)
    .set('requestPasswordSuccess',false)
    .setIn(['loginInfo','forgotEmail','value'],'')
    case RESET_LINK_SENT:
    return state
    .set('requestPasswordSuccess',true)
    case FORGOT_PASSWORD:
    return state
    .set('requestPasswordReset',true)
    case RESET_SUBMIT:
    return state
    .setIn(['registerInfo','submit'],false)
    .setIn(['loginInfo','submit'],false)
    .setIn(['serverErrors',action.key],action.stringError)
    case LOAD_USER:
    sessionStorage.setItem('myToken',action.userProfile.token)
    SyncWishlist(action.userProfile.userProfile._Customer._Wishlist,action.history)
    return state
    .set('userProfile',fromJS(action.userProfile.userProfile))
    .setIn(['registerInfo','submit'],false)
    .setIn(['loginInfo','submit'],false)
    case LOG_OUT:
    sessionStorage.removeItem("myToken");
    return state.set('userProfile',fromJS({}))
    case SUBMIT_USER_INPUT:
    return state
    case CLEAR_USER_INPUT:
    return state
    .set('registerInfo',fromJS({submit:false,fName:{value:'',error:''},lName:{value:'',error:''},email:{value:'',error:''},password:{value:'',error:''},confirmPassword:{value:'',error:''}}))
    .set('loginInfo',fromJS({submit:false,email:{value:'',error:''}}))
    .set('serverErrors',fromJS({login:'',register:'',registerExistingEmail:'',forgottenEmail:''}))

    case INPUT_SUBMIT:
    if(action.objName === 'loginInfo'){
      return state
      .set('loginInfo',CheckForLoginErrors(state.get('loginInfo')))
    }
    break;
    case INPUT_FIELD:
    return state.setIn([action.objName,action.name,'value'],action.val);
    default:
      return state;
  }
}

export default MyAccountReducer;
