import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Table from '../Components/Table';

export default class Payment extends Component {
    //Them vao
    state = {
        id: ''
    }

    getId = ID => {
        this.setState({
            id: ID
        }) 
    }
    //
    render() {
        return (
            <div>

                <Header getId={this.getId}></Header>
                <Table id = {this.state.id}></Table>

                <Footer></Footer>
            </div>
        )
    }
}
