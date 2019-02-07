import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, Button, NavbarToggler, Collapse, 
        NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Label, Input, FormGroup, Form } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.isNavOpen
        });
    }

    handleLogin(event) {
        //this.toggleModal();
        this.setState({
            isModalOpen: false,
            isNavOpen: false
        });
        console.log(this.username.value + " " + this.password.value + " " + this.remember.checked);
        event.preventDefault();
    }

    render() {
       return (
           <React.Fragment>
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        
                    <NavbarBrand alt="Ristorante Con fusio" className="mr-auto" href="/">
                        <img height="30" width="41" alt="logo" src="assets/images/logo.png" />
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/home" className="nav-link">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/aboutus" className="nav-link">
                                <span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/menu" className="nav-link">
                                <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contactus" className="nav-link">
                                <span className="fa fa-address-card fa-lg"></span> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button className="warning" outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </Button>
                        </NavItem>
                    </Nav>
                    </Collapse>

                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We inspire people everywhere</p>
                            </div>
                        </div>                    
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"> Username
                                </Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(input)=> this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> Password
                                </Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input)=> this.password = input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                     innerRef={(input)=> this.remember = input}
                                    /> Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">
                              Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
           </React.Fragment>
       ); 
    }
}

export default Header