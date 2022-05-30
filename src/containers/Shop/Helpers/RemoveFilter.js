import DestroySearchSegment from 'containers/Shop/Helpers/DestroySearchSegment';
// export default function(key,value,history){

export default function(history,name,DetailField,filterArray){


  if(name === "Reset All"){
    history.push(history.location.pathname)

} else {
        DestroySearchSegment(history,DetailField)
    }

};
