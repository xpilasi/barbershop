
<script setup>
import {ref,onMounted} from 'vue';
import barbershopSvgLogo from '../assets/img/icons/barber_shop.svg';
import moustacheSvgLogo from '../assets/img/icons/moustacheSvg.svg';

const menuClasses = ref('p-10 text-sm ');

const scrollPosition = null;
const mobile = true;
const mobileNav = true;
const windowWidth = null;

//menu scrolling down
const handleScroll = ()=>{
    if (window.scrollY > 0) {
        menuClasses.value = 'p-2 text-sm  transition-all duration-300';
    }else{
        menuClasses.value = 'p-10 text-sm transition-all duration-300';
    }

onMounted(()=>{
    window.addEventListener('scroll',handleScroll);
});
}
 
</script>
<template>
   <header>
    <nav>

    <div class=' bg-barber-bg fixed top-0 w-full z-10 '>
    
    <div>
      <button @click="toggleMenu" v-show="mobile" class="flex absolute text-white focus:outline-none h-max justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
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
      <!-- Nav no Mobile -->
        <ul v-show="!mobile" class='flex bg-red-950 mx-20 text-white font-hilborn tracking-wider justify-center items-center'>
            <!-- <li class='sm:hidden md:hidden lg:visible '><img :src=moustacheSvgLogo alt="" width="60"></li> -->
            <li class='mr-5'><a href=# >PRECIOS</a></li>
            <li class='mr-5'><a href=# >AGENDAR</a></li>
            <li class='mr-5'><a href=# >UBICACIÓN</a></li>
            <li class='mr-5'><a href=# >CLIENTES</a></li>
            <!-- <li class='sm:hidden md:hidden'><img :src=moustacheSvgLogo alt="" width="60"></li> -->
        </ul>
       
      <!-- Nav mobile -->
        <ul v-show="mobileNav" class='lg:hidden bg-slate-600 mx-20 text-white font-hilborn tracking-wider justify-center items-center'>
            <!-- <li class='sm:hidden md:hidden lg:visible '><img :src=moustacheSvgLogo alt="" width="60"></li> -->
            <li ><a href=# >PRECIOS</a></li>
            <li ><a href=# >AGENDAR</a></li>
            <li ><a href=# >UBICACIÓN</a></li>
            <li ><a href=# >CLIENTES</a></li>
            <!-- <li class='sm:hidden md:hidden'><img :src=moustacheSvgLogo alt="" width="60"></li> -->
        </ul>
    </div>
   </div>
    </nav>


    

    

</header>

</template>

