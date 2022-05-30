import diamond from 'images/Diamond0.jpg';
export default function(array){
  var imgs = []

  array.forEach((item)=>{
    let obj = {}
    if(item.catId === 190){
      obj.original =   diamond
      obj.thumbnail =   diamond

    } else {
      obj.thumbnailClass = 'thumbNail'
      obj.original =  'https://s3-us-west-2.amazonaws.com/ltdennyphotobucket/' + item.itImage.split('|')[0]
      obj.thumbnail =  'https://s3-us-west-2.amazonaws.com/ltdennyphotobucket/' + item.itImage.split('|')[0]
    }

    imgs.push(obj)
  })
  return imgs
};
