
<script setup>

import BookingButton from './BookingButton.vue';
import BarberShopLogo from '../assets/img/logos/logoVintageGroom.svg';
import Information from './widgets/Information.vue';

</script>
<template>
<section id="reserva" class='text-white bg-barber-booking min-h-screen w-auto  bg-cover '>

    <div class=' w-auto min-h-screen lg:px-36 lg:pt-28 flex flex-col  sm:px-5 md:px-20 lg:px-50  py-20 justify-between'>
  
        <div class="flex justify-center py-20">
            <img class="w-96" :src=BarberShopLogo alt="">
        </div>
        
        
        <div id="booking_booking button" class='flex justify-center  items-center h-40 '><BookingButton/></div>
        <div class="">
            <Information whiteIcon='true'/>
        </div>
        
    </div>
    
    
</section>

</template>

