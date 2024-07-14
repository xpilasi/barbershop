<script setup>
import {ref,onMounted} from 'vue';
import Title from  './Titles/Title.vue';
import Galeria from './widgets/Gallery.vue';




</script>
<template>
    <section id="galeria" class=" bg-barber-gallery min-h-screen bg-cover text-barber-bg pt-28">
      <div class="justify-center flex">
                <Title title="Instagram"/>
        </div> 
        <div class="flex justify-center bg-red-400 py-10">
            <Galeria/>
        </div>
        
    </section>
        
       
  

    
    
    
</template>
