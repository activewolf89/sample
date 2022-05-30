
import {
  CLEAR_BACKEND_WISHLIST,
  UPDATE_PREFERRED_CONTACT,
  HAMBURGER_CLICK,
  HAMBURGER_DETAIL_HOVER,
  NAVIGATION_DETAIL_CLICK,
  NAVIGATION_MOBILE_CLICK,
  LOAD_PAGE_SUCCESS,
  SERVICE_SUBMIT,
  CONTACT_CLICK,
  CALENDAR_CLICK,
  CLOCK_CLICK,
  SEND_EMAIL_CONFIRMATION,
  CONTACT_INPUT,
  CATEGORY_CHANGE,
  GET_REVIEW,
  REVIEWS_LOADED,
  SUBMIT_CONTACT_INFO,
  FOOTER_CLICK,
  HAMBURGER_CLOSE,
  SEARCH_CLICK,
  WISHLIST,
  UPDATE_HISTORY,
  REMOVE_DATE,
  LINK_TO,
  ADD_TO_WISHLIST,
  LOAD_WISHLIST_ITEMS,
  LOAD_WISHLIST_ITEMS_SUCCESS,
  HOVER_NAVIGATION,
  SEARCH_CHANGE,
  EXIT_ALL_OPEN,
  UPDATE_HIGHLIGHT_PRODUCT,
  SEARCH_ITEMS_SUCCESS,
  RETRIEVE_PRODUCT,
  UPDATE_CATEGORY_OPTIONS,
  CATEGORY_OBJECT,
GET_ROTATING_BANNER,
LOAD_ROTATING_BANNER,
LOAD_ROTATING_BANNER_SUCCESS,
SERVICE_FORM_SUCCESS,
RETRIEVE_DESIGNER_CATEGORIES,
UPDATE_DESIGNER_CATEGORIES_SUCCESS,
FAQ_CLICK,
UPDATE_DESIGNERS,
LOAD_DESIGNERS,
INITIATE_HINT,
UPDATE_STYLE_OF_CATEGORY_HOMEPAGE,
GET_PASSWORD,
CHECK_PASSWORD,
TOGGLE_KNOWLEDGE_CENTER,
REACH_CLICK,
CHECK_USER_TOKEN,
TOGGLE_ON_SALE,
SHOW_PASSWORD_CREATION,
HANDLE_INPUT_CHANGE,
UPDATE_USER_PASSWORD,
HANDLE_RESET_PASSWORD,
REDIRECT_TO_ACCOUNT,
ON_SHOP_CLICK,
DATA_RECEIVED,
SHUT_FOOTER,
PULL_CUSTOMER_DATA,
SWAP_MESSAGE,
SWAP_INDEX,
DISABLE_PROMO,
 TOGGLE_BUMPER,
 LOAD_INITIALS,
 GENERATE_DAILYS,
 REMOVE_CHECKOUT_STRING,
 DETAIL_CLICK_HAMBURGER,
 HANDLE_LOAD_SECONDARIES
} from './constants';

export function handleDetailClick(evt){
  return {
    type: DETAIL_CLICK_HAMBURGER,
    detail: evt
  }
}
export function generateDailys(obj){
  return {
  type: GENERATE_DAILYS,
  obj: obj
}
}
export function loadInitials(){
  return {
    type: LOAD_INITIALS
  }
}
export function handleRemoveCheckoutCookie(){
  return {
    type: REMOVE_CHECKOUT_STRING
  }
}
export function loadSecondaries(){
  return {
  type:HANDLE_LOAD_SECONDARIES
}
}
export function handleToggleBumper(){
  return {
    type: TOGGLE_BUMPER
  }
}
export function handleSwapMessage(){
  return {
    type: SWAP_MESSAGE
  }
}
export function handleDisablePromo(){
  return {
    type: DISABLE_PROMO
  }
}
export function handleSwapIndex(number){
  return {
    type: SWAP_INDEX,
    number:number
  }
}

export function clearBackendWishlist(email){
  return {
    type: CLEAR_BACKEND_WISHLIST,
    email:email
  }
}
export function handleShutFooter(){
  return {
    type: SHUT_FOOTER
  }
}
export function DataReceived(){
  return{
    type: DATA_RECEIVED
  }
}
export function handleShopClick(){
  return{
    type: ON_SHOP_CLICK
  }
}
export function pullCustomerData(){
  return{
    type: PULL_CUSTOMER_DATA
  }
}
export function redirectToAccount(boolean){
  return {
    type: REDIRECT_TO_ACCOUNT,
    boolean: boolean
  }
}
export function updateUserPassword(password,email){
  return {
    type: UPDATE_USER_PASSWORD,
    password: password,
    email:email
  }
}
export function handleResetPassword(){
  return {
    type: HANDLE_RESET_PASSWORD,
  }
}
export function handleInputChange(objName,name,value){
  return {
    type:HANDLE_INPUT_CHANGE,
    objName:objName,
    name:name,
    value:value
  }
}
export function shouldShowPasswordCreation(boolean){
  return {
    type: SHOW_PASSWORD_CREATION,
    boolean: boolean
  }
}
export function handleCheckToken(token){
  return {
    type: CHECK_USER_TOKEN,
    token: token
  }
}
export function handleOnSaleToggle(){
  return {
    type: TOGGLE_ON_SALE
  }
}
export function handleKnowledgeCenterClick(){
  return {
    type: TOGGLE_KNOWLEDGE_CENTER
  }
}
export function passwordResult(result){
  return {
    type: CHECK_PASSWORD,
    result: result
  }
}
export function handleGetPassword(password){
  return {
    type: GET_PASSWORD,
    password: password
  }


}

export function handleStyleChange(evt){
  return {
    type: UPDATE_STYLE_OF_CATEGORY_HOMEPAGE,
    idx: evt
  }
}
export function updatePreferredContact(contact){
  return {
    type: UPDATE_PREFERRED_CONTACT,
    contact: contact
  }
}
export function LoadDesigners(designerArray){
  return {
    type: LOAD_DESIGNERS,
    designerArray: designerArray

  }
}
export function handleReachClick(){
  return {
    type: REACH_CLICK
  }
}
export function UpdateDesigners(array){
  return {
    type: UPDATE_DESIGNERS,
    array: array
  }
}
export function handleSendHint(evt,evt1,evt2){
  return {
    type: INITIATE_HINT,
    obj: evt,
    itemsToView: evt1,
    linkToImage: evt2
  }
}
export function handleRetrieveDesignerCategories(vendorId){
  return {
    type: RETRIEVE_DESIGNER_CATEGORIES,
    vendorId: vendorId
  }
}
export function handleFaqClick(object){
  return {
    type: FAQ_CLICK,
    obj: object
  }
}
export function handleUpdateDesignerCategories(obj){
  return {
    type: UPDATE_DESIGNER_CATEGORIES_SUCCESS,
    obj: obj
  }
}
export function updateCategoryOptions(){
  return {
    type: UPDATE_CATEGORY_OPTIONS,
  }
}
export function serviceFormSuccess(object){
  return {
    type: SERVICE_FORM_SUCCESS,
    object: object
  }
}
export function loadRotatingBannerSuccess(data){
  return {
    type: LOAD_ROTATING_BANNER_SUCCESS,
    array: data.all,
    tacArray: data.tacori,
  }
}
export function loadRotatingBanner(){
  return {
    type: LOAD_ROTATING_BANNER
  }
}
export function handleGetRotatingBanner(evt,evt1,evt2){
  return {
    type: GET_ROTATING_BANNER,
    fromCategory: evt,
    getUnique: evt1,
    fromDesigner: evt2
  }
}
export function handleUpdateHighlightedProduct(array,catId,detail){

  return {
    type: UPDATE_HIGHLIGHT_PRODUCT,
    arrayOfProduct: array,
    catId: catId,
    detail: detail
  }
}
export function handleExitAllOpen(){
  return {
    type: EXIT_ALL_OPEN
  }
}
export function handleGetHighlightedProducts(catId,detail){
  return {
    type: RETRIEVE_PRODUCT,
    catId: catId,
    detail: detail
  }
}
export function searchItemsLoaded(arrayOfItems,whereItsFrom){
  return {
    type: SEARCH_ITEMS_SUCCESS,
    array: arrayOfItems,
    from: whereItsFrom
  }
}

export function handleHoverNavigation(evt){
  return {
    type: HOVER_NAVIGATION,
    evt: evt

  }
}
export function handleCategories(categoryObject){
  return {
    type: CATEGORY_OBJECT,
    categoryObject: categoryObject
  }
}
export function handleSearchChange(string){
  return {
    type: SEARCH_CHANGE,
    string: string
  }
}

export function handleUpdateWishlistItems(array){

  return {
    type: LOAD_WISHLIST_ITEMS_SUCCESS,
    array: array
  }
}

export function handleLoadWishlistItems(string){

  return {
    type: LOAD_WISHLIST_ITEMS,
    itemString: string
  }
}
export function handleAddToWishlist(itemNumber,userProfile,typeOfCookie){

  return {
    type: ADD_TO_WISHLIST,
    itemNumber: itemNumber,
    userProfile: userProfile,
    typeOfCookie: typeOfCookie

  }
}

export function handleLinkTo(evt){
  return {
    type: LINK_TO,
    evt: evt
  }
}

export function handleUpdateHistory(evt,promoObj){
  return {
    type: UPDATE_HISTORY,
    evt: evt,
    promoObj:promoObj
  }
}

export function handleRemoveDate(){
  return {
  type: REMOVE_DATE,
}
}

export function handleWishListObject(){
  return {
    type: WISHLIST
  }
}

export function handleSearchClick(){
  return {
    type: SEARCH_CLICK
  }
}

export function reviewsLoaded(google,yelp){

  return {
    type: REVIEWS_LOADED,
    google: google,
    yelp: yelp
  }
}
export function hamburgerClosed(evt){
  return {
    type: HAMBURGER_CLOSE,
    evt:evt
  }
}
export function handleFooterClick(evt){
  return {
    type: FOOTER_CLICK,
    evt: evt
  }
}
export function handleGetReviews(){
  return {
    type: GET_REVIEW,
  }
}
export function handleCategoryChange(value){
  return {
    type: CATEGORY_CHANGE,
    value: value
  }
}
export function handleContactChange(key,value){
  return {
    type: CONTACT_INPUT,
    key: key,
    value: value
  }
}
export function handleContactSubmit(evt,evt1,evt2,evt3){

  return {
    type: SUBMIT_CONTACT_INFO,
    evt: evt,
    evt1:evt1,
    evt2:evt2,
    evt3:evt3
  }
}

export function handleSendEmailConfirmation(obj,category,itemNumber){

  return {
    type: SEND_EMAIL_CONFIRMATION,
    obj: obj,
    category: category,
    itemNumber: itemNumber
  }
}


export function handleTimeChange(hour,minute,beginningOrEnd){
  return {
    type: CLOCK_CLICK,
    hour: hour,
    minute: minute,
    beginningOrEnd: beginningOrEnd
  }
}
export function handleCalendarClick(day){
  return {
    type: CALENDAR_CLICK,
    day: day
  }
}

export function handleContactClick(evt,obj,comment){
  return {
    type: CONTACT_CLICK,
    contact: evt,
    obj: obj,
    comment: comment
  }
}

export function LoadSuccess(cat){

  return {
    type: LOAD_PAGE_SUCCESS,
    category: cat
  }

}

export function handleHamburgerClick(evt){
  return {
    type:HAMBURGER_CLICK,
    evt:evt

  }
}
export function handleDetailHover(evt){
  return {
    type:HAMBURGER_DETAIL_HOVER,
    evt: evt
  }
}
export function handleNavigationClick(category){
  return {
    type: NAVIGATION_DETAIL_CLICK,
    category: category
  }
}
export function handleNavigationDetailClick(){
  return {
    type: NAVIGATION_MOBILE_CLICK,
  }
}
export function handleServiceSubmit(obj){
  return {
    type: SERVICE_SUBMIT,
    obj: obj,
  }
}
