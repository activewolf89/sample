  import React,{Component} from "react";
  import Li from 'shared/Li';
  import CommunicationQuestion from '../Shared/CommunicationQuestion';
  import NameQuestion from '../Shared/NameQuestion';
  import CommentQuestion from '../Shared/CommentQuestion';
  import AppointmentQuestion from '../Shared/AppointmentQuestion';
  import ProductInfo from '../Shared/ProductInfo';
  import Div from 'shared/Div';
  import NoMPUl from 'shared/NoMPUl';
  import P from 'shared/P'
class Class extends Component{
  render(){
    return(
      <Div>
        <NoMPUl color='white' childrenBorderBottom = '1px solid white'>
          <Li>
            <P textAlign='center' fontStyle='italic'>
              This is an appointment request, all appointments will be reconfirmed with L T Denny to make sure this time works for both parties
            </P>
          </Li>
          {
            this.props.product &&
            <Li>
              <ProductInfo
                product={this.props.product}
                choiceKey = {this.props.choiceKey}
              />
            </Li>
          }
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
          <Li>
            <AppointmentQuestion
              onCancelAppointment = {this.props.onCancelAppointment}
              onCalendarClick = {this.props.onCalendarClick}
              onInputChange = {this.props.onInputChange}
              onPreferredContactChange = {this.props.onPreferredContactChange}
              preferredContact = {this.props.preferredContact}
              isRequired = {this.props.valuesToCheckArray.includes('date')}

            />
          </Li>

        </NoMPUl>
        </Div>

    )
  }
}

export default Class;
