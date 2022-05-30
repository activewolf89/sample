import {fromJS,List,Map} from 'immutable';
import OneTrueRestFalse from './HelperFunctions/OneTrueRestFalse';
import OneTrueRestFalseObject from './HelperFunctions/OneTrueRestFalseObject';
import UpdateReviews from './HelperFunctions/UpdateReviews';
import AddToCheckout from './HelperFunctions/AddToCheckout';
import AddToWishlist from './HelperFunctions/AddToWishlist';
import convertDateString from './HelperFunctions/convertDateString';
import CheckBrowseCookie from './HelperFunctions/CheckBrowseCookie';
import CheckCheckoutCookie from './HelperFunctions/CheckCheckoutCookie';
import UpdateBrowseCookie from './HelperFunctions/UpdateBrowseCookie';
import CheckPassword from './HelperFunctions/CheckPassword';
import engagementMessages from './messages/engagementMessages.js';
import ladiesMessages from './messages/ladiesMessages.js';
import gentsMessages from './messages/gentsMessages.js';
import diamondMessages from './messages/diamondMessages.js';
import policyMessages from './messages/policyMessages.js';
import aboutUsMessages from './messages/aboutUsMessages.js';
import braceletMessages from './messages/braceletMessages.js';
import designerMessages from './messages/designerMessages.js';
import earringMessages from './messages/earringMessages.js';
import fineRingMessages from './messages/fineRingMessages.js';
import necklaceMessages from './messages/necklaceMessages.js';
import otherMessages from './messages/otherMessages.js';
import servicesMessages from './messages/servicesMessages.js';
import watchMessages from './messages/watchMessages.js';

import engagementKnowledge from './knowledge/engagementKnowledge.js';
import financingKnowledge from './knowledge/financingKnowledge.js';
import diamondKnowledge from './knowledge/diamondKnowledge.js';
import ladiesKnowledge from './knowledge/ladiesKnowledge.js';
import gentsKnowledge from './knowledge/gentsKnowledge.js';
import aboutUsKnowledge from './knowledge/aboutUsKnowledge.js';
import braceletKnowledge from './knowledge/braceletKnowledge.js';
import designerKnowledge from './knowledge/designerKnowledge.js';
import earringKnowledge from './knowledge/earringKnowledge.js';
import fineRingKnowledge from './knowledge/fineRingKnowledge.js';
import necklaceKnowledge from './knowledge/necklaceKnowledge.js';
import servicesKnowledge from './knowledge/servicesKnowledge.js';
import watchKnowledge from './knowledge/watchKnowledge.js';
import otherKnowledge from './knowledge/otherKnowledge.js';
import giftKnowledge from './knowledge/giftKnowledge.js';

import svgEngagementRings from 'shared/Shapes/diamondRing.svg';
import svgPendants from 'shared/Shapes/diamondPendant.svg';
import svgBracelets from 'shared/Shapes/gemstoneBracelet.svg';
import svgAppointment from 'shared/Shapes/appointment.svg';
import svgEarrings from 'shared/Shapes/diamondStuds.svg';
import svgladiesBands from 'shared/Shapes/diamondLBand.svg';
import svggentsBands from 'shared/Shapes/diamondMBand.svg';
import svgLooseDiamonds from 'shared/Shapes/round.svg';
import svgEmail from 'shared/Shapes/email.svg';
import StoreClosures from 'containers/App/Helpers/StoreClosures';
import Tacori from 'images/2020Christmas/Tacori.webp';
import Holiday from 'images/2020Christmas/princess.jpg';
import TreasureChest from 'images/2020Christmas/treasurechest3.jpg';

import {getEarlyTime} from 'components/App/AppModal1/ScheduleAViewingTab/TimePicker/getTime.js';
import {
  DETAIL_CLICK_HAMBURGER,
  GENERATE_DAILYS,
  REMOVE_CHECKOUT_STRING,
  HANDLE_LOAD_SECONDARIES,
  SWAP_MESSAGE,
  SWAP_INDEX,
  DISABLE_PROMO,
  TOGGLE_BUMPER,
  SHUT_FOOTER,
  DATA_RECEIVED,
  ON_SHOP_CLICK,
  REDIRECT_TO_ACCOUNT,
  HANDLE_RESET_PASSWORD,
  SHOW_PASSWORD_CREATION,
CHECK_PASSWORD,
UPDATE_STYLE_OF_CATEGORY_HOMEPAGE,
UPDATE_DESIGNERS,
UPDATE_DESIGNER_CATEGORIES_SUCCESS,
CATEGORY_OBJECT,
UPDATE_HIGHLIGHT_PRODUCT,
HOVER_NAVIGATION,
SEARCH_ITEMS_SUCCESS,
HAMBURGER_CLICK,
HAMBURGER_DETAIL_HOVER,
NAVIGATION_DETAIL_CLICK,
NAVIGATION_MOBILE_CLICK,
LOAD_PAGE_SUCCESS,
CONTACT_CLICK,
CALENDAR_CLICK,
CLOCK_CLICK,
CONTACT_INPUT,
CATEGORY_CHANGE,
REVIEWS_LOADED,
FOOTER_CLICK,
SERVICE_FORM_SUCCESS,
HAMBURGER_CLOSE,
WISHLIST,
SEARCH_CLICK,
REMOVE_DATE,
UPDATE_HISTORY,
ADD_TO_WISHLIST,
LOAD_WISHLIST_ITEMS_SUCCESS,
SEARCH_CHANGE,
EXIT_ALL_OPEN,
LOAD_ROTATING_BANNER,
UPDATE_PREFERRED_CONTACT,
LOAD_ROTATING_BANNER_SUCCESS,
FAQ_CLICK,
GET_PASSWORD,
REACH_CLICK,
TOGGLE_ON_SALE,
TOGGLE_KNOWLEDGE_CENTER,
HANDLE_INPUT_CHANGE

} from './constants';
var CheckIfAnyActive = function(events){
  var checked = false;
  var todayDate = new Date();

  events.forEach((event)=>{
    var startDate = new Date(event.start);
    if(todayDate.getTime() >= startDate.getTime()){
      checked = true;
    }
  })
  return checked
}

var GenerateRecurring = function(day){
  var today = new Date();
  var dayCount = today.getDay();
    while(dayCount !== 7){
      dayCount ++;
    }
    return today.setDate(today.getDate()+dayCount)

}
var CheckIfEnd = function(start,end){
  var EndDate = new Date(end);
  var startDate = new Date(start);
  var todayDate = new Date();
  startDate.setDate(EndDate.getDate() + 1);
  EndDate.setDate(EndDate.getDate() + 1);
  if(todayDate > EndDate){
    return false
  }

  return true;
}
var CheckIfActive = function(start,end){
  var EndDate = new Date(end);
  var startDate = new Date(start);
  var todayDate = new Date();
  startDate.setDate(EndDate.getDate() + 1);
  EndDate.setDate(EndDate.getDate() + 1);
  if((todayDate > EndDate) || (todayDate < startDate)){
    return false
  }

  return true;
}
var start1 = "10/09/2020"
var end1 = "11/31/2020"

var start2 = "11/13/2020"
var end2 = "11/20/2020"

var start3 = "11/25/2020"
var end3 = "12/30/2020"
var filteredEvents = [
  {
    name:"Receive 10% off and a gift with purchase",
    name2:"Browse Our Selection",
    picture:Tacori,
    month: start2 + " - to - " + end2,
    promo:false,
    category: "Tacori Winter Event",
    shopLink:"/shop?ItemVendorName=Tacori",
    description: "Browse our extensive Tacori collection in store or online.  Receive 10% off and a gift with purchase on stock and special orders",
    learnLink:false,
    contactButton: false,
    start: start2,
    end: end2,
    active: CheckIfActive(start2,end2),
    upcoming: CheckIfEnd(start2,end2),
  },
  {
    name:"20% PromoCode off Most Items(2020wishes)",
    name2:"Your Wishlist Awaits",
    picture:Holiday,
    month: start3 + " - to - " + end3,
    promo:"2020Wishlist",
    category: "Holiday Gift Event",
    shopLink:"/shop",
    description: "Browse our entire collection of inventory for this holiday -- 20% off retail PromoCode when used 2020wishes at time of purchase, some exclusions apply. Starts on 11/27/2020",
    learnLink:false,
    contactButton: false,
    start: start3,
    end: end3,
    active: CheckIfActive(start3,end3),
    upcoming: CheckIfEnd(start3,end3),

  },
  {
    name:"Treasure Chest",
    picture:TreasureChest,
    name2:"Explore the Chest",
    month: start1 + " - to - " + end1,
    resets: false,
    promo:false,
    category: "Jewely Repair Event",
    description: "Browse our treasure chest of jewelry at 50% off, this list will change weekly",
    learnLink:false,
    shopLink:"/treasure-chest",
    contactButton: false,
    start: '11/17/2020',
    end: GenerateRecurring(0),
    active: true,
    upcoming: true,

  },


]
const initialState = fromJS({
  dailys: false,
  originalComment: "",
  newPasswordObject: {password:{value:'',error:''},confirmPassword:{value:'',error:''}},
  onSaleObject:{},
  categoryObjects2:{},
  categoryObjects: {},
  highlightedProducts: '',
  isDetailOpen: false,
  secondaries:false,
  knowledge: [
    {name:'Engagement Rings',catId:140,id:'engagement',obj:engagementKnowledge,svgImg:svgEngagementRings,clickTo:'/knowledge-center/engagement-rings'},
    {name:'Financing',catId:'',id:'financing',obj:financingKnowledge,svgImg:svgEmail,clickTo:'/knowledge-center/financing'},
    {name:'Loose Diamonds',catId:190,id:'diamonds',obj:diamondKnowledge,svgImg:svgLooseDiamonds,clickTo:'/knowledge-center/loose-diamonds'},
    {name:'Ladies Bands',catId:115,id:'ladies',obj:ladiesKnowledge,svgImg:svgladiesBands,clickTo:'/knowledge-center/ladies-bands'},
    {name:'Gents Bands',catId:110,id:'gents',obj:gentsKnowledge,svgImg:svggentsBands,clickTo:'/knowledge-center/gents-bands'},
    {name:'Earrings',catId:150,id:'earrings',obj:earringKnowledge,svgImg:svgEarrings,clickTo:'/knowledge-center/earrings'},
    {name:'Necklaces',catId:165,id:'necklaces',obj:necklaceKnowledge,svgImg:svgPendants,clickTo:'/knowledge-center/necklaces'},
    {name:'Fine Ring',catId:130,id:'fine-rings',obj:fineRingKnowledge,svgImg:svgEngagementRings,clickTo:'/knowledge-center/fine-rings'},
    {name:'Bracelet',catId:170,id:'bracelets',obj:braceletKnowledge,svgImg:svgBracelets,clickTo:'/knowledge-center/bracelets'},
    {name:'Watch',catId:500,id:'watches',obj:watchKnowledge,svgImg:svgEngagementRings,clickTo:'/knowledge-center/watches'},
    {name:'Other',catId:999,id:'other',obj:otherKnowledge,svgImg:svgEngagementRings,clickTo:'/knowledge-center/others'},
    {name:'Services',catId:'',id:'services',obj:servicesKnowledge,svgImg:svgEngagementRings,clickTo:'/knowledge-center/services'},
    {name:'Designers',catId:'',id:'designers',obj:designerKnowledge,svgImg:svgEngagementRings,clickTo:'/knowledge-center/designers'},
    {name:'Who We Are',catId:'',id:'about',obj:aboutUsKnowledge,svgImg:svgAppointment,clickTo:'/knowledge-center/who-we-are'},
  ],
  faq: {
    engagement: engagementMessages,
    diamond: diamondMessages,
    policy: policyMessages,
    ladies: ladiesMessages,
    gents: gentsMessages,
    about: aboutUsMessages,
    bracelet: braceletMessages,
    designer: designerMessages,
    earring: earringMessages,
    fineRing: fineRingMessages,
    necklace: necklaceMessages,
    other: otherMessages,
    services: servicesMessages,
    watch: watchMessages,
  },
  reachToggle: false,
  knowledgeToggle: false,
  wishlistItems: [],
  wishlistObject: {
    '/engagement/shop': [],
    "/jewelry/shop":[],
    "/wedding/shop": [],
    "/diamond/shop": []
  },
  search: false,
  passwordCheck: true,
  selectCategoryValue: CheckBrowseCookie(),
  checkOutCookie: CheckCheckoutCookie(),
  googleReviewObject:{reviews:[],count:0},
  yelpReviewObject:{reviews:[],count:0},
  loadingRotatingBanner: true,
  contactInfo: {preferredContact:'Email Me',setTime:false,submit:false, fullName:'',submitRequest:false,date: '',startTime:'',endTime: '',email:'',phone:'',comment:'',errors:{}},
  contactInfoTemplate: {preferredContact:'Email Me',setTime:false,submit:false, fullName:'',submitRequest:false,date: '',startTime:'',endTime: '',email:'',phone:'',comment:'',errors:{}},
  contactForm: "",
  footerNavigation: {reviews:false,about:true,contact:false,hours:false,designers:false},
  isHamburgerOpen: false,
  isHoverDetail: false,
  wishList: {open:false},
  loading: {engagement:false},
  navigationDetailArray: [
  {"Bridal":{ hidden:false,open:false,path:'/engagement-rings'}},
  {"Wedding":{hidden:false,open:false,path:'/wedding-bands',
  options:[{name:'Ladies Bands',destination:'ladies-bands'},
  {name:'Mens Bands',destination:'mens-bands'}]}},
  {"Jewelry":{open:false,path:'/fine-jewelry',
  options:[
  {name:'Necklaces',destination:'necklaces'},
  {name:'Earrings',destination:'earrings'},
  {name:'Fine Ring',destination:'fine-rings'},
  {name:'Bracelets',destination:'bracelets'},
  {name:'Watches',destination:'watches'},
  {name:'Other',destination:'other'},
]}},
  {"Designers":{hidden:false,open:false,path:'/designers'}},
  {"ladies-bands":{hidden:true,open:false,path:'/ladies-bands'}},
  {"Diamond":{hidden:true,open:false,path:'/loose-diamonds'}},
  {"mens-bands":{hidden:true,open:false,path:'/gents-bands'}},
  {"necklaces":{hidden:true,open:false,path:'/necklaces'}},
  {"earrings":{hidden:true,open:false,path:'/earrings'}},
  {"fine-rings":{hidden:true,open:false,path:'/fine-rings'}},
  {"bracelets":{hidden:true,open:false,path:'/bracelets'}},
  {"watches":{hidden:true,open:false,path:'/watches'}},
  {"other":{hidden:true,open:false,path:'/other'}},

],
  navigationMobileClick: false,
  isHover: false,
  historyObject: {},
  itemToView: '',
  searchInput: '',
  searchItems: [],
  searching: true,
  searchItemsFrom:'',
  rotatingBannerArray: [],
  rotatingBannerArrayTac: [],
  serviceObject: {},
  designerCategories: [],
  faqClickObject: {},
  onSaleToggle: false,
  onShopToggle: false,
  passwordCreation: null,
  userData: false,
  redirectToAccount: false,
  searchableCategoryObject: {},
  primaryCategoryChoices: {
    110: ['ItemStyle','ItemMetalType','ItemMetalColor','ItemLength'],
115: ['ItemStyle','ItemMetalType','ItemMetalColor','ItemMetalWeight'],
130: ['ItemStyle','ItemMetalType','ItemMetalColor','ContainsStones'],
140:['ItemStyle','ItemMetalType','ItemMetalColor','ContainsStones'] ,
150: ['ItemStyle','ItemMetalType','ItemMetalColor','ContainsStones'],
165: ['ItemStyle','ItemMetalType','ItemMetalColor','ContainsStones'],
170: ['ItemStyle','ItemMetalType','ItemMetalColor','ContainsStones'],
190: ['MainShape','StoneTWT','StoneHue','StoneClarity','StoneLab'],
311: [],
345: [],
500: ['ItemStyle','ItemDetail_10'],
999: ['ItemStyle','ItemMetalType','ItemMetalColor','ContainsStones'],
All: ['ItemStyle','ItemMetalType','ItemMetalColor','ItemLength'],
  },
  toggle: window.matchMedia("(max-width: 1550px)").matches ? true : false,
  promo: {link:'/shop?onSale=true',match:false,isPercent:false, active: false, name:"Stay-At-Home May", code:"2020", comment:"20% off jewelry For May",justSuggestion: "Free Shipping | 20% Off", value:100,
  itemSearch: {"ItemMfg" : 'mothers-day'}
},
  earlyClosure: StoreClosures(),
  ourMessage: filteredEvents.length > 0 ? false: true,
  eventsChecklist: {
    events: filteredEvents,
    calculated: CheckIfAnyActive(filteredEvents),
    index: 0,
  }
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DETAIL_CLICK_HAMBURGER:
    return state.set('isDetailOpen',action.detail)
    case GENERATE_DAILYS:
    return state.set('dailys',action.obj)
    case REMOVE_CHECKOUT_STRING:
    return state.set('checkOutCookie','')
    case HANDLE_LOAD_SECONDARIES:
    return state.set('secondaries',true);
    case TOGGLE_BUMPER:
    return state.set('toggle',!state.get('toggle'))
    case DISABLE_PROMO:
    return state.setIn(['promo','active'],false)
    case SWAP_INDEX:
    return state.setIn(['eventsChecklist','index'],action.number)
    case SWAP_MESSAGE:
    var ourMessage = state.get('ourMessage');
    return state.set('ourMessage',!ourMessage);
    case SHUT_FOOTER:
    return state
    .set('knowledgeToggle',false)
    .set('reachToggle',false)
    .setIn(['wishList','open'],false)
    .set('onSaleToggle',false)
    .set('onShopToggle',false)
    .set('onSaleToggle',false)
    .set('onShopToggle',false)
    .set('knowledgeToggle',false)
    .set('reachToggle',false)
    .setIn(['wishList','open'],false)
    .set('contactForm',action.contact)
    .set('searchInput','')
    .set('searchItems',List([]))
    case DATA_RECEIVED:
    return state.set('userData',true)
    case ON_SHOP_CLICK:
    return state
    .set('onShopToggle',!state.get('onShopToggle'))
    .set('knowledgeToggle',false)
    .set('reachToggle',false)
    .set('onSaleToggle',false)
    .setIn(['wishList','open'],false)
    case REDIRECT_TO_ACCOUNT:
    return state
    .set('redirectToAccount',action.boolean)
    case HANDLE_RESET_PASSWORD:
      return state
      .set('newPasswordObject',CheckPassword(state.get('newPasswordObject').toJS()))

    case HANDLE_INPUT_CHANGE:
    return state
    .setIn(['newPasswordObject',action.name,'value'],action.value)
    case SHOW_PASSWORD_CREATION:
    return state
    .set('passwordCreation',action.boolean)
    case TOGGLE_ON_SALE:
    return state
    .set('onSaleToggle',!state.get('onSaleToggle'))
    .set('knowledgeToggle',false)
    .set('reachToggle',false)
    .set('onShopToggle',false)
    .setIn(['wishList','open'],false)
    case TOGGLE_KNOWLEDGE_CENTER:
    return state
    .set('knowledgeToggle',!state.get('knowledgeToggle'))
    .set('reachToggle',false)
    .setIn(['wishList','open'],false)
    .set('onSaleToggle',false)
    .set('onShopToggle',false)

    case REACH_CLICK:
    return state
    .set('reachToggle',!state.get('reachToggle'))
    .set('knowledgeToggle',false)
    .setIn(['wishList','open'],false)
    .set('onSaleToggle',false)
    .set('onShopToggle',false)


    case GET_PASSWORD:
    return state.set('passwordCheck',null)
    case CHECK_PASSWORD:
    return state.set('passwordCheck',action.result);
    case UPDATE_STYLE_OF_CATEGORY_HOMEPAGE:
    var newArray = []
    state.get('rotatingBannerArray').toJS().forEach((obj,idx,arr)=>{
      if(obj.itStyle === action.idx){
        //we found the match, now put to the front.
        newArray.unshift(obj)
      } else {
        newArray.push(obj)
      }
    })
    return state.set('rotatingBannerArray',List(newArray));
    case UPDATE_PREFERRED_CONTACT:
    return state.setIn(['contactInfo','preferredContact'],action.contact)
    case UPDATE_DESIGNERS:
    return state.setIn(['navigationObject','designers'],List(action.array));
    case FAQ_CLICK:
    return state
    .set('contactForm','FAQ')
    .set('faqClickObject',Map(action.obj))
    case UPDATE_DESIGNER_CATEGORIES_SUCCESS:
    return state.set('designerCategories',List(state.get('designerCategories').push(action.obj)))
    case SERVICE_FORM_SUCCESS:
    return state
    .set('contactForm','Service Submitted')
    .set('serviceObject',Map(action.object))
    case LOAD_ROTATING_BANNER_SUCCESS:
    return state
    .set('rotatingBannerArray',List(action.array))
    .set('loadingRotatingBanner',false)
    .set('rotatingBannerArrayTac',List(action.tacArray))
    case LOAD_ROTATING_BANNER:
    return state.set('loadingRotatingBanner',true)
    case CATEGORY_OBJECT:
    return state
    .set('categoryObjects',Map(action.categoryObject))
    .set('searchableCategoryObject',JSON.parse(JSON.stringify(action.categoryObject.searchableCategoryObject)))
    case UPDATE_HIGHLIGHT_PRODUCT:

    return state.set('highlightedProducts',action.arrayOfProduct)
    case EXIT_ALL_OPEN:
    return state
    .setIn(['wishList','open'],false)
    .set('reachToggle',false)
    .set('knowledgeToggle',false)
    .set('onSaleToggle',false)
    .set('onShopToggle',false)
    .set('isDetailOpen',false)
    .set('isHamburgerOpen',false)


    .set('contactForm','')
    ;
    case SEARCH_ITEMS_SUCCESS:
    return state.set('searchItems',List(action.array)).set('searchItemsFrom',action.from)
    case SEARCH_CHANGE:
    return state.set('searchInput',action.string)
    case LOAD_WISHLIST_ITEMS_SUCCESS:
    return state.set('wishlistItems',List(action.array))
    case ADD_TO_WISHLIST:
    if(action.typeOfCookie === "checkOutItem"){
      return state.set('checkOutCookie',AddToCheckout(action.itemNumber))
    } else {
      return state.set('wishlistObject',AddToWishlist(state.get('wishlistObject').toJS(),action.itemNumber,action.itemCategory));
    }
    case HOVER_NAVIGATION:

    return state.set('isHover',
      action.evt ? true: false
    )
    case UPDATE_HISTORY:
    return state
    .set('historyObject',action.evt)
    .set('selectCategoryValue',UpdateBrowseCookie(action.evt,state.get('selectCategoryValue'),action.promoObj))
    case REMOVE_DATE:
    return state.setIn(['contactInfo','date'],'').setIn(['contactInfo','startTime'],12).setIn(['contactInfo','endTime'],13).setIn(['contactInfo','setTime'],false)
    case WISHLIST:
    return state
    .setIn(['wishList','open'],!state.getIn(['wishList','open']))
    .set('onSaleToggle',false)
    .set('onShopToggle',false)
    .set('knowledgeToggle',false)
    .set('reachToggle',false)
    case SEARCH_CLICK:
    return state

    case FOOTER_CLICK:
    return state
    .set('footerNavigation',(OneTrueRestFalseObject(state.get('footerNavigation').toJS(),action.evt,'reviews')))
    case REVIEWS_LOADED:
    return state
    .set('googleReviewObject',(UpdateReviews(state.get('googleReviewObject').toJS(),action.google)))
    .set('yelpReviewObject',(UpdateReviews(state.get('yelpReviewObject').toJS(),action.yelp)))
    case CATEGORY_CHANGE:
    return state.set('selectCategoryValue',action.value)
    case CONTACT_INPUT:
      return state
      .setIn(['contactInfo',action.key],action.value)
      .setIn(['contactInfo','submitFailed'],false)

    case CLOCK_CLICK:
    return state
    .setIn(['contactInfo','startTime'],convertDateString(action.hour))
    .setIn(['contactInfo','endTime'],convertDateString(action.hour,))
    ;
    case CALENDAR_CLICK:

    if(action.day === 'erase'){
      return state
      .setIn(['contactInfo','date'],'')
      .setIn(['contactInfo','startTime'],'')
      .setIn(['contactInfo','endTime'],'');
    } else {

      return state
      .setIn(['contactInfo','startTime'],getEarlyTime(action.day))
      .setIn(['contactInfo','endTime'],getEarlyTime(action.day))
      .setIn(['contactInfo','date'],action.day);
    }
    case CONTACT_CLICK:
    if(action.contact === "close"){
        return state

    } else if(action.contact === "closeIt"){
      return state
      .set('isHamburgerOpen',false)
      .set('userData',false)
      .set('contactForm','')
      .set('itemToView', '')
      .set('searchInput','')
      .set('hamburger')
    }

     else {

      if(action.obj){
        return state
        .set('contactForm',action.contact)
        .set('itemToView',action.obj)
        .set('isHamburgerOpen',false)

      } else {
        return state
        .set('isHamburgerOpen',false)
        .set('originalComment',action.comment)
        .set('onSaleToggle',false)
        .set('onShopToggle',false)
        .set('knowledgeToggle',false)
        .set('reachToggle',false)
        .setIn(['wishList','open'],false)
        .set('contactForm',action.contact)
        .set('searchInput','')
        .set('searchItems',List([]))
      }
  }

    case LOAD_PAGE_SUCCESS:
    return state.setIn(['loading',action.category],true);
    case NAVIGATION_MOBILE_CLICK:
    return state.set('navigationMobileClick',state.get('navigationMobileClick') === false ? true: false);

    case NAVIGATION_DETAIL_CLICK:
      return state.set('navigationDetailArray',OneTrueRestFalse(state.get('navigationDetailArray'),action.category));
    case HAMBURGER_CLICK:
    return state.set('isHamburgerOpen',!state.get('isHamburgerOpen')).set('isDetailOpen',false)
    // if(window.matchMedia('(min-width:996px)').matches){
    //   if(state.get('isHamburgerOpen')){
    //     return state.set('isHamburgerOpen',false)
    //
    //   } else {
    //     return state
    //   }
    // } else {
    //   return state
    //   .set('isHamburgerOpen',state.get('isHamburgerOpen') === false ? true: false)
    // }
    case HAMBURGER_CLOSE:
      return state.set('navigationDetailArray',OneTrueRestFalse(state.get('navigationDetailArray'),''))
    case HAMBURGER_DETAIL_HOVER:
    if(action.evt){
      return state.set('isHoverDetail',true)
    } else {
      return state.set('isHoverDetail',false)
    }
    default:
      return state;
  }
}

export default appReducer;
