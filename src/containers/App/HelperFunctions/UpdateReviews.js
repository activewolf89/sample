import {Map} from 'immutable';

export default function(stateObject,reviewObject){

stateObject.count = reviewObject.total;
stateObject.reviews = reviewObject.reviews;

return Map(stateObject)

};
