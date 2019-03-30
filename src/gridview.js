import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import VideoCardModalWrapper from './videocard.js'
import './css/gridview.css'

class Gridview extends React.Component {
    render(){
        return(
            <div className={'gridview'}>
                <Container className={'gridcontainer'}>
                    <Row className={'gridrow'}>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                    </Row>
                    <Row className={'gridrow'}>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                    </Row>
                    <Row>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                        <Col> <VideoCardModalWrapper/> </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Gridview;