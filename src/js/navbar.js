import React from 'react';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import '../css/navbar.css';

class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleClick(toggle){
        this.props.fun(toggle);
    }

    handleSearch = e => {
        this.props.fun(e.target.value);
    }

    render(){
        return(
            <nav className={'navbar'}>
                <ul>
                    <li><a href="#" onClick={() => this.handleClick(0)}>dFlix</a></li>
                    <li><a href="#" onClick={() => this.handleClick(1)}>Em Alta</a></li>
                    <li><a href="#" onClick={() => this.handleClick(2)}>Adicionados Recentemente</a></li>
                    {/*<li><a>Séries</a></li>*/}
                    <li className={'right'}> <Form inline>
                        <FormControl md="10" type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearch}/>
                    </Form></li>
                    <li><a>Log In</a></li>
                </ul>
            </nav>
        );
    }
}

// class NavBar extends React.Component{
//     constructor(props){
//         super(props)
//
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(toggle){
//         this.props.fun(toggle);
//     }
//
//
//     render(){
//         return(
//             <Navbar className={"navbar2"} expand="lg">
//                 <Navbar.Brand style={{color: 'white', textDecoration: 'none'}} href="#" onClick={() => this.handleClick(0)}>dFlix</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="mr-auto">
//                         <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="#" onClick={() => this.handleClick(1)}>Em Alta</Nav.Link>
//                         <Nav.Link style={{color: 'white', textDecoration: 'none'}} href="#" onClick={() => this.handleClick(2)}>Adicionados Recentemente</Nav.Link>
//                         <NavDropdown style={{color: 'black', textDecoration: 'none'}} title="Séries" id="basic-nav-dropdown">
//                             <NavDropdown.Item style={{color: 'white', textDecoration: 'none'}} href="#">Action</NavDropdown.Item>
//                             <NavDropdown.Item style={{color: 'white', textDecoration: 'none'}} href="#">Another action</NavDropdown.Item>
//                             <NavDropdown.Item style={{color: 'white', textDecoration: 'none'}} href="#">Something</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Nav classId={"nav-left"}>
//                         <Form inline>
//                             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                             <Button variant="outline-success">Search</Button>
//                         </Form>
//                         <Nav.Link style={{color: 'white', textDecoration: 'none'}} >Log In</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         );
//     }
// }

export default Navbar;