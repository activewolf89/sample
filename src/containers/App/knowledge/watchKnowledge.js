import { defineMessages } from 'react-intl';
import WatchAnatomy from 'containers/App/knowledge/wK/WatchAnatomy'
import WatchAnatomyFaq from 'containers/App/knowledge/wK/WatchAnatomy/faq'

import WatchStyles from 'containers/App/knowledge/wK/WatchStyles'
import WatchStylesFaq from 'containers/App/knowledge/wK/WatchStyles/faq'

export default defineMessages(
  [
    {
    id: 'watch-anatomy',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Watch Anatomy',
    url:'/knowledge-center/watches/watch-anatomy',
    details: WatchAnatomy,
    faqArray: WatchAnatomyFaq,
    options: [],
    },
    {
    id: 'watch-styles',
    matchingEdgeKey: '',
    filterable: true,
    title: 'Watch Styles',
    url:'/knowledge-center/watches/watch-styles',
    details: WatchStyles,
    faqArray: WatchStylesFaq,
    options: [],
    },
]

);
