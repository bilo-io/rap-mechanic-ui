import React, { Component }  from 'react'
import './style.scss'
export default class Header extends Component {
    render() {
        const { title, tabs } = this.props
        return (
            <div className='header'>
                <div className='title'>{ title }</div>
                <div className='tab-container'>
                {
                    tabs.map( tab => <div className='tab'>
                        { tab.label }
                    </div>)
                }
                </div>
            </div>
        )
    }
}