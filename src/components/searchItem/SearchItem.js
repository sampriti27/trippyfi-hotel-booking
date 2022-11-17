import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/square600/28676838.webp?k=2080052cfc618f9543beb51af4a961a8612475c0bbfed9596e7b78f5d0527b40&o=&s=1' alt='' className='siImg' />   
        <div className='siDesc'>
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='isTaxiOp'>Free Airport Taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning.
            </span>
            <span className='siFeatures'>
                Entire Studio . 1 bathroom . 21m sq. 1 full bed
            </span>
            <span className='siCancelop'>Free Cancellation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel it later,so lock in this great price today!
            </span>

        </div> 
        <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>

            </div>
            <div className='siDetailsTexts'>
                <span className='siPrice'>
                    $123
                </span>
                <span className='isTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton'>See Availability</button>
            </div>
        </div>  
    </div>
  )
}

export default SearchItem
