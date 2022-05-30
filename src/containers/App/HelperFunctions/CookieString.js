import cookies from 'react-cookies'

export default function(string){

return cookies.loadAll()[string] 
};
