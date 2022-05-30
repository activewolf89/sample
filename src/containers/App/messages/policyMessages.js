import { defineMessages } from 'react-intl';

export default defineMessages(
  [
  {
    id: 'special-orders',
    title: 'Special Orders',
    url: '/services',
    options: [
      {
        id: 'q1',
        title: 'How do we start a special order?',
        url: '/services/faq/special-orders?=q1'
      },
      {
        id: 'q2',
        title: 'What is the return policy for items special ordered?',
        url: '/services/faq/special-orders?=q2'
      },
      {
        id: 'q3',
        title: 'How much deposit do I put down to start an order?',
        url: '/services/faq/special-orders?=q3'
      },
    ]
  },
  {
    id: 'services',
    title: 'Services',
    url: '/services',
    options: [
      {
        id: 'q1',
        title: 'Do you have a goldsmith in-house?',
        url: '/services/faq/services?=q1'

      },
      {
        id: 'q2',
        title: 'If the piece of jewelry is dirty or needs to get checked, do we charge for cleaning?',
        url: '/services/faq/services?=q2'

      },
      {
        id: 'q3',
        title: 'Do I have to leave my piece of jewelry at the store in order to get it cleaned?',
        url: '/services/faq/services?=q3'
      },
      {
        id: 'q4',
        title: 'Does L T Denny cover repairs?',
        url: '/services/faq/services?=q4'
      },
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance',
    url: '/services',
    options: [
      {
        id: 'q1',
        title: 'How do I get insurance on jewelry?',
        url: '/services/faq/insurance?=q1'

      },
      {
        id: 'q2',
        title: 'What does L T Denny recommend for insurance?',
        url: '/services/faq/insurance?=q2'
      },
    ]
  },
  {
    id: 'jewelry-cleaning',
    title: 'Jewelry Cleaning',
    options: [
      {
        id: 'q1',
        title: 'Does L T Denny offer jewelry cleaning?',
      },
      {
        id: 'q2',
        title: 'How can I clean on my own?',
      },
      {
        id: 'q3',
        title: 'How often should I get my jewelry cleaning and checked?',
      },
    ]
  },
]

);
