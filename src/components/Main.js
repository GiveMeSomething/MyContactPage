import React, { Component } from 'react';
import Header from "./Header";
import CreateNew from "./CreateNew";
import EntryList from "./EntryList";
import { addUser } from '../redux/ActionCreator';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    addUser: (firstName, lastName, company, phone, note, avatar) => dispatch(addUser(firstName, lastName, company, phone, note, avatar))
})

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
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
                            <EntryList user={this.props.user}></EntryList>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);