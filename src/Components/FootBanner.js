import React, { Component } from 'react'
import "../style/banner.css"

export default class FootBanner extends Component {
    render() {
        return (
            <div className="foot-banner">
               <div className="container">
                   <div className="row">
                       <div className="col-3 text-center">
                            <h5 className="abcxyz"> Bảo hành 10 năm</h5> 
                       </div>
                       <div className="col-3 text-center">
                            <h5 className="abcxyz"> Giao hàng tận nơi</h5> 
                       </div>
                       <div className="col-3 text-center">
                            <h5 className="abcxyz"> Miễn phí đổi trả nếu xảy ra hỏng hóc</h5> 
                       </div>
                       <div className="col-3 text-center">
                            <h5 className="abcxyz"> Bao hanh 10 nam</h5> 
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}
