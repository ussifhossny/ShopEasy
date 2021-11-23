<template>
 <div>
   <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators     
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide 
      v-for="category in categories" :key="category.id"
        :caption='category.name'
        :text='category.description'
      >
       <template #img>
          <img
            class="d-block img-fluid w-100"
            @click='$router.push({name: "ProductsList", query: { category:category.name}})'
            style="max-height: 404px;"
            :src="category.imgSrc"
          >
        </template>
      
      
      </b-carousel-slide>
   </b-carousel>
   <div class="mt-3">
    <b-card-group deck>
      <b-card
        v-for="category in categories2" :key="category.id"
        overlay
        :img-src="category.imgSrc"
        img-height="200px"
        img-alt="Card Image"
        text-variant="white"
        :title="category.name"
        :sub-title="category.description"
        @click='$router.push({name: "ProductsList", query: { category:category.name}})'
      >
        <!-- <b-card-text>
          Some quick example text to build on the card and make up the bulk of the card's content.
        </b-card-text> -->
      </b-card>
    </b-card-group>
  </div>
 </div>
</template>

<script>
import clothes from "../assets/clothes.jpg"
import Electronics  from "../assets/Electronics.jpg"
import Perfumes  from "../assets/perfumes.jpg"
import sports from "../assets/sports.jpg"
import Furniture from "../assets/Furniture.jpg"
import hair from "../assets/hair.jpg"
import toys from "../assets/toys.jpg"

export default {
  data() {
    return {
      clothes:clothes,
      Electronics:Electronics,
      Perfumes:Perfumes,
      sports:sports,
      Furniture:Furniture,
      hair:hair,
      toys:toys,
      categories:[
        {
          id:1,
          name:"Clothes",
          description:"Shop between different clothes shops with lowest price ever",
          imgSrc:clothes,
        },
        {
          id:2,
          name:"Electronics",
          description:"Shop between different devices with lowest price ever",
          imgSrc:Electronics,
        },
        {
          id:3,
          name:"Perfumes",
          description:"Shop between different perfumes with lowest price ever",
          imgSrc:Perfumes,
        }

        ],
        categories2:[
        {
          id:1,
          name:"Sports",
          // description:"Shop between different clothes shops with lowest price ever",
          imgSrc:sports,
        },
        {
          id:2,
          name:"Furniture",
          // description:"Shop between different devices with lowest price ever",
          imgSrc:Furniture,
        },
        {
          id:3,
          name:"Hair Care",
          // description:"Shop between different perfumes with lowest price ever",
          imgSrc:hair,
        },
        {
          id:4,
          name:"Toys",
          // description:"Shop between different perfumes with lowest price ever",
          imgSrc:toys,
        }
        ]
         
    }
  }
    
  }
</script>

<style>

</style>