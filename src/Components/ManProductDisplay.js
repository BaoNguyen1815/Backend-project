import React, { Component } from 'react'
import ManProductImage from './ManProductImage'
export default class ManProductDisplay extends Component {
    
    render() {
        const allImages = this.props.products.map(product => (
                <div key = {product._id} className = "col-3">               
                    <ManProductImage product = {product}/>
                </div>
            ));
        return (
            <div className = "container main_content">
                <div className = "row">{allImages}</div>
            </div>
        )
    }
}
