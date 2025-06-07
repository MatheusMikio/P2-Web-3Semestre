import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import localforage from 'localforage';

const store = createStore({
  state() {
    return {
      cartItems: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      const existingItem = state.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    decreaseItemQuantity(state, productId) {
      const existingItem = state.cartItems.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(item => item.id !== productId);
      }
    },
    increaseItemQuantity(state, productId) {
      const existingItem = state.cartItems.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const item = state.cartItems.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    decreaseItemQuantity({ commit }, productId) {
      commit('decreaseItemQuantity', productId);
    },
    increaseItemQuantity({ commit }, productId) {
      commit('increaseItemQuantity', productId);
    },
    updateCartItemQuantity({ commit }, payload) {
      commit('updateCartItemQuantity', payload);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  },
  getters: {
    cartItems: state => state.cartItems,
    cartTotal: state => {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItemCount: state => {
      return state.cartItems.reduce((count, item) => count + item.quantity, 0);
    },
  },
  plugins: [createPersistedState({
    storage: localforage,
  })],
});

export default store;