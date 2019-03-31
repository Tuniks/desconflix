import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import VideoCardModalWrapper from './videocard.js'

import {getPlaylistNameFromId, getVideoListFromCustomPlaylistTitle} from './auxfunctions.js'
import './css/videolist.css'
import myData from './playlistitems.json'


class VideoCardDeck extends React.Component{
    render() {
        const cardlist = [];

        for(var i=0; i < this.props.carddata.length; i++){
            cardlist.push(
                <VideoCardModalWrapper key={Math.random()}
                                       title={this.props.carddata[i].snippet.title}
                                       thumb={this.props.carddata[i].snippet.thumbnails.medium.url}
                                       videoid={this.props.carddata[i].snippet.resourceId.videoId}/>
            );
        }

        return (
            <CardDeck className={'justify-content'}>
                {cardlist}
            </CardDeck>
        )
    }
}

class VideoCarousel extends React.Component{
    render(){
        const decklist = [];

        for(var i = 0; i < Math.ceil(this.props.playlistdata.items.length/4); i++){
            var deckvideos = [];
            for(var j = 0; j < 4; j++){
                if((4*i)+j < this.props.playlistdata.items.length){
                    deckvideos.push(this.props.playlistdata.items[(4*i)+j]);
                }
            }
            decklist.push(
                <Carousel.Item key={Math.random()}>
                    <VideoCardDeck carddata={deckvideos}/>
                </Carousel.Item>
            );
        }

        return(
            <>
            <div className={'carouseltitle'}>{getPlaylistNameFromId(this.props.playlistdata.items[0].snippet.playlistId)}</div>
            <Carousel interval={null}>
                {decklist}
            </Carousel>
            </>
        )
    }
}

class VideoList extends React.Component{
    render() {
        var videolist = getVideoListFromCustomPlaylistTitle("Em Alta");
        console.log(videolist[0].snippet.title);

        const carousellist = [];

        for(var i = 0; i < myData.playlistdata.length; i++){
            carousellist.push(
                <div className={'carousel'} key={i}>
                    <VideoCarousel playlistdata={myData.playlistdata[i]}/>
                </div>
            );
        }


        return(
            <div>
                {carousellist}
            </div>
        )

    }
}

export default VideoList;