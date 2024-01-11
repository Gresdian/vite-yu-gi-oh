<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    AppMain
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
            axios.get(store.endpoint).then((response) => {
                store.cardlist = response.data.data;
            });
        }
    }
}
</script>
<template lang="">
  <AppHeader />
  <AppMain />
</template>
<style lang="scss">
  @use './styles/partials/variables';
  @use './styles/general.scss';
</style>