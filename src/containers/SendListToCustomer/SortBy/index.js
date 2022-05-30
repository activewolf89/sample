import React from 'react';
import Div from 'shared/Div';
import SearchBy from 'shared/SearchBy';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >
      <SearchBy
        onShow = {props.onShow}
        history={props.history}
        catId={props.catId}
        searchFor={"high-to-low"}
        title={'Sort'}
        searchKey={'sort'}
      />
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
