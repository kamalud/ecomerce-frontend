
<template>
    <swiper :spaceBetween="3" :pagination="{
        clickable: true,
    }" :modules="modules" :loop="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
}" class="mySwiper">
        <swiper-slide v-for="row in slider" :key="row"><a>
            <img class="SliderImage" :src="'http://127.0.0.1:8000/public/' + row.image" :alt="row.name" />
            </a>
        </swiper-slide>
    </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import axios from "@/axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
    data() {
        return {
            slider: ''
        }
    },
    mounted() {
        return this.GetSlider();
    },
    methods: {
        GetSlider() {
            axios.get('slider').then(response => {
                this.slider = response.data.data;
            });
        }
    }
}
</script>

<style>
.SliderImage {
    width: 1600px;
    height: 350px;
}
</style>