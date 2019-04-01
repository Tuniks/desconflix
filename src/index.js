import React from 'react';
import ReactDOM from 'react-dom';

import Gridview from './js/gridview.js'
import Navbar from './js/navbar.js'
import MainView from './js/mainview.js'
import {getVideoListFromCustomPlaylistTitle, getVideoListFromSearch} from './js/auxfunctions.js'

import './css/index.css';
import './css/displayview.css';
import './css/listview.css';
import './css/displayvideo.css';
import './css/videocard.css'


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
        else if((toggle === 0) || (toggle === '')){
            this.setState({toggleDisplayVideo: true});
        } else{
            this.setState({toggleDisplayVideo: false});
            this.setState({activeGridData: getVideoListFromSearch(toggle)})
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
