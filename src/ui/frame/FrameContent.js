/*
 * @Author: lianpen
 * @Date:   2018-05-11 15:49:02
 */
import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

/**
 * 数据模型 lianpen
 */

import Rc_Home from 'ui/home/Home.bundle'
import Rc_My from 'ui/my/My.bundle'

import LazyBundle from 'ui/LazyBundle'

class FrameContent extends React.Component {

    render() {
        return (
            <div className='frame-content'>
                <div className='frame-page'>
                    { this.renderSwitch() }
                </div>
            </div>
        )
    }

    /**
     * 渲染路由
     */
    renderSwitch() {
        const lazy = comp => (
            props => {
          
                const fn = Rc => {
                    if (typeof Rc != 'function') return null
                    return (
                        <Rc { ...props } />
                    )
                }
                return (
                    <LazyBundle load={ comp }>
                        { fn }
                    </LazyBundle>
                )
            }
        )
        return (
            <Switch>
                <Route path='/' exact component={ lazy(Rc_Home) } />
                <Route path='/home' component={ lazy(Rc_Home) } />
                <Route path='/my' component={ lazy(Rc_My) } />
            </Switch>
        )
    }

}

export default FrameContent