import React from 'react'
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className='fpItem'>


                <img src='https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=bc461f3aff9a66c15ddae3b3a7e10a44f6aea550cb89ce292cec7ca0b4ccecdb&o=&s=1' alt='' className='fpImg' />
                <span className='fpName'> Villa Domina</span>
                <span className='fpCity'> Split City Centre, Croatia, Split
                </span>
                <span classname='fpPrice'>Starting from <span className='fpAmt'>Rs.3687</span></span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span className='fpReview'>Excellent</span>
                    <span className='fpReview'>.993 reviews</span>
                </div>
            </div>
        
            <div className='fpItem'>
                <img src='https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1' alt='' className='fpImg' />
             <span className='fpName'> numa I Vita Apartmentss</span>
                <span className='fpCity'> Fortezza da Basso, Italy, Florence
                </span>
                <span classname='fpPrice'>Starting from <span className='fpAmt'>Rs.9438</span></span>
                <div className='fpRating'>
                <button>8.8</button>
                <span className='fpReview'>Fabulous</span>
                <span className='fpReview'>.431 reviews</span>
            </div>
            </div>
            <div className='fpItem'>
                <img src='https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=d9736601506fabe6637abf33b5169604b4407052c7ef063d96bf7a35f395e89d&o=&s=1' alt='' className='fpImg' />
                <span className='fpName'> P&J Luxury Apartments</span>
                <span className='fpCity'> Old Town, Poland, Kraków
                </span>
                <span classname='fpPrice'>Starting from <span className='fpAmt'>Rs.7884</span></span>
                <div className='fpRating'>
                    <button>8.5</button>
                    <span className='fpReview'>Very Good</span>
                    <span className='fpReview'>.332 reviews</span>
                </div>
            </div>
            <div className='fpItem'>
                <img src='https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=ace18ab936560dac1e01f7d0f4b44206d354a8683e124c62f3f10c25cede9bd2&o=&s=1' alt='' className='fpImg' />
                <span className='fpName'> Flora Chiado Apartments</span>
                <span className='fpCity'> Santa Maria Maior, Portugal, Lisboa
                </span>
                <span classname='fpPrice'>Starting from <span className='fpAmt'>Rs.47518</span></span>
                <div className='fpRating'>
                    <button>9.0</button>
                    <span className='fpReview'>Exceptional</span>
                    <span className='fpReview'>.173 reviews</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties
