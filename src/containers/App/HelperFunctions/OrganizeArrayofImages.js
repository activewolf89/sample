export default function(item,style){
  var ArrayOfImages = [];


  for(var i = 0; i < 4; i++){
    var createdLink = `https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${style}/side${i}.jpg`
      ArrayOfImages.push({[i]:createdLink})

  }

  //<StyledImg src={`https://ltdennyphotobucket.s3.us-west-2.amazonaws.com/${this.props.MasterStyle}/${this.props.small ? 'still_small.jpg':'still.jpg'}`}


  return ArrayOfImages
}
