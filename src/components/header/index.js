import React, { Component }  from 'react'
import { withRouter } from 'react-router-dom'
import './style.scss'

export class Header extends Component {
    onTabSelect = tab => e => {
        console.log({tab})
        this.props.onTabSelect(tab)
        this.props.history.push(`/${tab.value}`)
    }
    render() {
        const { title, tabs } = this.props
        return (
            <div className='header'>
                <div className='title'>{ title }</div>
                <div className='tab-container'>
                {
                    tabs.map(tab => <div
                    className='tab'
                    onClick={this.onTabSelect(tab)}>
                        { tab.label }
                    </div>)
                }
                </div>
            </div>
        )
    }
}

export default withRouter(Header)