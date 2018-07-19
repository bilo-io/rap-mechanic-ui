import { connect } from 'react-redux';
import React, { Component }  from 'react'
import {
    myAction
} from './actions';
import './style.scss'

const mapStateToProps = (state, ownProps) => {
    let _state = state.contact;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}


export class Contact extends Component {
    render() {
        return (
            <div>
                <div className='title'>Contact</div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)

