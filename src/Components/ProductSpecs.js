import React, { Component } from 'react';
import '../Assets/ProductGallery.css';

class ProductSpecs extends Component {
    
    
    render() {
        const details = this.props.details
        console.log("DETAILS: ", details);
        // if (!this.props.details) {
        //     return
        // }
        return (
            <div className="product-single__section">
                <div className="container">
                    <div className="product-single__specs">
                        <div className="grid grid--stackable">
                            <div className="grid__column seven-twelfths">
                                <div className="product-single__specs-img text--center">
                                    <img 
                                        className="lazyload--fade-in lazyloaded" 
                                        data-src={this.props.image}
                                        alt="HERBERT" width="550" 
                                        src={this.props.image}
                                    />
                                </div>
                            </div>
                            <div className="grid__column five-twelfths">
                                <h2>Thông số kỹ thuật</h2>
                                <p></p><p>&nbsp;</p><p></p>
                                <table width="347" height="50">
                                    <tbody>
                                        <tr>
                                            <td>ĐƯỜNG KÍNH</td>
                                            <td>
                                                <div></div>
                                                <span>{details.duongKinh}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                                <span>ĐỘ DÀY</span>
                                            </td>
                                            <td>
                                                <div></div>
                                                <span>{details.doDay}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                                <span>CHẤT LIỆU VỎ</span>
                                            </td>
                                            <td>
                                                <div></div>
                                                <span>{details.chatLieuVo}</span><span></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                                <span>KÍCH CỠ DÂY</span>
                                            </td>
                                            <td>{details.kichCoDay}<span></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                                <span>CHẤT LIỆU DÂY</span>
                                            </td>
                                            <td>
                                                <div></div>
                                                <span>{details.chatLieuDay}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div></div>
                                                <span>LOẠI MÁY</span>
                                            </td>
                                            <td>{details.loaiMay}<span></span></td>
                                        </tr>
                                        <tr>
                                                <td><span>MẶT KÍNH</span></td>
                                                <td>
                                                    <div></div>
                                                    <span>{details.matKinh}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div></div>
                                                    <span>CHỐNG NƯỚC</span>
                                                </td>
                                                <td>{details.chongNuoc}<span></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        
export default ProductSpecs;