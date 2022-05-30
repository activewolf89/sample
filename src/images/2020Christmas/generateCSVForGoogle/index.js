var fs = require('fs');
const path = require('path');
var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var CapitalizeFirstLetter = require('./CapitalizeFirstLetter.js');
var schedule = require('node-schedule')

var GoogleProductCategory = function(CatId){
  switch(CatId){
    case 150:
    //earring
    return 194;
    case 165:
    //necklace
    return 196;
    case 170:
    //bracelet
    return 191;
    case 500:
    //watches
    return 201;
    case 999:
    //other
    return 197;
    default:
    return 200;
  }
}
module.exports = function(){

  UpdateGoogleCSV()
  schedule.scheduleJob('0 0 1 * *', () => {
    UpdateGoogleCSV()
   })


}
UpdateGoogleCSV = function(){
 var path2 = path.join(__dirname, './excel.csv');
 const createCsvWriter = require('csv-writer').createObjectCsvWriter;
 const csvWriter = createCsvWriter({
     path: path2,
     header: [
         {id: 'id', title: 'id'},
         {id: 'title', title: 'title'},
         {id: 'description', title: 'description'},
         {id: 'link', title: 'link'},
         {id: 'image_link', title: 'image_link'},
         {id: 'additional_image_link', title: 'additional_image_link'},
         {id: 'availability', title: 'availability'},
         {id: 'price', title: 'price'},
         {id: 'sale_price', title: 'sale_price'},
         {id: 'sale_price_effective_date', title: 'sale_price_effective_date'},
         {id: 'google_product_category', title: 'google_product_category'},
         {id: 'brand', title: 'brand'},
         {id: 'MPN', title: 'MPN'},
         {id: 'condition', title: 'condition'},
         {id: 'age_group', title: 'age_group'},
         {id: 'color', title: 'color'},
         {id: 'gender', title: 'gender'},
         {id: 'material', title: 'material'},
         {id: 'size', title: 'size'},
         {id: 'store_code',title:'store_code'}
     ]
 });

 var records = [];
 var searchObject = {CategoryId:{$ne:190}}
 Item.find(searchObject).populate('_Vision360Static').exec((err,items)=>{
   if(err){
     console.log(err)
     console.log(err)
   }
   items.forEach((checkedItem,idx,arr)=>{
     const {ItemRetailPrice,ItemDesc,CategoryId,CategoryName,ItemKey,SearchableSentence,_Vision360Static, ItemStyle,ItemStatus,Price,ItemSpecialPrice,ItemSpecialPriceDateStart,ItemSpecialPriceDateEnd,ItemVendorName,ItemVendStyleCode,ItemMetalColor,CategoryGender,ItemMetalType,ItemSize,ContainsStones} = checkedItem
     if(Number(CategoryId) !== 190 && ItemKey.length === 13 && _Vision360Static !== undefined && checkedItem._Vision360Static.ArrayOfImages[2] !== undefined){
     var prodToPush =  {
             id: ItemKey,
             title: CapitalizeFirstLetter(ItemMetalType +  "/" + ItemMetalColor + " " + CategoryName +" " + ItemStyle + (ContainsStones ? ` set with ${ContainsStones}`:'')),
             description: CapitalizeFirstLetter(ItemDesc + '.' + SearchableSentence),
             link: `https://www.ltdenny.com/shop/${ItemKey}`,
             image_link:checkedItem._Vision360Static !== undefined ? checkedItem._Vision360Static.ArrayOfImages[0][0]:`https://s4.v360.in/images/company/308/imaged/${ItemKey}/still.jpg`,
             additional_image_link: checkedItem._Vision360Static.ArrayOfImages[2][2],
             availability: ItemStatus === "I" ? "in stock": "out of stock",
             price: Price ? Price: ItemRetailPrice,
             sale_price: ItemSpecialPrice ? ItemSpecialPrice:'',
             sale_price_effective_date: (ItemSpecialPriceDateStart && ItemSpecialPriceDateEnd) ? ItemSpecialPriceDateStart + '/' + ItemSpecialPriceDateEnd: '',
             google_product_category: GoogleProductCategory(CategoryId),
             brand: ItemVendorName,
             MPN: ItemVendStyleCode,
             condition: 'new',
             age_group: 'adult',
             color: ItemMetalColor,
             gender: CategoryGender === "M" ? "male":"female",
             material: ItemMetalType,
             size: ItemSize,
             store_code: 515

           }
           records.push(prodToPush)
         }

   })
     csvWriter.writeRecords(records)       // returns a promise
     .then(() => {
       console.log('...Done');
     });


 })
}
