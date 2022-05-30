import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
// -----
const OptionsInArray = (props) =>{
  return (
    <Div borderBottom='1px solid white' overflowX='auto' >
      <NoMPUl display='flex' flexWrap='nowrap' alignItems='flex-end' childrenPadding='0 2px'>
        {
          props.objToEdit.new.map((obj,idx)=>{
            return(
              <Li key={idx}>
                <Div >

                  <Button  onClick={()=>{props.onChangeFocus(props.selectedEdit.key,idx)}} themed  active={idx === props.objToEdit.indexSelected} halfDome>
                    <Div borderBottom={props.selectedEdit.error === false ? '0px solid red':props.selectedEdit.error[idx].passed ? '0px solid red':'3px solid red'}>
                      {props.selectedEdit.title}{idx + 1}
                    </Div>
                  </Button>
                </Div>
              </Li>
            )
          })
        }
        {
          (props.selectedEdit.key === 'Addresses' || props.selectedEdit.key ==='Phones') &&
          <Button  width='50px' onClick={props.onAddTemplate} >
            +
          </Button>
        }
      </NoMPUl>
    </Div>
  )
}
OptionsInArray.propTypes = {
}
export default OptionsInArray;
