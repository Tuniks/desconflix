import React from 'react';
import ReactDOM from 'react-dom';

import VideoList from './videolist.js';
import './index.css';
import './css/navbar.css';
import './css/displayview.css';
import './css/listview.css';
import './css/displayvideo.css'

class Navbar extends React.Component{
    render(){
        return(
            <nav className={'navbar'}>
                <ul>
                    <li><a href="">dFlix </a></li>
                    <li><a href="">Em Alta</a></li>
                    <li><a href="">Adicionados Recentemente</a></li>
                    <li><a href="">Log In</a></li>
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
                        <iframe width="960" height="540" src="https://www.youtube.com/embed/6CHs4x2uqcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className={'listview'}>
                    <VideoList/>
                </div>
            </div>
        )
    }
}
class App extends  React.Component {
    constructor(props){
        super(props);
        
    }

    render () {
        return(
            <div>
            <Navbar/>
            <MainView/>
            </div>
        )
    }
}


// ========================================
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
