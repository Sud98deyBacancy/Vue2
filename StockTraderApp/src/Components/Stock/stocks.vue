<template>
    <div class="container">
<app-stock v-for="s in stocks" :key="s.id" :stock="s"> </app-stock>
    </div>
</template>
<script>
import appStock from './stock.vue';
export default {
components:{appStock},
computed:{  
    stocks(){ return this.$store.getters.stocks; }
}    
}
</script>