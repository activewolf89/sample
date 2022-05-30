  import React,{Component} from "react";
  import SearchInput from 'components/App/AppModal1/SearchInput'
  import DirectionsTab from 'components/App/AppModal1/DirectionsTab'
  import EventsTab from 'components/App/AppModal1/EventsTab'
  import Div from 'shared/Div';

  import UserRequest from 'components/App/AppModal1/UserRequest'
  import Faq from 'components/Faq';
  import TopBar from '../TopBar'
  import Metal from '../Metal'

class Class extends Component{
  render(){
    return(
      <Div >
        <Div position='sticky' top = '0' zIndex='10' >

          <TopBar
            onToggleDetail = {this.props.onToggleDetail}
            choiceKey={this.props.choiceKey}
          />
        </Div>
        {
          this.props.active &&
          <Div >

            {

              this.props.checkedKey === "search" ?
                <SearchInput
                  onContactClick = {this.props.onContactClick}
                  onSearchChange={this.props.onSearchChange}
                  searchInput={this.props.searchInput}
                  isSearching = {this.props.isSearching}
                  searchItems = {this.props.searchItems}
                  searchItemsFrom = {this.props.searchItemsFrom}
                  history = {this.props.history}
                  onAddToWishlist = {this.props.onAddToWishlist}
                />:
              this.props.checkedKey === "metal" ?
                <Metal
                  dailys = {this.props.dailys}
                />:

              this.props.checkedKey === 'directions' ?
                <DirectionsTab
                  onToggleDetail = {this.props.onToggleDetail}
                />:
              this.props.choiceKey === "FAQ" ?
                <Faq
                  knowledgeArray = {this.props.knowledgeArray}
                  doNotScroll={this.props.doNotScroll}
                  questionToScrollTo = {this.props.questionToScrollTo}
                  noBrowse = {this.props.noBrowse}
                  history={this.props.history}
                  faqObject={this.props.faqObject}
                  rootPath={this.props.rootPath}
                />:
              this.props.choiceKey === "events" ?
                <EventsTab
                  onSwapIndex = {this.props.onSwapIndex}
                  eventsChecklist = {this.props.eventsChecklist}
                  onContactClick = {this.props.onContactClick}
                />:
                <UserRequest
                  specificItems = {this.props.specificItems}
                  PullSpecificInfo = {this.props.PullSpecificInfo}
                  originalComment = {this.props.originalComment}
                  userProfile = {this.props.userProfile}
                  onCountInputs = {this.props.onCountInputs}
                  onToggleDetail = {this.props.onToggleDetail}
                  choiceKey = {this.props.checkedKey}
                  onContactChange = {this.props.onContactChange}
                  contactObject = {this.props.contactObject}
                  onCalendarClick = {this.props.onCalendarClick}
                  onTimeChange = {this.props.onTimeChange}
                  onContactSubmit = {this.props.onContactSubmit}
                  onRemoveDate = {this.props.onRemoveDate}
                  history={this.props.history}
                  onSendHint = {this.props.onSendHint}
                  itemToView = {this.props.itemToView}
                />
            }

          </Div>
        }

      </Div>
    )
  }
}

export default Class;
