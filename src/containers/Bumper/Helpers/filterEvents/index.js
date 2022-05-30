module.exports = function(array){
  array.forEach((el,idx,arr)=>{
    if(!el.active){
      arr.splice(idx,1)
    }
  })

  return array;

}
