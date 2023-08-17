<script setup lang="ts">
import Predmet from '@/models/predmet.model';
import predmetService from '@/services/predmet.service';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();

let id = 0;
const predmet = ref<Predmet | null>(null);

const inputNaziv = ref<HTMLInputElement>();
const inputEspb = ref<HTMLInputElement>();


async function getPredmet() {

    const rsp = (await predmetService.getPredmetById(id)).data;
    if (rsp) {
        predmet.value = rsp;

        inputNaziv.value!.value = rsp.name;
        inputEspb.value!.value = rsp.espb.toString();
        
    }

}


async function updatePredmet() {
    const ime = inputNaziv.value!.value;
    const espb = parseInt(inputEspb.value!.value);
    
    const rsp = await predmetService.updatePredmet(id, ime, espb);

    if(rsp){
        alert("Predmet je azuriran!");
        router.push('/predmeti');
    }

    
}
onMounted(() => {
    id = parseInt(route.params.id as string);
    getPredmet();

});



</script>

<template>
    <h1> Predmet: {{ route.params.id }}</h1>
    
        <div class="input-group mb-3">
            <input type="text" ref="inputNaziv" class="form-control" placeholder="Naziv" aria-label="Naziv"
                aria-describedby="button-addon2">
            <input type="text" ref="inputEspb" class="form-control" placeholder="ESPB" aria-label="ESPB"
                aria-describedby="button-addon2">
            
            <button  @click="updatePredmet" class="btn btn-outline-secondary">Submit</button>
        </div>
    
</template>