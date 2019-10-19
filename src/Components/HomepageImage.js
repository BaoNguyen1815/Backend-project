import React, { Component } from 'react'

export default class HomepageImage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src='//cdn.shopify.com/s/files/1/1663/1821/files/Feature_Mykonos.jpg?v=1569322418'></img>
                    </div>
                    <div className="col-6">
                        <img src='//cdn.shopify.com/s/files/1/1663/1821/files/Feature_Santorini.jpg?v=1569322443'></img>
                    </div>
                </div>
            </div>
        )
    }
}
