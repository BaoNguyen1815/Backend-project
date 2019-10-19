import React, { Component } from 'react';
import "../style/header.css";
import axios from '../axios';
export default class Header extends Component {

    state = {
        username: '',
        id: ''
    }

    componentDidMount() {
        // Check login
        const access_token = window.localStorage.getItem("access_token");
        axios.get("http://localhost:6969/api/auth/check?access_token=" + access_token)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    this.setState({
                        username: response.data.user.username,
                        id: response.data.user.id
                    });
                    //em them dong duoi vao
                    this.props.getId(response.data.user.id)
                } else {
                    //this.props.history.push("/login");
                }

            }).catch(error => {

            });
    }
    _handleTextChange = event =>
        this.props.onSearchChanged &&
        this.props.onSearchChanged(event.target.value);
    logout = (event) => {
        localStorage.removeItem("access_token");
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/nam">Nam <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nữ <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQs <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-link" href="#">
                                    <img src="" width="30" height="30" className="d-inline-block align-top" alt="" />
                                </a>
                            </li>
                        </ul>
                        <a href="/">
                            <img id="logo" src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/logo.svg?14112" alt="logo"></img>
                        </a>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {this.state.id ?
                                    <div>
                                        <span >welcome, {this.state.username}</span>
                                        <a className="nav-link" onClick={this.logout}>Logout<span className="sr-only">(current)</span></a>
                                    </div>
                                    :
                                    <a className="nav-link " href="/login">Tài Khoản <span className="sr-only">(current)</span></a>
                                }



                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/payment">Giỏ Hàng <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" onChange={this._handleTextChange} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                </nav>
            </div>
        )
    }
}
