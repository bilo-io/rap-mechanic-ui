import { connect } from 'react-redux';
import React, { Component }  from 'react'
import Player from 'react-soundcloud-player'
import { Iframe } from 'bilo-ui'
import {
    myAction
} from './actions';
import './style.scss'

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
    componentWillMount() {
        console.log('componentWillMount')
        const clientId = 'idiykIpBJvGcwHGMw9L8ApZ9uYDEq2J4'
        const trackId = ''
        const trackUrl = 'https://soundcloud.com/user493736/mind-soul-yannickdrm-prod'
        const streamUrl = `http://api.soundcloud.com/${trackId}/stream?client_id=${clientId}`
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
            <div className='page'>
                <div className='title'>Music</div>
                <a href='https://soundcloud.com/user493736' target='_blank'>
                    {/* <img className='icon' src='https://www.shareicon.net/download/2016/08/01/640420_media.svg'/> */}
                </a>
                {/* <iframe src='https://www.reverbnation.com/yannickdarapmechanic'> */}
                {
                    soundcloudClips.map( id => <Player audio_id={id} />)
                }

            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Music)

