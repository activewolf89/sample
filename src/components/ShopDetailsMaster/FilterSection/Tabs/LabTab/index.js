import React from 'react';
import Input from 'shared/Input';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import SearchCheckKeyForValue from 'containers/Shop/Helpers/SearchCheckKeyForValue';
// -----
const LabTab = (props) =>{
  return (
    <NoMPUl display="flex" alignItems="center" childrenPadding="0 10px" >
      <Li>
        <Input
          onChange={(e)=>{props.onToggleClickableSearch('lab','GIA',e.target.value)}}
          type="checkBox"
          style={{marginRight:'5px'}}
          checked={SearchCheckKeyForValue(props.history.location.search,'lab','GIA')}
          value={"GIA"} />

        <label>GIA</label>
      </Li>
      <Li>
        <Input
          onChange={(e)=>{props.onToggleClickableSearch('lab','AGS',e.target.value)}}
          type="checkBox"
          style={{marginRight:'5px'}}
          checked={SearchCheckKeyForValue(props.history.location.search,'lab','AGS')}
          value={"AGS"} />
        <label>AGS</label>
      </Li>
      <Li>
        <Input
          onChange={(e)=>{props.onToggleClickableSearch('lab','FMX',e.target.value)}}
          type="checkBox"
          style={{marginRight:'5px'}}
          value={"Forevermark"}
          checked={SearchCheckKeyForValue(props.history.location.search,'lab','FMX')}
        ></Input>
        <label>Forevermark</label>
      </Li>
    </NoMPUl>
  )
}
LabTab.propTypes = {
}
export default LabTab;
