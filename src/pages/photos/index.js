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
    }, {
        label: 'Freestyle Fridays',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t31.0-8/20645260_10156618093738986_3503637810562733848_o.jpg?_nc_cat=0&oh=4189ea674a943f9e8ded978d943557a8&oe=5BE32713'
    }, {
        label: 'Freestyle Fridays - Superhero name: Chocolate Bear',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t31.0-8/20414291_10156567406663986_8038483169351036705_o.jpg?_nc_cat=0&oh=5938d04683506a0d9d9afe8b563ddf44&oe=5BE6CC24'
    }, {
        label: 'No Its Not',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/28872094_10155632896183640_5023205569704493056_o.jpg?_nc_cat=0&oh=73cd2e647d82878d1d40b0ba04d46c9f&oe=5BDB733E'
    }, {
        label: 'Yannick DRM',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t31.0-8/19025245_10154891638673640_6682557026540058668_o.jpg?_nc_cat=0&oh=2411f9d3e375d7fc9d0904ec13912263&oe=5BE57492'
    }, {
        label: 'Boogie Boutique',
        url: 'https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/12004785_10153300158708640_6869853632993490769_n.jpg?_nc_cat=0&oh=7b300eccdbc7ec94c3193a7128bbb2d6&oe=5BC87210'
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
