
export default function(obj,arrayOfItems){
  var newMessage = ``
  arrayOfItems.forEach((item)=>{
    let newLine = '';
    if(item.ItemSpecialPrice){
      newLine += item.ItemKey + ` - (Sale)${"$" + item.ItemSpecialPrice} - `

    } else {
      newLine += item.ItemKey + ` - (MSRP)${"$" + item.ItemRetailPrice} - `
    }
    newLine += item.ItemDesc
    newMessage += (newLine + "\n")
  })
  obj.message =   newMessage

return (
  obj
)
};
