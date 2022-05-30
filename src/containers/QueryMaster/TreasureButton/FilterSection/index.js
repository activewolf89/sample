import React from 'react';
import Div from 'shared/Div';
import Ranges from './Ranges';
import StaticOptions from './StaticOptions';
import CloseFilters from '../../CloseFilters';
import {H3} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  var FindToFixed = function(detailField){
    switch(detailField){
      case 'ItemSize':
      return 1;
      case 'ItemLength':
      return 1;
      case 'ItemMetalWeight':
      return 1
      default:
      return 0
    }
  }
  return (
    <Div >
      <Div  onClick={()=>{props.onOpenFilterQuestion('')}}
        zIndex='10000000000000000000000'
        height='100vh'
        top='0'
        left='0'
      themedAccent opacity='.5' width='100%' position='fixed' >
      </Div>
      <Div   position='fixed' padding='20px 0' borderTop='1px solid white' zIndex='99999999999999999' left='0' bottom='0' themedAccent width='100%'>
        <Div flexDirection='column'  width='100%' themedAccent display='flex' justifyContent='center' height='100%' alignItems='center'>
          {
            !isNaN(props.categories[0]) ?
              <Div maxWidth='500px' backgroundColor='white' width='100%'>
                <Div  className="element" color='black'>
                  <H3 fontWeight='bold'>
                    {props.DetailName + " Range"}
                  </H3>
                  <Div textAlign='center' display='flex' justifyContent='center'>
                    {
                      Object.keys(props.categoryObjects).length > 1 &&
                      <CloseFilters
                        specificDetailName = {props.DetailName}
                        history={props.history}
                        categoryObjects = {props.categoryObjects}
                        catId = {props.catId}
                      />
                    }
                  </Div>
                </Div>
                <Ranges
                  detailName={props.DetailName}
                  catId={props.catId}
                  rangeKey={props.DetailField}
                  toFixed={FindToFixed(props.DetailField)}
                  history = {props.history}
                  maxValue={Math.max(...props.categories)}
                  arrayOfNumbers={props.categories.map((val)=>{
                    if(typeof val ==='string'){
                      return Number(parseFloat(
                        val.replace(/,/g, ".")
                      ).toFixed(2))
                    } else {
                        return val
                    }
                  }).sort((a,b)=>{return Number(a) -Number(b)})}
                  DetailField={props.DetailField}
                  searchableKey={props.DetailField}
                />
              </Div>
            :
            <Div backgroundColor='white'  width='100%' >
              <Div color='black'>
                <H3 fontWeight='bold' className="element" color='black'>
                  {props.DetailName + " Selection" }
                </H3>
                <Div textAlign='center' display='flex' justifyContent='center'>
                  {
                    Object.keys(props.categoryObjects).length > 1 &&
                    <CloseFilters
                      specificDetailName = {props.DetailName}
                      history={props.history}
                      categoryObjects = {props.categoryObjects}
                      catId = {props.catId}
                    />
                  }
                </Div>
              </Div>
              <StaticOptions
                catId={props.catId}
                DetailField={props.DetailField}
                vendorObject = {props.vendorObject}
                isVendor = {props.isVendor}
                rangeKey={props.DetailName}
                searchableKey={props.DetailField}
                arrayOfOptions={props.categories}
                history={props.history}
              />
            </Div>
          }
        </Div>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
