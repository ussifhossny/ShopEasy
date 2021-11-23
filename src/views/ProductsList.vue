<template>
    <b-card  :title="$route.query.category">
     <b-row>
         <b-col v-for ="product in selectedProducts" :key="product.id">
              <b-card
                    :title='product.name'
                    :img-src='product.img'
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                    <b-card-text>
                       <label >Price: <span style="color: #ea005b;" >{{product.price}}</span> EGP</label> 
                    </b-card-text>

                    <b-button @click="addCard(product)"  variant="primary">Add to Cart</b-button>
                </b-card>
         </b-col>
     </b-row>
    </b-card>
</template>

<script>
import dress from "../assets/dress.jpg"
import short from "../assets/short.jpg"
import trousers from "../assets/trousers.jpg"
import tshirt from "../assets/tshirt.jpg"
import Laptop from "../assets/Laptop.jpg"
import tv from "../assets/tv.jpg"
import microwave from "../assets/microwave.jpg"
import ps5 from "../assets/ps5.jpg"
import boss from "../assets/boss.jpg"
import ck from "../assets/ck.jpg"
import happy from "../assets/happy.jpg"
import roberto from "../assets/roberto.jpg"
import gloves from "../assets/gloves.jpg"
import ball from "../assets/ball.jpg"
import dart from "../assets/dart.jpg"
import rest from "../assets/rest.jpg"
import sofa from "../assets/sofa.jpg"
import table from "../assets/table.jpg"
import tvunit from "../assets/tvunit.jpg"
import bed from "../assets/bed.jpg"
import babyliss from "../assets/babyliss.jpg"
import dryer from "../assets/dryer.jpg"
import philips from "../assets/philips.jpg"
import braun from "../assets/braun.jpg"
import xylophone from "../assets/xylophone.jpg"
import counting from "../assets/counting.jpg"
import duck from "../assets/duck.jpg"
import geometric from "../assets/geometric.jpg"
export default {
    data() {
        return {
            dress:dress,
            short:short,
            tshirt:tshirt,
            trousers:trousers,
            Laptop:Laptop,
            tv:tv,
            microwave:microwave,
            ps5:ps5,
            boss:boss,
            ck:ck,
            happy:happy,
            roberto:roberto,
            gloves:gloves,
            ball:ball,
            dart:dart,
            rest:rest,
            sofa:sofa,
            tvunit:tvunit,
            bed:bed,
            table:table,
            babyliss:babyliss,
            dryer:dryer,
            philips:philips,
            braun:braun,
            xylophone:xylophone,
            counting:counting,
            duck:duck,
            geometric:geometric, 

            products:[
                        {   
                            id:1,
                            name:"dress",
                            price:550,
                            category:"Clothes",
                            img:dress,
                            count:1,
                        },
                        {   
                            id:2,
                            name:"short",
                            price:150,
                            category:"Clothes",
                            img:short,
                            count:1,
                        },
                        {   
                            id:3,
                            name:"trousers",
                            price:350,
                            category:"Clothes",
                            img:trousers,
                            count:1,
                        },
                        {
                            id:4,
                            name:"T-shirt",
                            price:200,
                            category:"Clothes",
                            img:tshirt,
                            count:1,
                        },
                        {
                            id:5,
                            name:"Dell Laptop",
                            price:17000,
                            category:"Electronics",
                            img:Laptop,
                            count:1,
                        },
                        {
                            id:6,
                            name:"Samsung tv",
                            price:7999,
                            category:"Electronics",
                            img:tv,
                            count:1,
                        },
                        {
                            id:7,
                            name:"Toshiba microwave",
                            price:3500,
                            category:"Electronics",
                            img:microwave,
                            count:1,
                        },
                        {
                            id:8,
                            name:"Sony ps5",
                            price:27000,
                            category:"Electronics",
                            img:ps5,
                            count:1,
                        },
                        {
                            id:9, 
                            name:"Boss Night 100ml",
                            price:899,
                            category:"Perfumes",
                            img:boss,
                            count:1,
                        },
                        {
                            id:10,
                            name:"Calvin Klein 100ml",
                            price:550,
                            category:"Perfumes",
                            img:ck,
                            count:1,
                        },
                        {
                            id:11,
                            name:"Happy 100ml",
                            price:950,
                            category:"Perfumes",
                            img:happy,
                            count:1,
                        },
                        {
                            id:12,
                            name:"Roberto Cavalli 75ml",
                            price:690,
                            category:"Perfumes",
                            img:roberto,
                            count:1,
                        },
                        {
                            
                            id:13,
                            name:"Gloves",
                            price:100,
                            category:"Sports",
                            img:gloves,
                            count:1,
                        },
                        {
                            
                            id:14,
                            name:"Ball",
                            price:270,
                            category:"Sports",
                            img:ball,
                            count:1,
                        },
                        {
                            
                            id:15,
                            name:"Dart",
                            price:150,
                            category:"Sports",
                            img:dart,
                            count:1,
                        },
                        {
                            
                            id:16,
                            name:"Hand Grips",
                            price:50,
                            category:"Sports",
                            img:rest,
                            count:1,
                        },
                        {
                            
                            id:17,
                            name:"Sofa",
                            price:1700,
                            category:"Furniture",
                            img:sofa,
                            count:1,
                        },
                        {
                            
                            id:18,
                            name:"Table",
                            price:650,
                            category:"Furniture",
                            img:table,
                            count:1,
                        },
                        {
                            
                            id:19,
                            name:"Bed",
                            price:2500,
                            category:"Furniture",
                            img:bed,
                            count:1,
                        },
                        {
                            
                            id:20,
                            name:"Tv unit",
                            price:1400,
                            category:"Furniture", 
                            img:tvunit,
                            count:1,
                        },
                        {
                            
                            id:21,
                            name:"BaByliss Hair Dryer 2100 Watt",
                            price:1699,
                            category:"Hair Care", 
                            img:babyliss,
                            count:1,
                        },
                        {
                            
                            id:22,
                            name:"BaByliss Hair Dryer 2000 Watt",
                            price:550,
                            category:"Hair Care", 
                            img:dryer,
                            count:1,
                        },
                        {
                            
                            id:23,
                            name:"Philips Hair dryer 1800 watt",
                            price:655,
                            category:"Hair Care", 
                            img:philips,
                            count:1,
                        },
                        {
                            
                            id:24,
                            name:"Braun Ceramic Straightener",
                            price:370,
                            category:"Hair Care", 
                            img:braun,
                            count:1,
                        },
                        {
                            
                            id:25,
                            name:"Xylophone",
                            price:40,
                            category:"Toys", 
                            img:xylophone,
                            count:1,
                        },
                        {
                            
                            id:26,
                            name:"Counting toy",
                            price:70,
                            category:"Toys", 
                            img:counting,
                            count:1,
                        },
                        { 

                            id:27,
                            name:"Duck",
                            price:30,
                            category:"Toys", 
                            img:duck,
                            count:1,
                        },
                        {
                            
                            id:28,
                            name:"Geometric Stacker",
                            price:180,
                            category:"Toys", 
                            img:geometric,
                            count:1,
                        },
            
                     

                        
                ],
            selectedProducts:[]
        }
    },
    created:function(){
        this.selectedProducts= this.products.filter(x => x.category == this.$route.query.category)
    },
    methods:{
        addCard: function(cardItem) {
            this.addCardItem(cardItem);
        }
    }

    
}

</script>

<style>

</style>