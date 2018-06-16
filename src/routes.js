import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeContainer } from './Containers/Container';
/**
 * The main application view and routes
 */

export default class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Redirect path="" to="/" />
                </Switch>
            </div>
        );
    }
}




