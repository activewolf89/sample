import React from 'react';
import Div from 'shared/Div';


class MouseEnterLeave extends React.Component {
    componentDidMount(){
      alert('enter')
    }
    componentWillUnmount(){
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
       
        </div>
      );
    }
  }

export default MouseEnterLeave;
