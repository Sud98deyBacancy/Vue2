<template>
    <div class="container">
      <app-header :count="quotes.length" :max="maxQ"> </app-header>  
     <add-quote @quoteAdded="NewQuote"></add-quote>   
    <quote-grid :quotes="quotes" @deletion="deleteQuote"></quote-grid>
    <div class="col-sm-12 text-center">
        <div class="alert alert-info"> Click on Quote to delete.</div>
    </div>
    </div>
</template>

<script>
   import AddQuote from './Components/NewQuote.vue';
   import QuoteGrid from './Components/QuoteGrid.vue';
   import AppHeader from './Components/Header.vue';
    export default {
       data(){
           return{ quotes:['A Quote','Second Quote'],maxQ:12};
       },
       components:{ QuoteGrid,AddQuote,AppHeader},
       methods:{
           NewQuote(quote){ 
              if(this.quotes.length >= this.maxQ)
              { return alert('You have to delete Some quotes'); }
              this.quotes.push(quote); 
              },
           deleteQuote(i){ this.quotes.splice(i,1); }
       } 
    }
</script>

<style>
</style>
