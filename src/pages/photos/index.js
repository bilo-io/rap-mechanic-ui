import { connect } from 'react-redux';
import React, { Component }  from 'react'
import {
    myAction
} from './actions';
import './style.scss'

const mapStateToProps = (state, ownProps) => {
    let _state = state.photos;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}


export class Photos extends Component {
    render() {
        return (
            <div className='page'>
                <div className='title'>Photos</div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos)
