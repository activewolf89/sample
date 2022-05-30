import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span';
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (


      <Div display='flex' cursor='pointer' onClick={()=>{props.onScrollToFilter()}}>
        <Div padding='0 5px' onClick={()=>{
        }}>
          <Span  color='black' >
            <small>
              <FontAwesome name="filter" />
              Filter
            </small>
          </Span>
        </Div>
        {
          props.ratio !== null ?
            <Div textAlign='center' >

              <Span color='gray'>
                {
                  props.ratio !== "null/null" ?
                    <small>
                      {" (" + props.ratio + ")"}
                    </small>:
                    <small>
                      loading...
                    </small>
                }
              </Span>
            </Div>:
            <Div textAlign='center'>
              <Span color='gray'>
                <small>
                  loading...
                </small>
              </Span>
            </Div>
        }
      </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
