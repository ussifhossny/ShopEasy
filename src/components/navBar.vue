<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:rgb(255,133,0)">
      <b-navbar-brand to="/">Shop Easy</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>

    <div class="ml-auto" style="display: inline-flex" right>
        <!-- Right aligned nav items -->

          <b-navbar-nav>
          <b-nav-item  @click="$bvModal.show('shopping-cart')">
               <b-icon-cart3 v-if="cartItems.length!=0" ></b-icon-cart3>
          </b-nav-item>
        <b-nav-item v-if="user.name!=null" @click="user=null" href="/">Sign Out</b-nav-item>
        <b-nav-item v-else  @click='$router.push("Login")'>Sign In</b-nav-item>

        </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
    <shopping-cart/>
  </div>
</template>  

<script>
import shoppingCart from "../components/ShoppingCart.vue"
export default {
  components:{shoppingCart}
}
</script>

<style></style>
