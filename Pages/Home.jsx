import React from 'react'
import Header from '../Components/Header'
import IntroPost from '../Components/IntroPost'
import Search from '../Components/Search'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
    {/* Header */}
      <Header />
      {/* Search */}
      <Search />
      {/* IntroPost */}
      <IntroPost />
      {/* Blogs */}
      <Blogs />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home