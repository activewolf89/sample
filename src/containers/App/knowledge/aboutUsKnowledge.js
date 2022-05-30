import AboutUs from 'containers/App/knowledge/aK/AboutUs';
import AboutUsFaq from 'containers/App/knowledge/aK/AboutUs/faq';

import ReturnPolicy from 'containers/App/knowledge/aK/ReturnPolicy';
import ReturnPolicyFaq from 'containers/App/knowledge/aK/ReturnPolicy/faq';

import TheTeam from 'containers/App/knowledge/aK/TheTeam';
import TheTeamFaq from 'containers/App/knowledge/aK/TheTeam/faq';

import OurReviews from 'containers/App/knowledge/aK/OurReviews';
import OurReviewsFaq from 'containers/App/knowledge/aK/OurReviews/faq';

import { defineMessages } from 'react-intl';

export default defineMessages(
  [
    {
    id: 'about-us',
    matchingEdgeKey: '',
    filterable: false,
    title: 'About Us',
    url:'/knowledge-center/who-we-are/about-us',
    details: AboutUs,
    faqArray: AboutUsFaq,
    options: [],
    },
    {
    id: 'the-team',
    matchingEdgeKey: '',
    filterable: false,
    title: 'The Team',
    url:'/knowledge-center/who-we-are/the-team',
    details: TheTeam,
    faqArray: TheTeamFaq,
    options: [],
    },
    {
    id: 'return-policy',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Refund & Return Policy',
    url:'/knowledge-center/who-we-are/return-policy',
    details: ReturnPolicy,
    faqArray: ReturnPolicyFaq,
    options: [],
    },
    {
    id: 'our-reviews',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Our Reviews',
    url:'/knowledge-center/who-we-are/our-reviews',
    details: OurReviews,
    faqArray: OurReviewsFaq,
    options: [],
    },
]

);
