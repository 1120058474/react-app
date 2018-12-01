
/**
 * 动态路由
 */

import React from 'react'

export default class LazyBundle extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			mod: null,
			pending: true
		}
	}

	componentWillMount() {
		this.load(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	load(props) {
		this.setState({
			mod: null,
			pending: true
		})
		props.load(mod => {
			this.setState({
				mod: mod.default ? mod.default : mod,
				pending: false
			})
		})
	}

	render() {
		if (!this.state.mod || this.state.pending) {
			return (
               	<div style={{ height: '60vh' }} />
			)
		}
		return this.props.children(this.state.mod)
	}

}