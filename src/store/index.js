import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    cartItems: []
  },
  getters: {
    getUser: function(state) {
      return state.user;
    },
    getCartItems: function(state) {
      return state.cartItems;
    }
   
  },
  actions: {
    itemExists:async   function(state,item) {
      return state.getters.getCartItems.length!=0 && state.getters.getCartItems.some(function(el) {
        return el.id === item.id;
      }); 
    },

  },

  mutations: {
    setUser: function(state, theUser) {
      state.user = theUser;
    },
    setCartItems: function (state, cartItems) {
      state.cartItems = cartItems;
    },
    addCartItem: async function (state, cartItem) {
      var exist = await store.dispatch('itemExists', cartItem);
      if (!exist) {
        state.cartItems.push(cartItem);
      }
    },
    removeCartItem:function(state, cartItem) {
      if (store.dispatch('itemExists', cartItem )) {
        state.cartItems.splice(state.cartItems.findIndex(function(i){
          return i.id === cartItem.id;
      }), 1);
      }
    }
  },
});
