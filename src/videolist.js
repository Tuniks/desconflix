import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import VideoCardModalWrapper from './videocard.js'

import './css/videolist.css'
import myData from './mockdb.json'


class VideoCardDeck extends React.Component{
    render() {
        return (
            <CardDeck className={'carddeck'}>
                <VideoCardModalWrapper/>
                <VideoCardModalWrapper/>
                <VideoCardModalWrapper/>
                <VideoCardModalWrapper/>
            </CardDeck>
        )
    }
}

class VideoCarousel extends React.Component{
    render(){
        return(
            <>
            <div className={'carouseltitle'}>Videos Legais</div>
            <Carousel interval={null}>
                <Carousel.Item>
                    <VideoCardDeck/>
                </Carousel.Item>
                <Carousel.Item>
                    <VideoCardDeck/>
                </Carousel.Item>
                <Carousel.Item>
                    <VideoCardDeck/>
                </Carousel.Item>
            </Carousel>
            </>
        )
    }
}

class VideoList extends React.Component{
    render() {
        return(
            <div>
                <div className={'carousel'}>
                    <VideoCarousel/>
                </div>
                <div className={'carousel'}>
                    <VideoCarousel/>
                </div>
            </div>
        )

    }
}

export default VideoList;