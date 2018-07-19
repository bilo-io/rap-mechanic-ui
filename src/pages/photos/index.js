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

const photos = [
    {
        label: 'Debut of "Energy" featuring Mthunzi Sibisi',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/31945670_10157531931498986_7152648645664309248_o.jpg?_nc_cat=0&oh=95bccc227ae4b0bc8ce2ca3d41432f8d&oe=5BDDBB06'
    },{
        label: 'Great Wizoo',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/10407056_848419581852855_807185401671356854_n.jpg?_nc_cat=0&oh=e3ace3c23696dd8c77c0820cc2f021c6&oe=5BD06352'
    },{
        label: 'Forever Da Rap Mechanic',
        url: 'https://rawbeaux.files.wordpress.com/2013/10/992438_10152303688368986_209427509_n.jpg'
    },{
        label: 'KK Page',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/10175029_851412271553744_4276270577789415113_n.jpg?_nc_cat=0&oh=3e5d522c1b60981d475480cd216dea6a&oe=5BDEB317'
    },{
        label: 'Kill Kenny',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/10172770_484496078317299_9208665297327379025_n.jpg?_nc_cat=0&oh=5475707e7106e1e0aacf757dd44bbcc2&oe=5BDD2618'
    },{
        label: 'Another',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/10151311_10152773485208986_5973580998724492040_n.jpg?_nc_cat=0&oh=eed1d248697f8ad8dcf5ce756836f831&oe=5BE30B7D'
    }, {
        label: 'South East Asia',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/180808_499534247711_8188411_n.jpg?_nc_cat=0&oh=980c1450ab18cb2100b808dfbc51af14&oe=5BE3F929'
    }
]

export class Photos extends Component {
    render() {
        return (
            <div>
                <div className='title'>Photos</div>
                {
                    photos.map( photo => <img className='photo' src={photo.url} />)
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Photos)
