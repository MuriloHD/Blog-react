import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../../views/pages/Home'
import Coments from '../../views/pages/Coments'


export default props =>{
    return(
    <main>
        <Switch>
            <Route path = "/coments">
                <Coments></Coments>
            </Route>
            <Route path = "/">
                <Home></Home>
            </Route>
        </Switch>
    </main>
    )
}

