import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import VideoCardModalWrapper from './videocard.js'
import './css/gridview.css'

class Gridview extends React.Component {
    render(){

        const videogrid = [];

        for(var i = 0; i < Math.ceil(this.props.gridData.length/4); i++){
            var rowvideos = [];
            for(var j = 0; j < 4; j++){
                if((4*i)+j < this.props.gridData.length){
                    rowvideos.push(
                        <Col>
                            <VideoCardModalWrapper key={Math.random()}
                                                   title={this.props.gridData[(4*i)+j].snippet.title}
                                                   thumb={this.props.gridData[(4*i)+j].snippet.thumbnails.medium.url}
                                                   videoid={this.props.gridData[(4*i)+j].snippet.resourceId.videoId}/>
                        </Col>);
                }
            }
            videogrid.push(
                <Row className={'gridrow'}>
                    {rowvideos}
                </Row>
            );
        }

        return(
            <div className={'gridview'}>
                <Container className={'gridcontainer'}>
                    {videogrid}
                </Container>
            </div>
        )
    }
}

export default Gridview;