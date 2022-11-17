import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fLists'>
        <ul className='fList'>
            <li className='fListItem'>Countries</li>
            <li className='fListItem'>Regions</li>
            <li className='fListItem'>Cities</li>
            <li className='fListItem'>Districts</li>
            <li className='fListItem'>Airports</li>
            <li className='fListItem'>Hotels</li>
        </ul>
        <ul className='fList'>
            <li className='fListItem'>Homes</li>
            <li className='fListItem'>Apartments</li>
            <li className='fListItem'>Resorts</li>
            <li className='fListItem'>Villas</li>
            <li className='fListItem'>Hostels</li>
            <li className='fListItem'>B&Bs</li>
        </ul>
        <ul className='fList'>
            <li className='fListItem'>Unique places to stay</li>
            <li className='fListItem'>All destinations</li>
            <li className='fListItem'>Discover</li>
            <li className='fListItem'>Reviews</li>
            <li className='fListItem'>Travel Communities</li>
            <li className='fListItem'>Seasonal and Holiday Deals</li>
        </ul>
        <ul className='fList'>
            <li className='fListItem'>Car Hire</li>
            <li className='fListItem'>Flight Finder</li>
            <li className='fListItem'>Restaurant Reservations</li>
            <li className='fListItem'>Trippyfy.com for Travel Agents</li>
            
        </ul>
        <ul className='fList'>
            <li className='fListItem'>About Trippyfy.com</li>
            <li className='fListItem'>Customer Service Help</li>
            <li className='fListItem'>Partner Help</li>
            <li className='fListItem'>Careers</li>
            <li className='fListItem'>Privacy Policy</li>
            <li className='fListItem'>FAQs</li>
        </ul>
      </div>
      <div className='fText'>Copyright © 2022 Trippyfy.com. All rights reserved.
 </div>
    </div>
  )
}

export default Footer
