import React, { Component } from 'react'
import axios from '../axios'
import ManProductDisplay from './ManProductDisplay';

export default class HomepageBestSeller extends Component {
    state = {
        products: [],
    }
    componentDidMount() {
        axios.get('http://localhost:6969/api/product/Nam/bestSeller').then(data => {
            this.setState({
                products: data.data.data,
            })
        }).catch(err => {
            console.log(err)
        });
    }
    render() {
        return (
            <div>
                <h4 className="Title_mbsl">MEN BEST SELLER</h4>
                <ManProductDisplay products={this.state.products}></ManProductDisplay>
            </div>
        )
    }
}
