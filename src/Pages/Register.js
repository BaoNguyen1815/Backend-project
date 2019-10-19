import React, { Component } from 'react'
import Head from '../Components/Header'
import FooterBanner from '../Components/FootBanner'
import Footer from '../Components/Footer';
import axios from '../axios';

export default class Register extends Component {
    state = {
        match: true
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        const username = target.username.value;
        const password = target.password.value;
        const password2 = target.password2.value;
        const email = target.email.value;
        const phone = target.phone.value;
        const address = target.address.value;
        this.setState({
            match: password === password2 ? true : false
        })
        const data = {
            username,
            password,
            email,
            phone,
            address
        }
        if (this.state.match) {
            axios({
                url: "http://localhost:6969/api/user",
                method: "POST",
                data
            })
            .then((response) => {
                console.log(response);
                //response.redirect("/login");
                window.location.href="/login";
            })
            .catch((error) => {
                console.log(error);
            })
        }
        console.log(data);
    }

    render() {
        //const match = true;
        return (
            <div>
                <Head />
                <div className="col-6 offset-3 my-5 p-5">
                    <h3 className="text-secondary bold">Register</h3>
                    <form onSubmit={this.handleSubmit} className="border border-secondary rounded p-5">

                        <div className="form-group">
                            Username:
                            <input className="form-control" name="username" placeholder="username" id="uid" required />
                        </div>
                        <div className="form-group">
                            Password: <input className="form-control" type="password" name="password" placeholder="password" id="pass" minLength="6" required />
                        </div>
                        <div className="form-group">
                            Re-Password: <input className="form-control" type="password" name="password2" placeholder="re" minLength="6" required />
                        </div>
                        {!this.state.match ? <p className="text-danger">Mật khẩu không khớp</p> : null}
                        <div className="form-group">
                            Email: <input className="form-control" name="email" placeholder="email" required />
                        </div>
                        <div className="form-group">
                            Phone: <input className="form-control" name="phone" placeholder="phone" required />
                        </div>
                        <div className="form-group">
                            Address: <input className="form-control" name="address" placeholder="address" />
                        </div>
                        <input className="form-control btn-secondary" type="submit" />
                    </form>
                </div>
                <FooterBanner />
                <Footer />
            </div>
        )
    }
}