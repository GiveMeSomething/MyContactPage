import React, { Component } from 'react';
import {
    Button, Label, Row, Col,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
class CreateNew extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            avatar: "assets/images/avatar_default.jpg"
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleAvatar = this.handleAvatar.bind(this);
        this.handleInfo = this.handleInfo.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleAvatar(avatar) {
        this.setState({
            avatar: URL.createObjectURL(avatar.target.files[0])
        })
    }

    handleInfo(values) {
        this.props.addUser(values.firstName, values.lastName, values.company, values.phone, values.note, this.state.avatar);
        this.toggleModal();
        this.setState({
            avatar: "assets/images/avatar_default.jpg"
        });
    }

    render() {
        const required = (val) => val && val.length;
        const isPhoneNumber = (val) => /(09|03|07|08|05)+[0-9]{8}/g.test(val);
        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}>Thêm liên hệ</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg">
                    <ModalHeader toggle={this.toggleModa}>Tạo địa chỉ liên hệ mới</ModalHeader>
                    <hr className="w-100 border border-primary" />
                    <ModalBody>
                        <div className="container-fluid">
                            <div classname="row">
                                <div classname="col-12">
                                    <div class="avatar-wrapper">
                                        <img class="profile-pic" src={this.state.avatar} alt="avt"/>
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
                                <div className="col-12">
                                    <LocalForm onSubmit={(values) => this.handleInfo(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="firstName" md={2}>Họ</Label>
                                            <Col md={10}>
                                                <Control.text
                                                    model=".firstName" id="firstName"
                                                    name="firstName" placeholder="Họ"
                                                    className="form-control"
                                                    validators={{
                                                        required
                                                    }}></Control.text>
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
                                            <Label htmlFor="lastName" md={2}>Tên</Label>
                                            <Col md={10}>
                                                <Control.text
                                                    model=".lastname" id="lastName"
                                                    name="lastName" placeholder="Tên"
                                                    className="form-control"
                                                    validators={
                                                        required
                                                    }></Control.text>
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
                                                    name="company" placeholder="Công ty"
                                                    className="form-control"></Control.text>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="phone" md={2}>Di động</Label>
                                            <Col md={10}>
                                                <Control.text
                                                    model=".phone" id="phone"
                                                    name="phone" placeholder="Di động"
                                                    className="form-control"
                                                    validators={
                                                        required, isPhoneNumber
                                                    }></Control.text>
                                                <Errors
                                                    className="text-danger"
                                                    model=".phone"
                                                    show="touched"
                                                    messages={{
                                                        required: "Trường này không được bỏ trống ",
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
                                                    name="note" placeholder="Ghi chú"
                                                    className="form-control"
                                                    rows={5}></Control.textarea>
                                            </Col>
                                        </Row>
                                        <div className="container">
                                            <hr className="w-100 border border-primary" />
                                        </div>
                                        <Row className="form-group">
                                            <Col className="d-flex justify-content-end">
                                                <Button type="submit" color="primary">
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
            </div >
        )
    }
}

export default CreateNew;