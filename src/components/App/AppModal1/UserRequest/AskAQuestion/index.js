  import React,{Component} from "react";
  import Li from 'shared/Li';
  import CommunicationQuestion from '../Shared/CommunicationQuestion';
  import NameQuestion from '../Shared/NameQuestion';
  import CommentQuestion from '../Shared/CommentQuestion';
  import ReasonQuestion from '../Shared/ReasonQuestion';
  import Div from 'shared/Div';
  import NoMPUl from 'shared/NoMPUl';
  import ProductInfo from '../Shared/ProductInfo';
class Class extends Component{
  render(){
    return(
      <Div>
        <NoMPUl color='white' childrenBorderBottom = '1px solid white'>
          {
            this.props.product  &&
            <Li>
              <ProductInfo
                product={this.props.product}
                choiceKey = {this.props.choiceKey}
              />
            </Li>
          }
          <Li>
            <ReasonQuestion
              onToggleDetail = {this.props.onToggleDetail}

            />
          </Li>
          <Li>
            <NameQuestion
              onInputChange = {this.props.onInputChange}
              preferredContact = {this.props.preferredContact}
              onPreferredContactChange = {this.props.onPreferredContactChange}
              isRequired = {this.props.valuesToCheckArray.includes('name')}
            />
          </Li>
          <Li>
            <CommunicationQuestion
              onInputChange = {this.props.onInputChange}
              onPreferredContactChange = {this.props.onPreferredContactChange}
              preferredContact = {this.props.preferredContact}
              isRequired = {this.props.valuesToCheckArray.includes('email')}
            />
          </Li>

          <Li>
            <CommentQuestion
              onInputChange = {this.props.onInputChange}
              preferredContact = {this.props.preferredContact}
              onPreferredContactChange = {this.props.onPreferredContactChange}
              isRequired = {this.props.valuesToCheckArray.includes('comment')}

            />
          </Li>
        </NoMPUl>
        </Div>

    )
  }
}

export default Class;
