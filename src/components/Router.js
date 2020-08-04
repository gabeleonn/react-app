import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import mainPage from './mainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={mainPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
