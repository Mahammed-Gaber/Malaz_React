import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

//////////////////////////////////////////////////////

// // Set token in headers for all requests
// const token = localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

import Register from './components/Register/Register'
import Login from './components/logins/login'

import Blog from './components/HOME/blog/Blog'
import Contact from './components/Contact/contacts/contacts'
import Layout from './components/Layout/Layout'
import Home from './components/HOME/Home'
import AboutUS from './components/AboutUS/About US'
import MyAcooModation from './components/AcooModation/myAcooModation'
import Accomodation from './components/AcooModation/AccomodationArea/Accomodation'
import BookingArea from './components/AcooModation/BookingTabl/BookingArea'
import Profile from './components/AcooModation/profile/Profile'
import Profilehost from './components/AcooModation/profilehost/Profilehost'
import Myblog from './components/Blog/myblog'
import Account from './components/AcooModation/accountprofile/Account'
import Createprofile from './components/AcooModation/createprofile/Createprofile'
import Newblog from './components/Blog/newblog/Newblog'
import Mydeatails from './components/AcooModation/deatails/Mydeatails'
import Yourplace from './components/AcooModation/Your-place1/Yourplace'
import Structure from './components/AcooModation/structure 2/Structure'
import PrivacyType from './components/AcooModation/Privacy-type 3/Privacytype'
import Floorplan from './components/AcooModation/Floor-plan 4/Floorplan'
import Instantbook from './components/AcooModation/instant-book 5/Instantbook'
import Price from './components/AcooModation/price 6/Price'
import Congratulations from './components/AcooModation/Congratulations 7/Congratulations'

function App () {
  return (
    <>
      <Routes>
        <Route path='*' element={<Home />} />

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUS />} />
          <Route path='/accomodation' element={<MyAcooModation />} />
          <Route path='/blog' element={<Myblog />} />
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/Newblog' element={<Newblog />}></Route>

          <Route path='/Blog' element={<Blog />} />
          <Route path='/Elements' element={<elements />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />}></Route>

          <Route path='/Accomodation' element={<Accomodation />}></Route>
          <Route path='/BookingArea' element={<BookingArea />}></Route>
          <Route path='/Profilehost' element={<Profilehost />}></Route>
          <Route path='/Account' element={<Account />}></Route>
          <Route path='/Mydeatails' element={<Mydeatails />}></Route>
          <Route path='/Createprofile' element={<Createprofile />}></Route>
          <Route path='/Yourplace' element={<Yourplace />}></Route>
          <Route path='/Structure' element={<Structure />}></Route>
          <Route path='/PrivacyType' element={<PrivacyType />}></Route>
          <Route path='/Floorplan' element={<Floorplan />}></Route>
          <Route path='/Instantbook' element={<Instantbook />}></Route>
          <Route path='/Price' element={<Price />}></Route>
          <Route path='/Congratulations' element={<Congratulations />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
