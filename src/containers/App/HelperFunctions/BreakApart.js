


export default function(obj,knowledgeArray){
var returnedArray = [
  {name:'Engagement Rings',match:'engagement-rings',catId:140,clickTo:'/engagement-rings/shop?onSale=true',count:0,svgImg:''},
  {name:'Ladies Bands',match:'ladies-bands',catId:115,clickTo:'/wedding-bands/shop/ladies-bands?onSale=true',count:0,svgImg:''},
  {name:'Mens Bands',match:'gents-bands',catId:110,clickTo:'/wedding-bands/shop/mens-band?onSale=true',count:0,svgImg:''},
  {name:'Loose Diamonds',match:'loose-diamonds',catId:190,clickTo:'/diamonds/shop?onSale=true',count:0,svgImg:''},
  {name:'Necklaces',match:'necklaces',catId:165,clickTo:'/fine-jewelry/shop/necklaces?onSale=true',count:0,svgImg:''},
  {name:'Earrings',match:'earrings',catId:150,clickTo:'/fine-jewelry/shop/earrings?onSale=true',count:0,svgImg:''},
  {name:'Fine Ring',match:'fine-rings',catId:130,clickTo:'/fine-jewelry/shop/fine-rings?onSale=true',count:0,svgImg:''},
  {name:'Watches',match:'watches',catId:500,clickTo:'/fine-jewelry/shop/watches?onSale=true',count:0,svgImg:''},
  {name:'Bracelets',match:'bracelets',catId:170,clickTo:'/fine-jewelry/shop/bracelets?onSale=true',count:0,svgImg:''},
  {name:'Other',match:'other',catId:999,clickTo:'/fine-jewelry/shop/other?onSale=true',count:0,svgImg:''},
]
for(let key in obj){
  returnedArray.forEach((updateObj)=>{
    if(updateObj.match === key){
      //update count
      updateObj.count =  obj[key].count
      let svgImg = ''
      knowledgeArray.forEach((knowObj,idx)=>{
        if(knowObj.catId === obj[key].id){
          svgImg = knowObj.svgImg
        }
      })
      updateObj.svgImg = svgImg
    }
  })
}
return returnedArray
};
