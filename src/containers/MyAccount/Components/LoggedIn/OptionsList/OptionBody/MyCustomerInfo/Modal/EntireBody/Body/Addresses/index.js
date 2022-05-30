import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import AddressInputs from '../Inputs/AddressInputs'
// -----
const Addresses = (props) =>{
  return (
    <Div >
      <NoMPUl >
        {props.objToEdit.new.map((obj,idx)=>{
          if(idx === props.objToEdit.indexSelected){

            return (
              <Div key={idx}>
                <NoMPUl>
                  <Li >
                    <AddressInputs
                      error={!props.error ? false:props.error[idx].errorObj['AddressStreet']}
                      onObjectChange = {props.onObjectChange}
                      name={"Street"}
                      type="address"
                      value={obj.PairValue.AddressStreet}
                      link={"AddressStreet"}
                    />
                  </Li>
                  <Li >
                    <AddressInputs
                      error={!props.error? false:props.error[idx].errorObj['AddressStreet2']}
                      onObjectChange = {props.onObjectChange}
                      name={"Street2"}
                      type="address"
                      value={obj.PairValue.AddressStreet2}
                      link={"AddressStreet2"}
                    />
                  </Li>
                  <Li >
                    <AddressInputs
                      error={!props.error? false:props.error[idx].errorObj['AddressCity']}
                      onObjectChange = {props.onObjectChange}
                      name={"City"}
                      link={'AddressCity'}
                      type="city"
                      value={obj.PairValue.AddressCity}
                    />
                  </Li>
                  <Li >
                    <AddressInputs
                      error={!props.error? false:props.error[idx].errorObj['AddressState']}
                      onObjectChange = {props.onObjectChange}
                      name={"State"}
                      type="state"
                      value={obj.PairValue.AddressState}
                      link={"AddressState"}
                    />
                  </Li>
                  <Li >
                    <AddressInputs
                      error={!props.error? false:props.error[idx].errorObj['AddressZip']}
                      type="zipcode"
                      onObjectChange = {props.onObjectChange}
                      name={"Zip"}
                      value={obj.PairValue.AddressZip}
                      link={"AddressZip"}
                    />
                  </Li>

                </NoMPUl>
              </Div>
            )
          } else {
            return('')
          }

        })}

      </NoMPUl>
    </Div>
  )
}
Addresses.propTypes = {
}
export default Addresses;
