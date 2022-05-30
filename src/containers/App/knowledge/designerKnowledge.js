import { defineMessages } from 'react-intl';
import Designer from './hK/Designer';
import DesignerFaq from './hK/Designer/faq';

import Tacori from './hK/Tacori';
import TacoriFaq from './hK/Tacori/faq';

import Forevermark from './hK/Forevermark';
import ForevermarkFaq from './hK/Forevermark/faq';


export default defineMessages(
  [
    {
    id: 'designers-overview',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Designer Overview',
    url:'/knowledge-center/designers/designers-overview',
    details: Designer,
    faqArray: DesignerFaq,
    options: [],
    },
    {
    id: 'tacori',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Tacori',
    url:'/knowledge-center/designers/tacori',
    details: Tacori,
    faqArray: TacoriFaq,
    options: [],
    },
    {
    id: 'forevermark',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Forevermark',
    url:'/knowledge-center/designers/forevermark',
    details: Forevermark,
    faqArray: ForevermarkFaq,
    options: [],
    shop: 'Forevermark'
    },



]

);
