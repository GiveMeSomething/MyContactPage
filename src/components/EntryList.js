import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class EntryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        };
    }

    render() {
        return (
            <ListGroup>
                {RenderUser(this.props.user, this.props.getSelected)}
            </ListGroup>
        );
    }
}

function RenderUser(users, getSelected) {
    const view = users.map((user) => {
        return (
            <ListGroupItem onClick={() => {
                getSelected(user);
            }}>
                <div className="container-fluid entry">
                    <div className="row">
                        <div className="col-4 align-content-center">
                            <img src={user.avatar} alt="avt" className="responsive-img"></img>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <h5>{user.firstName.concat(" ", user.lastName)}</h5>
                            </div>
                            <div className="row">
                                {
                                    user.company === null ? <div></div> : <h5>{user.company}</h5>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </ListGroupItem>
        )
    });
    return view;
}

export default EntryList;
