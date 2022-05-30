
import { fromJS } from 'immutable';
import ItemReducer from '../reducer';

describe('ItemReducer', () => {
  it('returns the initial state', () => {
    expect(ItemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
