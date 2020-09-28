import React, { Component } from 'react';
import Header from "./Header";
import CreateNew from "./CreateNew";
import EntryList from "./EntryList";
import DisplayEntryInfo from "./DisplayEntryInfo";
import { addUser, deleteUser, updateUser } from '../redux/ActionCreator';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

//add actions to main props (to be called by child components)
const mapDispatchToProps = (dispatch) => ({
    addUser: (firstName, lastName, company, phone, note, avatar) => dispatch(
        addUser(firstName, lastName, company, phone, note, avatar)
    ),
    deleteUser: (user) => dispatch(
        deleteUser(user)
    ),
    updateUser: (id, firstName, lastName, company, phone, note, avatar) => dispatch(
        updateUser(id, firstName, lastName, company, phone, note, avatar)
    )
})

//add store state to main props
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: null,
            searchInput: ''
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({ hideNav: window.innerWidth <= 760 });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    //set selected entry to display (input get from EntryList)
    getSelected = (entry) => {
        this.setState({
            selectedEntry: entry
        })
    }

    //set search bar data to state.searchInput (input get from Header)
    setSearchInput = (input) => {
        this.setState({
            searchInput: input
        })
    }

    render() {
        return (
            <div>
                <Header setSearchInput={this.setSearchInput}></Header>
                <Switch>
                    <Route exact path="/MyContactPage/">
                        <div className="container-fluid pt-5">
                            <div class="row">
                                <div className="col-lg-2">
                                    <div className="row d-flex justify-content-center">
                                        <CreateNew addUser={this.props.addUser}></CreateNew>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <EntryList
                                        user={this.props.user}
                                        getSelected={this.getSelected}
                                        searchInput={this.state.searchInput.toLowerCase()}
                                        changePage={this.changePage}>
                                    </EntryList>
                                </div>
                                <div className="col-lg-6">
                                    <DisplayEntryInfo
                                        entry={this.state.selectedEntry}
                                        deleteUser={this.props.deleteUser}
                                        getSelected={this.getSelected}
                                        updateUser={this.props.updateUser}
                                        user={this.props.user}
                                    >
                                    </DisplayEntryInfo>
                                </div>
                            </div>
                        </div>
                    </Route>
                    {/* always redirect to main page in case of wrong address */}
                    <Redirect to="/MyContactPage/"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));