import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import Span from 'shared/Span';
import WordCompressor from 'shared/WordCompressor';
import FontAwesome from 'react-fontawesome';
import Error from 'shared/Error';
import Input from 'shared/Input';
import { CSSTransition } from 'react-transition-group';


// -----
const NameField = (props) =>{
  return (
    <Div>
      <Div display="flex" flexWrap="nowrap"   alignItems="flex-end" id="0" onClick= {(e)=>{props.onFocusChange(props.indexAt)}}>
        <Div display='flex' alignItems='center'>

          <Title>{props.title}:</Title>
          <Span fontStyle="italic">
            {
              props.infoObject[props.NameField].length > 0 &&
              <WordCompressor
                text={props.infoObject[props.NameField]}
                size={10}
              />
            }
          </Span> {props.errorObject[props.NameField] ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}
        </Div>
        <Div margin = "0 0 0 auto">
          <FontAwesome name={props.onFocusArray[props.indexAt] ? "caret-up":'caret-down'}/>
        </Div>
      </Div>
      <CSSTransition
        in={props.onFocusArray[props.indexAt]}
        timeout={500}
        classNames="view"
        unmountOnExit
      >
        <Div display="flex"  width="100%" flexDirection="column" alignItems="flex-start">

          <Div width="100%" padding="5px 0">
            <Input
              error={props.errorObject[props.NameField]}
              value={props.infoObject[props.NameField]}
              onChange={(e)=>{props.onInfoChange(e.target.value,props.NameField,props.indexAt)}}
              placeholder={props.NameTitle}
              name="name"
              width="100%"
              id={props.indexAt}
            />

          </Div>
          <Error>{props.errorObject[props.NameField]}</Error>

        </Div>
      </CSSTransition>
    </Div>

  )
}
NameField.propTypes = {
}
export default NameField;
