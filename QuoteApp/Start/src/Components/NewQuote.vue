<template>
    <div class="row">
        <form>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group">
    <label> Quote </label>
    <textarea class="form-control" cols="3" rows="2" v-model="quote"></textarea>  
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 form-group">
    <button class="btn btn-primary" @click.prevent="CreateQuote"> Add Quote</button>
    </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){   return {quote:''};  },
    methods:{ 
        CreateQuote(){ this.$emit('quoteAdded',this.quote); this.quote=''; }
    }
}
</script>