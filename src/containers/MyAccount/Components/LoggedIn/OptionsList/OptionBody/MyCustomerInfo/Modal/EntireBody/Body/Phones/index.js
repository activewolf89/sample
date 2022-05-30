import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import PhoneInputs from '../Inputs/PhoneInputs'
// -----
const Phones = (props) =>{
  return (
    <Div >
      <NoMPUl >
        {props.objToEdit.new.map((obj,idx)=>{
          if(idx === props.objToEdit.indexSelected){
            return (
              <Div key={idx}>
                <NoMPUl>
                  <Li >
                    <PhoneInputs
                      error={!props.error ? false:props.error[idx].errorObj['PhonePhone']}
                      onObjectChange = {props.onObjectChange}
                      name={"Phone"}
                      type="telephone"
                      value={obj.PairValue.PhonePhone}
                      link={"PhonePhone"}
                    />
                  </Li>

                </NoMPUl>
              </Div>
            )
          } else {
            return (
              ''
            )
          }

        })}

      </NoMPUl>
    </Div>
  )
}
Phones.propTypes = {
}
export default Phones;
