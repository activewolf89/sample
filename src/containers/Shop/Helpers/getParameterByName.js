export default function(name,url){
      if (!url) url = window.location.href;
      name = name.replace(/[\]]/g, '\\$&');
      // name = name.replace(/[\[\]]/g, '\\$&');

      var indexOfName = url.indexOf(name)
      if(indexOfName === -1){
        //could not find
        return ''
      } else {
        indexOfName = indexOfName + name.length + 1;
        var valueToFind = ''
        //indexofName is the beginning now we need to find the end.
        for(var i = indexOfName; i < url.length;i++){
          if(url[i] === '&' && url[i+1] === '?'){

            break;
          } else {
            valueToFind += url[i]

          }
        }
        return valueToFind
      }

}
