import React from 'react'
import './contacts_page.css'
export const ShowContactDetails = (props) => {
  return (
    <div className='show_cont'>
      <div className='prof_img'>

      </div>
        <div className='ur_contactbox'>
        <h4>Name :{props.name}</h4>
        <h4>&nbsp;&nbsp;&nbsp;&nbsp;Id&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{props.id}</h4>
        </div>
    </div>
)}
export default ShowContactDetails;