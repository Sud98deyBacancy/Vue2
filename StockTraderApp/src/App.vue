<template>
    <div class="container">
        <app-header></app-header>
    <div class="row">
        <div class="col-xs-12">
             <router-view></router-view>
        </div></div>
    
    </div>
</template>

<script>
import appHeader from './Components/Header.vue';
    export default {
components:{appHeader},
created() { this.$store.dispatch('initStocks'); }
    }
</script>

<style>

</style>
