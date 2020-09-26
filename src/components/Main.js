import React, { Component } from 'react';
import Header from "./Header";
import CreateNew from "./CreateNew";
import EntryList from "./EntryList";
import DisplayEntryInfo from "./DisplayEntryInfo";
import { addUser, deleteUser } from '../redux/ActionCreator';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    addUser: (firstName, lastName, company, phone, note, avatar) => dispatch(
        addUser(firstName, lastName, company, phone, note, avatar)
    ),
    deleteUser: (user) => dispatch(
        deleteUser(user)
    )

})

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEntry: null
        }
    }

    getSelected = (entry) => {
        if (entry === null) {
            return;
        } else {
            this.setState({
                selectedEntry: entry
            })
        }
    }

    getSelected = (entry) => {
        this.setState({
            selectedEntry: entry
        })
    }

    render() {

        return (
            <div>
                <Header></Header>
                <div className="container-fluid">
                    <div class="row">
                        <div className="col-lg-2">
                            <div className="row d-flex justify-content-center">
                                <CreateNew addUser={this.props.addUser}></CreateNew>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <EntryList user={this.props.user} getSelected={this.getSelected}></EntryList>
                        </div>
                        <div className="col-lg-6">
                            <DisplayEntryInfo
                                entry={this.state.selectedEntry}
                                deleteUser={this.props.deleteUser}
                                getSelected={this.getSelected}>
                            </DisplayEntryInfo>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);