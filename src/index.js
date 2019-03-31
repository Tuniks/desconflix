import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import VideoList from './videolist.js';
import Gridview from './gridview.js'
import {getVideoListFromCustomPlaylistTitle, getRandomVideoId} from './auxfunctions.js'

import './css/index.css';
import './css/navbar.css';
import './css/displayview.css';
import './css/listview.css';
import './css/displayvideo.css';
import './css/videocard.css'

class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(toggle){
        this.props.fun(toggle);
    }

    render(){
        return(
            <nav className={'navbar'}>
                <ul>
                    <li><a href="#" onClick={() => this.handleClick(0)}>dFlix</a></li>
                    <li><a href="#" onClick={() => this.handleClick(1)}>Em Alta</a></li>
                    <li><a href="#" onClick={() => this.handleClick(2)}>Adicionados Recentemente</a></li>
                    {/*<li className={'right'}> <Form inline>*/}
                        {/*<FormControl md="10" type="text" placeholder="Search" className="mr-sm-2" />*/}
                        {/*<Button variant="outline-success">Search</Button>*/}
                    {/*</Form></li>*/}
                    <li><a>Log In</a></li>
                </ul>
            </nav>
        );
    }
}

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

class Page extends  React.Component {
    constructor(props) {
        super(props);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
        var emAlta = getVideoListFromCustomPlaylistTitle("Em Alta");
        var adicionadosRecentemente= getVideoListFromCustomPlaylistTitle("Adicionados Recentemente");

        this.state = {
            toggleDisplayVideo: true,
            emAltaData: emAlta,
            adicionadosRecentementeData: adicionadosRecentemente,
            activeGridData: emAlta,
        }
    }

    handleNavbarClick(toggle){
        if(toggle === 1){
            this.setState({toggleDisplayVideo: false});
            this.setState({activeGridData: this.state.emAltaData});

        }
        else if(toggle === 2){
            this.setState({toggleDisplayVideo: false});
            this.setState({activeGridData: this.state.adicionadosRecentementeData});
        }
        else {
            this.setState({toggleDisplayVideo: true});
        }
    }

    render () {
        return(
            <div>
            <Navbar fun={this.handleNavbarClick}/>

            {
                this.state.toggleDisplayVideo ? <MainView /> : <Gridview gridData={this.state.activeGridData}/>
            }
            </div>
        );
    }
}



class App extends  React.Component {
    render () {
        return(
            <div>
            <Page/>
            </div>
        )
    }
}

// ========================================
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
