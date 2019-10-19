import React, { Component } from 'react'
import "../style/table.css"
import axios from "../axios";
export default class Table extends Component {

    state = {
        total: 0,
        list_item: JSON.parse(localStorage.getItem("cartcurnor")),
        id: '',
    }





    submitData = () => {
        axios({
            method: 'post',
            url: 'http://localhost:6969/api/bill',
            data: {
                list_product: JSON.parse(localStorage.getItem("cartcurnor")),
                user: this.props.id,
                totalPrice: this.state.total
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };



    delete = (id) => {
        const data = this.state.list_item;
        var index = this.findIndex(data, id);
        data.splice(index, 1);
        localStorage.setItem("cartcurnor", JSON.stringify(data));
        this.setState({ list_item: data });
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.item._id === id) {
                result = index;
            }
        });
        return result;
    }

    renderTable = () => {
        const data = JSON.parse(localStorage.getItem("cartcurnor"));
        if (data) {
            return data.map((item, index) => {
                return (
                    <tr key={index}>
                        <th><img className="tbl_img" src={item.item.image[0]} /><p className="name">{item.item.title}</p></th>
                        <td><p>{item.item.price.toLocaleString("vi")}</p></td>
                        <td><input type="number" className="number" name="number" defaultValue={item.quantity} /></td>
                        <td>{(item.item.price * item.quantity).toLocaleString("vi")}</td>
                        <td><button onClick={() => this.delete(item.item._id)} type="button" className="btn btn-light">Xóa</button></td>
                    </tr>
                );
            })
        }
        else {
            return(
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            )
            
        }

    }

    renderTotal = () => {
        let data = JSON.parse(localStorage.getItem("cartcurnor"));
        let totalPrice = 0;
        for (let item of data) {
            totalPrice = totalPrice + item.quantity * item.item.price;
        }
        // this.setState({total : totalPrice});
        return (
            <div className="totalPrice">
                <span className="totalText1">{totalPrice.toLocaleString("vi")} VND</span>
                <span className="totalText2">Tax included. Shipping calculated at checkout.</span>
            </div>
        )
    }




    render() {
        return (
            <div>
                <form action="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Tổng cộng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                    {this.renderTotal()}
                    <hr></hr>
                </form>
                <div>

                </div>
                <button className="PostData btn btn-dark" onClick={this.submitData}>Thanh toán</button>
                <hr></hr>
            </div>
        )
    }
}
