import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import "./home.css"
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  useEffect(() => {
    document.title = "Trippyfy.com | Hehe"
  },[])
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'> What are you looking for?</h1>
        <PropertyList />
        <h1 className='homeTitle'> Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home