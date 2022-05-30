/*
 *
 * Shop actions
 *
 */

import {
  SWAP_MESSAGE,
  SWAP_INDEX,
  DISABLE_PROMO,
   TOGGLE_BUMPER
} from './constants';

export function handleToggleBumper(){
  return {
    type: TOGGLE_BUMPER
  }
}
export function handleSwapMessage(){
  return {
    type: SWAP_MESSAGE
  }
}
export function handleDisablePromo(){
  return {
    type: DISABLE_PROMO
  }
}
export function handleSwapIndex(number){
  return {
    type: SWAP_INDEX,
    number:number
  }
}
