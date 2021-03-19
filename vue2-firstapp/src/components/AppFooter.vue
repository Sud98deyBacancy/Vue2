<template>

  <div class="col-xs-12">
                <footer>
                    <b> {{title}}</b>
                </footer>
            </div>

</template>
<script>
export default {
  props:['title']
}
</script>
<style scoped>
footer{ border: 2pt solid cyan;}
</style>
