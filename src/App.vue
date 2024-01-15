<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import AppFilter from './components/AppFilter.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    AppMain,
    AppFilter
  },
  data(){
        return{
            store
         
        }
    },   
    created() {
        this.getcards();
    },
    methods:{
        getcards(){

          let endpoint = store.endpoint;
          if(store.searchArchetype !== ''){
            endpoint += `&archetype=${store.searchArchetype}`;
          }
          axios.get(endpoint).then((response) => {
              store.cardlist = response.data.data;
          });
        },
        filterCardsArchetype(){
          this.getcards();
        }
    }
}
</script>
<template lang="">
  <AppHeader />
  <AppFilter @filter_cards="filterCardsArchetype" />
  <AppMain />
</template>
<style lang="scss">
  @use './styles/partials/variables';
  @use './styles/general.scss';
</style>