
<script setup>
import {ref,onMounted} from 'vue';
import instaLogo from '../assets/img/social/instagram.svg'
import BarberLogo from '../assets/img/logos/logoVintageGroom.svg'
import BookingButtonMob from './BookingButtonMob.vue';

const menuClasses = ref('px-5 text-sm hover:bg-white hover:bg-opacity-10 py-3 transition-all duration-500');
const navClassDesk = ref(' py-5 flex fixed w-full justify-center sm:pr-10 sm:pl-5 md:pr-5 md:pl-5 lg:pr-20  lg:pl-20 items-center  ');
const navClassMobile = ref('flex fixed w-full left-0 right-0 justify-between ');
const menuLogo = 'flex left-10';

const scrollPosition = ref(null);
const mobile = ref(true);
const mobileNav = ref(null);
const showMenuIcon =ref(true);
const windowWidth = ref(null);



const toggleMenu = ()=> {
  mobileNav.value = !mobileNav.value;
  showMenuIcon.value = !showMenuIcon.value;
  
};


const checkScreen = ()=>{
  windowWidth.value = window.innerWidth;
  
  if(windowWidth.value < 768){
    mobile.value = true; 

  }else{
    mobileNav.value = false;
    mobile.value = false;
    showMenuIcon.value = true;
  
  }

 

}

//menu scrolling down
const handleScroll = ()=>{
    if (window.scrollY > 0) {
        menuClasses.value = 'text-xs px-2 transition-all duration-300 hover:bg-white hover:bg-opacity-5 py-3';
        navClassDesk.value = ' py-0 flex fixed w-full justify-center sm:pr-10 sm:pl-5 md:pr-5 md:pl-5 lg:pr-20  lg:pl-20 items-center bg-barber-bg bg-opacity-50 '
        navClassMobile.value = ' flex fixed w-full left-0 right-0 justify-between bg-barber-bg bg-opacity-50 '

    }else{
        menuClasses.value = 'px-5 text-md hover:bg-white hover:bg-opacity-5 py-3 transition-all duration-500';
        navClassDesk.value = ' py-5 flex fixed w-full justify-center sm:pr-10 sm:pl-5 md:pr-5 md:pl-5 lg:pr-20  lg:pl-20 items-center '
        navClassMobile.value = ' flex fixed w-full left-0 right-0 justify-between '
    };
  }
onMounted(()=>{
    
    window.addEventListener('scroll',handleScroll);
    window.addEventListener('resize',checkScreen);

   
    checkScreen();
    
});

 
</script>
<template>

 <!-- Nav no Mobile -->
 <nav v-show= !mobile :class=navClassDesk>
        
        
        <ul  class='flex text-white font-futuraLight tracking-widest  '>
            
            <li :class=menuClasses><a class="pl-1" href=#reserva >RESERVA</a></li>
            <li :class=menuClasses><a class="pl-1" href=#ubicacion >UBICACION</a></li>
            <li :class=menuClasses><a class="pl-1" href=#precios >PRECIOS</a></li>
            <li :class=menuClasses><a class="pl-1" href=#galeria >GALERIA</a></li>
            <li :class=menuClasses><a class="pl-1" href=#contacto >CONTACTO</a></li>
            
            
        </ul>
</nav>
        
      <!-- Nav mobile closed-->

      <nav :class=navClassMobile>
        <div class='flex justify-end w-full'>
          <!-- Burger logo -->
          <button @click=toggleMenu v-show=showMenuIcon class="md:hidden pl-3  text-white focus:outline-none h-20 w-20 justify-center items-center">

              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
              
          </button>
        </div>
      </nav>  

      <!-- Nav mobile opened-->

  <nav v-show= mobileNav class='  lg:hidden items-center right-0 left-0 flex fixed flex-col bg-barber-bg  h-screen w-screen animate-fade    '>
              <button @click=toggleMenu v-show= mobileNav class="md:hidden  flex absolute right-4 top-4   text-white focus:outline-none h-20 w-20 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18M18 6L6 18" />
                </svg>
              </button>
              <div class=" h-full flex items-center  justify-center ">
                <ul class="  text-2xl  text-white font-futura tracking-widest flex flex-col  ">
                  
                  <li class='flex  justify-center pb-10 '><a href="#" @click=toggleMenu><img :src=BarberLogo alt="100" width='180'></a></li>
                  <li class='py-4 text-center text-md'><a href=#reserva @click=toggleMenu  >RESERVA</a></li>
                  <li class='py-4 text-center text-md'><a href=#ubicacion @click=toggleMenu  >UBICACION</a></li>
                  <li class='py-4 text-center text-md'><a href=#precios @click=toggleMenu >PRECIOS</a></li>
                  <li class='py-4 text-center text-md'><a href=#galeria  @click=toggleMenu>GALERIA</a></li>
                  <li class='py-4 text-center'><a href=#contacto @click=toggleMenu >CONTACTO</a></li>
                  <li class='py-4 flex  justify-center   '><a href="#" @click=toggleMenu><img :src=instaLogo alt="" width='50'></a></li>
                  <li class='pt-10 flex  justify-center   '><a href="#" @click=toggleMenu><BookingButtonMob/></a></li>

                </ul>

              </div>
        
        
      </nav>

      

 
     
</template>
