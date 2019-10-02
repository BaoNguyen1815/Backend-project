import React, { Component } from 'react'

export default class Header extends Component {
    _handleTextChange = event =>
    this.props.onSearchChanged &&
    this.props.onSearchChanged(event.target.value);
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Nam <span className="sr-only">(current)</span></a>
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

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tài Khoản <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Giỏ Hàng <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" onChange = {this._handleTextChange} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

        </nav>
            </div>
        )
    }
}
