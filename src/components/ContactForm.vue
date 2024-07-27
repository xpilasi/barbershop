
<script setup>
import BarberLogo from '../assets/img/logos/logoVintageGroom.svg'
</script>
<template>
        <section id="contacto" class="bg-barber-bg min-h-screen h-full w-auto flex  bg-cover flex-col  
        
        
         justify-center items-center ">
                <div class=' flex-col justify-center text-center '>

                        <img :src=BarberLogo class=' px-10 w-full ' alt="">
                        <h2 class='py-5 text-center text-white tracking-widest font-futuraLight'>Pónte en contacto con nosotros</h2>

                        <form action="" class=' grid  w-96 ml-0'>

                        <input class="py-5 mb-5 font-futuraLight pl-10 w-96" type="text" id="nombre" placeholder="Nombre">
                        <input class="py-5 mb-5 font-futuraLight pl-10 w-96"type="text" id="email" placeholder="Email">
                        <textarea class="py-5 mb-5 font-futuraLight pl-10 w-96 h-40" name=""placeholder='Escribe tu mensaje aquí' id="message"></textarea>
                        <input  class=' cursor-pointer w-96 py-5 text-white tracking-widest font-futuraLight border border-white  hover:bg-white hover:bg-opacity-10 transition duration-500 ease-in-out' type="button" value='ENVIAR'>           

                        </form>
                </div>

                
        </section>
        

</template>