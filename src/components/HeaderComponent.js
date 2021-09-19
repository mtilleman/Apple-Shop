import React, { Component }  from 'react';
import TopCarousel from './CarouselComponent.js';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label 
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefualt();
    }

    render() {
        return (
            <React.Fragment>
                <TopCarousel />
                {/* <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Apple Reseller</h1>
                                <h2>a better way to apple</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}

                <Navbar dark sticky="top" expand="md">
                    <NavbarBrand className="mr-auto" href="/"><img className="brandLogo" src="/images/Reseller-Icon.svg" height="36" width="auto" alt="NuCamp Logo" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar className="navBarCollapse">
                        <Nav navbar className="nav-link allNavLinks">
                            <NavItem>
                                <NavLink className="nav-link shopNavLink" to="/directory">
                                    <i className="fa fa-list fa-lg" /> Shop
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text ml-auto mr-1">
                            <Button className="cartButton" outline onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Cart
                            </Button>
                        </span>
                    </Collapse>
                </Navbar>

                <Modal className="checkoutModal"isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Checkout</ModalHeader>
                    <ModalBody>
                        <div>
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                        </div>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                    <Input type="text" id="name" name="name" placeholder="Full Name"
                                    innerRef={input => this.name = input} />
                            </FormGroup>
                            <FormGroup>
                                    <Input type="text" id="password" name="password" placeholder="Address"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup>
                                    <Input type="text" id="password" name="password" placeholder="Cite / State / Zipcode"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup>
                                    <Input type="text" id="username" name="username" placeholder="Credit Card"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                    <Input type="text" id="password" name="password" placeholder="CVV"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <br />
                            <FormGroup check>
                                <Label check className="approveButton" >
                                    <Input type="checkbox" name="remember"
                                    innerRef={input => this.remember = input} />
                                Approve
                                </Label>
                            </FormGroup>
                            <Button className="payButton" type="submit" value="submit" color="danger">Pay</Button>
                        </Form>
                    </ModalBody>
                </Modal>



            </React.Fragment>
        );
    }
}

export default Header;