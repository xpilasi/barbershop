
<script setup>

import BookingButton from './BookingButton.vue';
import BarberShopLogo from '../assets/img/logos/barbershop_logo.svg';
import Information from './widgets/Information.vue';

</script>
<template>
<section id="reserva" class='text-white bg-barber-booking min-h-screen w-auto py-5 bg-cover flex-col '>

    <div class=' w-full   sm:px-5 md:px-20 lg:px-50 mt-20  py-10 lg:py-0 md:py-0'>
  
        
        <img class="px-10 flex justify-end w-full " :src=BarberShopLogo alt="" width="600">
        <div class="h-10"></div>
        <div id="booking_booking button" class='flex justify-center h-40  '><BookingButton/></div>
        <div class="">
            <Information whiteIcon='true'/>
        </div>
        
    </div>
    
    
</section>

</template>

