/**
 * Created by mag on 16-5-3.
 */
import winStyle from './audio.css';
import React, {Component} from 'react';
import AudioSrc from './audio.ogg';

export default class Audio extends Component{
    constructor(){
        super()
        this.state={time: ''}
    }
    playOrPaused(){
        let audio = this.refs.audio;
        console.log(audio)
        this.setState({time: Math.floor(audio.duration/60)+'秒'});
        if(audio.paused){
            audio.play();
            return;
        }
        audio.pause();
    }
    render(){
        var audio = this.refs.audio;
        var time = this.state.time;
        return(
            <div className={winStyle['voice-wrap']}>
                <div className={winStyle['voice-left']}></div>
                <div className={winStyle['voice-content']} onClick={this.playOrPaused.bind(this)}>
                    <audio ref='audio'>
                        <source src={AudioSrc} type="audio/ogg"/>
                    </audio>
                    <span className={winStyle['voice-red-point']}>&nbsp;</span>
                    <em className={winStyle['voice-time']}>{time}</em>
                </div>
            </div>
            
        );
    }
}
