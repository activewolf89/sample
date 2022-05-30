/**
 *
 * Asynchronously loads the component for Shop
 *
 */
import LoadingPage from 'components/LoadingPage';
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: null,
});
