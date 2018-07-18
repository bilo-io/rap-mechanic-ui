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
            <div className='page'>
                <div className='title'>Photos</div>
                {
                    youtubeVids.map(id => <Youtube
                        width='40%'
                        height='30%'
                        videoId={id[0]}
                    />)
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Videos)
