import React, { Component } from 'react';
import { Label, Button } from 'reactstrap';

class DisplayEntryInfo extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        this.props.deleteUser(this.props.entry);
        this.props.getSelected(null);
    }
    render() {
        if (this.props.entry === null) {
            return (<div></div>);
        } else {
            return (
                <div className="container">
                    {RenderEntryInfo(this.props.entry)}
                    <div className="row d-flex justify-content-end pr-2">
                        <Button color="primary m-1">Chỉnh sửa</Button>
                        <Button color="danger m-1" onClick={this.deleteUser}>Xóa liên hệ</Button>
                    </div>
                </div>
            );
        }
    }
}

function RenderEntryInfo(user) {

    return (
        <div>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <img src={user.avatar} className="responsive-img" alt="avt" />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <h4 id="name">{user.firstName.concat(" ", user.lastName)}</h4>
                        </div>
                        <div className="row">
                            {
                                user.company === null ? <div></div> : <h5>{user.company}</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-3">
                        <Label htmlFor="phone">
                            Di động
                        </Label>
                    </div>
                    <div className="col-9">
                        <h5 id="phone">{user.phone}</h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr className="w-100 border border-primary" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Label htmlFor="note">
                            Ghi chú
                    </Label>
                    </div>
                    <div className="col-9">
                        <h5 id="note">{user.note}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DisplayEntryInfo;