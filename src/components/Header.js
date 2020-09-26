import React, { Component } from 'react';
import {
    Input,
    Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink,
    Button
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    editUser(){

    }

    

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Navbar light expand="md">
                        <div className="container-fluid">
                            <div className="col-lg-2 col-sm-9">
                                <NavbarBrand>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src='assets/images/icon1.png' height="30" width="41" alt="contact-logo" />
                                        </div>
                                        <div className="col-9 pl-4">
                                            <h3>Danh bạ</h3>
                                        </div>
                                    </div>
                                </NavbarBrand>
                                <NavbarToggler onClick={this.toggleNavbar} />
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <Input
                                    type="text" name="searchInput"
                                    id="searchInput"
                                    placeholder="Tìm kiếm danh bạ">
                                </Input>
                            </div>
                            <div className="col-lg-6">
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to='/home'>
                                                <span className="fa fa-home fa-lg"></span>
                                                <Button color="primary">Chỉnh sửa</Button>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </div>
                    </Navbar>
                </div>
            </div >
        );
    }
}

export default Header;