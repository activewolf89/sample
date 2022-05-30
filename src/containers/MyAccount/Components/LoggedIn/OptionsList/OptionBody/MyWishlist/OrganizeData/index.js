import NoImage from 'images/NoImage.png';

export default function(arrayOfObjects){
var newArray = [];
  arrayOfObjects.forEach((obj)=>{
    let newObj = {};
    if(obj._Item &&  obj._Item._Vision360Static && obj._Item._Vision360Static.ArrayOfImages && obj._Item._Vision360Static.ArrayOfImages.length > 0){
    newObj.imageLink ={img:obj._Item._Vision360Static.ArrayOfImages[0][0]};

  } else {
    newObj.imageLink = {img:NoImage}
  }
  if(!obj._Item){
    newObj.itemLink = {itemNumber:'comment', link:false}
  } else {
    newObj.itemLink = {itemNumber:obj._Item.ItemKey,link:obj._Item.ItemDirectLink}
  }
    newObj.wishDescription = obj.WishlistItemDesc
    newObj.wishFor=obj.WishlistBuyFor
    newObj.addedOnDate = new Date(obj.WishlistDateEntered).toDateString()
    newObj.inStock = !obj._Item ? 'unconfirmed': obj._Item.ItemStatus ? "yes":"no";
    newArray.push(newObj)
  })
  return newArray
}
