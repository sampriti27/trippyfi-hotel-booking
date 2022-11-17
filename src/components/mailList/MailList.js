import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className='mail'>
    <h1 className='mailTitle'>Grab the best deals!</h1>
    <span className='mailDesc'>Sign up! to get notifications of all the excliusive offers.</span>
    <div className='mailInputContainer'>
        <input type="text" placeholder='Your Email' />
        <button className='headerBtn'>Subscribe</button>
    </div>

    </div>
  )
}

export default MailList