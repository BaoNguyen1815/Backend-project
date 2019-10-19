import React from 'react'
import "../style/home.css"

export default function HomepageContent() {
    return (
        <div className="container-fluid text-center text-md-left">
            <div className="our-story" >
                <div className="container">
                    <div className="grid grid--stackable our-story-grid">
                        <div className="grid__column four-twelfths">
                            <div className="section-header text--left">
                                <h3>Our Story</h3>
                            </div>
                            <div className="our-story__content">
                                <p>Cuối năm 2016, 3 chàng trai đam mê Startup và Đồng hồ quyết định thành lập Curnon, nhưng ngay từ đầu, chúng tôi đã biết rằng: Curnon sinh ra với một sứ mệnh lớn lao hơn, không chỉ dừng lại là một thương hiệu đồng hồ. Chúng tôi muốn mang tới một nguồn cảm hứng, một sự thay đổi về tư duy, về suy nghĩ và chính những cái chúng tôi gọi là trải nghiệm cho người trẻ.</p>
                                <p><strong>Curnon</strong> tin rằng mọi chặng đường, dù ngắn hay dài thì mỗi người đều phải bắt đầu bước đi từ những bước nhỏ nhất. Chính với lối tư duy như vậy, Curnon muốn góp một phần nhỏ trong quá trình thúc đẩy những người trẻ Việt trên con đường tìm đến giấc mơ của bản thân, để tạo cú hích cho các bạn đang từ “người nhìn mọi việc xảy ra” trở thành “người khiến mọi việc xảy ra”.</p>
                            </div>
                        </div>
                        <div className="grid__column four-twelfths">
                            <div className="our-story__content our-story__content--second">
                                <p>Không đắn đo, sợ hãi trước bất kỳ khó khăn gì trước mắt, câu hỏi chỉ đơn giản là “Why not? - Tại sao không?“.</p>
                                <p>Và cuối cùng, Curnon muốn gửi gắm tất cả những cảm xúc ấy vào một sản phẩm, một vật nào đó mà bạn có thể luôn mang theo người, luôn được truyền cảm hứng, và đó chính là chiếc đồng hồ. Hi vọng rằng Curnon sẽ phát triển thật mạnh mẽ để có thể chứng minh rằng điều gì thế giới làm được thì những người trẻ Việt Nam chúng ta cũng hoàn toàn có thể.</p>
                            </div>
                        </div>
                        <div className="grid__column four-twelfths">
                            <div className="our-story__img">
                                <img src="https://cdn.shopify.com/s/files/1/1663/1821/files/our-story_632b699a-5116-4bed-8890-92dee13c4b7b_360x@2x.png?v=1555351590" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-product">
                <div className="container">
                    <div className="grid grid--two-columns grid--stackable">
                        <div className="grid__column">
                            <div className="our-product__img">
                                <img src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/our-product_472x@2x.jpg?14133" alt="" />
                            </div>
                        </div>
                        <div className="grid__column">
                            <div className="flex">
                                <div className="our-product__features">
                                    <div className="our-product__item">
                                        <span><img src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/pencil.svg?14133" alt="" /></span>
                                        <h4>NGHIÊN CỨU, PHÁT TRIỂN, KIỂM ĐỊNH NGHIÊM NGẶT</h4>
                                    </div>
                                    <div className="our-product__item">
                                        <span><img src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/gems.svg?14133" alt="" /></span>
                                        <h4>MẶT KÍNH SAPPHIRE</h4>
                                    </div>
                                    <div className="our-product__item">
                                        <span><img src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/watch.svg?14133" alt="" /></span>
                                        <h4>THAY DÂY DỄ DÀNG</h4>
                                    </div>
                                    <div className="our-product__item">
                                        <span><img alt="DESIGNED IN VIETNAM" src="//cdn.shopify.com/s/files/1/1663/1821/t/21/assets/vietnam.svg?14133" /></span>
                                        <h4>DESIGNED IN VIETNAM</h4>
                                    </div>
                                </div>
                                <div className="our-product__content">
                                    <p>Chúng tôi vô cùng tự hào vì mỗi chiếc Đồng hồ <strong>Curnon</strong> đều được thiết kế, hình thành và phát triển bởi chất xám và nỗ lực của đội ngũ những con người Việt Nam, mang theo cảm hứng và sự khát khao của tuổi trẻ.</p>
                                    <p><br />Mọi sản phẩm của <strong>Curnon</strong> đều được đi qua các giai đoạn nghiên cứu, phát triển và kiểm định chất lượng vô cùng cẩn trọng và nghiêm ngặt. Và với mỗi chi tiết cấu thành nên chiếc đồng hồ, chúng tôi luôn đặt sự trải nghiệm của khách hàng lên hàng đầu. Đó là ngôn ngữ thiết kế tối giản, dây đeo dễ dàng thay đổi, mặt kính Sapphire chống xước vượt trội, chất liệu Thép không gỉ cùng bộ máy Miyota Quartz bền bỉ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-community">
                <div className="our-community__gallery">
                    <div className="section-header text--left">
                        <img className="lazyload lazyload--fade-in" src="https://cdn.shopify.com/s/files/1/1663/1821/t/21/assets/whynot.svg?14133" alt="Why not?" />
                        <h2>Our community</h2>
                        <h4>Ai nói bạn không thể lựa chọn gia đình?</h4>
                    </div>

                    <div className="our-community__slides">
                        <div className="our-community__img our-community__img--blur">
                            <img src="https://cdn.shopify.com/s/files/1/1663/1821/t/21/assets/p13_440x420@2x.jpg?14133" className="img-community" alt="" />
                        </div>
                        <div className="our-community__img our-community__img--blur">
                            <img src="https://cdn.shopify.com/s/files/1/1663/1821/t/21/assets/p16_440x420@2x.jpg?14133" className="img-community" alt="" />
                        </div>
                        <div className="our-community__img our-community__img--blur">
                            <img src="https://cdn.shopify.com/s/files/1/1663/1821/t/21/assets/p15_440x420@2x.jpg?14133" className="img-community" alt="" />
                        </div>
                        <div className="our-community__img our-community__img--blur">
                            <img src="https://cdn.shopify.com/s/files/1/1663/1821/t/21/assets/p13_440x420@2x.jpg?14133" className="img-community" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-instagram">
                <div className="container">
                    <div className="section-header">
                        <h2>Shop our Instagram</h2>
                        <h4>#curnonwatch</h4>
                    </div>
                    <div className="showcase-grid">
                        <div className="showcase-grid-items showcase-columns-6 showcase-rows-2">
                            <div className="showcase-grid-item-post-media wrap">
                                <img src="https://showcase-media.s3.us-west-2.amazonaws.com/production-2603178-1895479236078869986_3286087044-images-index-2-type-standard_resolution-640-640.jpg" alt="" />
                                <div className="content-hide">
                                    <h1 className="icon-hide"> aaa </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
