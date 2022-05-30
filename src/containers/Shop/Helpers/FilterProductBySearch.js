import getParameterByName from './getParameterByName';
import SplitArrayByMarkers from './SplitArrayByMarkers';
import cookie from 'react-cookies'

export default function(products,search,catId,originalProducts){
  search = search && search.replace(/%20/g, "");
  search = search && search.replace(/\s/g,'');

  var filteredProducts = products ? products.slice():[]
  var searchArray = []
  if(search){
     searchArray = SplitArrayByMarkers(search)
  }

  if(searchArray[0] !==''){

  searchArray.forEach((searchString,index)=>{
    let requirements = getParameterByName(searchString,search)

  if(searchString === 'onSale'){
    for(let g = 0; g < filteredProducts.length;g++){
      let product = filteredProducts[g];

        if(product.ItemSpecialPrice === null){
          filteredProducts.splice(g,1)
          g--;
        }

    }

}
// console.log(filteredProducts.length + ' on ' + searchString)

if(searchString !== "sort" && requirements !== null && searchString !== 'onSale'){
  // var checkV = requirements.split(',')
  var checkV2 = '';
  var notANumber = false;
  if(isNotANumber(requirements.split('-')[0])){
     checkV2 = requirements.split('.')
     notANumber = true;

  } else {
     checkV2 = requirements.split('-')
     notANumber = false;
  }
  if(!notANumber){
    var number1 = Number(checkV2[0]) ? Number(checkV2[0]): 0;
    var number2 = Number(checkV2[1]) ? Number(checkV2[1]): 0;
    if(number2 === 0){
      number2 = number1;
    }
    // console.log(number1)
    // console.log(number2)
    // console.log(filteredProducts.length)

    for(let z = 0; z < filteredProducts.length;z++){
      let product = filteredProducts[z];
      var checkedNumber = Number(product[searchString]) ? Number(product[searchString]): 0
      if(searchString === 'ItemRetailPrice' && product.ItemSpecialPrice !== null){
        //change number..
        checkedNumber = Number(product['ItemSpecialPrice'])
      }
      if(!(number1 <= checkedNumber && checkedNumber <= number2)){
        filteredProducts.splice(z,1)
        z--;
      }

    }
  } else {
    var splitRequirement = requirements.split(',')

  for(let z = 0; z < filteredProducts.length;z++){
    let product = filteredProducts[z];
      //split requirement is the match we are trying to achieve
      //out of these products, does their product[searchString] == requirement?
      if(product[searchString]){

      if(product[searchString].split(',').length > 1){
        var arrayTocheck = []
        if(product[searchString]){
        arrayTocheck= product[searchString].split(',');
      }
        if(!product[searchString] || !arrayTocheck.includes((splitRequirement[0]))){
          filteredProducts.splice(z,1)
          z--;
        }
      } else {
        // console.log(product[searchString])

      splitRequirement.forEach((option)=>{

        // console.log(CapitalizeFirstLetter(option) + " - " + option)
        //
        if(!product[searchString].includes(option)){
          filteredProducts.splice(z,1)
          z--;
        }

      })
      // if(!product[searchString] || !splitRequirement.includes(product[searchString])){
      //   filteredProducts.splice(z,1)
      //   z--;
      // }
      }
    } else {
      filteredProducts.splice(z,1)
      z--;
    }
  }

}
}
  })
}
  //lets now sort the product
  if( search && search.includes('sort')){
    if(filteredProducts.length > 1){
      if(search.includes('high-to-low')){

      filteredProducts.sort((a,b)=>{
        let aR = a.ItemRetailPrice;
        let aS = a.ItemSpecialPrice;
        let bR = b.ItemRetailPrice;
        let bS = b.ItemSpecialPrice;
        let aLesserPrice = aS !== null ? aS:aR;
        let bLesserPrice = bS !== null ? bS:bR;
        return bLesserPrice - aLesserPrice
      })
    } else {
      filteredProducts.sort((a,b)=>{
        let aR = a.ItemRetailPrice;
        let aS = a.ItemSpecialPrice;
        let bR = b.ItemRetailPrice;
        let bS = b.ItemSpecialPrice;
        let aLesserPrice = aS !== null ? aS:aR;
        let bLesserPrice = bS !== null ? bS:bR;
        return aLesserPrice - bLesserPrice

      })
    }
    }


  } else {
    if(filteredProducts.length > 1){
      filteredProducts.sort((a,b)=>{

        var aWeight=0;
        var bWeight=0;
        var isSelectedA = 1;
        var isSelectedB = 1;
        if(cookie.loadAll()['wishlistItems']){
         isSelectedA = cookie.loadAll()['wishlistItems'].includes(a.ItemKey) ? 2:1
         isSelectedB = cookie.loadAll()['wishlistItems'].includes(b.ItemKey) ? 2:1
       }
        if(isSelectedA === 2){
          aWeight += 10;
        }
        if(isSelectedB === 2){
          bWeight += 10;
        }
        if(a.ItemDetail_10 ==='yes'){
          aWeight += 5
        }
        if(b.ItemDetail_10 ==='yes'){
          bWeight += 5
        }
        return bWeight - aWeight


      })

  }
  }
  if(originalProducts){
    return originalProducts.concat(filteredProducts)

  } else {
    return filteredProducts
  }
};


function isNotANumber(x) {
  if (isNaN(x)) {
    return true;
  }
  return false;
}
