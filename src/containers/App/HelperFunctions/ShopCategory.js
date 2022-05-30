
export default function(catId){
  switch(catId){
    case 140:
    return `/shop/engagement-rings`
    case 115:
    return `/shop/ladies-bands`
    case 110:
    return `/shop/mens-bands`
    case 130:
    return `/shop/fine-jewelry/fine-rings`
    case 150:
    return `/shop/fine-jewelry/earrings`
    case 165:
    return `/shop/fine-jewelry/necklaces`
    case 170:
    return `/shop/fine-jewelry/bracelets`
    case 190:
    return `/shop/loose-diamonds`
    case 500:
    return `/shop/fine-jewelry/watches`
    case 999:
    return `/shop/fine-jewelry/other`
    default:
    return '/';
  }

}
