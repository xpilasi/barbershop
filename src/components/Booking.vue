
<script setup>

import BookingButton from './BookingButton.vue';
import BarberShopLogo from '../assets/img/logos/barbershop_logo.svg';
import Information from './widgets/Information.vue';

const description = "A traditionally-inspired upscale barbershop on the ground floor of the Walper Hotel. Paying homage to Abel Walper, the hotel's founder, by honouring his commitment to a finely tailored, personalized customer experience that's unmatched in both quality and character. Originally established in 1894 just one year after the hotel's opening, the new shop reimagines Abel's vision in a contemporary barber setting."
const description_2 = "Una barbería de lujo con inspiración tradicional en la planta baja del Hotel Walper. Rindiendo homenaje a Abel Walper, el fundador del hotel, honrando su compromiso con una experiencia personalizada y meticulosamente adaptada al cliente, inigualable tanto en calidad como en carácter. Establecida originalmente en 1894, solo un año después de la apertura del hotel, la nueva tienda reimagina la visión de Abel en un entorno contemporáneo de barbería."


</script>
<template>
<section id="reserva" class='text-white bg-barber-booking min-h-screen w-auto py-10 bg-cover flex-col '>

    <div class=' w-full h-80 md:h-80 lg:h-64 sm:px-5 md:px-20 lg:px-60 pt-20  '>
  
        
        <img class="px-10 flex justify-end w-full " :src=BarberShopLogo alt="" width="600">
        <div class="h-10"></div>
        <div id="booking_booking button" class='flex justify-center h-40  '><BookingButton/></div>

    </div>
    
    <Information/>
</section>

    



</template>

