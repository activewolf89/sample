import { defineMessages } from 'react-intl';
import Overview from './financingK/Overview';
import faqArray from './financingK/Overview/faq';
export default defineMessages(
  [
  {
  id: 'do-we-offer',
  matchingEdgeKey: '',
  filterable: false,
  title: 'Options',
  url:'/knowledge-center/financing/options',
  details: Overview,
  faqArray: faqArray,
  options: [],
}
]
// {
//   id: 'ring-styles',
//   matchingEdgeKey: 'ItemStyle',
//   filterable: true,
//   title: 'Ring Styles',
//   url: '/knowledge-center/engagement-rings/ring-styles',
//   details: RingStyles,
//   faqArray: RingStylesFaq,
//   options: []
// },

);
//id will match the url also in the object
//filterable boolean will check if the category CURRENTLY is available, so check true if you want to make sure you do not direct a user to the wrong page
//title: Title of the sub article
//url url goes to wherever REACT-ROUTER you want to go
//options is an empty section and was used to fill a sub categorym, but has since been expired.
