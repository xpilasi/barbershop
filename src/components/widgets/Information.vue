 <script setup>

import locationIcon from '../../assets/img/icons/location.svg';
import calendarIcon from '../../assets/img/icons/calendar.svg';
import phoneIcon from '../../assets/img/icons/phone.svg';
import locationIconWhite from '../../assets/img/icons/location_white.svg';
import calendarIconWhite from '../../assets/img/icons/calendarWhite.svg';
import phoneIconWhite from '../../assets/img/icons/phoneWhite.svg';



defineProps({
    whiteIcon:{
        type: Boolean,
        required: true,
    },
});



</script>

<template>

    <article class='font-futuraLight tracking-widest pt-10 '>

        <div class="lg:grid lg:grid-cols-3 flex-col  py-5 ">
            
           <div class="flex justify-between ">
            <div class=' flex w-full h-full lg:text-sm  mb-5 lg:justify-center items-center lg:text-center py-2  '>
                
                <img :src= ' whiteIcon ? locationIconWhite : locationIcon' alt="" width='50' class="  ">
                <div class="flex-col pl-5 text-end">
                    <p>Taxdirts 21, 08025</p>
                    <p>Barcelona</p>
                </div>
                

            </div>
           </div>

            
           <div class="flex justify-between ">
                <div class="flex w-full h-full lg:text-sm  mb-5 lg:justify-center items-center lg:text-center py-2    ">
                
                <img :src= ' whiteIcon ? calendarIconWhite : calendarIcon' alt="" width='50'>
                <div class="flex-col pl-5 text-end">
                    <p>L-V: 10.00 - 20.00</p>
                    <p>S: 10.00 - 18.00</p>
                    
                </div>
           
                </div>
            </div>

           <div class="flex justify-between ">
                <div class=" flex w-full h-full lg:text-sm  mb-5 lg:justify-center items-center lg:text-center py-2   ">
                    
                    <img :src= ' whiteIcon ? phoneIconWhite : phoneIcon 'alt="" width='50'>
                    <div class="flex-col pl-5 text-end ">
                        <p>  + 34 632 610 976</p>
                        
                    </div>
                    

            
                </div>
            </div>
                
            
            

        </div>

    </article>

</template>