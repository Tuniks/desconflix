import React from 'react';
import ReactDOM from 'react-dom';

import VideoList from './videolist.js';
import './index.css';
import './css/navbar.css';
import './css/displayview.css';
import './css/listview.css';
import './css/displayvideo.css'

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick(toggle){
        this.props.fun(toggle);
    }

    render(){
        return(
            <nav className={'navbar'}>
                <ul>
                    <li><a href="#" onClick={() => this.handleClick(true)}>dFlix</a></li>
                    <li><a href="#" onClick={() => this.handleClick(false)}>Em Alta</a></li>
                    <li><a href="#" onClick={() => this.handleClick(false)}>Adicionados Recentemente</a></li>
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

class Page extends  React.Component {
    constructor(props) {
        super(props);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
        this.state = {
            toggleDisplayVideo: true,
        }
    }

    handleNavbarClick(toggle){
        console.log(toggle);
        this.setState({toggleDisplayVideo: toggle});
    }

    render () {
        return(
            <div>
            <Navbar fun={this.handleNavbarClick}/>

            {
                this.state.toggleDisplayVideo ? <MainView /> : <div> dfsd  </div>
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
