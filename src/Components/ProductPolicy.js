import React, { Component } from 'react';
import '../Assets/ProductGallery.css';

class ProductPolicy extends Component {
    render() {
        return (
            <div className="product-single__section product-single__section--policy">
                <div className="container">
                    <div className="product-single__policies">
                        <div className="grid grid--automatic grid--stackable">
                            <div className="grid__column">
                                <div className="policies__item policies__item--card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36.761" height="36.759">
                                        <g id="credit-card" transform="translate(0 -.011)"><g id="Group_159" data-name="Group 159" transform="translate(0 .011)"><g id="Group_158" data-name="Group 158">
                                            <path id="Path_112" d="M35.785 12.626L24.145.985a3.345 3.345 0 0 0-4.719 0L.974 19.436a3.344 3.344 0 0 0 0 4.719l1.436 1.436 9.647 9.647h-1.335a.766.766 0 0 0 0 1.532h15.316a.766.766 0 1 0 0-1.532h-8.147l17.894-17.893a3.341 3.341 0 0 0 0-4.719zM34.7 16.262L16.251 34.713a1.792 1.792 0 0 1-1.274.526h-.006a1.792 1.792 0 0 1-1.273-.526L4.035 25.05 21.754 7.33a.766.766 0 1 0-1.083-1.083L2.952 23.967l-.894-.894a1.813 1.813 0 0 1 0-2.553l18.45-18.452a1.813 1.813 0 0 1 2.553 0L27.2 6.211 9.485 23.931a.766.766 0 0 0 1.083 1.083l17.72-17.72 6.412 6.415a1.808 1.808 0 0 1 0 2.553z" fill="#fff" data-name="Path 112" transform="translate(0 -.011)">
                                            </path>
                                            <path id="Path_113" d="M167.992 305.165a.766.766 0 0 0-1.083 0l-6.026 6.026a.766.766 0 0 0 1.083 1.083l6.026-6.026a.766.766 0 0 0 0-1.083z" fill="#fff" data-name="Path 113" transform="translate(-149.123 -283.047)"></path>
                                            <path id="Path_114" d="M193.522 384.841l-2.472 2.472a.766.766 0 1 0 1.083 1.083l2.472-2.472a.766.766 0 0 0-1.083-1.083z" fill="#fff" data-name="Path 114" transform="translate(-177.125 -357.002)"></path>
                                            <path id="Path_115" d="M252.954 353.166l-.325.325a.766.766 0 1 0 1.083 1.083l.325-.325a.766.766 0 0 0-1.083-1.083z" fill="#fff" data-name="Path 115" transform="translate(-234.282 -327.602)"></path>
                                            <path id="Path_116" d="M348.167 160.893a.766.766 0 0 0-1.083 0l-3.249 3.249a.766.766 0 0 0 0 1.083l2.165 2.166a.766.766 0 0 0 1.083 0l3.249-3.249a.766.766 0 0 0 0-1.083zm-1.625 4.874l-1.083-1.083 2.166-2.166 1.083 1.083z" fill="#fff" data-name="Path 116" transform="translate(-318.939 -149.134)"></path>
                                            <path id="Path_117" d="M310.439 56.183a.763.763 0 0 0 .542-.224l.325-.325a.766.766 0 0 0-1.083-1.083l-.325.325a.766.766 0 0 0 .542 1.307z" fill="#fff" data-name="Path 117"
                                                transform="translate(-287.439 -50.427)"></path>
                                            <path id="Path_118" d="M100.115 355.157l-.325.325a.766.766 0 0 0 1.083 1.083l.325-.325a.766.766 0 0 0-1.083-1.083z" fill="#fff" data-name="Path 118" transform="translate(-92.418 -329.45)"></path>
                                        </g></g></g>
                                    </svg>
                                    <h4>
                                        <p>THANH TOÁN&nbsp;<strong>DỄ DÀNG</strong>&nbsp;VÀ&nbsp;<br /><strong>BẢO MẬT</strong></p>
                                    </h4>
                                </div>
                            </div>
                            <div className="grid__column">
                                <div className="policies__item policies__item--shipping">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="54.605" height="34.541">
                                        {/* <defs>
                                            <style>.cls-1{{fill:"#fff"}}</style>
                                        </defs> */}
                                        <g id="shipped" transform="translate(0 -94.062)">
                                            <g id="Group_147" data-name="Group 147" transform="translate(0 94.062)">
                                                <g id="Group_146" data-name="Group 146">
                                                    <path id="Path_102" d="M50.782 108.705l-1.414-5.656a.855.855 0 0 0 .677-.836v-.913a3.6 3.6 0 0 0-3.591-3.591h-6.441v-1.88a1.769 1.769 0 0 0-1.767-1.767H5.415a1.769 1.769 0 0 0-1.767 1.767v15.5a.855.855 0 1 0 1.71 0v-15.5a.057.057 0 0 1 .057-.057h32.831a.057.057 0 0 1 .057.057v15.5a.855.855 0 1 0 1.71 0v-.969H50.1a2.8 2.8 0 0 1 2.66 1.94H50.1a.855.855 0 0 0-.855.855v1.824a2.682 2.682 0 0 0 2.679 2.679h.969v3.762h-2.234a5.413 5.413 0 0 0-10.235 0h-.412v-6.441a.855.855 0 0 0-1.71 0v6.441H20.564a5.413 5.413 0 0 0-10.235 0H5.415a.057.057 0 0 1-.057-.057v-1.881h3.7a.855.855 0 1 0 0-1.71H.855a.855.855 0 1 0 0 1.71h2.793v1.881a1.769 1.769 0 0 0 1.767 1.767h4.618v.057a5.415 5.415 0 0 0 10.83 0v-.057h19.265v.057a5.415 5.415 0 1 0 10.83 0v-.057h2.792a.855.855 0 0 0 .855-.855v-9.12a4.51 4.51 0 0 0-3.823-4.45zM40.013 99.42h6.441a1.883 1.883 0 0 1 1.881 1.881v.057h-8.322zm0 9.234v-5.586h7.6l1.4 5.586zm-24.567 18.24a3.7 3.7 0 1 1 3.7-3.7 3.709 3.709 0 0 1-3.699 3.699zm30.1 0a3.7 3.7 0 1 1 3.7-3.7 3.709 3.709 0 0 1-3.704 3.699zm7.353-10.944h-.969a.97.97 0 0 1-.969-.969v-.969h1.938v1.938z" className="cls-1" data-name="Path 102" transform="translate(0 -94.062)">
                                                    </path>
                                                </g>
                                            </g>
                                            <g id="Group_149" data-name="Group 149" transform="translate(13.68 121.421)">
                                                <g id="Group_148" data-name="Group 148">
                                                    <path id="Path_103" d="M130.034 350.6a1.767 1.767 0 1 0 1.767 1.767 1.769 1.769 0 0 0-1.767-1.767z" className="cls-1" data-name="Path 103" transform="translate(-128.267 -350.597)">
                                                    </path>
                                                </g>
                                            </g>
                                            <g id="Group_151" data-name="Group 151" transform="translate(43.775 121.421)">
                                                <g id="Group_150" data-name="Group 150">
                                                    <path id="Path_104" d="M412.222 350.6a1.767 1.767 0 1 0 1.767 1.767 1.769 1.769 0 0 0-1.767-1.767z" className="cls-1" data-name="Path 104" transform="translate(-410.455 -350.597)">
                                                    </path>
                                                </g>
                                            </g>
                                            <g id="Group_153" data-name="Group 153" transform="translate(21.887 117.774)">
                                                <g id="Group_152" data-name="Group 152">
                                                    <path id="Path_105" d="M218.85 316.393h-12.768a.855.855 0 0 0 0 1.71h12.768a.855.855 0 1 0 0-1.71z" className="cls-1" data-name="Path 105" transform="translate(-205.227 -316.393)">
                                                    </path>
                                                </g>
                                            </g>
                                            <g id="Group_155" data-name="Group 155" transform="translate(1.824 114.126)">
                                                <g id="Group_154" data-name="Group 154">
                                                    <path id="Path_106" d="M28.9 282.188H17.957a.855.855 0 1 0 0 1.71H28.9a.855.855 0 1 0 0-1.71z" className="cls-1" data-name="Path 106" transform="translate(-17.102 -282.188)">
                                                    </path>
                                                </g>
                                            </g>
                                            <g id="Group_157" data-name="Group 157" transform="translate(15.504 102.27)">
                                                <g id="Group_156" data-name="Group 156">
                                                    <path id="Path_107" d="M159.6 171.273a.855.855 0 0 0-1.209 0l-7.6 7.6-3.955-3.955a.855.855 0 0 0-1.209 1.209l4.56 4.56a.855.855 0 0 0 1.209 0l8.208-8.208a.855.855 0 0 0-.004-1.206z" className="cls-1" data-name="Path 107" transform="translate(-145.37 -171.023)">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <h4><p>MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG&nbsp;<strong>TỪ 700,000Đ</strong></p></h4>
                                </div>
                            </div>
                            <div className="grid__column">
                                <div className="policies__item policies__item--shield">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.794" height="34.857"><g id="shield" transform="translate(-3.476 -3.137)"><path id="Path_108" d="M42.153 197.826a.826.826 0 1 1-.826-.826.826.826 0 0 1 .826.826zm0 0" fill="#fff" data-name="Path 108" transform="translate(-37.024 -181.067)"></path><path id="Path_110" d="M52.439 76.887a.826.826 0 0 0 .917 0l5.681-3.787a14.021 14.021 0 0 0 6.257-11.69V46.875a.826.826 0 0 0-.564-.784l-11.57-3.879a.827.827 0 0 0-.526 0l-11.571 3.88a.826.826 0 0 0-.564.784v5.611a.826.826 0 0 0 1.653 0V47.47l10.744-3.6 10.744 3.6v13.94a12.371 12.371 0 0 1-5.521 10.314L52.9 75.206l-5.224-3.483a12.369 12.369 0 0 1-5.521-10.314V59.1a.826.826 0 0 0-1.653 0v2.312A14.02 14.02 0 0 0 46.757 73.1zm0 0" fill="#fff" data-name="Path 110" transform="translate(-37.024 -39.032)"></path><path id="Path_111" d="M104.527 207.839a2.479 2.479 0 0 0 3.506 0l6.612-6.612a2.479 2.479 0 0 0-3.506-3.506l-4.859 4.859-1.553-1.553a2.479 2.479 0 0 0-3.506 3.506zm-2.137-5.639a.826.826 0 0 1 1.168 0l2.137 2.137a.827.827 0 0 0 1.169 0l5.443-5.443a.826.826 0 1 1 1.168 1.168l-6.612 6.612a.825.825 0 0 1-1.168 0l-3.306-3.306a.825.825 0 0 1 .001-1.168zm0 0" fill="#fff" data-name="Path 111" transform="translate(-92.06 -181.062)"></path></g></svg>
                                    <h4><p>BẢO HÀNH&nbsp;<strong>10 NĂM</strong>&nbsp;<br/>LỖI NHÀ SẢN XUẤT</p></h4>
                                </div>
                            </div>
                            <div className="grid__column">
                                <div className="policies__item policies__item--quality">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28.961" height="34.873"><g id="quality" transform="translate(-39.838)"><path id="Path_143" d="M68.757 31.042L64.14 19.9a.556.556 0 0 0-1.028.426L67.285 30.4l-3.807-1.1a.556.556 0 0 0-.642.266l-1.912 3.472-4.478-10.816A11.221 11.221 0 1 0 45.324 17.9L39.88 31.042a.557.557 0 0 0 .669.747l4.491-1.3 2.256 4.1a.557.557 0 0 0 .487.288h.031a.557.557 0 0 0 .483-.343l4.314-10.414a.556.556 0 0 0-1.028-.426l-3.87 9.344-1.913-3.476a.557.557 0 0 0-.642-.266l-3.807 1.1 4.779-11.533a11.183 11.183 0 0 0 8.189 3.562c.333 0 .663-.016.989-.044l5.032 12.148a.556.556 0 0 0 .483.343h.031a.556.556 0 0 0 .487-.288l2.256-4.1 4.491 1.3a.556.556 0 0 0 .669-.747zM44.219 11.213a10.1 10.1 0 1 1 10.1 10.1 10.111 10.111 0 0 1-10.1-10.1z" className="cls-1" data-name="Path 143"></path><path id="Path_144" d="M160.86 64.672a.557.557 0 0 0-.437-.377l-3.745-.628-1.754-3.367a.556.556 0 0 0-.987 0l-1.755 3.367-3.744.628a.556.556 0 0 0-.305.939l2.66 2.709-.559 3.755a.556.556 0 0 0 .8.58l3.4-1.693 3.4 1.693a.556.556 0 0 0 .8-.58l-.559-3.755 2.66-2.709a.557.557 0 0 0 .125-.562zm-3.78 2.689a.556.556 0 0 0-.153.472l.443 2.973-2.691-1.34a.556.556 0 0 0-.5 0l-2.691 1.34.443-2.973a.556.556 0 0 0-.153-.472l-2.106-2.145 2.965-.5a.556.556 0 0 0 .4-.292l1.389-2.666 1.389 2.666a.556.556 0 0 0 .4.292l2.965.5z" className="cls-1" data-name="Path 144" transform="translate(-100.112 -55.548)"></path><path id="Path_145" d="M131.3 39.548a.556.556 0 0 0-.625.479 7.874 7.874 0 1 1 0-2.08.556.556 0 1 0 1.1-.146 8.986 8.986 0 1 0 0 2.372.556.556 0 0 0-.479-.625z" data-name="Path 145" transform="translate(-68.549 -27.774)"></path></g></svg>
                                    <h4><p>CAM KẾT&nbsp;<br/><strong>100% HÀNG CHÍNH HÃNG</strong></p></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }        
}
            
export default ProductPolicy;