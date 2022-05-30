import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import Span from 'shared/Span';
import WordCompressor from 'shared/WordCompressor';
import FontAwesome from 'react-fontawesome';
import Error from 'shared/Error';
import Input from 'shared/Input';
import { CSSTransition } from 'react-transition-group';
import TextArea from 'shared/TextArea';


// -----
const Comment = (props) =>{
  return (
    <Div>
      <Div display="flex" alignItems="flex-end" justifyContent="space-between" id="2" onClick= {(e)=>{props.onFocusChange(props.indexAt)}}>
        <Div display="flex"  alignItems='center'>
          <Title>{props.title}: </Title>
          <Span whiteSpace="nowrap" fontStyle="italic">
            {
              props.infoObject.message.length > 0 &&
              <WordCompressor
                text={props.infoObject.message}
                size={10}
              />
            }
          </Span> {props.errorObject.message ? <FontAwesome name="times-circle" style={{color:'red'}} />:""}
        </Div>
        <FontAwesome name={props.onFocusArray[props.indexAt]? "caret-up":'caret-down'}/>

      </Div>
      <CSSTransition
        in={props.onFocusArray[props.indexAt]}
        timeout={500}
        classNames="view"
        unmountOnExit
      >
        <Div>
          <Div display="flex" flexDirection="column" alignItems="flex-start">
            <TextArea
              onClick= {(e)=>{props.onFocusChange(props.indexAt)}}
              error={props.errorObject.message}
              onChange={(e)=>{props.onInfoChange(e.target.value,e.target.name,props.indexAt)}}
              value={props.infoObject.message}
              name="message"
              width="100%"
              id={props.indexAt}
            ></TextArea>
            <Error>{props.errorObject.message}</Error>
          </Div>
        </Div>
      </CSSTransition>

    </Div>

  )
}
Comment.propTypes = {
}
export default Comment;
