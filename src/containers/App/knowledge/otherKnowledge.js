import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';

import OtherChoices from './oK/OtherChoices';
import OtherChoicesFaq from './oK/OtherChoices/faq';

export default defineMessages(
  [
    {
      id: 'other-options',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Other Options',
      url: '/knowledge-center/others/other-options',
      details: OtherChoices,
      faqArray: OtherChoicesFaq,
      options: []
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/others/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },
]

);
