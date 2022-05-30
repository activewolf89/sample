import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function(starNumber){
  var arr = [];
  var num = starNumber;
  if(num % 1 === 0){
    //whole number
  } else {
    //not a whole number
    num = starNumber - num
  }
for(var i = 0; i < starNumber; i++){

  arr.push(<FontAwesome style={{color:'orange'}} key={i} name="star"/>)
}
  if(num !== starNumber){
    arr.push(<FontAwesome key={starNumber.length}  name="star-half"/>)
  }
return arr;
};
