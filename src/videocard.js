import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import './css/videolist.css'
import './css/videocard.css'

class VideoModal extends React.Component{
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.props.closeFunction();
    }

    render(){
        return(
            <Modal show={this.props.show} dialogClassName='custom-modal' onHide={this.handleClose} >
                <Modal.Header  className={'modaltitle'}>
                    Nome do video
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <iframe width="960" height="540" src="https://www.youtube.com/embed/6CHs4x2uqcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

class VideoCard extends  React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.showFunction();
    }

    render() {
        return(
            <Card className={'card'} bg="white" border="white">
                <a onClick={() => this.handleClick()}>
                    <Card.Img variant="top" src={require('./img/kanye.png')} />
                    <Card.Body>
                        <Card.Title> {this.props.title} </Card.Title>
                    </Card.Body>
                </a>
            </Card>
        )
    }
}

class VideoCardModalWrapper extends React.Component{
    constructor(props, context){
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose(){
        this.setState({show: false});
        console.log('bye')
    }

    handleShow(){
        this.setState({show: true});
        console.log('oi');
    }

    render(){
        return(
            <>
            <VideoCard title={'A'} showFunction={this.handleShow}/>
            <VideoModal show={this.state.show} closeFunction={this.handleClose}/>
            </>
        )
    }
}

export default VideoCardModalWrapper;