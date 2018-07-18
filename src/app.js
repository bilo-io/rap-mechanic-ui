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

require('./app.scss')

export default class App extends React.Component {
    goToTab = tab => {
        console.log('navigate to ' + tab.label)
    }
    render() {
        const AppHeader = <Header
            title='Rap Mechanic Portal'
            onTabSelect={this.goToTab}
            tabs={[{
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
            ]}
        />
        return (
            <div>
                <Router>
                    <div>
                        <Switch className='app-content'>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/bio" component={Bio} />
                            <Route exact path="/music" component={Music} />
                            <Route exact path="/videos" component={Videos} />
                            <Route exact path="/photos" component={Photos} />
                            <Route exact path="/contact" component={Contact} />
                        </Switch>
                        { AppHeader }
                    </div>
                </Router>
            </div>
        )
    }
}