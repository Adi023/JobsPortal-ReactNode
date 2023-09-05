import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import AddJobs from './AddJobs'
import ViewJobs from './ViewJobs'
import Home from './Home'
import ViewDetails from './ViewDetails'

export default function FrontPage() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='AddJobs' element={<AddJobs></AddJobs>}></Route>
            <Route path='ViewJobs' element={<ViewJobs></ViewJobs>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            {/* <Route path='ViewDetails' element={<ViewDetails></ViewDetails>}></Route> */}
            <Route path='ViewDetails/:id' element={<ViewDetails></ViewDetails>}></Route>
        </Routes>
    </Router>
    </>
  )
}
