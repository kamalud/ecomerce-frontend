<template>
  <div class="Index">
    <div>
      <div class="backdrop"></div>
      <a class="backtop fas fa-arrow-up" href="#"></a>
      <header-view />

      <menu-view />
      <cart-view />

      <!-- mobile footer menu  -->
      <mobile-view />

      <product-view />

      <router-view></router-view>

      <footer-view />
    </div>
  </div>
</template>

<script>
import HeaderView from '@/components/frontend/HeaderView.vue'
import MenuView from '@/components/frontend/MenuView.vue'
import FooterView from '@/components/frontend/FooterView.vue'
import CartView from '@/components/frontend/CartView.vue'
import MobileView from '@/components/frontend/MobileView.vue'
import ProductView from '@/components/frontend/ProductView.vue'

export default {
  components: { HeaderView, MenuView, FooterView, CartView, MobileView, ProductView },

}
</script>

<style>

</style>