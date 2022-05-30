import { defineMessages } from 'react-intl';
import FourCs from './dK/FourCs';
import FourCsFaq from './dK/FourCs/faq';
import ReadingACertificate from './dK/ReadingACertificate';
import ReadingACertificateFaq from './dK/ReadingACertificate/faq';
import DiamondAnatomy from './dK/DiamondAnatomy';
import DiamondAnatomyFaq from './dK/DiamondAnatomy/faq';
import DiamondSourcing from './dK/DiamondSourcing';
import DiamondSourcingFaq from './dK/DiamondSourcing/faq';

export default defineMessages(
  [
    {
      id: 'diamond-anatomy',
      title: 'Diamond Anatomy',
      url: '/knowledge-center/loose-diamonds/diamond-anatomy',
      details: DiamondAnatomy,
      faqArray: DiamondAnatomyFaq,
      options: []
    },
  {
    id: '4cs',
    title: '4cs',
    url: '/knowledge-center/loose-diamonds/4cs',
    details: FourCs,
    faqArray: FourCsFaq,
    options: []
  },
  {
    id: 'reading-a-certificate',
    title: 'Reading A Certificate',
    url: '/knowledge-center/loose-diamonds/reading-a-certificate',
    details: ReadingACertificate,
    faqArray: ReadingACertificateFaq,
    options: []
  },
  {
    id: 'diamond-sourcing',
    title: 'Diamond Sourcing',
    url: '/knowledge-center/loose-diamonds/diamond-sourcing',
    details: DiamondSourcing,
    faqArray: DiamondSourcingFaq,
    options: []
  },
]

);
