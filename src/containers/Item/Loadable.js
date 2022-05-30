/**
 *
 * Asynchronously loads the component for Shop
 *
 */
 import React from 'react';
import Loadable from 'react-loadable';
import LoadingIndicator from 'shared/LoadingIndicator';

export default Loadable.Map({
  loading: LoadingIndicator,
  loader: {
    Index: () => import('./index'),
  },
  render(loaded, props) {
  let Index = loaded.Index.default;
  return <Index {...props} />;
}
});
