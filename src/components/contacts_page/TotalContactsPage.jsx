import React from 'react'
import ShowContactDetails from './ShowContactDetails';
import DisplayContacts from './DisplayContacts';
import AddNewContacts from './AddNewContacts';
const details={
    name:" MUNI KUMAR",
    id:1
 }

export const TotalContactsPage = () => {
  return (
    <div>
        <ShowContactDetails name={details.name} id={details.id}/>
        <DisplayContacts/>
        <AddNewContacts/>
    </div>
  )
}
export default TotalContactsPage;