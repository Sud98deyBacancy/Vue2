<template>
    <div> <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock></div>
</template>
<script>
import { mapGetters} from 'vuex';
import appStock from './stock.vue';
export default {
    computed:{ 
        ...mapGetters({stocks:'stockPortfolio'})
    },
    components:{appStock}
}
</script>