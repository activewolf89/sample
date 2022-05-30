
export default function(vendorObj,catId){
    var newArray = [
    {
      DetailField: 'ItemVendorName',
      DetailName:'Designer',
      categories: []
    }
    ]
    for(let key in vendorObj){
        newArray[0].categories.push(vendorObj[key].name)
    }
return newArray
};
