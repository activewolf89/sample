export default function(arrayOfObjects,stringToFind){
    var StringToReturn = [];

    arrayOfObjects.forEach((object,index)=>{
        StringToReturn.push(object[stringToFind])
    })
    var condenseString = [...new Set(StringToReturn)]

    if(condenseString.length === 1){
        return condenseString.join()
    } else {
        StringToReturn = condenseString.sort((a,b)=>{
            return a - b;
        })
        return StringToReturn[0] + '-' + StringToReturn[StringToReturn.length - 1]

    }
}
