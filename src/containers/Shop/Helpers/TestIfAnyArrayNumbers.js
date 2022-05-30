
export default function(array){

  return  array.every(isSame)
};

function isSame(el,index,arr){
  if(arr.length < 2 && el === ''){
    return false;
  } else {
    return typeof el === 'number'
  }
}
