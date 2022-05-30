export default function(array,spot){
  array.forEach((value,index)=>{
    array[index] = false;

  })
    array[spot] = true;
    array[spot+1] = true;
  return array;
}
