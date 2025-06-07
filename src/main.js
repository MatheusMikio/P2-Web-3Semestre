import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


export default {
  getProducts() {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  },

  saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  },

  addProduct(product) {
    const products = this.getProducts();
    products.push(product);
    this.saveProducts(products);
  },

  removeProduct(productId) {
    const products = this.getProducts().filter(p => p.id !== productId);
    this.saveProducts(products);
  }
}