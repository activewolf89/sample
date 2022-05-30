module.exports = {
  SubTotal: function(list){
  var count = 0;
  list.forEach((item)=>{
    count += Number(item.Price)
  })
  return count
  }
}
