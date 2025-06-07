import ProductView from '../views/ProductView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue'
import ProductCategoryView from '../views/ProductCategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: ProductView
    },
    {
      path: '/cart/id',
      name: 'cart',
      component: CartView
    },
    {
      path: '/categories/:name',
      name: 'categoryProduct',
      component: ProductCategoryView
    }
    
  ],
})

export default router
