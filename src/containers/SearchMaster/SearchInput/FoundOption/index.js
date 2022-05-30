import React from 'react';
import Div from 'shared/Div';
import FontAwesome from 'react-fontawesome';
import {H2} from 'shared/H';
const funcC0mp = (props) =>{
  return (
    <Div color='white' textAlign='center' >
      {
        props.loading ?
          <Div>
            <FontAwesome name="spinner" style={{color:'gray'}} spin size="2x" />
          </Div>:
          <Div display='flex' justifyContent='center'>
            <Div textDecoration='underline' fontWeight='bold' padding='0 5px'>

              <H2 >

                {"  " +
                  props.totalCount
                }
              </H2>
            </Div>
            <H2 fontStyle='italic'>
              {" Discovered "}
            </H2>

          </Div>

      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
