<script>
export default {
      name: 'SingleCard',
      props:{
        card: Object
      }      
}
</script>
<template lang="">
    <div class="my-col-5">
        <div class="my-card">
            <img :src="card.card_images[0].image_url" />
            <h4>{{ card.name }}</h4>
            <div>{{ card.archetype }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
   
   .my-col-5{
       width: calc(100% / 5 - 10px);
       margin: 5px;
      
  
       
       .my-card{
               width: 100%;
               background-color: orange;
               text-align: center;
               min-height: 400px;

               img{
                width: 100%;
                
            } 
                h4{
                    color: #fff;
                    margin: 10px 0px;
                }
       }  
    }
</style>