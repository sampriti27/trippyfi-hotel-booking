import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Kerala</h1> 
                <h2>123 properties</h2>
            </div>
            </div>
            <div className='featuredItem'>
            <img src="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dWRhaXB1cnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Rajasthan</h1> 
                <h2>345 properties</h2>
            </div>
            </div>
            <div className='featuredItem'>
            <img src="https://www.travelomama.com/wp-content/uploads/pahalgam-head-188.jpg" alt="" className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Kashmir</h1> 
                <h2>457 properties</h2>
            </div>

        </div>
      
    </div>
  )
}

export default Featured
