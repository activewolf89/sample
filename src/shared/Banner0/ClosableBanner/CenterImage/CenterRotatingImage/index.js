import React from 'react';
import PropTypes from 'prop-types';
//shared
import Div from 'shared/Div';
require('./ribbon.css')


class CenterRotatingImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activated: false
    }
  }
  componentDidMount () {

    this.timeout = setInterval(()=>{
      if(window.testVariable2){
        window.testVariable(".divSM").Vision360(window.testVariable2)
        clearInterval(this.timeout)
      }
    },1000)
}
  render() {

    return (
      <Div  position='relative' height="100%"  hoverable>
        <Div height="100%" padding="10px" >
          <Div borderBottom="1px solid gray" >
            <Div  className="divSM" data-name='moviename' height="400px" width="400px" >
              Loading...
            </Div>
          </Div>

        </Div>

          </Div>
          )
 }
}
CenterRotatingImage.propTypes = {
  history: PropTypes.object
}
export default CenterRotatingImage;
