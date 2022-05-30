
import { fromJS } from 'immutable';
import {
LOAD_PAGE_SUCCESS,
TOGGLE_DETAIL
} from './constants';

const initialState = fromJS(
  {
    toggleModal: false,
    name: '',
    email: '',
    phone: ''
}
);

function RepairServiceReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PAGE_SUCCESS:
    return state
    .set('toggleModal',true)
    .set('name',action.name)
    .set('phone',action.phone)
    .set('email',action.email)
    case TOGGLE_DETAIL:
    return state
    .set('toggleModal',false)
    .set('name','')
    .set('phone','')
    .set('email','')
    default:
      return state;
  }
}

export default RepairServiceReducer;
