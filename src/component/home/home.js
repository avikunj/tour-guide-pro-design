import React from 'react'
import Header from './header'
import "./home.scss"
import PopularTrip from './populatTrip'
import TripList from './tripList'
const Home = () => {
  return (
    <div className='tripHomePage'>

<Header/>
<PopularTrip/>
<TripList/>
    </div>
  )
}

export default Home