import {Map} from 'immutable';
export default function(evt,evt1,masterObject){
  // UpdateCategoryDropdown(action.evt,action.evt1,state.get('masterProductObject').toJS()))


for(var prop in masterObject){
  if(prop === evt1.toString()){
    if(masterObject[prop].filters.active === evt){
      masterObject[prop].filters.active = ''
    } else {
      masterObject[prop].filters.active = evt
    }
  }
}
  return Map(masterObject)

};
