import React, { Component } from 'react';
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DisplayEntryInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.deleteUser = this.deleteUser.bind(this);
        this.toggleConfirmModal = this.toggleConfirmModal.bind(this);
    }

    deleteUser() {
        this.props.deleteUser(this.props.entry);
        this.props.getSelected(null);
    }

    toggleConfirmModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        if (this.props.entry === null) {
            return (<div></div>);
        } else {
            const closeBtn = <button className="close" onClick={this.toggleConfirmModal}>&times;</button>;
            return (
                <div className="container">
                    {RenderEntryInfo(this.props.entry)}
                    <div className="row d-flex justify-content-end pr-2">
                        <Button color="primary">Chỉnh sửa</Button>
                        <Button color="danger" onClick={this.deleteUser}>Xóa liên hệ</Button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleConfirmModal}>
                        <ModalHeader close={closeBtn}>Xóa liên hệ</ModalHeader>
                        <ModalBody>
                            Xác nhận xóa liên hệ <b>{this.props.entry.firstName.concat(" ", this.props.entry.lastName)}</b>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleConfirmModal}>Hủy</Button>{' '}
                            <Button color="secondary" onClick={this.deleteUser}>Xác nhận</Button>
                        </ModalFooter>
                    </Modal>
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