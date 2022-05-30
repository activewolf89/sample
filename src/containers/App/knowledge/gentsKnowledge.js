import { defineMessages } from 'react-intl';
import MetalChoices from './shared/MetalChoices';
import MetalChoicesFaq from './shared/MetalChoices/faq';
import MBandAnatomy from 'containers/App/knowledge/gK/MBandAnatomy'
import MBandAnatomyFaq from 'containers/App/knowledge/gK/MBandAnatomy/faq'
import BandStyles from 'containers/App/knowledge/gK/BandStyles'
import BandStylesFaq from 'containers/App/knowledge/gK/BandStyles/faq'
import BandFinish from 'containers/App/knowledge/gK/BandFinish'
import BandFinishFaq from 'containers/App/knowledge/gK/BandFinish/faq'
import RingSize from 'containers/App/knowledge/gK/RingSize'
import RingSizeFaq from 'containers/App/knowledge/gK/RingSize/faq'
export default defineMessages(
  [
    {
    id: 'ring-anatomy',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Band Anatomy',
    url:'/knowledge-center/gents-bands/band-anatomy',
    details: MBandAnatomy,
    faqArray: MBandAnatomyFaq,
    options: [],
    },
    {
      id: 'metal-types',
      filterable: true,
      matchingEdgeKey: 'ItemMetalType',
      title: 'Metal Types',
      url: '/knowledge-center/gents-bands/metal-types',
      details: MetalChoices,
      faqArray: MetalChoicesFaq,
      options: []
    },
    {
      id: 'band-styles',
      filterable: true,
      matchingEdgeKey: 'ItemStyle',
      title: 'Band Styles',
      url: '/knowledge-center/gents-bands/band-styles',
      details: BandStyles,
      faqArray: BandStylesFaq,
      options: []
    },
    {
      id: 'ring-size',
      filterable: false,
      matchingEdgeKey: 'ItemStyle',
      title: 'Ring Size',
      url: '/knowledge-center/gents-bands/ring-size',
      details: RingSize,
      faqArray: RingSizeFaq,
      options: []
    },
    {
      id: 'band-finish',
      filterable: true,
      matchingEdgeKey: 'ItemMetalFinish',
      title: 'Band Finishes',
      url: '/knowledge-center/gents-bands/band-finish',
      details: BandFinish,
      faqArray: BandFinishFaq,
      options: []
    },
]

);
