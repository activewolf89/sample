/*
 *
 * Shop actions
 *
 */

import {
  SUBMIT_REPAIR_FORM,
  TOGGLE_DETAIL,
  LOAD_PAGE_SUCCESS
} from './constants';


export function handleServiceSubmit(obj) {
  return {
    type: SUBMIT_REPAIR_FORM,
    obj: obj
  };
}
export function handleToggleDetail(){
  return {
    type: TOGGLE_DETAIL
  }
}

export function LoadSuccess(name,email,phone){

  return {
    type: LOAD_PAGE_SUCCESS,
    name: name,
    email: email,
    phone: phone
  }

}
