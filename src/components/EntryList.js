import React, { Component } from "react";
import {ListGroup, ListGroupItem } from "reactstrap";

class EntryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users,
            searchInput: ""
        };
    }

    render() {
        const display = this.state.users.map((user) => {
                return (
                    <ListGroupItem key={user.id}>
                        {user.company}
                    </ListGroupItem>
                );
        });

        return (
            <div>
                <ListGroup>
                    {display}
                </ListGroup>
            </div>
        );
    }
}

export default EntryList;
