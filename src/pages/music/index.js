import { connect } from 'react-redux';
import React, { Component }  from 'react'
import Player from 'react-soundcloud-player'
import { Iframe, SoundCloud } from 'bilo-ui'
import {
    myAction
} from './actions';
import './style.scss'

const tracks = require('./tracks.json')

const soundcloudClips = [
    '392809137'
]
const mapStateToProps = (state, ownProps) => {
    let _state = state.music;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}


export class Music extends Component {
    getSoundcloudDetails = () => {
        const clientId = 'idiykIpBJvGcwHGMw9L8ApZ9uYDEq2J4'
        const url = `https://api-v2.soundcloud.com/me/play-history/tracks?client_id=${clientId}&limit=25&offset=0&linked_partitioning=1&app_version=1531925069&app_locale=en`
        fetch(url)
            .then( response => console.log('tracks: ', response))
            .catch(error => console.log({error}))
    }
    getSongs() {
        const trackUrl = 'https://soundcloud.com/user493736/tracks'
        const userUrl = 'https://soundcloud.com/user493736'
        const url = `https://api.soundcloud.com/resolve.json?url=${tracksUrl}&client_id=idiykIpBJvGcwHGMw9L8ApZ9uYDEq2J4`
        fetch(url)
            .then( response => console.log({response}))
            .catch( error => console.log({error}))
    }
    componentWillMount() {
        this.getSoundcloudDetails()
        // this.getSongs()
        console.log('componentWillMount')
        const clientId = 'idiykIpBJvGcwHGMw9L8ApZ9uYDEq2J4'
        const trackId = ''
        const trackUrl = 'https://soundcloud.com/user493736/mind-soul-yannickdrm-prod'
        const streamUrl = `http://api.soundcloud.com/${trackId}/stream?client_id=${clientId}`
        console.log({streamUrl})
        fetch(`http://api.soundcloud.com/resolve?url=${trackUrl}&client_id=${clientId}`)
            .then( response => {
                console.log({response})
                fetch(response.url)
                    .then( user => { console.log({user})})
                    .catch( error => console.log({error}))
            })
            .catch( error => {
                console.log({error})
            })
    }
    render() {
        return (
            <div>
                <div className='title'>Music</div>
                <a href='https://soundcloud.com/user493736' target='_blank'>
                    {/* <img className='icon' src='https://www.shareicon.net/download/2016/08/01/640420_media.svg'/> */}
                </a>
                {/* <iframe src='https://www.reverbnation.com/yannickdarapmechanic'> */}
                {
                    tracks.map( track => <SoundCloud trackId={ track.id } /> )
                }

            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Music)

