var  ReturnCategoryIdViaPathname = require('../ReturnCategoryIdViaPathname')
module.exports = function(knowledgeArray,pathname){
  knowledgeArray.forEach((obj)=>{
    if(obj.catId === ReturnCategoryIdViaPathname(pathname)){
      knowledgeArray = obj.obj
    }
  })

  return knowledgeArray
  }
