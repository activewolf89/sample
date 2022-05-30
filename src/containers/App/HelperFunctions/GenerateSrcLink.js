export default function(MasterStyle,index){
  if(index === 0){
    return `https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${MasterStyle}/still.jpg `
  } else {
    return `https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${MasterStyle}/side${index - 1}.jpg`
  }

}
