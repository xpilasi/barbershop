
    <script setup>
    import {ref,onMounted} from 'vue';
    import Title from './Titles/Title.vue';

    const props = {
    title : String,
}

    </script>
    <template>
        
        <section id="ubicacion" class="bg-barber-location min-h-screen h-full w-auto pt-28 bg-cover flex-col  items-center">
            
            <article>
               <div class="justify-center flex">
                <Title class=" text-barber-bg"/>
               </div> 
            
            </article>
            <article class=" py-10 border border-blue-500  ">

                <div class="  bg-red-300 h-3/4">
                    <iframe class="w-full h-96 "  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4837735745778!2d2.1613742766064346!3d41.407015994776465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2b8bcef899f%3A0x1b376c99a5478fc1!2sBarberia%20Bigoti!5e0!3m2!1ses!2ses!4v1720383570683!5m2!1ses!2ses"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="grid grid-cols-3   mt-10 font-futuraLight">
                <p class="text-right py-2  pr-5 border-r-2 border-barber-bg">DIRECCION</p>
                <p class="text-center py-2 ">HORARIO</p>
                <p class="text-left py-2 pl-5 border-l-2 border-barber-bg">TELEFONO</p>
                
                </div>
                
            </article>
            
        </section>

     
        
        
        
    </template>

