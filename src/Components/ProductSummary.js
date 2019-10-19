import React, { Component } from 'react';
import '../Assets/ProductGallery.css';
import Tabs from './Tabs';

function format(n) {
    return n.toFixed(2).replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
        return '.' + s
    })
}



class ProductSummary extends Component {
    state = {
        productBuy: this.props.product,
        quantityBuy: 1,
    }
    getData = () => {
        alert("Sản phẩm đã được thêm vào giỏ hàng");
        if (localStorage.cartcurnor) {
            let list_item = JSON.parse(localStorage.getItem("cartcurnor"));
            let checkAddItem = false;
            for (let item of list_item) {
                //
                if (item.item._id == this.state.productBuy._id) {
                    this.setState({ quantityBuy: item.quantity + 1 })
                    list_item.splice(list_item.indexOf(item, 1));
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
    }

    render() {
        var Formatter = new Intl.NumberFormat();
        return (
            <div className="grid__column twelve-twelfths">
                <div className="product-single__summary">
                    <h4 className="product-single__series">
                        
                    </h4>
                    <h1 className="product-single__title">{this.props.name}</h1>
                    <span className="spr-badge" id="spr_badge_2078489378905" data-rating="4.48">
                        <span className="spr-starrating spr-badge-starrating">
                            <i className="spr-icon spr-icon-star"></i>
                            <i className="spr-icon spr-icon-star"></i>
                            <i className="spr-icon spr-icon-star"></i>
                            <i className="spr-icon spr-icon-star"></i>
                            <i className="spr-icon spr-icon-star-half-alt"></i>
                        </span>
                        <span className="spr-badge-caption">{this.props.reviews} reviews</span>
                    </span>
                    {/* <form 
                        method="" 
                        action="" 
                        id="AddToCartForm" 
                        acceptCharset="UTF-8" 
                        className="
                            AddToCartForm product-form product-form-product-template 
                            product-form--hide-variant-labels product-form--payment-button-no-variants
                        " 
                        encType="multipart/form-data" 
                        noValidate="noValidate"
                    > */}
                        <input type="hidden" name="form_type" value="product"/>
                        <input type="hidden" name="utf8" value="✓"/>
                        <div className="product__price">
                        

                            <div className="product-price" data-price="">
                                <span 
                                    className="product-price-regular" 
                                    data-regular-price="" data-price={this.props.price}>
                                    {/* {format(this.props.price)} VND */}
                                    {Formatter.format(this.props.price)} VND
                                </span>
                            </div>
                        </div>


                        <div 
                            className="
                                product-form__actions 
                                product-form__actions--payment-button 
                                product-form__item--no-variants"
                        >
                            <button onClick={this.getData} type="button" name="add" id="AddToCart-product-template" className="btn btn-addtocart product-form__cart-submit btn--outline">
                                <span className="text" id="AddToCartText-product-template">
                                Thêm vào giỏ hàng
                                <svg xmlns="http://www.w3.org/2000/svg" width="9.438" height="11.791"><g fill="currentColor"><path d="M7.668 11.641H1.77c-.892 0-1.617-.634-1.62-1.415a.331.331 0 0 0 .002-.024l.675-7.599a.173.173 0 0 1 .174-.16h1.536l.003-.148A2.188 2.188 0 0 1 4.719.15a2.19 2.19 0 0 1 2.18 2.145l.001.148h1.538c.089 0 .165.07.173.16l.675 7.603.001.011v.004c0 .783-.726 1.42-1.62 1.42zM1.16 2.797l-.012.136-.646 7.29-.001.008v.008c.011.58.58 1.051 1.269 1.051h5.898c.688 0 1.257-.472 1.269-1.051v-.016l-.65-7.29-.012-.136H6.898v1.138a.174.174 0 0 1-.175.176.174.174 0 0 1-.176-.176V2.797H2.888v1.138a.174.174 0 0 1-.175.176.174.174 0 0 1-.176-.176V2.797H1.16zM4.719.5c-.987 0-1.807.803-1.828 1.789l-.004.153H6.55l-.003-.153A1.838 1.838 0 0 0 4.72.5z"></path><path d="M7.668 11.491c.805 0 1.461-.562 1.47-1.259l-.001-.013-.676-7.604a.025.025 0 0 0-.024-.022H6.753l-.005-.295A2.038 2.038 0 0 0 4.718.3 2.038 2.038 0 0 0 2.69 2.298l-.005.295H1c-.013 0-.022.01-.024.023l-.674 7.596a.449.449 0 0 1-.002.022c.008.694.664 1.257 1.47 1.257h5.898M1.023 2.647h1.664v1.288c0 .015.01.026.026.026.015 0 .025-.01.025-.026V2.647h3.96v1.288c0 .015.01.026.025.026.015 0 .025-.01.025-.026V2.647h1.665l.024.273.649 7.29.001.015v.017c-.013.66-.65 1.198-1.42 1.198H1.77c-.77 0-1.406-.537-1.419-1.198v-.016l.001-.017.646-7.289.025-.273M4.719.35a1.99 1.99 0 0 1 1.978 1.936l.007.306h-3.97l.007-.306A1.99 1.99 0 0 1 4.719.35m2.949 11.44H1.77c-.977 0-1.77-.704-1.77-1.57l.002-.029.676-7.602a.323.323 0 0 1 .323-.297H2.39A2.331 2.331 0 0 1 4.719 0a2.331 2.331 0 0 1 2.33 2.293h1.388c.166 0 .309.128.323.297l.675 7.602c.003.01.003.02.003.03 0 .865-.794 1.57-1.77 1.57zm-6.37-8.844l-.647 7.289c.01.499.506.904 1.119.904h5.898c.61 0 1.11-.405 1.119-.904l-.649-7.29h-1.09v.99c0 .18-.144.325-.325.325a.324.324 0 0 1-.326-.326v-.988H3.038v.988a.324.324 0 0 1-.325.326.324.324 0 0 1-.326-.326v-.988h-1.09zm5.1-.654A1.68 1.68 0 0 0 4.718.65a1.68 1.68 0 0 0-1.677 1.642h3.356z"></path></g></svg>
                                </span>
                                <span className="loading">
                                <img 
                                    src="" 
                                    alt="Loading" width="20"
                                />
                                </span>
                            </button>
                  

                      </div>
                    {/* </form> */}
                    <div className="notify_form notify-form-2078489378905" 
                    id="notify-form-2078489378905" style={{display:"none"}}>
                        <h3 className="h4">Thông báo cho tôi khi sản phẩm này trở lại</h3>
                        <form action="" className="form-layout" method="POST">
                            <div className="form-field">
                                <input type="text" className="form-input" 
                                autoComplete="off" name="name" placeholder="Tên đầy đủ"
                                />
                            </div>
                            <div className="form-field">
                                <input type="email" className="form-input" autoComplete="email" 
                                    name="email" defaultValue="" placeholder="Địa chỉ Email"/>
                            </div>
                            <div className="form-field">
                                <input type="text" className="form-input" autoComplete="off" 
                                name="phone" placeholder="Số điện thoại"/>
                            </div>
                            <input type="hidden" name="collection-name" value="Men's Best sellers"/>
                            <input type="hidden" name="product-name" value="HERBERT"/>
                            <input type="hidden" name="product-url" 
                            value="https://curnonwatch.com/products/weimar-herbert"/>
                            <div className="form-field">
                                <button className="form-action btn btn--primary">
                                    <span className="text">Gửi</span>
                                    <span className="loading">
                                        <img 
                                        src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/loading-white.svg?14112" alt="Loading" width="20"
                                        />
                                    </span>
                                </button>
                            </div>

                            <div className="form-field notify_form__message" 
                            style={{display: "none"}}>
                                <p>Cảm ơn bạn! Chúng tôi sẽ thông báo cho bạn ngay khi sản phẩm này có hàng trở lại.</p>
                            </div>
                        </form>
                    </div>
                    <div className="my-5">
                        <Tabs >
                            <div label="Tính năng">
                            {/* <p>
                                <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Ngôn ngữ thiết kế Bauhaus tối giản của đồng hồ Weimar cùng dây da chính là biểu tượng cao nhất cho vẻ đẹp cổ điển nhưng không hề rườm rà trên cổ tay của bạn&quot;}" 
                                data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">
                                    Ngôn ngữ thiết kế Bauhaus tối giản của đồng hồ Weimar cùng dây da chính là biểu tượng cao nhất cho vẻ đẹp cổ điển nhưng không hề rườm rà trên cổ tay của bạn
                                </span>
                            </p> */}
                                <p dangerouslySetInnerHTML={{ __html: this.props.desc.split('\n').join('<br />') }} />
                            </div>
                            <div label="Chính sách bảo hành">
                                <p>
                                    Bảo hành <strong>10 năm</strong> với những lỗi từ nhà sản xuất.
                                </p>
                                <p>Thay pin <strong>miễn phí trọn đời</strong>.</p>
                                <p>
                                    <strong>1 đổi 1 </strong>trong vòng 3 ngày với những sản phẩm gặp lỗi từ nhà sản xuất trong trạng thái hoàn toàn nguyên vẹn và chưa có dấu hiệu sử dụng.
                                </p>
                            </div>
                            <div label="Chính sách vận chuyển">
                                <p><strong> Miễn phí vận chuyển</strong> với đơn hàng từ 700,000VND</p>
                                <p>
                                    Thời gian vận chuyển: 3-7 ngày (tùy vào địa điểm nhận hàng)
                                </p>
                            </div>
                        </Tabs>
                    </div>

                    
                

                </div>
                <p className="visually-hidden" data-product-status="" aria-live="polite" 
                role="status">

                </p>

      </div>
        );
    }
}

export default ProductSummary;