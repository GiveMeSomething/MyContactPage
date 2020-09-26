import React, { Component } from "react";
import { ListGroup, ListGroupItem, } from "reactstrap";

class EntryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.user,
            searchInput: ''
        };
    }
    render() {
        console.log(this.state.users);
        return (
            <div>
                <ListGroup>
                    {RenderUser(this.state.users)}
                </ListGroup>
            </div>
        );
    }
}

function RenderUser(users) {
    const view = users.map((user) => {
        return (
            <ListGroupItem>
                <div className="container-fluid entry">
                    <div className="row">
                        <div className="col-4 align-content-center">
                            <img src={user.avatar} alt="avt" className="responsive-img"></img>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <h4>{user.firstName.concat(" ", user.lastName)}</h4>
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
