import React from "react"
import { Switch, Route } from 'react-router-dom'

import Home from "@/containers/Home"
import NotFound from "@/containers/NotFound"

const RouterContainer = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/test' component={Test}/> */}

        <Route path='*' component={NotFound} />
    </Switch>
)

export default RouterContainer