  import React,{Component} from "react";
  import Div from 'shared/Div';

class Class extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false

    }
    this.handleLoad = this.handleLoad.bind(this)
  }
  handleLoad = function(){
    if(this.props.itemKeys.length === 0){
    this.props.onLoadItemNumbers()
  } else {
    this.props.onToggleSearchByItem()

  }
    this.setState({
      loading: true
    })
  }
  render(){
    return(
      <Div position='relative'  width='100%'>
        <Div >
          <input readOnly style={{width:'100%'}} type="text" placeholder="Search by Item#" onClick={this.handleLoad} />
        </Div>
        {
          this.state.loading &&
          <Div width='100%' height="200px" border="1px solid gray">
            Loading...
          </Div>
        }
      </Div>
    )
  }
}

export default Class;
