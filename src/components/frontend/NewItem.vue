<template>
    <div>
        <section class="section newitem-part">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-heading">
                            <h2>collected new items</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ul class="new-slider slider-arrow">

                            <swiper :slidesPerView="5" :spaceBetween="30" :slidesPerGroup="3" :loop="true"
                                :loopFillGroupWithBlank="true" :pagination="{
                                    clickable: true,
                                }" :navigation="true" :modules="modules" class="mySwiper">
                                <swiper-slide>
                                    <li>
                                        <div class="product-card">
                                            <div class="product-media">
                                                <div class="product-label">
                                                    <label class="label-text new">New</label>
                                                </div>
                                                <button class="product-wish wish">
                                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                                    href="product-video.html"><img
                                                        src="@/assets/frontend/images/product/02.jpg"
                                                        alt="product" /></a>
                                            </div>
                                            <div class="product-content">
                                                <h6 class="product-name">
                                                    <a href="product-video.html">Products Name</a>
                                                </h6>
                                                <h6 class="product-price">
                                                    <del>$34</del><span>$28<small></small></span>
                                                </h6>
                                                <button class="product-add" title="Add to Cart">
                                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </swiper-slide>
                                <swiper-slide>
                                    <li>
                                        <div class="product-card">
                                            <div class="product-media">
                                                <div class="product-label">
                                                    <label class="label-text new">New</label>
                                                </div>
                                                <button class="product-wish wish">
                                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                                    href="product-video.html"><img
                                                        src="@/assets/frontend/images/product/03.jpg"
                                                        alt="product" /></a>
                                            </div>
                                            <div class="product-content">
                                                <h6 class="product-name">
                                                    <a href="product-video.html">Products Name</a>
                                                </h6>
                                                <h6 class="product-price">
                                                    <del>$34</del><span>$28<small></small></span>
                                                </h6>
                                                <button class="product-add" title="Add to Cart">
                                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </swiper-slide>
                                <swiper-slide>
                                    <li>
                                        <div class="product-card">
                                            <div class="product-media">
                                                <div class="product-label">
                                                    <label class="label-text new">New</label>
                                                </div>
                                                <button class="product-wish wish">
                                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                                    href="product-video.html"><img
                                                        src="@/assets/frontend/images/product/04.jpg"
                                                        alt="product" /></a>
                                            </div>
                                            <div class="product-content">
                                                <h6 class="product-name">
                                                    <a href="product-video.html">Products Name</a>
                                                </h6>
                                                <h6 class="product-price">
                                                    <del>$34</del><span>$28<small></small></span>
                                                </h6>
                                                <button class="product-add" title="Add to Cart">
                                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </swiper-slide>
                                <swiper-slide>
                                    <li>
                                        <div class="product-card">
                                            <div class="product-media">
                                                <div class="product-label">
                                                    <label class="label-text new">New</label>
                                                </div>
                                                <button class="product-wish wish">
                                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                                    href="product-video.html"><img
                                                        src="@/assets/frontend/images/product/05.jpg"
                                                        alt="product" /></a>
                                            </div>
                                            <div class="product-content">
                                                <h6 class="product-name">
                                                    <a href="product-video.html">Products Name</a>
                                                </h6>
                                                <h6 class="product-price">
                                                    <del>$34</del><span>$28<small></small></span>
                                                </h6>
                                                <button class="product-add" title="Add to Cart">
                                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </swiper-slide>
                                <swiper-slide>
                                    <li>
                                        <div class="product-card">
                                            <div class="product-media">
                                                <div class="product-label">
                                                    <label class="label-text new">New</label>
                                                </div>
                                                <button class="product-wish wish">
                                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                                    href="product-video.html"><img
                                                        src="@/assets/frontend/images/product/06.jpg"
                                                        alt="product" /></a>
                                            </div>
                                            <div class="product-content">
                                                <h6 class="product-name">
                                                    <a href="product-video.html">Products Name</a>
                                                </h6>
                                                <h6 class="product-price">
                                                    <del>$34</del><span>$28<small></small></span>
                                                </h6>
                                                <button class="product-add" title="Add to Cart">
                                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </swiper-slide>
                                <swiper-slide>
                                    <li>
                                        <div class="product-card">
                                            <div class="product-media">
                                                <div class="product-label">
                                                    <label class="label-text new">New</label>
                                                </div>
                                                <button class="product-wish wish">
                                                    <i class="fas fa-heart"></i></button><a class="product-image"
                                                    href="product-video.html"><img
                                                        src="@/assets/frontend/images/product/07.jpg"
                                                        alt="product" /></a>
                                            </div>
                                            <div class="product-content">
                                                <h6 class="product-name">
                                                    <a href="product-video.html">Products Name</a>
                                                </h6>
                                                <h6 class="product-price">
                                                    <del>$34</del><span>$28<small></small></span>
                                                </h6>
                                                <button class="product-add" title="Add to Cart">
                                                    <i class="fas fa-shopping-basket"></i><span>Add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </swiper-slide>

                            </swiper>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline"><i class="fas fa-eye"></i><span>show
                                    more</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>