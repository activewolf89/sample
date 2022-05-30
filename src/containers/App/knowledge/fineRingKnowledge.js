import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import Styles from './fK/Styles';
import StylesFaq from './fK/Styles/faq';
import Anatomy from './fK/Anatomy';
import AnatomyFaq from './fK/Anatomy/faq';
export default defineMessages(
  [
    {
      id: 'fine-rings-anatomy',
      filterable: false,
      matchingEdgeKey: '',
      title: 'Fashion Ring Anatomy',
      url: '/knowledge-center/fine-rings/fine-rings-anatomy',
      details: Anatomy,
      faqArray: AnatomyFaq,
      options: []
    },
    {
      id: 'fine-rings-styles',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Fashion Ring Styles',
      url: '/knowledge-center/fine-rings/fine-rings-styles',
      details: Styles,
      faqArray: StylesFaq,
      options: []
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/fine-rings/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },
]

);
