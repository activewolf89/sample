import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import LBandAnatomy from 'containers/App/knowledge/bK/LBandAnatomy'
import BandStyles from 'containers/App/knowledge/bK/BandStyles'
import BandStylesFaq from 'containers/App/knowledge/bK/BandStyles/faq'
import LBandAnatomyFaq from 'containers/App/knowledge/bK/LBandAnatomy/faq'
import RingSize from 'containers/App/knowledge/bK/RingSize'
import RingSizeFaq from 'containers/App/knowledge/bK/RingSize/faq'
export default defineMessages(
  [
    {
    id: 'ring-anatomy',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Band Anatomy',
    url:'/knowledge-center/ladies-bands/band-anatomy',
    details: LBandAnatomy,
    faqArray: LBandAnatomyFaq,
    options: [],
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/ladies-bands/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },
    {
      id: 'band-styles',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Band Styles',
      url: '/knowledge-center/ladies-bands/band-styles',
      details: BandStyles,
      faqArray: BandStylesFaq,
      options: []
    },
    {
      id: 'ring-size',
      filterable: false,
      matchingEdgeKey: 'ItemSize',
      title: 'Ring Size',
      url: '/knowledge-center/ladies-bands/ring-size',
      details: RingSize,
      faqArray: RingSizeFaq,
      options: []
    },
]

);
