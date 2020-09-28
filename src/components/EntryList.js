import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class EntryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postPerPage: 5,
            currentPage: 1
        }
    }

    //pagination choose page
    changePage = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    //pagination next page
    nextPage = (max) => {
        if (!(this.state.currentPage === max)) {
            this.setState({
                currentPage: (this.state.currentPage + 1)
            })
        }
    }

    //pagination prev page
    prevPage = () => {
        if (!(this.state.currentPage === 1)) {
            this.setState({
                currentPage: (this.state.currentPage - 1)
            })
        }
    }

    render() {
        //filter entry list to match search value
        const filteredUserList = this.props.user.filter(
            (user) => (user.firstName.concat(" ", user.lastName)).toLowerCase().includes(this.props.searchInput)//tìm kiếm không dấu
        );

        //value to specify entry to add in a page
        const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
        const currentPosts = filteredUserList.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div>
                <ListGroup>
                    {RenderUser(currentPosts, this.props.getSelected, this.props.searchInput, this.setFilteredInput)}
                </ListGroup>
                <div className="row d-flex justify-content-center">
                    {RenderPaginationNav(
                        filteredUserList.length, this.state.postPerPage,
                        this.changePage, this.nextPage, this.prevPage
                    )}
                </div>
            </div>
        );
    }
}

function RenderPaginationNav(length, postPerPage, changePage, nextPage, prevPage) {
    const pageNumbers = [];

    //calculate number of pages based on input
    for (let i = 1; i <= Math.ceil(length / postPerPage); i++) {
        pageNumbers.push(i);
    }

    if (length === 0) {
        return (
            <div></div>
        )
    } else {
        return (
            <nav>
                <ul className="pagination">
                    <li class="page-item">
                        <a onClick={() => prevPage()} className="page-link button" href="!#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <a onClick={() => changePage(number)} className="page-link button" href="!#">
                                {number}
                            </a>
                        </li>
                    ))}
                    <li class="page-item">
                        <a onClick={() => nextPage(pageNumbers.length)} className="page-link button" href="!#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

function RenderUser(users, getSelected) {
    const view = users.map((user) => {
        return (
            <ListGroupItem onClick={() => {
                getSelected(user); //{data send to Main -> DisplayEntryInfo}
            }} key={user.id}>
                <div className="container-fluid entry">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 m-1 align-content-center">
                            <img src={user.avatar} alt="avt" className="responsive-img-wrapper"></img>
                        </div>
                        <div className="col-lg-8 col-md-8 m-1">
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
