import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './pages/home'

import Header from './components/header'

require('./app.scss')

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header
                    title='Rap Mechanic Portal'
                    tabs={[{
                            label: 'Home'
                        },{
                            label: 'Bio'
                        },{
                            label: 'Music'
                        },{
                            label: 'Videos'
                        },{
                            label: 'Photos'
                        },{
                            label: 'Contact'
                        }
                    ]}
                />
                <Router>
                    <Switch className='app-content'>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}