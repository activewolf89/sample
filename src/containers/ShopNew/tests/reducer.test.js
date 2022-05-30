
import { fromJS } from 'immutable';
import ShopReducer from '../reducer';

describe('ShopReducer', () => {
  it('returns the initial state', () => {
    expect(ShopReducer(undefined, {})).toEqual(fromJS({}));
  });
});
