
<script setup>
import {ref,onMounted} from 'vue';
import barbershopSvgLogo from '../assets/img/icons/barber_shop.svg';
import moustacheSvgLogo from '../assets/img/icons/moustacheSvg.svg';

const menuClasses = ref('px-10 text-sm ');

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
    console.log('WTF - Mobile: '+mobile.value);
    console.log('WTF - Mobile: '+mobile.value+' - ShowMenuIcon: '+showMenuIcon.value);
    
  }else{
    mobileNav.value = false;
  mobile.value = false;
  showMenuIcon.value = true;
  
  }
  
  
  

}


//menu scrolling down
const handleScroll = ()=>{
    if (window.scrollY > 0) {
        menuClasses.value = 'p-2 text-sm  transition-all duration-300';
    }else{
        menuClasses.value = 'p-10 text-sm transition-all duration-300';
    };
  }
onMounted(()=>{
    
    window.addEventListener('scroll',handleScroll);
    window.addEventListener('resize',checkScreen);
    
    checkScreen();
    
});

 
</script>
<template>
   <header>
    <nav>

    
    
    <div>
      <button @click=toggleMenu v-show=showMenuIcon class="md:hidden flex absolute right-0 text-white focus:outline-none h-20 w-20 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
       
        
      </button>
      <button @click=toggleMenu v-show= mobileNav class="md:hidden flex absolute right-0 text-white focus:outline-none h-20 w-20 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6L18 18M18 6L6 18" />
          </svg>
        </button>
      <!-- Nav no Mobile -->
        <ul v-show= !mobile class='flex bg-red-950  text-white font-hilborn tracking-wider justify-center items-center'>
            <!-- <li class='sm:hidden md:hidden lg:visible '><img :src=moustacheSvgLogo alt="" width="60"></li> -->
            <li :class=menuClasses><a href=# >PRECIOS</a></li>
            <li :class=menuClasses><a href=# >AGENDAR</a></li>
            <li :class=menuClasses><a href=# >UBICACIÓN</a></li>
            <li :class=menuClasses><a href=# >CLIENTES</a></li>
            <!-- <li class='sm:hidden md:hidden'><img :src=moustacheSvgLogo alt="" width="60"></li> -->
        </ul>
       
      <!-- Nav mobile -->
        <ul v-show= mobileNav class='lg:hidden flex flex-col bg-gray-800 h-screen text-3xl  text-white font-hilborn tracking-wider pt-40 items-center'>
            <!-- <li class='sm:hidden md:hidden lg:visible '><img :src=moustacheSvgLogo alt="" width="60"></li> -->
            <li class='py-10'><a href=# >PRECIOS</a></li>
            <li class='py-10'><a href=# >AGENDAR</a></li>
            <li class='py-10'><a href=# >UBICACIÓN</a></li>
            <li class='py-10'><a href=# >CLIENTES</a></li>
            <!-- <li class='sm:hidden md:hidden'><img :src=moustacheSvgLogo alt="" width="60"></li> -->
        </ul>
    </div>
   
    </nav>


    

    

</header>

</template>

