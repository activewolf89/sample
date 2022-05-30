import cookie from 'react-cookies'

export default function(RVString,rootPath){
  var cookieString = cookie.loadAll()[RVString]
  if(cookieString){
    var cookieArray = cookieString.split(',')
    if(!cookieArray.includes(rootPath)){
      cookieArray.push(rootPath)
    cookieString = cookieArray.join(',')
    var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 5 * 1));


    cookie.save(RVString,cookieString, {RVString,expires:TenYears});
    return
  }

  } else {
    TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 5 * 1));

    cookie.save(RVString,rootPath, {path: rootPath,expires:TenYears});
    return
  }
return;

};
