import React, { Component } from 'react';
import '../Assets/ProductGallery.css';
//import {EventJS} from '../Assets/Event';
//import {Magnifier} from '../Assets/Magnifier';
//import '../Assets/magnifier.css';

class ProductGallery extends Component {
    state = {
        photos: [

        ],
        currentPhoto: ""
    }

    componentDidMount() {
        const img = this.props.images;
        console.log("Images: ", img);
        this.setState({
            photos: img,
            currentPhoto: img[0]
        })
    }

    changePhoto1 = (event) => {
        event.preventDefault();
        this.setState({
            currentPhoto: this.state.photos[0]
        })
    }

    changePhoto2 = (event) => {
        event.preventDefault();
        this.setState({
            currentPhoto: this.state.photos[1]
        })
    }

    changePhoto3 = (event) => {
        event.preventDefault();
        this.setState({
            currentPhoto: this.state.photos[2]
        })
    }


    changePhoto4 = (event) => {
        event.preventDefault();
        this.setState({
            currentPhoto: this.state.photos[3]
        })
    }

    getImageName = () => this.state.currentPhoto

    render() {
        var image = this.state.currentPhoto
        //var evnt = new EventJS();
        //var m = new Magnifier(evnt);
        console.log("HERE");
        console.log(this.state.photos);
        console.log(this.state.currentPhoto);
        const display = (
            <div className="grid__column twelve-twelfths product-single__photos">
                {/* <p>{image ? image : null}</p> */}
                {/* <div>
                    <a class="magnifier-thumb-wrapper" href="http://en.wikipedia.org/wiki/File:Starry_Night_Over_the_Rhone.jpg">
                        <img id="thumb" src="http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/200px-Starry_Night_Over_the_Rhone.jpg"/>
                    </a>
                    <div class="magnifier-preview" id="preview" 
                    style={{
                        width: "200px", 
                        height: "133px"
                    }}
                    >
                        Starry Night Over The Rhone<br/>by Vincent van Gogh
                    </div>
                </div> */}
                <div className="thumbnails-wrapper">
                    <ul className="product-single__thumbnails product-single__thumbnails-product-template">

                        <li className="product-single__thumbnails-item js">
                            <button
                                onClick={this.changePhoto1}
                                className="text-link product-single__thumbnail product-single__thumbnail--product-template"
                                data-thumbnail-id="6963526172761"
                                data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/Herbert_1024x1024@2x.jpg?v=1559235266"
                                aria-current="true"
                            >
                                <img
                                    className="product-single__thumbnail-image"
                                    src={this.state.photos[0]}
                                    alt="Load img into Gallery viewer, HERBERT"
                                />

                            </button>

                        </li>

                        <li className="product-single__thumbnails-item js">
                            <button
                                onClick={this.changePhoto2}
                                className="text-link product-single__thumbnail product-single__thumbnail--product-template"
                                data-thumbnail-id="6963526205529"
                                data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/2.5_1_1024x1024@2x.jpg?v=1559235266"
                            >
                                <img className="product-single__thumbnail-image"
                                    src={this.state.photos[1]}
                                    alt="Load image into Gallery viewer, HERBERT"
                                />
                            </button>
                        </li>


                        <li className="product-single__thumbnails-item js">
                            <button
                                onClick={this.changePhoto3}
                                className="text-link product-single__thumbnail product-single__thumbnail--product-template"
                                data-thumbnail-id="7105051885657"
                                data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/NDP9171_1_7f161acb-95b5-4e52-a5eb-089b6b25b11f_1024x1024@2x.jpg?v=1559235266"
                            >
                                <img
                                    className="product-single__thumbnail-image"
                                    src={this.state.photos[2]}
                                    alt="Load image into Gallery viewer, HERBERT"
                                />
                            </button>
                        </li>

                        <li className="product-single__thumbnails-item js">
                            <button
                                onClick={this.changePhoto4}
                                className="text-link product-single__thumbnail product-single__thumbnail--product-template"
                                data-thumbnail-id="6963532857433"
                                data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/PH.L.3_1024x1024@2x.jpg?v=1559235266"
                            >
                                <img className="product-single__thumbnail-image"
                                    src={this.state.photos[3]}
                                    alt="Load image into Gallery viewer, HERBERT" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="product-single__preview">
                    <div
                        id="FeaturedImageZoom-product-template-6963526172761-wrapper"
                        className="product-single__photo-wrapper js">
                        <div
                            id="FeaturedImageZoom-product-template-6963526172761"
                            style={{
                                paddingTop: "100%",
                                position: "relative",
                                overflow: "hidden"
                            }}
                            className="product-single__photo js-zoom-enabled product-single__photo--has-thumbnails"
                            data-image-id="6963526172761"
                            data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/Herbert_1024x1024@2x.jpg?v=1559235266"
                        >

                        </div>
                    </div>
                    <div
                        id="FeaturedImageZoom-product-template-6963526205529-wrapper"
                        className="product-single__photo-wrapper js"
                    >
                        <div
                            id="FeaturedImageZoom-product-template-6963526205529"
                            style={{ paddingTop: "100%", position: "relative", overflow: "hidden" }}
                            className="product-single__photo js-zoom-enabled product-single__photo--has-thumbnails hidden"
                            data-image-id="6963526205529"
                            data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/2.5_1_1024x1024@2x.jpg?v=1559235266"
                        />
                        <img
                            id="FeaturedImage-product-template-6963526205529"
                            className="feature-row__image product-featured-img lazypreload lazyautosizes lazyloaded"
                            src={this.state.currentPhoto}
                            data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                            data-aspectratio="1.0" data-sizes="auto" tabIndex="-1" alt="HERBERT"
                            data-srcset={this.state.currentPhoto}
                            sizes="704px"
                            srcSet={this.state.currentPhoto}
                        />

                    </div>
                </div>
                <div id="FeaturedImageZoom-product-template-7105051885657-wrapper" className="product-single__photo-wrapper js">
                    <div
                        id="FeaturedImageZoom-product-template-7105051885657"
                        style={{
                            paddingTop: "100%",
                            position: "relative",
                            overflow: "hidden"
                        }}
                        className="product-single__photo js-zoom-enabled product-single__photo--has-thumbnails hidden" data-image-id="7105051885657" data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/NDP9171_1_7f161acb-95b5-4e52-a5eb-089b6b25b11f_1024x1024@2x.jpg?v=1559235266"
                    >

                    </div>
                </div>
                <div id="FeaturedImageZoom-product-template-6963532857433-wrapper" className="product-single__photo-wrapper js">
                    <div id="FeaturedImageZoom-product-template-6963532857433"
                        style={{
                            paddingTop: "100%",
                            position: "relative",
                            overflow: "hidden"
                        }}
                        className="product-single__photo js-zoom-enabled product-single__photo--has-thumbnails hidden"
                        data-image-id="6963532857433" data-zoom="//cdn.shopify.com/s/files/1/1663/1821/products/PH.L.3_1024x1024@2x.jpg?v=1559235266">

                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {this.state.photos ? display : null}
            </div>
        );
    }
}

export default ProductGallery;