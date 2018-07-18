import { connect } from 'react-redux';
import React, { Component }  from 'react'
import {
    myAction
} from './actions';
import './style.scss'

const mapStateToProps = (state, ownProps) => {
    let _state = state.bio;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}


export class Bio extends Component {
    render() {
        return (
            <div className='page'>
                <div className='title'>Bio</div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Bio)

