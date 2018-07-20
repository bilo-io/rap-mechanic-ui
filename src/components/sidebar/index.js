import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import drmIcon from '../../img/drm-icon256.png'
import './style.scss';

const links = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/search?q=DArapMECHANIC21',
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/new_twitter_icon/491/bird_twitter_new_simple.png'
    }, {
        name: 'Soundcloud',
        url: 'https://soundcloud.com/user493736',
        imageUrl: 'http://www.stickpng.com/assets/images/58af045f6c252499281ae921.png'
    }, {
        name: 'Facebook',
        url: 'https://www.facebook.com/groups/143505372331382/about/',
        imageUrl: 'http://www.transparentpng.com/download/facebook-logo-png/image-black-facebook-logo-png-26.png'
    }, {
        name: 'ReverbNation',
        url: 'https://www.reverbnation.com/yannickdarapmechanic',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/BlackStar.PNG'
    }
]
export class Sidebar extends Component {
    static propTypes = {
    }
    state = {
    }
    onTabSelect = tab => e => {
        const rootPath = window.rootPath
        console.log({tab, rootPath})
        // this.props.onTabSelect(tab)
        this.props.history.push(`${rootPath}/${tab.value}`)
    }
    render() {
        const { tabs } = this.props
        return (
            <div className='sidebar'>
                <div className='logo'>
                    <img src={drmIcon} />
                    <div className='yannick'>Yannick</div>
                    <div className='rap'>Rap</div>
                    <div className='mechanic'>Mechanic</div>
                </div>
                <div className='tabs'>
                {
                    tabs.map(tab => <div
                        className='tab'
                        onClick={this.onTabSelect(tab)}>
                        { tab.label.toUpperCase() }
                    </div>)
                }
                </div>
                <div className='footer'>
                    {
                        links.map( link => <a href={link.url} target='_blank'>
                            <img src={link.imageUrl}/>
                        </a>)
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Sidebar)