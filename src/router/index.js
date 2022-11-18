import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'


const routes = [
  {
    path:'/',
    component: () => import('../views/Frontend/IndexView.vue'),
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Frontend/HomeView.vue'),
      },
      {
        path: '/user/login',
        name: 'user.login',
        component: () => import('../views/Frontend/pages/LoginView.vue'),
        meta: {visitedAuth:true,title:'Login'}
      },
      {
        path: '/user/register',
        name: 'user.register',
        component: () => import('../views/Frontend/pages/RegisterView.vue'),
        meta: {visitedAuth:true}
      },
      {
        path: '/user/profile',
        name: 'user.profile',
        component: () => import('../views/Frontend/pages/ProfileView.vue'),
        meta: {requiresAuth:true}
      },
      {
        path: '/user/order',
        name: 'user.order',
        component: () => import('../views/Frontend/pages/OrderView.vue'),
        meta: {requiresAuth:true}
      },
      {
        path: '/user/wishlist',
        name: 'user.wishlist',
        component: () => import('../views/Frontend/pages/WishlistView.vue'),
        meta: {requiresAuth:true}
      },

      // Seller List=======================================
      {
        path: '/seller/apply',
        name: 'seller.apply',
        component: () => import('../views/Frontend/seller/SellerapplyView.vue'),
      },

      {
        path: '/seller/list',
        name: 'seller.list',
        component: () => import('../views/Frontend/seller/SellerlistView.vue'),
      },
      {
        path: '/shop/list',
        name: 'shop.list',
        component: () => import('../views/Frontend/seller/ShoplistView.vue'),
      },
    ]
  },

// ============Admin System =====================================
  {
    path: '/',
    component: () => import('../views/Admin/IndexView.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Admin/DashboardView.vue'),
        meta: {requiresAdmin:true}
      },
      {
        path: '/category',
        name: 'category-list',
        component: () => import('../views/Admin/category/CategoryView.vue'),
        meta: {requiresAdmin:true}
      },
      {
        path: '/slider-list',
        name: 'slider-list',
        component: () => import('../views/Admin/slider/SliderList.vue'),
        meta: {requiresAdmin:true}
      },

      {
        path: '/slider-add',
        name: 'slider-add',
        component: () => import('../views/Admin/slider/SliderAdd.vue'),
        meta: {requiresAdmin:true}
      },

    ]

  },

  {
    path: '/login',
    name: 'admin.login',
    component: () => import('../views/Admin/Login/LoginView.vue'),
    meta: {visitedAdmin:true}
  },
  {
    path: '/admin/forget',
    name: 'admin.forget',
    component: () => import('../views/Admin/Login/ForgetView.vue'),
    meta: {visitedAdmin:true}
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.getters.LogedIn) {
    return {
      name:"user.login",
    }
  }else if (to.meta.visitedAuth && store.getters.LogedIn) {
    return {
      name:"home",
    }
  }
})

router.beforeEach((to) => {
  if (to.meta.requiresAdmin && !store.getters.AdminLogedIn) {
    return {
      name:"admin.login",
    }
  }else if (to.meta.visitedAdmin && store.getters.AdminLogedIn) {
    return {
      name:"admin",
    }
  }
})

export default router
