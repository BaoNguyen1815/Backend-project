import React, { Component } from 'react';
import ProductReviewForm from './ProductReviewForm';
import ProductReview from './ProductReview';
import '../Assets/ProductGallery.css';

class ProductReviews extends Component {
    state = {
        collapse: false
    }

    openForm = (event) => {
        this.setState({
            collapse: true
        })
    }

    render() {
        const comments = this.props.comments;
        const commentList = this.props.comments
            ? this.props.comments.map((comment, index) => (
                <ProductReview comment={comment} key={index} />
            ))
            : "";
        const length = comments.length;
        console.log(commentList);
        if (!comments) {
            return "...loading";
        }

        return (

            <div className="product-single__section product-single__section--bordered">
                <div className="container">
                    <h2>Đánh giá của khách hàng</h2>
                    <div className="spr-container">
                        <div className="spr-header">
                            <h2 className="spr-header-title">Customer Reviews</h2>
                            <div
                                className="spr-summary"
                                itemScope=""
                                itemProp="aggregateRating"
                                itemType="http://schema.org/AggregateRating"
                            >
                                <div itemProp="itemReviewed" itemScope="" itemType="http://schema.org/Product">
                                    <meta itemProp="name" content="HERBERT" />
                                </div>

                                <span className="spr-starrating spr-summary-starrating">
                                    <meta itemProp="bestRating" content="5" />
                                    <meta itemProp="worstRating" content="1" />
                                    <meta itemProp="reviewCount" content="25" />
                                    <meta itemProp="ratingValue" content="4.48" />
                                    <i className="spr-icon spr-icon-star"></i>
                                    <i className="spr-icon spr-icon-star"></i>
                                    <i className="spr-icon spr-icon-star"></i>
                                    <i className="spr-icon spr-icon-star"></i>
                                    <i className="spr-icon spr-icon-star-half-alt"></i>
                                </span>
                                <span className="spr-summary-caption">
                                    <span className="spr-summary-actions-togglereviews">Based on {length} reviews</span>
                                </span>
                                <span className="spr-summary-actions">
                                    <button className="spr-summary-actions-newreview" onClick={this.openForm}>Write a review</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="spr-content">

                        {this.state.collapse ? <ProductReviewForm productID={this.props.productID} /> : null}
                        <div className="spr-reviews">
                            <div>
                                {commentList}
                            </div>

                            {/* <div className="spr-pagination">
                                <div>
                                    <span className="spr-pagination-prev">
                                        <a
                                            href="#shopify-product-reviews"
                                            onClick={null} data-product-id="2078489378905"
                                            data-page="2">« Previous
                                        </a>
                                    </span>

                                    <span className="spr-pagination-page is-active">1</span>
                                    <span className="spr-pagination-page">
                                        <a
                                            href="#shopify-product-reviews"
                                            onClick={null} data-product-id="2078489378905" data-page="2">2
                                        </a>
                                    </span>
                                    <span className="spr-pagination-page">
                                        <a href="#shopify-product-reviews" onClick={null} data-product-id="2078489378905" data-page="3">3</a>
                                    </span>
                                    <span className="spr-pagination-page">
                                        <a href="#shopify-product-reviews" onClick={null}
                                            data-product-id="2078489378905" data-page="4">4
                                        </a>
                                    </span>
                                    <span className="spr-pagination-next">
                                        <a
                                            href="#shopify-product-reviews"
                                            onClick={null} data-product-id="2078489378905"
                                            data-page="2">Next »
                                        </a>
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProductReviews;