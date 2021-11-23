<template>
  <b-modal id="shopping-cart"   size="lg"    @ok="ok" @cancel="cancel"
  :title='"Shopping Cart ("+cartItems.length+")"'>
   <template #default>
    <div style="max-height: 350px;
    overflow-y: scroll;">
        <b-row  v-for="item in cartItems" :key="item.id">
            <b-col>
            <img
                class="d-block img-fluid w-100"
                style="max-height: 150px;"
                :src="item.img"
            >
            </b-col>
            <b-col style="padding-top: 25px;">
                <p>Name :{{item.name}}</p> 
                <p>Price :{{item.price}}</p> 

            </b-col>
            <b-col style="padding-top: 25px;">
            <b-input-group>
                <template #prepend>
                    <b-button variant="outline-success" @click="item.count--">
                        <b-icon-dash></b-icon-dash>
                    </b-button>
                </template>
                <b-input min="1" v-model='item.count'></b-input>
                <template #append>
                    <b-button variant="outline-success" @click="item.count++">
                        <b-icon-plus></b-icon-plus>
                    </b-button>
                </template>
            </b-input-group>
            </b-col>
            <b-col style="padding-top: 25px;">
                  <b-button variant="danger" @click="deleteItem(item)">Delete</b-button>
            </b-col>
        </b-row>
    </div>
    <b-row>
        <b-col>
            <h4>Total :{{total}}</h4> 
        </b-col>
        <b-col>
            <b-form-radio-group
                v-model="selected"
                :options="paymentOptions"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
                ></b-form-radio-group>
        </b-col>
    </b-row>
    </template>
    <template #modal-footer="{ ok, cancel }">
        <b-row>
            <b-col>
                <b-button-group>
                    <b-button size="sm" variant="success" @click="ok()">
                        Place Order
                    </b-button>
                    <b-button size="sm" variant="danger" @click="cancel()">
                        Cancel Order
                    </b-button>
                </b-button-group>
            </b-col>
        </b-row>
      
    </template>
  </b-modal>
</template>

<script>
export default {
    data() {
      return {
        selected: '1',
        paymentOptions: [
          { item: '1', name: 'Cash' },
          { item: '2', name: 'Visa', notEnabled: true },
        ]
      }
    }
    ,
    computed: {
        // a computed getter
        total: function () {
        // `this` points to the vm instance
        return this.cartItems.reduce(function(acc, val) { return acc + (val.price*val.count); }, 0)
        }
    },    
    methods:{
        ok:function(){
            this.cartItems=[];
            this.$bvModal.hide('shopping-cart');
            /* eslint-disable no-console */     
            console.log("ok") 
        },
        cancel:function(){
            this.cartItems=[];
            this.$bvModal.hide('shopping-cart');
            /* eslint-disable no-console */         
            console.log("cancel") 
        },
        deleteItem:function(cardItem){
            this.removeCardItem(cardItem);
            if(!this.cartItems.length){
                this.$bvModal.hide('shopping-cart');
            }
        }
    }
}
</script>

<style>

</style>