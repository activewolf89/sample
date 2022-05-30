import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';

// -----
const funcC0mp = (props) =>{
  return (
    <Div padding='30px 0'>
      <Div padding='10px 0'>
        <Button onClick={props.onUpdateUserProfile} width='100%' themed active>Save & Update</Button>
      </Div>
      <NoMPUl childrenPadding='5px'  display='flex' justifyContent='space-between' flexWrap='nowrap'>
        
        <Li width='100%'>
          <Button  width='100%' themed onClick={props.onClearInputs}>
            Clear
          </Button>
        </Li>
      </NoMPUl>

      <Div padding='10px 0'>
        <Button onClick={props.onClose} themed width='100%'>
          Exit
        </Button>
      </Div>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
