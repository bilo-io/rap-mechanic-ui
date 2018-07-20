import { connect } from 'react-redux'
import React, { Component }  from 'react'
import {
    Youtube
} from 'bilo-ui'
import {
    myAction
} from './actions'
import './style.scss'

const youtubeVids = [
    '0YyBoKyNsnI',
    'MiwYS8E_m14',
    'y2dUIeo7POg',
    'lLUagm16FAA'
]

const facebookVideos = [
    'https://www.facebook.com/Yannick213/videos/10156595553498986/'
]

const mapStateToProps = (state, ownProps) => {
    let _state = state.videos
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}

export class Videos extends Component {
    render() {
        return (
            <div>
                <div className='title'>Videos</div>
                {
                    youtubeVids.map(id => <div style={{
                        position: 'relative',
                        margin: '1em'
                    }}>
                        <Youtube
                            videoId={id}
                            maxWidth={640}
                            maxHeight={400}
                        />
                    </div>
                    )
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Videos)

