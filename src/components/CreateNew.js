import React, { Component } from 'react';
import {
    Button, Label, Row, Col,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Avatar from '..\\assets\\avatar_default.png';

class CreateNew extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            avatar: Avatar
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

    //get uploaded avatar
    handleAvatar(avatar) {
        this.setState({
            avatar: URL.createObjectURL(avatar.target.files[0])
        })
    }

    //add user to store
    handleInfo(values) {
        this.props.addUser(values.firstName, values.lastName, values.company, values.phone, values.note, this.state.avatar);
        this.toggleModal();
        //reset defautl avatar for next addUser procedure
        this.setState({
            avatar: Avatar
        });
    }

    render() {
        //"x" button for modal
        const closeBtn = <button className="close" onClick={this.toggleModal}>&times;</button>;

        //regex to check required field and phone number (VN and US)
        const required = (val) => val && val.length;
        const isPhoneNumber = (val) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g.test(val);

        return (
            <div>
                <Button color="primary" onClick={this.toggleModal}>Thêm liên hệ</Button>
                {/* pop-up modal to add new user */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="modal-lg">
                    <ModalHeader close={closeBtn}>
                        Tạo địa chỉ liên hệ mới
                    </ModalHeader>
                    <hr className="w-100 border border-primary" />
                    <ModalBody>
                        <div className="container-fluid">
                            <div classname="row">
                                <div classname="col-12">
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
                                {/* new user data input form */}
                                <div className="col-12">
                                    <LocalForm onSubmit={(values) => this.handleInfo(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="firstName" md={2}>Họ*</Label>
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
                                            <Label htmlFor="lastName" md={2}>Tên*</Label>
                                            <Col md={10}>
                                                <Control.text
                                                    model=".lastName" id="lastName"
                                                    name="lastName" placeholder="Tên"
                                                    className="form-control"
                                                    validators={{
                                                        required
                                                    }}></Control.text>
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
                                            <Label htmlFor="phone" md={2}>Di động*</Label>
                                            <Col md={10}>
                                                <Control.text
                                                    model=".phone" id="phone"
                                                    name="phone" placeholder="Di động"
                                                    className="form-control"
                                                    validators={{
                                                        required, isPhoneNumber
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
            </div >
        )
    }
}

export default CreateNew;