import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span'
import completeFine from 'images/SVG/completeFine.svg';
import AddOntoSearchSegment from 'containers/Shop/Helpers/AddOntoSearchSegment';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <Div className={props.name === "Less Filters" && "element"} onClick={()=>{
        if(props.history.location.search.includes('treasure')){
          AddOntoSearchSegment('ItemSignage','',props.history)
        } else {
          AddOntoSearchSegment('ItemSignage','treasure-chest',props.history)
        }

      }}>
        <Div display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
          <Span>
            <small>
              Treasure Chest
            </small>
          </Span>
          <Div border='1px solid gray' borderRadius='5px' backgroundColor={props.history.location.search.includes('treasure-chest') ? 'gold':''} width='100%'>

            <Span color='gray'>
              <small>
                <img src={completeFine} style={{color:'yellow',width:'30px',height:'30px'}} alt="jewel" />
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
