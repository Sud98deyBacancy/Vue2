<template>
    <section class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote" v-bgcolor="{color:'blue'}">
                <slot></slot>
            </div>
        </div>
    </section>
</template>
<script></script>
<style>
.panel-body{ font-family: 'Arizonia',cursive; font-size: 25px; color: black;}
.quote{cursor: pointer;} .quote:hover{background-color: #cab122;}
</style>