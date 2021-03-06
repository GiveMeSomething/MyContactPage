import React, { Component } from 'react';
import {
    Input, InputGroup, InputGroupAddon,
    Navbar, NavbarToggler, NavbarBrand
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar light expand="md" className="silver-side">
                    <div className="container-fluid">
                        <div className="col-lg-2 col-sm-9 ">
                            <NavbarBrand>
                                <div className="row d-flex justify-content-start">
                                    <div className="col-2">
                                        <img src={require('../assets/icon1.png')} height="30" width="auto" alt="contact-logo" />
                                    </div>
                                    <div className="col-9 ml-3 mt-1">
                                        <h3 className="white-text">Danh bạ</h3>
                                    </div>
                                </div>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="row">
                                {/* searchbar */}
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend" className="align-content-center mr-2 mt-1">
                                        <img src={require('../assets/search.png')} className="icon-wrapper" alt="icon" />
                                    </InputGroupAddon>
                                    <Input
                                        type="text" name="searchInput"
                                        className="searchBar"
                                        id="searchInput"
                                        placeholder="Tìm kiếm danh bạ"
                                        onChange={(event) => this.props.setSearchInput(event.target.value)}>
                                    </Input>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;