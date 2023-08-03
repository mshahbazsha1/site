import React from 'react'
import demos1 from '../images/demos/demo-4/bg-1.jpg'
import slider1 from '../images/demos/demo-4/slider/slide-1.png'
import deal2 from "../images/demos/demo-4/deal/bg-2.jpg"
import deal1 from "../images/demos/demo-4/deal/bg-1.jpg"

function Home() {
  return (
    <div>
       <main className="main">
            <div className="intro-slider-container mb-5">
                <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" 
                    data-owl-options='{
                        "dots": true,
                        "nav": false, 
                        "responsive": {
                            "1200": {
                                "nav": true,
                                "dots": false
                            }
                        }
                    }'>
                    <div className="intro-slide" style={{ backgroundImage: `url(${slider1})` }}>
                        <div className="container intro-content">
                            <div className="row justify-content-end">
                                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                                    <h3 className="intro-subtitle text-third">Deals and Promotions</h3>
                                    <h1 className="intro-title">Beats by</h1>
                                    <h1 className="intro-title">Dre Studio 3</h1>

                                    <div className="intro-price">
                                        <sup className="intro-old-price">$349,95</sup>
                                        <span className="text-third">
                                            $279<sup>.99</sup>
                                        </span>
                                    </div>

                                    <a href="category.html" className="btn btn-primary btn-round">
                                        <span>Shop More</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="intro-slide" style="background-image: url(assets/images/demos/demo-4/slider/slide-2.png);">
                        <div className="container intro-content">
                            <div className="row justify-content-end">
                                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                                    <h3 className="intro-subtitle text-primary">New Arrival</h3>
                                    <h1 className="intro-title">Apple iPad Pro <br/>12.9 Inch, 64GB </h1>

                                    <div className="intro-price">
                                        <sup>Today:</sup>
                                        <span className="text-primary">
                                            $999<sup>.99</sup>
                                        </span>
                                    </div>

                                    <a href="category.html" className="btn btn-primary btn-round">
                                        <span>Shop More</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                <span className="slider-loader"></span>
            </div>

            <div className="container">
                <h2 className="title text-center mb-4">Explore Popular Categories</h2>
                
                <div className="cat-blocks-container">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" className="cat-block">
                                <figure>
                                    <span>
                                        <img src="assets/images/demos/demo-4/cats/1.png" alt="Category image"/>
                                    </span>
                                </figure>

                                <h3 className="cat-block-title">Computer & Laptop</h3>
                            </a>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" className="cat-block">
                                <figure>
                                    <span>
                                        <img src="assets/images/demos/demo-4/cats/2.png" alt="Category image"/>
                                    </span>
                                </figure>

                                <h3 className="cat-block-title">Digital Cameras</h3>
                            </a>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" className="cat-block">
                                <figure>
                                    <span>
                                        <img src="assets/images/demos/demo-4/cats/3.png" alt="Category image"/>
                                    </span>
                                </figure>

                                <h3 className="cat-block-title">Smart Phones</h3>
                            </a>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" className="cat-block">
                                <figure>
                                    <span>
                                        <img src="assets/images/demos/demo-4/cats/4.png" alt="Category image"/>
                                    </span>
                                </figure>

                                <h3 className="cat-block-title">Televisions</h3>
                            </a>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" className="cat-block">
                                <figure>
                                    <span>
                                        <img src="assets/images/demos/demo-4/cats/5.png" alt="Category image"/>
                                    </span>
                                </figure>

                                <h3 className="cat-block-title">Audio</h3>
                            </a>
                        </div>

                        <div className="col-6 col-sm-4 col-lg-2">
                            <a href="category.html" className="cat-block">
                                <figure>
                                    <span>
                                        <img src="assets/images/demos/demo-4/cats/6.png" alt="Category image"/>
                                    </span>
                                </figure>

                                <h3 className="cat-block-title">Smart Watches</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4"></div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="banner banner-overlay banner-overlay-light">
                            <a href="#">
                                <img src="assets/images/demos/demo-4/banners/banner-1.png" alt="Banner"/>
                            </a>

                            <div className="banner-content">
                                <h4 className="banner-subtitle"><a href="#">Smart Offer</a></h4>
                                <h3 className="banner-title"><a href="#">Save $150 <strong>on Samsung <br/>Galaxy Note9</strong></a></h3>
                                <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="banner banner-overlay banner-overlay-light">
                            <a href="#">
                                <img src="assets/images/demos/demo-4/banners/banner-2.jpg" alt="Banner"/>
                            </a>

                            <div className="banner-content">
                                <h4 className="banner-subtitle"><a href="#">Time Deals</a></h4>
                                <h3 className="banner-title"><a href="#"><strong>Bose SoundSport</strong> <br/>Time Deal -30%</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="banner banner-overlay banner-overlay-light">
                            <a href="#">
                                <img src="assets/images/demos/demo-4/banners/banner-3.png" alt="Banner"/>
                            </a>

                            <div className="banner-content">
                                <h4 className="banner-subtitle"><a href="#">Clearance</a></h4>
                                <h3 className="banner-title"><a href="#"><strong>GoPro - Fusion 360</strong> <br/>Save $70</a></h3>
                                <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-3"></div>

            <div className="container new-arrivals">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">New Arrivals</h2>
                    </div>

                   <div className="heading-right">
                        <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="new-all-link" data-toggle="tab" href="#new-all-tab" role="tab" aria-controls="new-all-tab" aria-selected="true">All</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-tv-link" data-toggle="tab" href="#new-tv-tab" role="tab" aria-controls="new-tv-tab" aria-selected="false">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-computers-link" data-toggle="tab" href="#new-computers-tab" role="tab" aria-controls="new-computers-tab" aria-selected="false">Computers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-phones-link" data-toggle="tab" href="#new-phones-tab" role="tab" aria-controls="new-phones-tab" aria-selected="false">Tablets & Cell Phones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-watches-link" data-toggle="tab" href="#new-watches-tab" role="tab" aria-controls="new-watches-tab" aria-selected="false">Smartwatches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="new-acc-link" data-toggle="tab" href="#new-acc-tab" role="tab" aria-controls="new-acc-tab" aria-selected="false">Accessories</a>
                            </li>
                        </ul>
                   </div>
                </div>

                <div className="tab-content tab-content-carousel just-action-icons-sm">
                    <div className="tab-pane p-0 fade show active" id="new-all-tab" role="tabpanel" aria-labelledby="new-all-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                                    <div className="product-price">
                                        $1,199.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>
                                    <div className="product-price">
                                        $79.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Tablets</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>
                                    <div className="product-price">
                                        $899.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Cell Phone</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">TV & Home Theater</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Samsung - 55" className  LED 2160p Smart</a></h3>
                                    <div className="product-price">
                                        $899.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                                    <div className="product-price">
                                        $1,199.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="new-tv-tab" role="tabpanel" aria-labelledby="new-tv-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Tablets</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>
                                    <div className="product-price">
                                        $899.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>
                                    <div className="product-price">
                                        $79.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Cell Phone</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">TV & Home Theater</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Samsung - 55" className  LED 2160p Smart</a></h3>
                                    <div className="product-price">
                                        $899.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                                    <div className="product-price">
                                        $1,199.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane p-0 fade" id="new-computers-tab" role="tabpanel" aria-labelledby="new-computers-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">TV & Home Theater</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Samsung - 55" className  LED 2160p Smart</a></h3>
                                    <div className="product-price">
                                        $899.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>
                                    <div className="product-price">
                                        $1,199.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Tablets</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>
                                    <div className="product-price">
                                        $899.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>
                                    <div className="product-price">
                                        $79.99
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>
                                        </div>
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Cell Phone</a>
                                    </div>
                                    <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>  -title 
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div> 
                                </div> 
                            </div>
                        </div> 
                    </div> 
                    <div className="tab-pane p-0 fade" id="new-phones-tab" role="tabpanel" aria-labelledby="new-phones-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>  -title 
                                    <div className="product-price">
                                        $1,199.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>  -title 
                                    <div className="product-price">
                                        $79.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Tablets</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>  -title 
                                    <div className="product-price">
                                        $899.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">TV & Home Theater</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Samsung - 55" className  LED 2160p Smart</a></h3>  -title 
                                    <div className="product-price">
                                        $899.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>  -title 
                                    <div className="product-price">
                                        $1,199.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Cell Phone</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>  -title 
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    <div className="tab-pane p-0 fade" id="new-watches-tab" role="tabpanel" aria-labelledby="new-watches-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Cell Phone</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>  -title 
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>  -title 
                                    <div className="product-price">
                                        $1,199.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>  -title 
                                    <div className="product-price">
                                        $79.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Tablets</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>  -title 
                                    <div className="product-price">
                                        $899.99
                                    </div> 
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%;"}}></div>   
                                        </div>
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div> 

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div> 
                                </div>  
                            </div>  
                        </div> 
                    </div> 
                    <div className="tab-pane p-0 fade" id="new-acc-tab" role="tabpanel" aria-labelledby="new-acc-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>  -title 
                                    <div className="product-price">
                                        $1,199.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">TV & Home Theater</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Samsung - 55" className  LED 2160p Smart</a></h3>  -title 
                                    <div className="product-price">
                                        $899.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>  -title 
                                    <div className="product-price">
                                        $1,199.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "100%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>  -title 
                                    <div className="product-price">
                                        $79.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Tablets</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>  -title 
                                    <div className="product-price">
                                        $899.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "80%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   
                        </div> 
                    </div>   
                </div>   
            </div>  

            <div className="mb-6"></div>  

            <div className="container">
                <div className="cta cta-border mb-5" style={{ backgroundImage: `url(${demos1})` }}>
                    <img src="assets/images/demos/demo-4/camera.png" alt="camera" className="cta-img"/>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="cta-content">
                                <div className="cta-text text-right text-white">
                                    <p>Shop Today’s Deals <br/><strong>Awesome Made Easy. HERO7 Black</strong></p>
                                </div>  
                                <a href="#" className="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i className="icon-long-arrow-right"></i></a>
                            </div>  
                        </div> 
                    </div>   
                </div>  
            </div>  

            <div className="container">
                <div className="heading text-center mb-3">
                    <h2 className="title">Deals & Outlet</h2> 
                    <p className="title-desc">Today’s deal and more</p>
                </div>  

                <div className="row">
                    <div className="col-lg-6 deal-col">
                        <div className="deal" style={{ backgroundImage: `url(${deal1})` }}>
                            <div className="deal-top">
                                <h2>Deal of the Day.</h2>
                                <h4>Limited quantities. </h4>
                            </div> 

                            <div className="deal-content">
                                <h3 className="product-title"><a href="product.html">Home Smart Speaker with  Google Assistant</a></h3>  -title 

                                <div className="product-price">
                                    <span className="new-price">$129.00</span>
                                    <span className="old-price">Was $150.99</span>
                                </div>  

                                <a href="product.html" className="btn btn-link"><span>Shop Now</span><i className="icon-long-arrow-right"></i></a>
                            </div>   

                            <div className="deal-bottom">
                                <div className="deal-countdown daily-deal-countdown" data-until="+10h"></div>
                            </div>  
                        </div>  
                    </div>  

                    <div className="col-lg-6 deal-col">
                        <div className="deal" style={{ backgroundImage: `url(${deal2})` }}>
                            <div className="deal-top">
                                <h2>Your Exclusive Offers.</h2>
                                <h4>Sign in to see amazing deals.</h4>
                            </div> 

                            <div className="deal-content">
                                <h3 className="product-title"><a href="product.html">Certified Wireless Charging  Pad for iPhone / Android</a></h3>  -title 

                                <div className="product-price">
                                    <span className="new-price">$29.99</span>
                                </div>  

                                <a href="login.html" className="btn btn-link"><span>Sign In and Save money</span><i className="icon-long-arrow-right"></i></a>
                            </div>   

                            <div className="deal-bottom">
                                <div className="deal-countdown offer-countdown" data-until="+11d"></div> 
                            </div>  
                        </div>  
                    </div>  
                </div>   

                <div className="more-container text-center mt-1 mb-5">
                    <a href="#" className="btn btn-outline-dark-2 btn-round btn-more"><span>Shop more Outlet deals</span><i className="icon-long-arrow-right"></i></a>
                </div> 
            </div>  

            <div className="container">
                <hr className="mb-0"/>
                <div className="owl-carousel mt-5 mb-5 owl-simple" data-toggle="owl" 
                    data-owl-options='{
                        "nav": false, 
                        "dots": false,
                        "margin": 30,
                        "loop": false,
                        "responsive": {
                            "0": {
                                "items":2
                            },
                            "420": {
                                "items":3
                            },
                            "600": {
                                "items":4
                            },
                            "900": {
                                "items":5
                            },
                            "1024": {
                                "items":6
                            }
                        }
                    }'>
                    <a href="#" className="brand">
                        <img src="assets/images/brands/1.png" alt="Brand Name"/>
                    </a>

                    <a href="#" className="brand">
                        <img src="assets/images/brands/2.png" alt="Brand Name"/>
                    </a>

                    <a href="#" className="brand">
                        <img src="assets/images/brands/3.png" alt="Brand Name"/>
                    </a>

                    <a href="#" className="brand">
                        <img src="assets/images/brands/4.png" alt="Brand Name"/>
                    </a>

                    <a href="#" className="brand">
                        <img src="assets/images/brands/5.png" alt="Brand Name"/>
                    </a>

                    <a href="#" className="brand">
                        <img src="assets/images/brands/6.png" alt="Brand Name"/>
                    </a>
                </div> 
            </div>  

            <div className="bg-light pt-5 pb-6">
                <div className="container trending-products">
                    <div className="heading heading-flex mb-3">
                        <div className="heading-left">
                            <h2 className="title">Trending Products</h2> 
                        </div>  

                       <div className="heading-right">
                            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="trending-top-link" data-toggle="tab" href="#trending-top-tab" role="tab" aria-controls="trending-top-tab" aria-selected="true">Top Rated</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="trending-best-link" data-toggle="tab" href="#trending-best-tab" role="tab" aria-controls="trending-best-tab" aria-selected="false">Best Selling</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="trending-sale-link" data-toggle="tab" href="#trending-sale-tab" role="tab" aria-controls="trending-sale-tab" aria-selected="false">On Sale</a>
                                </li>
                            </ul>
                       </div>
                    </div>  

                    <div className="row">
                        <div className="col-xl-5col d-none d-xl-block">
                            <div className="banner">
                                <a href="#">
                                    <img src="assets/images/demos/demo-4/banners/banner-4.jpg" alt="banner"/>
                                </a>
                            </div>  
                        </div>   

                        <div className="col-xl-4-5col">
                            <div className="tab-content tab-content-carousel just-action-icons-sm">
                                <div className="tab-pane p-0 fade show active" id="trending-top-tab" role="tabpanel" aria-labelledby="trending-top-link">
                                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                        data-owl-options='{
                                            "nav": true, 
                                            "dots": false,
                                            "margin": 20,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":2
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                }
                                            }
                                        }'>
                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-top">Top</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-6.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Headphones</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>  -title 
                                                <div className="product-price">
                                                    $199.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "100%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#69b4ff;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#ff887f;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-7.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Video Games</a>
                                                </div>   
                                                <h3 className="product-title"><a href="product.html">Microsoft - Refurbish Xbox One S 500GB</a></h3>  -title 
                                                <div className="product-price">
                                                    $279.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "60%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-8.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>  
                                            </figure>   

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Smartwatches</a>
                                                </div>  
                                                <h3 className="product-title"><a href="product.html">Apple Watch Series 4 Gold Aluminum Case</a></h3>  -title 
                                                <div className="product-price">
                                                    $499.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-top">Top</span>
                                                <span className="product-label label-circle label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-9.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">TV & Home Theater</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Sony - className LED 2160p Smart 4K Ultra HD</a></h3>  -title 
                                                <div className="product-price">
                                                    <span className="new-price">$1,699.99</span>
                                                    <span className="old-price">Was $1,999.99</span>
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 10 Reviews )</span>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Tablets</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>  -title 
                                                <div className="product-price">
                                                    $899.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   
                                    </div> 
                                </div>   
                                <div className="tab-pane p-0 fade" id="trending-best-tab" role="tabpanel" aria-labelledby="trending-best-link">
                                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                        data-owl-options='{
                                            "nav": true, 
                                            "dots": false,
                                            "margin": 20,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":2
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                }
                                            }
                                        }'>
                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Tablets</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>  -title 
                                                <div className="product-price">
                                                    $899.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-2.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Audio</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>  -title 
                                                <div className="product-price">
                                                    $79.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "60%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-top">Top</span>
                                                <span className="product-label label-circle label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-4.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Cell Phone</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL  128GB</a></h3>  -title 
                                                <div className="product-price">
                                                    <span className="new-price">$35.41</span>
                                                    <span className="old-price">Was $41.67</span>
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "100%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 10 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" className="active" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-top">Top</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-5.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">TV & Home Theater</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Samsung - 55" className  LED 2160p Smart</a></h3>  -title 
                                                <div className="product-price">
                                                    $899.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "60%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 5 Reviews )</span>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-top">Top</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-1.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Laptops</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>  -title 
                                                <div className="product-price">
                                                    $1,199.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "100%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  
                                            </div>  
                                        </div>   
                                    </div>
                                </div> 
                                <div className="tab-pane p-0 fade" id="trending-sale-tab" role="tabpanel" aria-labelledby="trending-sale-link">
                                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                        data-owl-options='{
                                            "nav": true, 
                                            "dots": false,
                                            "margin": 20,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":2
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                }
                                            }
                                        }'>
                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-8.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Smartwatches</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Apple Watch Series 4 Gold Aluminum Case</a></h3>  -title 
                                                <div className="product-price">
                                                    $499.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-top">Top</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-6.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Headphones</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>  -title 
                                                <div className="product-price">
                                                    $199.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "100%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#69b4ff;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#ff887f;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-7.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Video Games</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Microsoft - Refurbish Xbox One S 500GB</a></h3>  -title 
                                                <div className="product-price">
                                                    $279.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "60%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 6 Reviews )</span>
                                                </div>  
                                            </div>  
                                        </div>   

                                        <div className="product product-2">
                                            <figure className="product-media">
                                                <span className="product-label label-circle label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-4/products/product-3.jpg" alt="Product image" className="product-image"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                                </div>   

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                    <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                </div>   
                                            </figure>  -media 

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Tablets</a>
                                                </div>  -cat 
                                                <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>  -title 
                                                <div className="product-price">
                                                    $899.99
                                                </div>  
                                                <div className="ratings-container">
                                                    <div className="ratings">
                                                        <div className="ratings-val" style={{width: "80%;"}}></div>   
                                                    </div>  
                                                    <span className="ratings-text">( 4 Reviews )</span>
                                                </div>  

                                                <div className="product-nav product-nav-dots">
                                                    <a href="#" style={{background: "#edd2c8;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                                    <a href="#" className="active" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>  
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 

            <div className="mb-5"></div> 

            <div className="container for-you">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Recommendation For You</h2> 
                    </div>  

                   <div className="heading-right">
                        <a href="#" className="title-link">View All Recommendadion <i className="icon-long-arrow-right"></i></a>
                   </div> 
                </div>  

                <div className="products">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-10.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Headphones</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Beats by Dr. Dre Wireless  Headphones</a></h3>  -title 
                                    <div className="product-price">
                                        <span className="new-price">$279.99</span>
                                        <span className="old-price">Was $349.99</span>
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "40%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#666666;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#ff887f;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#6699cc;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#f3dbc1;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   
                        </div> 

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-11.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Cameras & Camcorders</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>  -title 
                                    <div className="product-price">
                                        $349.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   
                        </div> 

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-12.jpg" alt="Product image" className="product-image"/>
                                        <img src="assets/images/demos/demo-4/products/product-12-2.jpg" alt="Product image" className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Smartwatches</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Apple - Apple Watch Series 3 with White Sport Band</a></h3>  -title 
                                    <div className="product-price">
                                        $214.49
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "0%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 0 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#e2e2e2;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#f2bc9e;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   
                        </div>  

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-13.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Lenovo - 330-15IKBR 15.6"</a></h3>  -title 
                                    <div className="product-price">
                                        <span className="out-price">$339.99</span>
                                        <span className="out-text">Out Of Stock</span>
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 11 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   
                        </div> 

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-14.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Digital Cameras</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Sony - Alpha a5100 Mirrorless Camera</a></h3>  -title 
                                    <div className="product-price">
                                        $499.99
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "50%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 11 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   
                        </div>  

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-15.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Laptops</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Home Mini - Smart Speaker  with Google Assistant</a></h3>  -title 
                                    <div className="product-price">
                                        $49.00
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 24 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#ef837b;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#e2e2e2;"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   
                        </div>  

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-16.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Audio</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">WONDERBOOM Portable Bluetooth Speaker</a></h3>  -title 
                                    <div className="product-price">
                                        <span className="new-price">$99.99</span>
                                        <span className="old-price">Was $129.99</span>
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "40%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>  

                                    <div className="product-nav product-nav-dots">
                                        <a href="#" className="active" style={{background: "#666666;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#ff887f;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#6699cc;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#f3dbc1;"}}><span className="sr-only">Color name</span></a>
                                        <a href="#" style={{background: "#eaeaec}};"}}><span className="sr-only">Color name</span></a>
                                    </div>  
                                </div>  
                            </div>   
                        </div>  

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-4/products/product-17.jpg" alt="Product image" className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
                                    </div>   

                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>   
                                </figure>  -media 

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Smart Home</a>
                                    </div>  -cat 
                                    <h3 className="product-title"><a href="product.html">Google - Home Hub with  Google Assistant</a></h3>  -title 
                                    <div className="product-price">
                                        $149.00
                                    </div>  
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: "60%;"}}></div>   
                                        </div>  
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>  
                                </div>  
                            </div>   
                        </div>  
                    </div>   
                </div>  s 
            </div>  

            <div className="mb-4"></div>  

            <div className="container">
                <hr className="mb-0"/>
            </div>  

            <div className="icon-boxes-container bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-rocket"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Shipping</h3> 
                                    <p>Orders $50 or more</p>
                                </div> 
                            </div>  
                        </div> 

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-rotate-left"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Free Returns</h3>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-info-circle"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3> 
                                    <p>when you sign up</p>
                                </div> 
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon text-dark">
                                    <i className="icon-life-ring"></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">We Support</h3>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Home