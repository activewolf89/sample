import React from 'react';
import Div from 'shared/Div';
import Span from 'shared/Span'
import FilterSection from './FilterSection';


// -----
const funcC0mp = (props) =>{
  return (
    <Div >

      <Div className={props.name === "Less Filters" && "element"} onClick={()=>{!props.alternativeClick && props.onOpenFilterQuestion(props.itemKey)}}>
        <Div display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
          <Span>
            <small>
              {props.name}
            </small>
          </Span>
          <Span color='gray'>
            <small>
              {props.currentFilter}
            </small>
          </Span>
        </Div>
      </Div>
      {
        (props.currentOpen === props.itemKey) && !props.alternativeClick &&
        <FilterSection
          catId={props.catId}
          DetailField={props.itemKey}
          DetailName={props.name}
          categories={props.categories}
          onOpenFilterQuestion = {props.onOpenFilterQuestion}
          history={props.history}
          categoryObjects = {props.categoryObjects}

        />
      }
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
