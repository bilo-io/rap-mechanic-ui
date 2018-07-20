import {connect} from 'react-redux';
import React, {Component} from 'react'
import {myAction} from './actions';
import './style.scss'

const mapStateToProps = (state, ownProps) => {
    let _state = state.bio;
    return {myProps: _state.myProps}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}

export class Bio extends Component {
    render() {
        return (
            <div>
                <div className='title'>Bio</div>
                <div>
                    <p>
                        Cape Town-based MC Yannick Da Rap Mechanic is adding a new flavor to backpack
                        rap in the Mother City– a convergence of music traditions from Ali Shaheed
                        behind the deck to the gritty wordplay of Illmatic. In a word Da Rap Mechanic
                        cooks up jazzy concoctions served raw. We spoke to Yannick to get to know the
                        future of Cape Town hip-hop.
                    </p>
                    <p>
                        Shiba for
                        <b>OKA:</b>
                        Go ahead and introduce yourself. Who, what, where and how is Yannick The Rap
                        Mechanic?

                        <br/><br/>
                        <b>Yannick:</b>
                        I’m a rapper from Cape Town born and bred. Im also a film student doing my last
                        year. I write about everything that’s happening in my life, so I’ll talk about
                        family and friends etc. Ex girlfriends, girlfriends... Just any sh*t I been
                        through that other people have been through as well. In my music I try to speak
                        the real and sound “nice” at the same time.

                        <br/><br/>
                        <b>OKA:</b>
                        When did you know you had a way with words?

                        <br/><br/>
                        <b>Yannick:</b>
                        I had an English assignment in the 7th grade, we were tasked to write a poem
                        about somebody in class and then we had to say the poem in front of everyone! My
                        teacher told me that that wasn’t a poem but a rap verse. My peers loved it, and
                        that’s basically how I found out I can rap.

                        <br/><br/>
                        <b>OKA:</b>
                        What do you think of the hip-hop scene in Cape Town, and what do you think
                        you’ll bring to the table?

                        <br/><br/>
                        <b>Yannick:</b>
                        There are a lot of dope ass rappers here in CPT, it's just that we’re not
                        exposed as much as the Joburg rappers. But that’s going to change very soon,
                        hopefully soon the game will change. I will even go as far as saying that the
                        talent here is much better than in Jozi. When people say rappers here are all
                        the same, they forget to say... “excluding Yannick.”

                        <br/><br/>
                        <b>OKA:</b>
                        Tell us a bit about the video for "State of Mind" you just recorded. Apparently
                        it was shot on your friend’s roof…?

                        <br/><br/>
                        <b>Yannick:</b>
                        We had a college assignment, but we couldn’t shoot that day because it was
                        raining. So we decided to shoot a video for da rap mechanic, and that was the
                        only track we had on us at the time and we shot that. We never knew that people
                        would love it as much as they did. But the longer video is yet to come, I have
                        this new track with my talented girl Lauren Bee that just came out though [“Take
                        You Home”].

                        <br/><br/>
                        <b>OKA:</b>
                        Who are some of your influences?

                        <br/><br/>
                        <b>Yannick:</b>
                        Nas, J.Cole, Eminem... I rap like I do today because of these guys. Their music
                        has helped me to find myself within rap, now I do a style I’m most comfortable
                        with, and is unique and is mine, and belongs to me.

                        <br/><br/>
                        <b>OKA:</b>
                        Where can we see more of your stuff?

                        <br/><br/>
                        <b>Yannick:</b>
                        You can follow me on twitter: @darapmechanic21 for info on the "Take You Home"
                        track.
                    </p>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bio)
