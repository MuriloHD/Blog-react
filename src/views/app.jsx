import React from 'react'
import {BrowserRouter as Router} from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Contents from '../components/layout/Contents'
import Footer from '../components/layout/Footer'



const App = props =>(
    <div className = "App">
        <Router>
            <Menu></Menu>
            <Contents></Contents>
        </Router>
        <Footer></Footer>
        
    </div>
)
export default  App