<script setup>

import locationIcon from '../../assets/img/icons/location.svg'
import calendarIcon from '../../assets/img/icons/calendar.svg'
import phoneIcon from '../../assets/img/icons/phone.svg'

</script>

<template>

    <article class='font-futuraLight tracking-widest pt-10'>

        <div class="md:grid md:grid-cols-3 flex-col">
            
            <div class=" flex md:text-sm  items-center justify-center text-center py-2 md:text-right md:py-2  md:pr-5 md:border-r-2 border-barber-bg">
                
                <img :src=locationIcon alt="" width='50'>
                <div class="flex-col">
                    <p>C/Romans 1,</p>
                    <p>08025 Barcelona</p>
                </div>
                

            </div>
            <div class=" flex md:text-sm justify-center items-center text-center py-2 md:text-center md:py-2   ">
                
                <img :src=calendarIcon alt="" width='50'>
                <div class="flex-col">
                    <p>LUN-VIER 10.00 - 20.00</p>
                    <p>SÁBADO 10.00 - 18.00</p>
                    
                </div>
                

            </div>
            <div class=" flex justify-center md:text-sm items-center py-2 md:text-left md:py-2 md:pl-5 md:border-l-2 border-barber-bg">
                
                <img :src=phoneIcon alt="" width='50'>
                <div class="flex-col">
                    <p>+34 632610976</p>
                    
                </div>
                

            </div>
            

        </div>

    </article>

</template>