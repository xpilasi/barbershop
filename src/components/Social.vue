<script setup>
import {ref,onMounted} from 'vue';




</script>
<template>
    <section id="galeria" class=" bg-barber-gallery min-h-screen w-auto py-10 bg-cover flex justify-center items-center ">
        <!-- <h2 class='p-7 my-10 text-white font-hilborn tracking-widest text-3xl'>Ubicación</h2> -->
        <template>
  <InstagramFeed
    :count="12"
    accessToken="dd9c9e8b71050c5b25c43e59c5baeaf0"
    :pagination="true"
    :caption="true"
  />SOCIAL
</template>
    </section>
    
    
</template>
