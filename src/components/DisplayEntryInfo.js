import React, { Component } from 'react';
import {
    Label, Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col,
} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import Avatar from '..\\assets\\avatar_default.png';
class DisplayEntryInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmModalOpen: false,
            isEditModalOpen: false,
            avatar: Avatar
        }

        this.deleteUser = this.deleteUser.bind(this);
        this.toggleConfirmModal = this.toggleConfirmModal.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
    }

    //run when dlt button pressed
    deleteUser() {
        this.toggleConfirmModal();
        this.props.deleteUser(this.props.entry);
        this.props.getSelected(null);
    }

    //pop-up to confirm delete user
    toggleConfirmModal() {
        this.setState({
            isConfirmModalOpen: !this.state.isConfirmModalOpen
        });
    }

    //pop-up when edit button pressed
    toggleEditModal() {
        this.setState({
            isEditModalOpen: !this.state.isEditModalOpen
        });
    }

    //upload avatar
    handleAvatar(avatar) {
        this.setState({
            avatar: URL.createObjectURL(avatar.target.files[0])
        })
    }

    //update current entry to store
    handleInfo(values) {
        this.props.updateUser(
            this.props.entry.id, values.firstName, values.lastName, values.company,
            values.phone, values.note, this.state.avatar
        );
        this.toggleEditModal();
    }

    //add <hr> tags are line breaker
    render() {
        if (this.props.entry === null) {
            return (<div></div>);
        } else {
            //confirm modal "x" button
            const closeBtnConfirm = <button className="close" onClick={this.toggleConfirmModal}>&times;</button>;

            //edit modal "x" button
            const closeBtnEdit = <button className="close" onClick={this.toggleEditModal}>&times;</button>;

            //regex to validate editing form
            const required = (val) => val && val.length;
            const isPhoneNumber = (val) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g.test(val);

            //update user when finish editing
            const updatedUser = this.props.user.filter((user) => user.id === this.props.entry.id)[0];
            return (
                <div className="container  border-inputgroup">
                    {RenderEntryInfo(updatedUser)}
                    <div className="row d-flex justify-content-end pr-2">
                        <Button color="primary" className="m-1" onClick={this.toggleEditModal}>Chỉnh sửa</Button>
                        <Button color="danger" className="m-1" onClick={this.toggleConfirmModal}>Xóa liên hệ</Button>
                    </div>
                    {/* confirmation modal */}
                    <Modal isOpen={this.state.isConfirmModalOpen} toggle={this.toggleConfirmModal}>
                        <ModalHeader close={closeBtnConfirm}>Xóa liên hệ</ModalHeader>
                        <ModalBody>
                            Xác nhận xóa liên hệ <b>{this.props.entry.firstName.concat(" ", this.props.entry.lastName)}</b>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleConfirmModal}>Hủy</Button>{' '}
                            <Button color="secondary" onClick={this.deleteUser}>Xác nhận</Button>
                        </ModalFooter>
                    </Modal>
                    {/* editing modal */}
                    <Modal isOpen={this.state.isEditModalOpen} toggle={this.toggleEditModal} className="modal-lg">
                        <ModalHeader close={closeBtnEdit}>
                            Chỉnh sửa địa chỉ liên hệ
                        </ModalHeader>
                        <hr className="w-100 border border-primary" />
                        <ModalBody>
                            <div className="container-fluid">
                                <div classname="row">
                                    <div classname="col-12">
                                        {/* avatar upload  */}
                                        <div class="avatar-wrapper">
                                            <img class="profile-pic" src={this.state.avatar} alt="avt" />
                                        </div>
                                        <div class="container-fluid">
                                            <div className="row">
                                                <input class="file-upload" type="file" id="upload" accept="image/*"
                                                    onChange={this.handleAvatar} />
                                            </div>
                                            <div className="row d-flex justify-content-center">
                                                <label className="btn btn-primary" for="upload">
                                                    Upload
                                            </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* edit form */}
                                    <div className="col-12">
                                        <LocalForm onSubmit={(values) => this.handleInfo(values)}>
                                            <Row className="form-group">
                                                <Label htmlFor="firstName" md={2}>Họ*</Label>
                                                <Col md={10}>
                                                    <Control.text
                                                        model=".firstName" id="firstName"
                                                        name="firstName" placeholder={this.props.entry.firstName}
                                                        defaultValue={this.props.entry.firstName}
                                                        className="form-control"
                                                    ></Control.text>
                                                    <Errors
                                                        className="text-danger"
                                                        model=".firstName"
                                                        show="touched"
                                                        messages={{
                                                            required: "Trường này không được bỏ trống"
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlFor="lastName" md={2}>Tên*</Label>
                                                <Col md={10}>
                                                    <Control.text
                                                        model=".lastName" id="lastName"
                                                        name="lastName" placeholder={this.props.entry.lastName}
                                                        defaultValue={this.props.entry.lastName}
                                                        className="form-control"
                                                        validators={{
                                                            required
                                                        }}
                                                    ></Control.text>
                                                    <Errors
                                                        className="text-danger"
                                                        model=".lastName"
                                                        show="touched"
                                                        messages={{
                                                            required: "Trường này không được bỏ trống"
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlFor="company" md={2}>Công ty</Label>
                                                <Col md={10}>
                                                    <Control.text
                                                        model=".company" id="company"
                                                        name="company"
                                                        placeholder={this.props.entry.company === null ? '' : this.props.entry.company}
                                                        defaultValue={this.props.entry.company === null ? '' : this.props.entry.company}
                                                        className="form-control"></Control.text>
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Label htmlFor="phone" md={2}>Di động*</Label>
                                                <Col md={10}>
                                                    <Control.text
                                                        model=".phone" id="phone"
                                                        name="phone" placeholder={this.props.entry.phone}
                                                        className="form-control"
                                                        defaultValue={this.props.entry.phone}
                                                        validators={{
                                                            isPhoneNumber
                                                        }}></Control.text>
                                                    <Errors
                                                        className="text-danger"
                                                        model=".phone"
                                                        show="touched"
                                                        messages={{
                                                            isPhoneNumber: "Số điện thoại không hợp lệ "
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <div className="container">
                                                <hr className="w-100 border border-primary" />
                                            </div>
                                            <Row className="form-group">
                                                <Label htmlFor="note" md={2}>Ghi chú</Label>
                                                <Col md={10}>
                                                    <Control.textarea
                                                        model=".note" id="note"
                                                        name="note"
                                                        placeholder={this.props.entry.note === null ? '' : this.props.entry.note}
                                                        defaultValue={this.props.entry.note === null ? '' : this.props.entry.note}
                                                        className="form-control"
                                                        rows={5}></Control.textarea>
                                                </Col>
                                            </Row>
                                            <div className="container">
                                                <hr className="w-100 border border-primary" />
                                            </div>
                                            <Row className="form-group">
                                                <Col className="d-flex justify-content-end">
                                                    <Button color="primary" className="m-1" onClick={this.toggleEditModal}>
                                                        Hủy
                                                    </Button>
                                                    <Button type="submit" color="primary" className="m-1">
                                                        Xong
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </LocalForm>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
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
                        <img src={user.avatar} className="responsive-img responsive-img-wrapper" alt="avt" />
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