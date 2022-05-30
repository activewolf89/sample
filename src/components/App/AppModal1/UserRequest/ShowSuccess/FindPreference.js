export default function FindPreference(obj){
  var pref = 'email'
  for(let key in obj){
    if(obj[key].preference){
      pref = key
    }
  }
  return pref

}
// export default function(string){
