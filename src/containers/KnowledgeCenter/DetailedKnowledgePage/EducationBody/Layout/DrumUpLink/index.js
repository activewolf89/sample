var ReturnCategoryIdViaPathname = require('containers/KnowledgeCenter/Functions/ReturnCategoryIdViaPathname');
module.exports = function(obj,pathname){
  var returnObj = {
    140: {name:'Engagement Rings', link:'/shop/engagement-rings'},
    110: {name:'Mens Bands', link:'/shop/wedding-bands/mens-bands'},
    115: {name:'Ladies Bands', link:'/shop/wedding-bands/ladies-bands'},
    190: {name:'Loose Diamonds', link:'/shop/loose-diamonds'},
    165: {name:'Necklaces',link:'/shop/fine-jewelry/pendant'},
    150: {name:'Earrings',link:'/shop/fine-jewelry/earring'},
    170: {name:'Bracelets',link:'/shop/fine-jewelry/bracelet'},
    130: {name:'Fine Rings',link:'shop/fine-jewelry/fine-ring'},
    500: {name:'Watches',link:'/shop/fine-jewelry/watch'},
    999: {name:'Other',link:'/shop/fine-jewelry/other'},

  }
  if(obj.linkTo.isShop){
  return {
    link: `${returnObj[ReturnCategoryIdViaPathname(pathname)].link}?${obj.matchingEdgeKey}=${obj.matchingEdge[0]}`,
    name: `Shop ${obj.title} ${returnObj[ReturnCategoryIdViaPathname(pathname)].name}`
  }
} else {
  return {
    link: obj.linkTo.link,
    name: obj.linkTo.name,
  }
}
}
