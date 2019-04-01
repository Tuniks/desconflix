import React from 'react';

import VideoList from './videolist.js';
import {getRandomVideoId} from './auxfunctions.js'

import '../css/displayview.css';
import '../css/displayvideo.css';

class MainView extends React.Component{
    render(){
        return(
            <div className={'mainview'}>
                <div className={'displayview'}>
                    <div className={'displayvideo'}>
                        <iframe width="960" height="540"
                                src={"https://www.youtube.com/embed/" + getRandomVideoId()}
                                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className={'listview'}>
                    <VideoList/>
                </div>
            </div>
        )
    }
}

export default MainView;