<script setup>
import {ref,onMounted} from 'vue';
import Title from './Titles/Title.vue';
import BookingButton from './BookingButton.vue';
import logoVintageGroom from '../assets/img/logos/logoVintageGroom.svg';






</script>
<template>
    <section id="precios" class=" bg-barber-prices min-h-screen h-full bg-cover text-white  flex flex-col justify-between pb-10 pt-20">
                <!-- <Title title="Precios" class='flex justify-center  mx-20  '/> -->
                <article class="flex justify-center py-0 ">
                    <img class="w-40" :src=logoVintageGroom alt="" >
                </article>
                
                <article class='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-20 py-10  md:gap-20 font-futuraLight tracking-wider mx-20 lg:mx-60 lg:text-lg 0  '>
                        
                    <div class=" border-b-2  border-neutral-600 pb-2 mr-1 md:pt-0 lg:pt-0 sm:pt-5 pt-5 ">
                        <div class="grid grid-cols-2 pb-0">
                            <p class="text-start">Corte Chico</p>
                            <p class=" text-end  ">EUR 12.80</p>
                        </div>
                    </div>
                    <div class=" border-b-2 border-neutral-600 pb-2 mr-1  md:pt-0 lg:pt-0 sm:pt-5 pt-5  " >
                        <div class="grid grid-cols-2 pb-0">
                            <p class="text-start">Barba</p>
                            <p class="text-end  ">EUR 12.80</p>
                        </div>
                    </div>
                    <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5  ">
                        <div class="grid grid-cols-2 pb-0">
                            <p class="text-start">Corte Chico</p>
                            <p class="text-end  ">EUR 12.80</p> 
                        </div>
                    </div>
                    <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5 ">
                        <div class="grid grid-cols-2 pb-0">
                            <p class="text-start">Corte Chico</p>
                            <p class="text-end  ">EUR 12.80</p>
                        </div>
                    </div>
                    <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5 ">
                        <div class="grid grid-cols-2 pb-0">
                            <p class="text-start">Corte Chico</p>
                            <p class="text-end  ">EUR 12.80</p>
                        </div>
                    </div>
                    <div class=" border-b-2 border-neutral-600 pb-2 mr-1 sm:pt-5 md:pt-0 lg:pt-0 pt-5 ">
                        <div class="grid grid-cols-2 pb-0">
                            <p class="text-start">Corte Chico</p>
                            <p class="text-end  ">EUR 12.80</p>
                        </div>
                    </div>
            
            </article>
            <article class='flex justify-center pt-0  '>
                <BookingButton class=""/>
            </article>
            


            
                
                
            
            
            
            
        
        
        
        
    </section>
    
    
</template>