import React,{ Component } from 'react'
import { Flex, WhiteSpace, Toast} from 'antd-mobile'
/**
 * 框架组件 lianpen
 */
import Rc_Header from "./header/Header"
import Rc_Footer from "./footer/Footer"
import Rc_FrameContent from './FrameContent'

class Frame extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.renderMain()
        )
    }

    /**
     * 渲染主体
     * 因为被外面套了一层响应 
     */
    renderMain() {
        return (
            <Flex style={{ height: '100%' }}>
                <Rc_FrameContent />
                <Rc_Footer />
            </Flex>
        )
    }
}

export default Frame