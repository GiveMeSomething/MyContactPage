import React, { Component } from 'react';
import Header from "./Header";
import EntryList from "./EntryList";
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
            </div>
        );
    }
}

export default Main;