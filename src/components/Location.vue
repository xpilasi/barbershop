
    <script setup>
    import {ref,onMounted} from 'vue';

    const map = ref(null);

    onMounted(()=>{
        
        new window.google.maps.Map(map.value,{
            center: {lat:41.40703 ,lng:2.16395},
            zoom: 10,
        });
        
    });

    </script>
    <template>
        
        <div ref="map" style="width: 1000px; height: 500px;">hola</div>
        
    </template>

