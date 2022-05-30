  import React,{Component} from "react";
  import Li from 'shared/Li';
  import CommunicationQuestion from '../Shared/CommunicationQuestion';
  import NameQuestion from '../Shared/NameQuestion';
  import CommentQuestion from '../Shared/CommentQuestion';
  import AddressQuestion from '../Shared/AddressQuestion';
  import ZipQuestion from '../Shared/ZipQuestion';
  import ProductInfo from '../Shared/ProductInfo';
  import Div from 'shared/Div';
  import NoMPUl from 'shared/NoMPUl';
class Class extends Component{
  render(){
    return(
      <Div>

        <NoMPUl color='white' childrenBorderBottom = '1px solid white'>
          <Li>
            <ProductInfo
              product={this.props.product}
              choiceKey = {this.props.choiceKey}
              sendAdjustedPriceUpwards = {this.props.sendAdjustedPriceUpwards}
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
            <AddressQuestion
              onInputChange = {this.props.onInputChange}
              onPreferredContactChange = {this.props.onPreferredContactChange}
              preferredContact = {this.props.preferredContact}
              isRequired = {this.props.valuesToCheckArray.includes('address')}
            />
            <ZipQuestion
              onInputChange = {this.props.onInputChange}
              onPreferredContactChange = {this.props.onPreferredContactChange}
              preferredContact = {this.props.preferredContact}
              isRequired = {this.props.valuesToCheckArray.includes('zipcode')}
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
