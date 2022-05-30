import { defineMessages } from 'react-intl';
import GiftChoices from './giftK/Overview';
import GiftChoicesFaq from './giftK/Overview/faq';

export default defineMessages(
  [
    {
      id: 'Overview',
      filterable: false,
      matchingEdgeKey: 'ItemStyle',
      title: 'Overview',
      url: '/knowledge-center/jewelry-gift-guide-2020',
      details:GiftChoices,
      faqArray:GiftChoicesFaq,
      options: []
    },
]

);
