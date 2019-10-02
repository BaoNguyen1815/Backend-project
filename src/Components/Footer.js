import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Địa chỉ của cửa hàng</h5>
                    <p>Nơi đâu cũng là cửa hàng của chúng tôi
                    </p>
                </div>
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Mua Hàng</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="#!">Đồng Hồ Nam</a>
                        </li>
                        <li>
                            <a href="#!">Đồng Hồ Nữ</a>
                        </li>
                        <li>
                            <a href="#!">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div >

            <hr/>

            <div className="footer-copyright text-center py-3">© 2019 Curnon:
                <a href="https://https://curnonwatch.com/"> Curnon Watch</a>
            </div>

        </div >
    )
}
