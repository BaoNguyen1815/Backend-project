import React, { Component } from 'react'
import { Link } from "react-router-dom";

import config from "../config";
import "../style/ManProductImage.css"
export default class ManProductImage extends Component {
    state = {
        productBuy: this.props.product,
        quantityBuy: 1,
    }
    getData = () => {

        if (localStorage.cartcurnor) {
            let list_item = JSON.parse(localStorage.getItem("cartcurnor"));
            let checkAddItem = false;
            for (let item of list_item) {
                //
                if (item.item._id === this.state.productBuy._id) {
                    this.setState({ quantityBuy: item.quantity + 1 })
                    list_item.splice(list_item.indexOf(item), 1);
                    break;
                }
            }
            let product = {
                item: this.state.productBuy,
                quantity: this.state.quantityBuy,
            };
            // list_item.pop();
            list_item.push(product);
            localStorage.setItem('cartcurnor', JSON.stringify(list_item));


        } else {
            let array = [];
            this.setState({ quantityBuy: this.state.quantityBuy + 1 })
            let productBuy = {
                item: this.state.productBuy,
                quantity: this.state.quantityBuy,
            }

            array.push(productBuy);
            var data_product = JSON.stringify(array);

            localStorage.setItem('cartcurnor', data_product);
        }
        alert("Sản phẩm đã được thêm vào giỏ hàng");
    }

    render() {
        const price = this.props.product.price.toLocaleString("vi");
        return (
            <div className="man_product_image">
                <img
                    style={{ width: "100%" }}
                    className="img-fluid"
                    src={config.rootPath + this.props.product.image[0]}
                    alt={"oke"} />
                <h5>{this.props.product.type_product}-{this.props.product.detail.duongKinh}</h5>
                <h4>{this.props.product.title}</h4>
                <p>{price} VND</p>
                <button className="btn btn-light btn-sm xyz" onClick={this.getData}>Thêm vào giỏ</button>
                <Link className="a" to={`/product/${this.props.product._id}`}><button className="btn btn-light btn-sm abc">Xem chi tiết</button></Link>

                <hr></hr>
            </div>
        )
    }
}
