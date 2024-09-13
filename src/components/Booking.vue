
<script setup>

import BookingButton from './BookingButton.vue';
import BarberShopLogo from '../assets/img/logos/logoVintageGroom.svg';
import Information from './widgets/Information.vue';

</script>
<template>
<section id="reserva" class=' text-white bg-barber-booking min-h-screen w-auto  bg-cover '>

    <div class=' w-auto min-h-screen lg:px-10 xl:pt-50 lg:pt-28 flex flex-col  sm:px-5 md:px-20 lg:px-50   justify-between '>
        <div class="h-30 bg-green-400">

        </div>
        <div>
            <div class="flex justify-center px-10 py-5"><img class="w-96" :src=BarberShopLogo alt=""></div>
            <div id="booking_booking button" class=' flex justify-center py-5  items-center'><BookingButton/></div>
        </div>
        
        <div class=""><Information whiteIcon='true'/></div>
            
        
        
    </div>
    
    
</section>

</template>

