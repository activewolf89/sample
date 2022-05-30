import DestroySearchSegment from 'containers/ShopNew/Helpers/DestroySearchSegment';
// export default function(key,value,history){

export default function(history,name,DetailField,filterArray){
  if(name === "Reset All"){
    history.push('/shop')

} else {
        DestroySearchSegment(history,DetailField)
    }

};
