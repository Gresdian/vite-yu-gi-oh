<script>
export default {
    name: 'AppHeader',
}
</script>

<template lang="">
    <header>
        <div class="container-full mx-5">
            <div class="row">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg" >
                <h1>Yu-Gi-Oh API</h1>
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
    @use '../styles/general.scss' as*;

    header {
        padding: 30px 0px;
        background-color: #fff;
        
        img {
            width: 10%;
        }
        

    }
</style>