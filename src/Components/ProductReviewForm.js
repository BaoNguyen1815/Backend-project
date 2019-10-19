import React, { Component } from 'react';
import '../Assets/ProductGallery.css';
import axios from '../axios';


class ProductReviewForm extends Component {
    state = {
        charLimit: 1496
    }

    onChange = (event) => {
        this.setState({
            charLimit: this.state.charLimit - 1
        })
        console.log(this.state.charLimit);
    }

    handleSubmit = (event) => {
        const userID = "5d9b4bd1253e5e2a700a7668";
        const body = event.target.body.value;
        const author = event.target.author.value;
        const title = event.target.title.value;
        event.preventDefault();
        console.log(event.target.author.value);
        console.log(event.target.title.value);
        console.log(event.target.body.value);
        axios({
            url: 'http://curnonwatch-api.herokuapp.com/api/comment',
            method: 'POST',
            data: {
                user: userID,
                name: author,
                title: title,
                product: this.props.productID,
                rating: 4.5,
                content: body
            }
        }).then((response) => {
            console.log(response);
            window.location.reload();
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                {/* <ProductReviewForm /> */}
                <form className="spr-form" onSubmit={this.handleSubmit} method="POST">
                    <h3 className="spr-form-title">Write a review</h3>

                    <div className="form-group spr-form-contact-name">
                        <label className="spr-form-label" htmlFor="review_author_1996552077401">Name</label>
                        <input
                            className="form-control spr-form-input spr-form-input-text "
                            id="review_author_1996552077401" type="text"
                            name="author"
                            required
                            placeholder="Enter your name"
                        />
                    </div>
                    {/* <div className="spr-form-review-rating">
                        <label className="spr-form-label" htmlFor="review[rating]">Rating</label>
                        <div className="spr-form-input spr-starrating ">
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="1" aria-label="1 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="2" aria-label="2 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="3" aria-label="3 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="4" aria-label="4 of 5 stars">&nbsp;</a>
                                        <a href="#" onclick="SPR.setRating(this);return false;" className="spr-icon spr-icon-star spr-icon-star-empty" data-value="5" aria-label="5 of 5 stars">&nbsp;</a>
                                    </div>
                    </div> */}

                    <div className="form-group spr-form-review-title">
                        <label className="spr-form-label">Review Title</label>
                        <input
                            className="form-control spr-form-input spr-form-input-text "
                            id="review_title_1996552077401" type="text"
                            name="title" placeholder="Give your review a title"
                            required
                        />
                    </div>

                    <div className="form-group spr-form-review-body">
                        <label className="spr-form-label" for="review_body_1996552077401">
                            Body of Review
                            <span role="status" aria-live="polite" aria-atomic="true">
                                <span className="spr-form-review-body-charactersremaining"> {this.state.charLimit} </span>
                                <span className="visuallyhidden">characters remaining</span>
                            </span>
                        </label>
                        <div className="spr-form-input">
                            <textarea
                                className="form-control spr-form-input spr-form-input-textarea "
                                id="review_body"
                                data-product-id="1996552077401"
                                name="body"
                                rows="10"
                                width={"100%"}
                                placeholder="Write your comments here"
                                autoComplete="off"
                                onChange={this.onChange}
                                required
                            >

                            </textarea>

                        </div>
                    </div>

                    <input
                        type="submit"
                        className="spr-button spr-button-primary button button-primary btn btn-primary"
                        value="Submit Review"

                    ></input>
                </form>
            </div>
        );
    }
}

export default ProductReviewForm;