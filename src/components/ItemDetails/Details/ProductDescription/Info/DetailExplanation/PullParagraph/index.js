module.exports = function(detailField,knowledgeArray,item){
  var objToReturn = {description:'',list:[],categoryDetails:'',faqArray: []}
  knowledgeArray.forEach((obj)=>{

    if(obj.matchingEdgeKey === detailField){
      if(obj.faqArray){
        objToReturn.faqArray = obj.faqArray
      }
      obj.details.forEach((detailObj)=>{
        detailObj.matchingEdge.forEach((key)=>{

          if(key === item[detailField] || key === detailField){



            objToReturn.description = detailObj.description
            if(detailObj.list){
            objToReturn.list = detailObj.list
          }

          if(detailObj.categoryDetails){
            for(let key in detailObj.categoryDetails){
              if(Number(detailObj.categoryDetails[key].catId) === item.CategoryId){
                objToReturn.categoryDetails = detailObj.categoryDetails[key].detail
              }
            }
          }
            //found the key to match the item, now we just pull the PullParagraph
          }
        })
      })
    }
  })
  return objToReturn
}
