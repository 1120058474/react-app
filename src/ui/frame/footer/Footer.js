import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
          hidden: false,
          fullScreen: false,
        };
      }
    render() {
        return (
                <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" hidden={this.state.hidden} >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        /> }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        /> }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                            selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId" >
                    </TabBar.Item>
                </TabBar>
        );
    }
}

export default Footer;