import React,{ Component } from 'react'
import {
	Button,
	Input,
	Table,
	Pagination,
	Icon,
	Spin,
	Divider,
	Modal,
	message
} from 'antd';
import moment from 'moment'
class Home extends Component{
    
    constructor(props){
        super(props)
        this.quantifyList = []
        this.state = {
            pageIndex: 1,
            pageSize: 10,
            selectedQuantifyList:[]
        }
    }

    
    componentWillMount(){
        for(let i = 0;i<500;i++){
            this.quantifyList.push({
                quantifyDate: new moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
                createDate: new moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
                quantifyName: i + '_I_' + i*2,
                ascore: i,
                bscore: i+3,
                opscore: i * 3,
                num: i,
                createFullName: 'xxxx_' + i,
                attnFullName: 'cccc_' + i,
                auditFullName: 'cccc_' + i*2,
                status: '1',
                id: '_' + i + '_'
            })
        }
    }

    componentDidMount(){
      
    }

	/**
	 * 行选中(反选和全选)
	 */
	getRowSelection() {
		return {
			onChange: (selectedRowKeys, selectedRows) => {
				this.state.selectedQuantifyList = selectedRows;
				this.forceUpdate();
			},
			selectedRowKeys: this.state.selectedQuantifyList.map(quantify => {
				return quantify.id
			})
		}
    }
    
    render(){
        return (
            <div>
                <div className='tpl-list-table'>
					 <Table columns={ this.getColomns() } 
					 	dataSource={ this.quantifyList } 
					 	pagination= { false } 
						rowSelection={ this.getRowSelection() }
						rowKey={ quantify => { return quantify.id } } 
						locale={{ emptyText :'暂无数据'}}  />
				</div>
				<div className='tpl-list-pager'>
					<Pagination 
					    current={ this.state.pageIndex  }
					    pageSize={ this.state.pageSize }
					    total={ this.quantifyList.length } 
					    hideOnSinglePage={ !this.quantifyList.length ? true :false }
					    showSizeChanger
					    showQuickJumper />
				</div>
            </div>
        )
    }
    getColomns(){
        const context = this;
        let list = [{
			title: '奖扣时间',
			width: 100,
			render: (text, quantify) => {
				return quantify.quantifyDate
			}
		}, {
			title: '记录时间',
			width: 138,
			render: (text, quantify) => {
				return quantify.createDate
			}

		}, {
			title: '主题',
			width: 270,
			className: 'page-integralManagement-check-theme',
			render: (text, quantify) => {
				return (
					<span className='page-integralManagement-check-theme-content' title = { quantify.text }>
					      <span>{ quantify.quantifyName }</span>
					</span>
				)
			}
		}, {
			title: 'A分',
			width: 90,
			render: (text, quantify) => {
				return quantify.ascore
			}
		}, {
			title: 'B分',
			width: 90,
			render: (text, quantify) => {
				return quantify.bscore
			}

		}, {
			title: '产值',
			width: 110,
			render: (text, quantify) => {
				return quantify.opscore
			}

		}, {
			title: '人次',
			width: 85,
			render: (text, quantify) => {
				return quantify.num
			}

		}, {
			title: '记录人',
			width: 90,
			render: (text, quantify) => {
				return quantify.createFullName
			}

		}, {
			title: '初审人',
			width: 90,
			render: (text, quantify) => {
				return quantify.attnFullName
			}
		}, {
			title: '终审人',
			width: 90,
			render: (text, quantify) => {
				return quantify.auditFullName
			}
		}, {
			title: '审核状态',
			width: 105,
			render: (text, quantify, index) => {
				return '待初审'
			}

		}]
		return list
    }
}
export default Home;