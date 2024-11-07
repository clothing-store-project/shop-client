<script setup lang="ts">

</script>

<template>
  <el-header class="site-header mo-left header style-1 header-transparent">

    <!-- Main Header -->
    <div class="sticky-header main-bar-wraper navbar-expand-lg">
      <div class="main-bar clearfix">
        <div class="container-fluid clearfix d-lg-flex d-block">

          <!-- Website Logo -->
          <div class="logo-header logo-dark me-md-5">
            <NuxtLink to="/">
              <img src="~/assets/images/logo.svg" alt="">
            </NuxtLink>
          </div>

          <!-- Nav Toggle Button -->
          <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- Main Nav -->
          <div class="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
            <div class="logo-header logo-dark">
              <NuxtLink to="/">
                <img src="~/assets/images/logo.svg" alt="">
              </NuxtLink>
            </div>
            <ul class="nav navbar-nav">
              <li class="has-mega-menu sub-menu-down auto-width menu-left">
                <NuxtLink href="/">
                  <span>Home</span><i class="fas fa-chevron-down tabindex"></i>
                </NuxtLink>
              </li>
              <li class="has-mega-menu sub-menu-down">
                <a href="javascript:void(0);"><span>Shop</span><i class="fas fa-chevron-down tabindex"></i></a>
                <div class="mega-menu shop-menu">
                  <ul>
                    <li class="side-left">
                      <ul>
                        <li><a href="javascript:void(0);" class="menu-title">Shop Structure</a>
                          <ul>
                            <li><a href="shop-standard.html">Shop Standard</a></li>
                            <li><a href="shop-list.html">Shop List</a></li>
                            <li><a href="shop-with-category.html">Shop With Category</a></li>
                            <li><a href="shop-filters-top-bar.html">Shop Filters Top Bar</a></li>
                            <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                            <li><a href="shop-style-1.html">Shop Style 1</a></li>
                            <li><a href="shop-style-2.html">Shop Style 2</a></li>
                          </ul>
                        </li>
                        <li><a href="javascript:void(0);" class="menu-title">Product Structure</a>
                          <ul>
                            <li><a href="product-default.html">Default</a></li>
                            <li><a href="product-thumbnail.html">Thumbnail</a></li>
                            <li><a href="product-grid-media.html">Grid Media</a></li>
                            <li><a href="product-carousel.html">Carousel</a></li>
                            <li><a href="product-full-width.html">Full Width</a></li>
                          </ul>
                        </li>
                        <li><a href="javascript:void(0);" class="menu-title">Shop Pages</a>
                          <ul>
                            <li><a href="shop-wishlist.html">Wishlist</a></li>
                            <li><a href="shop-cart.html">Cart</a></li>
                            <li><a href="shop-checkout.html">Checkout</a></li>
                            <li><a href="shop-compare.html">Compare</a></li>
                            <li><a href="shop-order-tracking.html">Order Tracking</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="registration.html">Registration</a></li>
                            <li><a href="forget-password.html">Forget Password
                              <div class="badge badge-sm rounded badge-animated">New</div>
                            </a></li>
                          </ul>
                        </li>
                        <li class="month-deal">
                          <div class="clearfix me-3">
                            <h3>Deal of the month</h3>
                            <p class="mb-0">Yes! Send me exclusive offers, personalised, and unique gift ideas, tips for
                              shopping on Pixio <a href="shop-standard.html" class="dz-link-2">View All Products</a></p>
                          </div>
                          <div class="sale-countdown">
                            <div class="countdown text-center">
                              <div class="date">
                                <span class="time days text-primary"></span>
                                <span class="work-time">Days</span>
                              </div>
                              <div class="date">
                                <span class="time hours text-primary"></span>
                                <span class="work-time">Hours</span>
                              </div>
                              <div class="date">
                                <span class="time mins text-primary"></span>
                                <span class="work-time">Minutess</span>
                              </div>
                              <div class="date">
                                <span class="time secs text-primary"></span>
                                <span class="work-time">Second</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="side-right">
                      <div class="adv-media">
                        <img src="~/assets/images/adv-1.png" alt="/"/>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="has-mega-menu sub-menu-down auto-width">
                <a href="javascript:void(0);"><span>Blog</span><i class="fas fa-chevron-down tabindex"></i></a>
                <div class="mega-menu">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Blog Dark Style</a>
                      <ul>
                        <li><a href="blog-dark-2-column.html">Blog 2 Column</a></li>
                        <li><a href="blog-dark-2-column-sidebar.html">Blog 2 Column Sidebar</a></li>
                        <li><a href="blog-dark-3-column.html">Blog 3 Column</a></li>
                        <li><a href="blog-dark-half-image.html">Blog Half Image</a></li>
                      </ul>
                      <a href="javascript:void(0);" class="menu-title">Blog Light Style</a>
                      <ul>
                        <li><a href="blog-light-2-column.html">Blog 2 Column</a></li>
                        <li><a href="blog-light-2-column-sidebar.html">Blog 2 Column Sidebar</a></li>
                        <li><a href="blog-light-half-image.html">Blog Half Image</a></li>
                        <li><a href="blog-exclusive.html">Blog Exclusive</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Blog Sidebar</a>
                      <ul>
                        <li><a href="blog-left-sidebar.html">Blog left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                        <li><a href="blog-both-sidebar.html">Blog Both Sidebar</a></li>
                        <li><a href="blog-wide-sidebar.html">Blog Wide Sidebar</a></li>
                      </ul>
                      <a href="javascript:void(0);" class="menu-title">Blog Page</a>
                      <ul>
                        <li><a href="blog-archive.html">Blog Archive</a></li>
                        <li><a href="blog-author.html">Author</a></li>
                        <li><a href="blog-category.html">Blog Category</a></li>
                        <li><a href="blog-tag.html">Blog Tag</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Blog Details</a>
                      <ul>
                        <li><a href="post-standard.html">Post Standard</a></li>
                        <li><a href="post-left-sidebar.html">Post Left Sidebar</a></li>
                        <li><a href="post-header-image.html">Post Header Image</a></li>
                        <li><a href="post-slide-show.html">Post Slide Show</a></li>
                        <li><a href="post-side-image.html">Post Side Image</a></li>
                        <li><a href="post-gallery.html">Post Gallery</a></li>
                        <li><a href="post-gallery-alternative.html">Post Gallery Alternative</a></li>
                        <li><a href="post-open-gutenberg.html">Post Open Gutenberg</a></li>
                        <li><a href="post-link.html">Post Link</a></li>
                        <li><a href="post-audio.html">Post Audio</a></li>
                        <li><a href="post-video.html">Post Video</a></li>
                      </ul>
                    </li>
                    <li class="post-menu">
                      <a href="javascript:void(0);" class="menu-title">Recent Posts</a>
                      <div class="widget widget_post pt-2">
                        <ul>
                          <li>
                            <div class="dz-media">
                              <img src="~/assets/images/shop/product/small/1.png" alt=""/>
                            </div>
                            <div class="dz-content">
                              <h6 class="name"><a href="post-standard.html">Cozy Knit Cardigan Sweater</a></h6>
                              <span class="time">July 23, 2023</span>
                            </div>
                          </li>
                          <li>
                            <div class="dz-media">
                              <img src="~/assets/images/shop/product/small/2.png" alt=""/>
                            </div>
                            <div class="dz-content">
                              <h6 class="name"><a href="post-standard.html">Sophisticated Swagger Suit</a></h6>
                              <span class="time">July 23, 2023</span>
                            </div>
                          </li>
                          <li>
                            <div class="dz-media">
                              <img src="~/assets/images/shop/product/small/3.png" alt=""/>
                            </div>
                            <div class="dz-content">
                              <h6 class="name"><a href="post-standard.html">Athletic Mesh Sports Leggings</a></h6>
                              <span class="time">July 23, 2023</span>
                            </div>
                          </li>
                          <li>
                            <div class="dz-media">
                              <img src="~/assets/images/shop/product/small/4.png" alt=""/>
                            </div>
                            <div class="dz-content">
                              <h6 class="name"><a href="post-standard.html">Satin Wrap Party Blouse</a></h6>
                              <span class="time">July 23, 2023</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="has-mega-menu sub-menu-down">
                <a href="javascript:void(0);"><span>Portfolio</span><i class="fas fa-chevron-down tabindex"></i></a>
                <div class="mega-menu portfolio-menu">
                  <ul>
                    <li class="side-left">
                      <ul class="portfolio-nav-link">
                        <li>
                          <a href="portfolio-tiles.html">
                            <img src="~/assets/images/portfolio/icons/portfolio-tiles.svg" alt="/"/>
                            <span>Portfolio Tiles</span>
                          </a>
                        </li>
                        <li>
                          <a href="collage-style-1.html">
                            <img src="~/assets/images/portfolio/icons/collage-style-1.svg" alt="/"/>
                            <span>Collage Style 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="collage-style-2.html">
                            <img src="~/assets/images/portfolio/icons/collage-style-2.svg" alt="/"/>
                            <span>Collage Style 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="masonry-grid.html">
                            <el-image src="images/portfolio/icons/masonry-grid.svg" alt="/"/>
                            <span>Masonry Grid</span>
                          </a>
                        </li>
                        <li>
                          <a href="cobble-style-1.html">
                            <img src="~/assets/images/portfolio/icons/cobble-style-1.svg" alt="/"/>
                            <span>Cobble Style 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="cobble-style-2.html">
                            <img src="~/assets/images/portfolio/icons/cobble-style-2.svg" alt="/"/>
                            <span>Cobble Style 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-thumbs-slider.html">
                            <img src="~/assets/images/portfolio/icons/portfolio-thumbs-slider.svg" alt="/"/>
                            <span>Portfolio Thumbs Slider</span>
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-film-strip.html">
                            <img src="~/assets/images/portfolio/icons/portfolio-film-strip.svg" alt="/"/>
                            <span>Portfolio Film Strip</span>
                          </a>
                        </li>
                        <li>
                          <a href="carousel-showcase.html">
                            <img src="~/assets/images/portfolio/icons/carousel-showcase.svg" alt="/"/>
                            <span>Carousel Showcase</span>
                          </a>
                        </li>
                        <li>
                          <a href="portfolio-split-slider.html">
                            <img src="~/assets/images/portfolio/icons/portfolio-split-slider.svg" alt="/"/>
                            <span>Portfolio Split Slider</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="side-right line-left">
                      <a href="javascript:void(0);" class="menu-title">Portfolio Details</a>
                      <ul>
                        <li><a href="portfolio-details-1.html">Portfolio Details 1</a></li>
                        <li><a href="portfolio-details-2.html">Portfolio Details 2</a></li>
                        <li><a href="portfolio-details-3.html">Portfolio Details 3</a></li>
                        <li><a href="portfolio-details-4.html">Portfolio Details 4</a></li>
                        <li><a href="portfolio-details-5.html">Portfolio Details 5</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="has-mega-menu sub-menu-down wide-width">
                <a href="javascript:void(0);"><span>Pages</span><i class="fas fa-chevron-down tabindex"></i></a>
                <div class="mega-menu">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Pages</a>
                      <ul>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="about-me.html">About Me</a></li>
                        <li><a href="pricing-table.html">Pricing Table</a></li>
                        <li><a href="our-gift-vouchers.html">Our Gift Vouchers</a></li>
                        <li><a href="what-we-do.html">What We Do</a></li>
                        <li><a href="faqs-1.html">Faqs 1</a></li>
                        <li><a href="faqs-2.html">Faqs 2</a></li>
                        <li><a href="our-team.html">Our Team</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Contact Us</a>
                      <ul>
                        <li><a href="contact-us-1.html">Contact Us 1</a></li>
                        <li><a href="contact-us-2.html">Contact Us 2</a></li>
                        <li><a href="contact-us-3.html">Contact Us 3</a></li>
                      </ul>
                      <a href="javascript:void(0);" class="menu-title">Web Pages</a>
                      <ul>
                        <li><a href="error-1.html">Error 404 1</a></li>
                        <li><a href="error-2.html">Error 404 2</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li><a href="under-construction.html">Under Construction</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Banner Style</a>
                      <ul>
                        <li><a href="banner-with-bg-color.html">Banner with BG Color</a></li>
                        <li><a href="banner-with-image.html">Banner with Image</a></li>
                        <li><a href="banner-with-video.html">Banner with Video</a></li>
                        <li><a href="banner-with-kanbern.html">Banner with Kanbern</a></li>
                        <li><a href="banner-small.html">Banner Small</a></li>
                        <li><a href="banner-medium.html">Banner Medium</a></li>
                        <li><a href="banner-large.html">Banner Large</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Header Style</a>
                      <ul>
                        <li><a href="header-style-1.html">Header Style 1</a></li>
                        <li><a href="header-style-2.html">Header Style 2</a></li>
                        <li><a href="header-style-3.html">Header Style 3</a></li>
                        <li><a href="header-style-4.html">Header Style 4</a></li>
                        <li><a href="header-style-5.html">Header Style 5</a></li>
                        <li><a href="header-style-6.html">Header Style 6</a></li>
                        <li><a href="header-style-7.html">Header Style 7</a></li>
                        <li class="w3menulink"><a href="w3menu.html">Menu Styles</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Footer Style</a>
                      <ul>
                        <li><a href="footer-style-1.html">Footer Style 1</a></li>
                        <li><a href="footer-style-2.html">Footer Style 2</a></li>
                        <li><a href="footer-style-3.html">Footer Style 3</a></li>
                        <li><a href="footer-style-4.html">Footer Style 4</a></li>
                        <li><a href="footer-style-5.html">Footer Style 5</a></li>
                        <li><a href="footer-style-6.html">Footer Style 6</a></li>
                        <li><a href="footer-style-7.html">Footer Style 7</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="menu-title">Dashboard</a>
                      <ul>
                        <li><a href="account-dashboard.html">Dashboard</a></li>
                        <li><a href="account-orders.html">Orders</a></li>
                        <li><a href="account-order-details.html">Orders Details</a></li>
                        <li><a href="account-order-confirmation.html">Orders Confirmation</a></li>
                        <li><a href="account-downloads.html">Downloads</a></li>
                        <li><a href="account-return-request.html">Return Request</a></li>
                        <li><a href="account-return-request-detail.html">Return Request Detail</a></li>
                        <li><a href="account-refund-requests-confirmed.html">Return Request Confirmed</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="sub-menu-down">
                <a href="javascript:void(0);"><span>My Account</span>
                  <div class="badge badge-sm rounded badge-animated">New</div>
                  <i class="fas fa-chevron-down tabindex"></i></a>
                <ul class="sub-menu">
                  <li><a href="account-dashboard.html">Dashboard</a></li>
                  <li><a href="account-orders.html">Orders</a></li>
                  <li><a href="account-order-details.html">Orders Details</a></li>
                  <li><a href="account-order-confirmation.html">Orders Confirmation</a></li>
                  <li><a href="account-downloads.html">Downloads</a></li>
                  <li><a href="account-return-request.html">Return Request</a></li>
                  <li><a href="account-return-request-detail.html">Return Request Detail</a></li>
                  <li><a href="account-refund-requests-confirmed.html">Return Request Confirmed</a></li>
                  <li><a href="account-profile.html">Profile</a></li>
                  <li><a href="account-address.html">Address</a></li>
                  <li><a href="account-shipping-methods.html">Shipping methods</a></li>
                  <li><a href="account-payment-methods.html">Payment Methods</a></li>
                  <li><a href="account-review.html">Review</a></li>
                  <li><a href="account-billing-address.html">Billing address</a></li>
                  <li><a href="account-shipping-address.html">Shipping address</a></li>
                  <li><a href="account-cancellation-requests.html">Cancellation Requests</a></li>
                </ul>
              </li>
            </ul>
            <div class="dz-social-icon">
              <ul>
                <li><a class="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></a></li>
                <li><a class="fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones"></a></li>
                <li><a class="fab fa-linkedin-in" target="_blank"
                       href="https://www.linkedin.com/showcase/3686700/admin/"></a></li>
                <li><a class="fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></a></li>
              </ul>
            </div>
          </div>

          <!-- EXTRA NAV -->
          <div class="extra-nav">
            <div class="extra-cell">
              <ul class="header-right">
                <li class="nav-item login-link">
                  <a class="nav-link" href="login.html">
                    Login / Register
                  </a>
                </li>
                <li class="nav-item search-link">
                  <a class="nav-link" href="javascript:void(0);" data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <i class="iconly-Light-Search"></i>
                  </a>
                </li>
                <li class="nav-item wishlist-link">
                  <a class="nav-link" href="javascript:void(0);" data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="iconly-Light-Heart2"></i>
                  </a>
                </li>
                <li class="nav-item cart-link">
                  <a href="javascript:void(0);" class="nav-link cart-btn" data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="iconly-Broken-Buy"></i>
                    <span class="badge badge-circle">5</span>
                  </a>
                </li>
                <li class="nav-item filte-link">
                  <a href="javascript:void(0);" class="nav-link filte-btn" data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 13" fill="none">
                      <rect y="11" width="30" height="2" fill="black"/>
                      <rect width="30" height="2" fill="black"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- Main Header End -->

    <!-- SearchBar -->
    <div class="dz-search-area dz-offcanvas offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        &times;
      </button>
      <div class="container">
        <form class="header-item-search">
          <div class="input-group search-input">
            <select class="default-select">
              <option>All Categories</option>
              <option>Clothes</option>
              <option>UrbanSkirt</option>
              <option>VelvetGown</option>
              <option>LushShorts</option>
              <option>Vintage</option>
              <option>Wedding</option>
              <option>Cotton</option>
              <option>Linen</option>
              <option>Navy</option>
              <option>Urban</option>
              <option>Business Meeting</option>
              <option>Formal</option>
            </select>
            <input type="search" class="form-control" placeholder="Search Product">
            <button class="btn" type="button">
              <i class="iconly-Light-Search"></i>
            </button>
          </div>
          <ul class="recent-tag">
            <li class="pe-0"><span>Quick Search :</span></li>
            <li><a href="shop-list.html">Clothes</a></li>
            <li><a href="shop-list.html">UrbanSkirt</a></li>
            <li><a href="shop-list.html">VelvetGown</a></li>
            <li><a href="shop-list.html">LushShorts</a></li>
          </ul>
        </form>
        <div class="row">
          <div class="col-xl-12">
            <h5 class="mb-3">You May Also Like</h5>
            <div class="swiper category-swiper2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/1.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">SilkBliss Dress</a></h6>
                      <h6 class="price">$40.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/3.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">GlamPants</a></h6>
                      <h6 class="price">$30.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/4.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">ComfyLeggings</a></h6>
                      <h6 class="price">$35.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/2.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">ClassicCapri</a></h6>
                      <h6 class="price">$20.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/5.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">DapperCoat</a></h6>
                      <h6 class="price">$70.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/6.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">ComfyLeggings</a></h6>
                      <h6 class="price">$45.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/7.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">DenimDream Jeans</a></h6>
                      <h6 class="price">$40.00</h6>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="shop-card">
                    <div class="dz-media ">
                      <img src="~/assets/images/shop/product/4.png" alt="image"/>
                    </div>
                    <div class="dz-content">
                      <h6 class="title"><a href="shop-list.html">SilkBliss Dress</a></h6>
                      <h6 class="price">$60.00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SearchBar -->

    <!-- Sidebar cart -->
    <div class="offcanvas dz-offcanvas offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        &times;
      </button>
      <div class="offcanvas-body">
        <div class="product-description">
          <div class="dz-tabs">
            <ul class="nav nav-tabs center" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="shopping-cart" data-bs-toggle="tab"
                        data-bs-target="#shopping-cart-pane" type="button" role="tab" aria-controls="shopping-cart-pane"
                        aria-selected="true">Shopping Cart
                  <span class="badge badge-light">5</span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="wishlist" data-bs-toggle="tab" data-bs-target="#wishlist-pane"
                        type="button" role="tab" aria-controls="wishlist-pane" aria-selected="false">Wishlist
                  <span class="badge badge-light">2</span>
                </button>
              </li>
            </ul>
            <div class="tab-content pt-4" id="dz-shopcart-sidebar">
              <div class="tab-pane fade show active" id="shopping-cart-pane" role="tabpanel"
                   aria-labelledby="shopping-cart" tabindex="0">
                <div class="shop-sidebar-cart">
                  <ul class="sidebar-cart-list">
                    <li>
                      <div class="cart-widget">
                        <div class="dz-media me-3">
                          <img src="~/assets/images/shop/shop-cart/pic1.jpg" alt=""/>
                        </div>
                        <div class="cart-content">
                          <h6 class="title"><a href="product-thumbnail.html">Sophisticated Swagger Suit</a></h6>
                          <div class="d-flex align-items-center">
                            <div class="btn-quantity light quantity-sm me-3">
                              <input type="text" value="1" name="demo_vertical2">
                            </div>
                            <h6 class="dz-price mb-0">$50.00</h6>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="dz-close">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="cart-widget">
                        <div class="dz-media me-3">
                          <img src="~/assets/images/shop/shop-cart/pic2.jpg" alt=""/>
                        </div>
                        <div class="cart-content">
                          <h6 class="title"><a href="product-thumbnail.html">Cozy Knit Cardigan Sweater</a></h6>
                          <div class="d-flex align-items-center">
                            <div class="btn-quantity light quantity-sm me-3">
                              <input type="text" value="1" name="demo_vertical2">
                            </div>
                            <h6 class="dz-price mb-0">$40.00</h6>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="dz-close">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="cart-widget">
                        <div class="dz-media me-3">
                          <img src="~/assets/images/shop/shop-cart/pic3.jpg" alt=""/>
                        </div>
                        <div class="cart-content">
                          <h6 class="title"><a href="product-thumbnail.html">Athletic Mesh Sports Leggings</a></h6>
                          <div class="d-flex align-items-center">
                            <div class="btn-quantity light quantity-sm me-3">
                              <input type="text" value="1" name="demo_vertical2">
                            </div>
                            <h6 class="dz-price  mb-0">$65.00</h6>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="dz-close">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div class="cart-total">
                    <h5 class="mb-0">Subtotal:</h5>
                    <h5 class="mb-0">300.00$</h5>
                  </div>
                  <div class="mt-auto">
                    <div class="shipping-time">
                      <div class="dz-icon">
                        <i class="flaticon flaticon-ship"></i>
                      </div>
                      <div class="shipping-content">
                        <h6 class="title pe-4">Congratulations , you've got free shipping!</h6>
                        <div class="progress">
                          <div class="progress-bar progress-animated border-0" style="width: 75%;" role="progressbar">
                            <span class="sr-only">75% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="shop-checkout.html" class="btn btn-outline-secondary btn-block m-b20">Checkout</a>
                    <a href="shop-cart.html" class="btn btn-secondary btn-block">View Cart</a>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="wishlist-pane" role="tabpanel" aria-labelledby="wishlist" tabindex="0">
                <div class="shop-sidebar-cart">
                  <ul class="sidebar-cart-list">
                    <li>
                      <div class="cart-widget">
                        <div class="dz-media me-3">
                          <img src="~/assets/images/shop/shop-cart/pic1.jpg" alt=""/>
                        </div>
                        <div class="cart-content">
                          <h6 class="title"><a href="product-thumbnail.html">Sophisticated Swagger Suit</a></h6>
                          <div class="d-flex align-items-center">
                            <h6 class="dz-price  mb-0">$50.00</h6>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="dz-close">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="cart-widget">
                        <div class="dz-media me-3">
                          <img src="~/assets/images/shop/shop-cart/pic2.jpg" alt=""/>
                        </div>
                        <div class="cart-content">
                          <h6 class="title"><a href="product-thumbnail.html">Cozy Knit Cardigan Sweater</a></h6>
                          <div class="d-flex align-items-center">
                            <h6 class="dz-price  mb-0">$40.00</h6>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="dz-close">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="cart-widget">
                        <div class="dz-media me-3">
                          <img src="~/assets/images/shop/shop-cart/pic3.jpg" alt=""/>
                        </div>
                        <div class="cart-content">
                          <h6 class="title"><a href="product-thumbnail.html">Athletic Mesh Sports Leggings</a></h6>
                          <div class="d-flex align-items-center">
                            <h6 class="dz-price  mb-0">$65.00</h6>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="dz-close">
                          <i class="ti-close"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div class="mt-auto">
                    <a href="shop-wishlist.html" class="btn btn-secondary btn-block">Check Your Favourite</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sidebar cart -->

    <!-- Sidebar finter -->
    <div class="offcanvas dz-offcanvas offcanvas offcanvas-end " tabindex="-1" id="offcanvasLeft">
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        &times;
      </button>
      <div class="offcanvas-body">
        <div class="product-description">
          <div class="widget widget_search">
            <div class="form-group">
              <div class="input-group">
                <input name="dzSearch" required="required" type="search" class="form-control"
                       placeholder="Search Product">
                <div class="input-group-addon">
                  <button name="submit" value="Submit" type="submit" class="btn">
                    <i class="icon feather icon-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="widget">
            <h6 class="widget-title">Price</h6>
            <div class="price-slide range-slider">
              <div class="price">
                <div class="range-slider style-1">
                  <div id="slider-tooltips" class="mb-3"></div>
                  <span class="example-val" id="slider-margin-value-min"></span>
                  <span class="example-val" id="slider-margin-value-max"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="widget">
            <h6 class="widget-title">Color</h6>
            <div class="d-flex align-items-center flex-wrap color-filter ps-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="#000000"
                       aria-label="..." checked>
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" value="#9BD1FF"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3" value="#21B290"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel4" value="#FEC4C4"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel5" value="#FF7354"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel6" value="#51EDC8"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel7" value="#B77CF3"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel8" value="#FF4A76"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel9" value="#3E68FF"
                       aria-label="...">
                <span></span>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabe20" value="#7BEF68"
                       aria-label="...">
                <span></span>
              </div>
            </div>
          </div>

          <div class="widget">
            <h6 class="widget-title">Size</h6>
            <div class="btn-group product-size">
              <input type="radio" class="btn-check" name="btnradio1" id="btnradio11" checked="">
              <label class="btn" for="btnradio11">4</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio21">
              <label class="btn" for="btnradio21">6</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio31">
              <label class="btn" for="btnradio31">8</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio41">
              <label class="btn" for="btnradio41">10</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio51">
              <label class="btn" for="btnradio51">12</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio61">
              <label class="btn" for="btnradio61">14</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio71">
              <label class="btn" for="btnradio71">16</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio81">
              <label class="btn" for="btnradio81">18</label>

              <input type="radio" class="btn-check" name="btnradio1" id="btnradio91">
              <label class="btn" for="btnradio91">20</label>
            </div>
          </div>
          <div class="widget widget_categories">
            <h6 class="widget-title">Category</h6>
            <ul>
              <li class="cat-item cat-item-26"><a href="blog-category.html">Dresses</a> (10)</li>
              <li class="cat-item cat-item-36"><a href="blog-category.html">Top &amp; Blouses</a> (5)</li>
              <li class="cat-item cat-item-43"><a href="blog-category.html">Boots</a> (17)</li>
              <li class="cat-item cat-item-27"><a href="blog-category.html">Jewelry</a> (13)</li>
              <li class="cat-item cat-item-40"><a href="blog-category.html">Makeup</a> (06)</li>
              <li class="cat-item cat-item-40"><a href="blog-category.html">Fragrances</a> (17)</li>
              <li class="cat-item cat-item-40"><a href="blog-category.html">Shaving &amp; Grooming</a> (13)</li>
              <li class="cat-item cat-item-43"><a href="blog-category.html">Jacket</a> (06)</li>
              <li class="cat-item cat-item-36"><a href="blog-category.html">Coat</a> (22)</li>
            </ul>
          </div>

          <div class="widget widget_tag_cloud">
            <h6 class="widget-title">Tags</h6>
            <div class="tagcloud">
              <a href="blog-tag.html">Vintage </a>
              <a href="blog-tag.html">Wedding</a>
              <a href="blog-tag.html">Cotton</a>
              <a href="blog-tag.html">Linen</a>
              <a href="blog-tag.html">Navy</a>
              <a href="blog-tag.html">Urban</a>
              <a href="blog-tag.html">Business Meeting</a>
              <a href="blog-tag.html">Formal</a>
            </div>
          </div>
          <a href="javascript:void(0);" class="btn btn-sm font-14 btn-secondary btn-sharp">RESET</a>
        </div>
      </div>
    </div>
    <!-- filter sidebar -->

  </el-header>
</template>

<style scoped>

</style>