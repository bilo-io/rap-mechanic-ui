import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/home'
import Bio from './pages/bio'
import Contact from './pages/contact'
import Music from './pages/music'
import Photos from './pages/photos'
import Videos from './pages/videos'

import Header from './components/header'
import Sidebar from './components/sidebar'

require('./app.scss')

export default class App extends React.Component {
    goToTab = tab => {
        console.log('navigate to ' + tab.label)
    }
    render() {
        const tabs = [{
                label: 'Home',
                value: 'home'
            },{
                label: 'Bio',
                value: 'bio'
            },{
                label: 'Music',
                value: 'music'
            },{
                label: 'Videos',
                value: 'videos'
            },{
                label: 'Photos',
                value: 'photos'
            },{
                label: 'Contact',
                value: 'contact'
            }
        ]

        const isSidebar = true
        return (
            <div>
                <Router>
                    <div className='app-content'>
                        <div className='background-image'/>
                        <div className={`page page-padded`}>
                            <div className={`offset-${isSidebar ? 'sidebar' : 'header'}`}>
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/bio" component={Bio} />
                                    <Route exact path="/music" component={Music} />
                                    <Route exact path="/videos" component={Videos} />
                                    <Route exact path="/photos" component={Photos} />
                                    <Route exact path="/contact" component={Contact} />
                                </Switch>
                            </div>
                        </div>
                        { isSidebar
                            ? <Sidebar
                                tabs={tabs}
                                onTabSelect={this.goToTab}
                            />
                            : <Header
                                tabs={tabs}
                                onTabSelect={this.goToTab}
                                title='Yannick Rap Mechanic'
                            />
                        }
                    </div>
                </Router>
            </div>
        )
    }
}