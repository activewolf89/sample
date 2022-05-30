import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span'
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';
import FontAwesome from 'react-fontawesome';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <Div className={props.name === "Less Filters" && "element"} onClick={()=>{
        if(props.history.location.search.includes('?ItemStatus=I')){
          AddOntoSearchSegment('ItemStatus','',props.history)
        } else {
          AddOntoSearchSegment('ItemStatus','I',props.history)
        }
        
      }}>
        <Div display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
          <Span>
            <small>
              In-Stock Only
            </small>
          </Span>
          <Div border='1px solid gray' borderRadius='5px' backgroundColor={props.history.location.search.includes('?ItemStatus=I') ? 'gold':''} width='100%'>

            <Span color={props.history.location.search.includes('ItemStatus?=I') ? 'green':'gray'}>
              <small>
                <FontAwesome name="check" style={{color:props.history.location.search.includes('?ItemStatus=I') ? 'green':'gray'}} color="green" />
              </small>
            </Span>
          </Div>
            </Div>
          </Div>

          </Div>
          )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
