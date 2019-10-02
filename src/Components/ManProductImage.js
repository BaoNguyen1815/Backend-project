import React, { Component } from 'react'
import { Link } from "react-router-dom";

import config from "../config";
import  "../style/ManProductImage.css"
export default class ManProductImage extends Component {
    render() {
        return (
            <div className = "man_product_image">
                <img
                style={{width : "100%"}}
                className = "img-fluid"
                src = {config.rootPath+this.props.product.image[0]}
                alt = {"oke"} />
                <h5>{this.props.product.type_product}-{this.props.product.detail.duongKinh}</h5>
                <h4>{this.props.product.title}</h4>
                <p>{this.props.product.price} VND</p>
                <Link to ={`/product/${this.props.product._id}`}><button>Xem chi tiết</button></Link>
            </div>
        )
    }   
}
