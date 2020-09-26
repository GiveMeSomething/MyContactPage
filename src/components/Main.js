import React, { Component } from 'react';
import Header from "./Header";
import EntryList from "./EntryList";
import CreateNew from "./CreateNew";
import { USERS } from "../shared/users";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: USERS
        }
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container-fluid">
                    <div className="col-lg-2">
                        <CreateNew></CreateNew>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;