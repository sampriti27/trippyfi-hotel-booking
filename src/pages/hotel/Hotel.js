import React, { useState } from 'react'
import './hotel.css';
import Navbar from '../../components/navbar/Navbar'
import Header from "../../components/header/Header"
import { LocationOn, ArrowForwardIos, ArrowBackIos, Cancel } from '@material-ui/icons';
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75907508.jpg?k=fec8ffda6df7d8ffed3a5d554311d9381ac5b7702b459a0e6385193c8f0b269b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78017719.jpg?k=59444749833ac8e68de3d66dedcc96ba10ba61cad47fc99f1ca34058f33adb4a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/73594375.jpg?k=72f33bd41644834420f8bba8c2e05b141a31d28f8336ee0728876e1d93a8eab8&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/78016484.jpg?k=63820dd6bb62b48d9532efdd50473a85736017dd58bf97980f72f35c89810f90&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78017599.jpg?k=e7dfe252db5c949f1e4e4f85e4018ab4c09aa04e29085fd20db80bb0ecb7c5a2&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/73594408.jpg?k=196d4648405a819b1d364085910421e0f03b20f405c266472dbf02e4f1a96085&o=&hp=1"
    }

  ]

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newslideNumber;
    if (direction === "l") {
      newslideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newslideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newslideNumber);
  }
  return (

    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotelContainer'>
        {/* {open &&
          <div className='slider'>
            <div className='close' onClick={() => setOpen(false)}> <Cancel fontSize='large' /></div>
            <div className='arrow' onClick={() => handleMove("l")}>  <ArrowBackIos fontSize='large' /></div>
            <div className='sliderWrapper'>
              <img className='sliderImg' src={photos[slideNumber].src} alt='' />
            </div>
            <div className='arrow' onClick={() => handleMove("r")}> <ArrowForwardIos fontSize='large' /></div>
          </div>
        } */}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <LocationOn />
            <span>Elton St 125 New york</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img onClick={() => handleOpen(i)} src={photo.src} className='hotelImg' />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <h1 className='hotelTitle'> Stay in heart of new York</h1>
              <p className='hotelDesc'>Park Lane New York is a deluxe hotel with a European ambiance, providing views over Central Park and the New York skyline. It is only 2 minutes’ walk from the elegant shops of 5th Avenue and the 59th Street N,Q,R underground station.

                Spacious and bright, rooms at Park Lane New York are fitted with oversized windows and fine linens. Amenities include flat-screen TVs and access to the on-site fitness centre.

                Enjoy a seasonal menu created by Joseph Fontanals at The Park Room Restaurant, or select from a wide variety of cocktails at Harry's New York Bar.</p>
            </div>
            <div className='hotelDetailPrice'>
              <h1>Perfect for a 1-week stay!</h1>
              <span>
                Situated in the real heart of New York, this hotel has an excellent location score of 9.7
              </span>
              <h2>
                <bold>$945</bold> (7 nights)
              </h2>
              <button>Reserve now!</button>
            </div>
          </div>
        </div>

      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel
