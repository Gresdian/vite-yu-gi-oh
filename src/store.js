import { reactive } from 'vue';

export const store = reactive({
    cardlist: [],
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archetypeurl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArchetype: ''
});