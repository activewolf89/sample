import React from 'react';
import Div from 'shared/Div';
import NumberFormat from 'react-number-format'
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H4} from 'shared/H';
// -----
const funcC0mp = (props) =>{
  return (
    <Div   >

      <NoMPUl display='flex' flexDirection={props.onSameLine ? 'row':'column'} alignItems='center' justifyContent='center' childrenMargin='0 3px' >
        <Li>
          <Div  flexDirection='column' position='relative' fontStyle='italic' display='flex' color={props.specialPrice ? 'gray':''} >

            <Div  width='100%'>
              <H4>
                <Div color={props.specialPrice ? 'green':''} fontWeight='bold'>
                  <NumberFormat  value={RoundTo10(props.specialPrice? props.specialPrice:props.price)} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div>{value}</div>} />
                </Div>
              </H4>
            </Div>
          </Div>
        </Li>
      </NoMPUl>

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;


function RoundTo10(num){
  return num
}
