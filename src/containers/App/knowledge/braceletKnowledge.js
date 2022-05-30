import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import Styles from './zK/Styles';
import StylesFaq from './zK/Styles/faq';
import Anatomy from './zK/Anatomy';
import AnatomyFaq from './zK/Anatomy/faq';
export default defineMessages(
  [
    {
      id: 'bracelets-anatomy',
      filterable: false,
      matchingEdgeKey: '',
      title: 'Bracelet Anatomy',
      url: '/knowledge-center/bracelets/bracelets-anatomy',
      details: Anatomy,
      faqArray: AnatomyFaq,
      options: []
    },
    {
      id: 'bracelets-styles',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Bracelet Styles',
      url: '/knowledge-center/bracelets/bracelets-styles',
      details: Styles,
      faqArray: StylesFaq,
      options: []
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/bracelets/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },
]

);
