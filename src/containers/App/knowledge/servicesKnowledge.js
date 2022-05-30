import { defineMessages } from 'react-intl';
import Service from './sK/Service';
import ServiceFaq from './sK/Service/faq';
import Local from './sK/Local';
import LocalFaq from './sK/Local/faq';
import CommonScenarios from './sK/CommonScenarios';
import CommonScenariosFaq from './sK/CommonScenarios/faq';
import CommonCScenarios from './sK/CommonCScenarios';
import CommonCScenariosFaq from './sK/CommonCScenarios/faq';
export default defineMessages(
  [
    {
    id: 'services-overview',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Service Overview',
    url:'/knowledge-center/services/services-overview',
    details: Service,
    faqArray: ServiceFaq,
    options: [],
    },
    {
    id: 'sourced-locally',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Sourced Locally',
    url:'/knowledge-center/services/sourced-locally',
    details: Local,
    faqArray: LocalFaq,
    options: [],
    },
    {
    id: 'repair-scenarios',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Repair Scenarios',
    url:'/knowledge-center/services/repair-scenarios',
    details: CommonScenarios,
    faqArray: CommonScenariosFaq,
    options: [],
    },
    {
    id: 'custom-scenarios',
    matchingEdgeKey: '',
    filterable: false,
    title: 'Custom Scenarios',
    url:'/knowledge-center/services/custom-scenarios',
    details: CommonCScenarios,
    faqArray: CommonCScenariosFaq,
    options: [],
    },
]

);
