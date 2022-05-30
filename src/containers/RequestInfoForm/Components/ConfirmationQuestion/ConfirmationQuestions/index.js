import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import KeyValEdit from './KeyValEdit'
import LineItem from 'containers/Checkout/Components/Cart/Checkout/LineItem';
import CommitCheckout from 'shared/CommitCheckout';
import {SubTotal} from 'containers/Checkout/Helpers/CalculateSales';
import CommentsRequests from './CommentsRequests';
import CapitalizeFirstLetter from 'containers/App/HelperFunctions/CapitalizeFirstLetter';
import RefundPolicy from 'shared/RefundPolicy';

// -----
var SortDelivery = function(arr){
  var newArr = []
  if(arr.length > 9){
    newArr[0] = arr[6];
    newArr[1] = arr[0];
    newArr[2] = arr[7];
    newArr[3] = arr[3];
    newArr[3] = arr[8];
    newArr[4] = arr[1];
    newArr[4] = arr[9];
    newArr[5] = arr[4];
    newArr[7] = arr[2];
    newArr[8] = arr[5];
    newArr[9] = arr[3];
  } else {
    newArr[0] = arr[5];
    newArr[1] = arr[0];
    newArr[2] = arr[3];
    newArr[3] = arr[6];
  }
  return newArr

}
const funcC0mp = (props) =>{
  const kTF = props.customerInfo.choice.value;
  var keyedObject = props.customerInfo.logistics.choices[kTF];
  return (
    <Div >
      <NoMPUl display='flex' flexDirection='column' >

        {props.inventoryList.map((item,idx,arr)=>{

          return(
            <Li key={item.ItemKey}>
              <LineItem
                item = {item}
                onRemoveItem = {props.onRemoveItem}
                onRemoveFromCartItem = {props.onRemoveFromCartItem}
              />
            </Li>
          )
        })}

        <Li>
          <KeyValEdit
            onAdjust = {()=>{props.onToggle('choice')}}
            title={"Delivery Method"}
            value = {CapitalizeFirstLetter(props.customerInfo.choice.value)}
          />
        </Li>
        {
          SortDelivery(Object.keys(keyedObject)).map((ring,idx,arr)=>{
            if(ring !== 'salesTaxObject' && ring !== 'giftWrap' && keyedObject[ring] && ring !== 'error' && ring !== 'passed' && ring !== "comment"){

              return <Li key={idx}>
                <KeyValEdit
                  onAdjust = {()=>{props.onToggle('logistics')}}
                  title={keyedObject[ring].title}
                  value = {CapitalizeFirstLetter(keyedObject[ring].value)}
                />
              </Li>
            } else {
              return ''
            }
          })
        }
        <Li>
          <CommentsRequests
            choiceKey = {props.choiceKey}
            onInputChange={props.onInputChange}
            textValue = {props.textValue}
            giftWrap={keyedObject['giftWrap']}
          />
        </Li>
        <Li>
          <RefundPolicy />
        </Li>
        <Li>
          <Div >
            <CommitCheckout
              isLoading = {props.isLoading}
              taxableRate = {props.customerInfo.confirmation.taxableRate}
              endButton="Finish & Pay"
              handleFinish = {props.onLoadConfirmation}
              subTotal = {SubTotal(props.inventoryList)}
              inventoryList = {props.inventoryList}
              qty = {props.inventoryList.length}
            />
          </Div>
        </Li>

      </NoMPUl>
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
