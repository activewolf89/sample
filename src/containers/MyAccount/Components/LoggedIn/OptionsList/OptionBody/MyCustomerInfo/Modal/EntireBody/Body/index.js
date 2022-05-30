import React from 'react';
import Div from 'shared/Div';
import Date from './Date';
import Name from './Name';
import Addresses from './Addresses';
import Phones from './Phones';
import Emails from './Emails';
import Passwords from './Passwords';
import Button from 'shared/Button'
import Span from 'shared/Span'
// -----
const Body = (props) =>{

  return (
    <Div  position='relative'>

      <Div >
        {
          (props.selectedEdit.key === 'Addresses' || props.selectedEdit.key === 'Phones') &&
          <Div display='flex' justifyContent='space-between' margin='10px 0'>
            <Div />
            <Button remove onClick={()=>{props.onUpdateUserProfile(props.currentIndex)} }>
              Remove
            </Button>
          </Div>
        }
        {
          props.selectedEdit.key ==='CustomerFirstName' ?
            <Div>
              <Name
                error = {props.selectedEdit.error}
                onStringInputChange = {props.onStringInputChange}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
              />
            </Div>:
          props.selectedEdit.key ==='CustomerLastName' ?
            <Div>
              <Name
                error = {props.selectedEdit.error}
                onStringInputChange = {props.onStringInputChange}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
              />
            </Div>:
          props.selectedEdit.key ==='Addresses' ?
            <Div >
              <Addresses
                error = {props.selectedEdit.error}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
                onObjectChange = {props.onObjectChange}
              />
              <Div>
                <Span color='red'>{props.selectedEdit.masterError}</Span>
              </Div>
            </Div>:
          props.selectedEdit.key ==='Email' ?
            <Div>
              <Emails
                error = {props.selectedEdit.error}
                onStringInputChange = {props.onStringInputChange}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
                serverErrorObject = {props.serverErrorObject}
                onCheckIfEmailExists = {props.onCheckIfEmailExists}
              />
            </Div>:
          props.selectedEdit.key ==='Phones' ?
            <Div>


              <Phones
                error = {props.selectedEdit.error}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
                onObjectChange = {props.onObjectChange}
              />
              <Div>
                <Span color='red'>{props.selectedEdit.masterError}</Span>
              </Div>
            </Div>:
          props.selectedEdit.key ==='CustomerBirthdate' ?
            <Div>
              <Date
                error = {props.selectedEdit.error}
                onStringInputChange = {props.onStringInputChange}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
              />
            </Div>:
          props.selectedEdit.key ==='CustomerWeddingAnniv' ?
            <Div>
              <Date
                error = {props.selectedEdit.error}
                onStringInputChange = {props.onStringInputChange}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
              />
            </Div>:
          props.selectedEdit.key ==='Password' ?
            <Div>
              <Passwords
                error = {props.selectedEdit.error}
                onStringInputChange = {props.onStringInputChange}
                objToEdit = {props.objToEdit}
                name={props.selectedEdit.key}
              />
            </Div>: ''
        }
      </Div>

    </Div>
  )
}
Body.propTypes = {
}
export default Body;
