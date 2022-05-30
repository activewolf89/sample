
export default function(vendorObj,catId){
      var vendorObject = {
      DetailField: 'ItemVendorName',
      DetailName:'Designer',
      categories: []
    }
    for(let key in vendorObj){
      if(vendorObj[key].categories.includes(Number(catId)) || catId === "All"){
        vendorObject.categories.push(vendorObj[key].name)
      }
    }
return vendorObject
};
