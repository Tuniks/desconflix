import React from 'react';
import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import './css/videolist.css'

class VideoCard extends  React.Component{
    render() {
        return(
            <Card className={'card'} bg="light">
                <Card.Img variant="top" src={require('./img/kanye.png')} />
                <Card.Body>
                    <Card.Title> {this.props.title} </Card.Title>
                    <Card.Text> lorem ipsum </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

class VideoCardDeck extends React.Component{
    render() {
        return (
            <CardDeck className={'carddeck'}>
                <VideoCard title={'A'}/>
                <VideoCard title={'B'}/>
                <VideoCard title={'C'}/>
                <VideoCard title={'D'}/>
            </CardDeck>
        )
    }
}

class VideoCarousel extends React.Component{
    render(){
        return(
            <Carousel>
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