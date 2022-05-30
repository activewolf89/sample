import React from 'react';
import Div from 'shared/Div';
import Title from 'shared/Title';
import Span from 'shared/Span';
import WordCompressor from 'shared/WordCompressor';
import FontAwesome from 'react-fontawesome';
import Error from 'shared/Error';
import Input from 'shared/Input';
import { CSSTransition } from 'react-transition-group';
import ProductBox1 from 'components/ShopDetails/ProductBox1';

// -----
const ItemField = (props) =>{
  return (
    <Div>
      <Div  display="flex" alignItems="flex-end" justifyContent="space-between" id="0" onClick= {(e)=>{props.onFocusChange(props.indexAt)}}>
        <Title>Item:<Span fontStyle="italic">{" " + props.itemToView.ItemKey}</Span> </Title>
        {
          props.view ? false:
          <FontAwesome name={props.onFocusArray[props.indexAt] ? "caret-up":'caret-down'}/>
        }
      </Div>
      <CSSTransition
        in={props.view ? true:props.onFocusArray[props.indexAt] }
        timeout={500}
        classNames="view"
        unmountOnExit
      >
        <Div display="flex" flexDirection="column" alignitems="center" justifyContent='center' >
          <ProductBox1
            justRotate
            history={props.history}
            product={props.itemToView}
          />
        </Div>
      </CSSTransition>
    </Div>

  )
}
ItemField.propTypes = {
}
export default ItemField;
