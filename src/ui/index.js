

import React,{ Component } from 'react';

import {
    Switch,
	HashRouter,
	Route,
 } from 'react-router-dom';

import './index.less'

import Rc_Frame from './frame/Frame'

export default class Index extends Component{

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={ Rc_Frame } />
                </Switch>
            </HashRouter>
        )
    }
}
