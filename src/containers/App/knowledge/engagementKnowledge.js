import { defineMessages } from 'react-intl';
import RingAnatomy from './eK/RingAnatomy';
import RingAnatomyFaq from './eK/RingAnatomy/faq';
import RingStylesFaq from './eK/RingStyles/faq';
import RingStyles from './eK/RingStyles';
import CenterShape from './eK/CenterShape';
import CenterShapeFaq from './eK/CenterShape/faq';
import ProngOptions from './eK/ProngOptions';
import ProngOptionsFaq from './eK/ProngOptions/faq';
import RingSize from './eK/RingSize';
import RingWidth from './shared/RingWidth';
import RingSizeFaq from './eK/RingSize/faq';
import Budget from './eK/Budget';
import BudgetFaq from './eK/Budget/faq';
import MetalChoices from './shared/MetalChoices';
import MetalColors from './shared/MetalColors';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import RingWidthFaq from './shared/RingWidth/faq';
import MetalColorsFaq from './shared/MetalColors/faq';
import Collections from './shared/Collections';
import CollectionsFaq from './shared/Collections/faq';
export default defineMessages(
  [
  {
  id: 'ring-anatomy',
  matchingEdgeKey: '',
  filterable: false,
  title: 'Ring Anatomy',
  url:'/knowledge-center/engagement-rings/ring-anatomy',
  details: RingAnatomy,
  faqArray: RingAnatomyFaq,
  options: [],
  },
  {
    id: 'ring-styles',
    matchingEdgeKey: 'ItemStyle',
    filterable: true,
    title: 'Ring Styles',
    url: '/knowledge-center/engagement-rings/ring-styles',
    details: RingStyles,
    faqArray: RingStylesFaq,
    options: []
  },
  {
    id: 'metal-types',
    filterable: true,
    matchingEdgeKey: 'ItemMetalType',
    title: 'Metal Types',
    url: '/knowledge-center/engagement-rings/metal-types',
    details: MetalChoices,
    faqArray: MetalChoicesFaq,
    options: []
  },
  {
    id: 'metal-color',
    filterable: true,
    matchingEdgeKey: 'ItemMetalColor',
    title: 'Metal Colors',
    url: '/knowledge-center/engagement-rings/metal-color',
    details: MetalColors,
    faqArray: MetalColorsFaq,
    options: []
  },
    {
      id: 'ring-size',
      matchingEdgeKey: 'ItemSize',
      filterable: false,
      title: 'Ring Size',
      details: RingSize,
      faqArray: RingSizeFaq,
      url: '/knowledge-center/engagement-rings/ring-size',
      options: []
    },
    {
      id: 'ring-width',
      matchingEdgeKey: 'ItemLength',
      filterable: false,
      title: 'Ring Width',
      details: RingWidth,
      faqArray: RingWidthFaq,
      url: '/knowledge-center/engagement-rings/ring-width',
      options: [],
    },
    {
      id: 'ItemDetail_13',
      matchingEdgeKey: 'ItemDetail_13',
      filterable: true,
      title: 'Prong Options',
      details: ProngOptions,
      faqArray: ProngOptionsFaq,
      url: '/knowledge-center/engagement-rings/ItemDetail_13',
      options: []
    },
  {
    id: 'ItemDetail_16',
    filterable: true,
    matchingEdgeKey: 'ItemDetail_16',
    title: 'Collections',
    details: Collections,
    faqArray: CollectionsFaq,
    url: '/knowledge-center/engagement-rings/ItemDetail_16',
    options: []
  },
  {
    id: 'center-shape',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Center Shape',
    url: '/knowledge-center/engagement-rings/center-shape',
    faqArray: CenterShapeFaq,
    details: CenterShape,
    options: []
  },
  {
    id: 'budget',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Budget',
    details: Budget,
    faqArray: BudgetFaq,
    url: '/knowledge-center/engagement-rings/budget',
    options: []
  },

]

);
//id will match the url also in the object
//filterable boolean will check if the category CURRENTLY is available, so check true if you want to make sure you do not direct a user to the wrong page
//title: Title of the sub article
//url url goes to wherever REACT-ROUTER you want to go
//options is an empty section and was used to fill a sub categorym, but has since been expired.
