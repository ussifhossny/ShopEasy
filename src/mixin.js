import moment from "moment";
export default {
  methods: {
    invalidFilter(val) {
      return val.match(/[^a-zA-Z0-9,.'/?-\s]|(\s\s+)/g) ? true : false;
    },
    addCardItem: function (value) {
      this.$store.commit("addCartItem",value)
    },
    removeCardItem: function (value) {
      this.$store.commit("removeCartItem",value)
     },
  },
  computed: {
    user:{
      get:function(){
        return this.$store.getters.getUser? this.$store.getters.getUser:null
      },
      set:function(value){
        this.$store.commit("setUser",value)
      }
      
    },
    cartItems: {
      get:function(){
        return this.$store.getters.getCartItems? this.$store.getters.getCartItems:null
      },
      set:function(value){
        this.$store.commit("setCartItems",value)
      }
    },
    
    sucessToastConfig:function(){
      return  {
        title: `Success`,
        variant: "success",
        solid: true
        };
    },
    failToastConfig:function(){
      return {
        title: "Failure",/*eslint no-undef: "error"*/

        variant: "danger", /*eslint no-undef: "error"*/

        solid: true
        };
    },
   
  },
  filters: {
    DD_MMM_YYYY: function(date) {
      if (date){
      return moment(date).format("DD-MM-YYYY");
    }
    else{
      return '-';
    }
    }
  }
}
