import React, { Component } from 'react';

import Head from "../Components/Header";
import Footer from "../Components/Footer";
import ProductGallery from '../Components/ProductGallery';
import ProductSummary from '../Components/ProductSummary';
import ProductPolicy from "../Components/ProductPolicy";
import ProductSpecs from "../Components/ProductSpecs";
import ProductReviews from '../Components/ProductReviews';
import axios from '../axios';
import Tabs from '../Components/Tabs';
import "../Assets/ProductGallery.css";
import FootBanner from '../Components/FootBanner';

class ProductDetail extends Component {
    state = {
        product: {},
        comments: [],
        pages: 0
    }

    componentDidMount() {
        // Check login
        console.log("Hello");
        //const access_token = window.localStorage.getItem("access_token");
        const id = this.props.match.params.id;
        axios.get(`https://curnonwatch-api.herokuapp.com/api/product/${id}`)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.data);
                    this.setState({
                        product: response.data.data,
                        pages: response.data.totalPage
                    });
                } else {
                    console.log("Error");
                    //this.props.history.push("/login");
                }
            }).catch(error => {

            });

        axios.get(`https://curnonwatch-api.herokuapp.com/api/comment/${id}`)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.data);
                    this.setState({
                        comments: response.data.data
                    });
                    console.log("comments: ", response.data.data);
                } else {
                    console.log("Error");
                    //this.props.history.push("/login");
                }
            }).catch(error => {

            });
    }
    render() {
        const product = this.state.product ? this.state.product : null;
        const images = product.image;
        const cmnts = this.state.comments;
        if (!images) {
            return "loading";
        }
        console.log(images);
        return (
            <div>
                <Head />
                <div className="container m-3 rounded">
                    <div className="row">
                        <div className="col">
                            <ProductGallery images={images} className />
                        </div>
                        <div className="col">
                            <ProductSummary product={product} name={product.title} type={product.type_product} price={product.price} reviews={cmnts.length} desc={product.description} />
                        </div>

                    </div>

                    <ProductPolicy />
                    <ProductSpecs details={product.detail} image={images[0]} />
                    <ProductReviews comments={this.state.comments} productID={product._id} />
                </div>
                <div className="my-3">
                    <FootBanner />
                </div>
                <Footer />
            </div>
        );
    }
}


export default ProductDetail;