<template>
    <div>
        <div class="header-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-5">
                        <div class="header-top-welcome">
                            <p>Welcome to Ecomart in Your Dream Online Store!</p>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-3"></div>
                    <div class="col-md-7 col-lg-4">
                        <ul class="header-top-list">
                            <li>
                                <router href="offer.html">Seller Apply</router>
                            </li>
                            <li><a href="faq.html">need help</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <header class="header-part">
            <div class="container">
                <div class="header-content">
                    <div class="header-media-group">
                        <button class="header-user" @click="menu">
                            <img src="@/assets/frontend/images/menu.png" alt="user" /></button><a href="index.html"><img
                                src="@/assets/frontend/images/logo.png" alt="logo" /></a>

                        <button class="header-src" @click.prevent="search">
                            <i class="fas fa-search">
                            </i></button>
                    </div>
                    <router-link :to="{ name: 'home' }" class="header-logo"><img src="@/assets/frontend/images/logo.png"
                            alt="logo" /></router-link>

                    <form class="header-form">
                        <input type="text" placeholder="Search anything..." /><button>
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                    <div class="header-widget-group hover-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link header-widget" href="#" data-bs-toggle="dropdown"><i
                                    class="fas fa-user"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end" v-if="LogedIn">
                                <li>
                                    <router-link :to="{ name: 'user.profile' }" class="dropdown-item"> My Profile
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'user.order' }" class="dropdown-item"> My Orders
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'user.wishlist' }" class="dropdown-item"> My Wishlist
                                    </router-link>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#" @click="Logout">Logout</a>
                                </li>
                            </ul>
                            <ul class="dropdown-menu dropdown-menu-end" v-else>
                                <li>
                                    <router-link :to="{ name: 'user.login' }" class="dropdown-item"> Login</router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name: 'user.register' }" class="dropdown-item"> Register
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <a href="wishlist.html" class="header-widget" title="Wishlist"><i
                                class="fas fa-heart"></i><sup>0</sup></a><button class="header-widget header-cart"
                            @click="Cartlist">
                            <i class="fas fa-shopping-basket"></i><sup>9+</sup><span>total
                                price<small>$345.00</small></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>

import $ from 'jquery';
import toastr from 'toastr';

export default {


    computed: {
        LogedIn() {
            return this.$store.getters.LogedIn;
        }
    },
    methods: {

        Logout() {
            this.$store.dispatch('logout').then(res => {
                alert('logout success');
                toastr.success(res.message);
                this.$router.push({ name: 'user.login' });
            });
        },

        search() {
            $(".header-form").toggleClass("active"),
                $('.header-src').children(".fa-search").toggleClass("fa-times");
        },
        menu() {
            $(".header-user").on("click", function () {
                $("body").css("overflow", "hidden"),
                    $(".nav-sidebar").addClass("active")
            })
        },

        Cartlist() {
            $(".header-cart, .cart-btn").on("click", function () {
                $("body").css("overflow", "hidden"),
                    $(".cart-sidebar").addClass("active"),
                    $(".cart-close").on("click", function () {
                        $("body").css("overflow", "inherit"),
                            $(".cart-sidebar").removeClass("active"),
                            $(".backdrop").fadeOut();
                    });
            })
        }

    }
}

</script>

<style>
.hover-nav .nav-item .droup-menu {
    display: none;
    margin-top: 0;
}

.hover-nav .nav-item:hover .droup-menu {
    display: block;
}
</style>