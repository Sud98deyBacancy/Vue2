<template>
    <div class="row">
       <app-quote v-for="(quote,i) in quotes" :key=quote @click.native="deleteQuote(i)"> {{ quote }}</app-quote>
    </div>
</template>
<script>
import Quote from './Quote.vue';
export default {
props:['quotes'],components:{appQuote:Quote},
methods:{ 
    deleteQuote(i){ this.$emit('deletion',i); }    
} 
 
}
</script>
<style>

</style>