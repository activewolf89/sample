import cookie from 'react-cookies'

export default function(wishlist){
  let originalString = cookie.loadAll()['wishlistItems'];
  var cookieArray = originalString !== undefined ? originalString.split(','):[]
  wishlist.forEach((wish)=>{
    const {WishlistItemKey} = wish;
    if(!cookieArray.includes(WishlistItemKey)){
      cookieArray.push(WishlistItemKey)
    }
  })
  var cookieString = cookieArray.join(',')
    var TenYears = new Date(Date.now() + (3600 * 1000 * 24 * 365 * 10));
    cookie.save('wishlistItems', cookieString, {path: '/',expires:TenYears});

};
