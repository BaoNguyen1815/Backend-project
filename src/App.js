import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Man from './Pages/Man';
import BestSeller from './Components/HomepageBestSeller';
import Index from './Pages/Index';
import ProductDetail from './Pages/ProductDetail';
import Table from './Components/Table';
import Payment from './Pages/Payment';

import Register from './Pages/Register';
import LoginScreen from './Pages/Login';
import axios from './axios';

class App extends Component {
  state = {
    username: '',
    id: '',
    loggedIn: false
  }

  _onLogin = (username, password) => {
    axios.post("https://curnonwatch-api.herokuapp.com/api/auth/login",
      {
        username: username,
        password: password
      }
    ).then((response) => {
      if (response.data.success) {
        console.log(this.props)
        window.localStorage.setItem("access_token", response.data.access_token);
        this.setState({
          username: response.data.user.username,
          id: response.data.user.id,
          loggedIn: true
        });
        this.props.history.push("/");
      }
      else {
        alert(response.data.message);
      }
      console.log(response.data);
    })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/product/:id"
            render={props => {
              return <ProductDetail
                {...props}
              // username={this.state.username}
              // onLogin={this._onLogin}
              />
            }}
          />

          <Route
            exact
            path="/nam"
            render={props => {
              return <Man
                {...props}
              // username={this.state.username}
              // onLogin={this._onLogin}
              />
            }}
          />

          <Route
            exact
            path="/payment"
            render={props => {
              return <Payment
                {...props}
              />
            }} />
          <Route
            exact
            path="/"
            render={props => {
              return <Index
                {...props}
              // username={this.state.username}
              // onLogin={this._onLogin}
              />
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return <LoginScreen {...props} _onLogin={this._onLogin} />
            }}
          />
          <Route
            exact
            path="/register"
            render={props => {
              return <Register {...props} />
            }}
          />

        </Switch>
      </div>
    );
  }

}

export default withRouter(App);
