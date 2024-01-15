<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'AppFilter',
    data() {
        return {
            store,
            archetypesList: []
        }
    },
    created() {
       this.getArchetypesList ();
    },
    methods: {
        getArchetypesList(){
            axios.get(store.archetypeurl).then((response) => {
                this.archetypesList = response.data;
            });
        }
    }
}
</script>
<template lang="">
    <div class="container-select">
        <div class="row">
            <select class="select-archetype" v-model="store.searchArchetype" @change="$emit('filter_cards')">
                <option value="">Tutti</option>
                <option :value="archetype.archetype_name" v-for="archetype, index in archetypesList" :key="index">
                {{ archetype.archetype_name }}</option>
            </select>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container-select{
        max-width: 1200px;
        margin: 30px auto;
    }

    .select-archetype {
        background-color: #fff;
        border: none;
        padding: 4px;
    }


</style>