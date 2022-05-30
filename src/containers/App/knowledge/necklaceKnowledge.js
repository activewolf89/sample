import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import Styles from './nK/Styles';
import StylesFaq from './nK/Styles/faq';
import Anatomy from './nK/Anatomy';
import AnatomyFaq from './nK/Anatomy/faq';
export default defineMessages(
  [
    {
      id: 'necklaces-anatomy',
      filterable: false,
      matchingEdgeKey: '',
      title: 'Necklace Anatomy',
      url: '/knowledge-center/necklaces/necklaces-anatomy',
      details: Anatomy,
      faqArray: AnatomyFaq,
      options: []
    },
    {
      id: 'necklaces-styles',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Necklace Styles',
      url: '/knowledge-center/necklaces/necklaces-styles',
      details: Styles,
      faqArray: StylesFaq,
      options: []
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/necklaces/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },

]

);
