import React, { Component } from 'react';

export default class Entry extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            company: "",
            phone: [],
            note: ""
        }
    }
}