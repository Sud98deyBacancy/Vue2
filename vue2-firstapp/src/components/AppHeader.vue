<template>
  <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1> {{ title }}</h1>
                </header>
            </div>
        </div>
</template>
<script>
export default{ props:['title'] }
</script>
<style scoped>
div.row{ border: 1px solid;}
</style>
