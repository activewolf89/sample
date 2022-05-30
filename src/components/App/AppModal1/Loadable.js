/**
 *
 * Asynchronously loads the component for Shop
 *
 */
import Loadable from 'react-loadable';
import LoadingIndicator from 'shared/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});
