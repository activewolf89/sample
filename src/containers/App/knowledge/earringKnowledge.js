import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import Styles from './xK/Styles';
import StylesFaq from './xK/Styles/faq';
import Anatomy from './xK/Anatomy';
import AnatomyFaq from './xK/Anatomy/faq';
export default defineMessages(
  [
    {
      id: 'earrings-anatomy',
      filterable: false,
      matchingEdgeKey: '',
      title: 'Earring Anatomy',
      url: '/knowledge-center/earrings/earrings-anatomy',
      details: Anatomy,
      faqArray: AnatomyFaq,
      options: []
    },
    {
      id: 'earrings-styles',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Earring Styles',
      url: '/knowledge-center/earrings/earrings-styles',
      details: Styles,
      faqArray: StylesFaq,
      options: []
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/earrings/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },

]

);
