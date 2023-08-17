<script setup lang="ts">
import { ref } from 'vue';

import predmetService from '@/services/predmet.service';
import Predmet from '@/models/predmet.model';


const predmets = ref<Predmet[]>([]);
async function getAllPredmets() {
  const rsp = await predmetService.getAllPredmets();
  predmets.value = rsp.data;


}

const inputName = ref<HTMLInputElement>();
const inputEspb = ref<HTMLInputElement>();

async function createPredmet(event: Event) {
    event.preventDefault();

    const name = inputName.value!.value;
    const espb = inputEspb.value!.value;
    
    const rsp =  await predmetService.createPredmet( name, parseInt(espb));
    
    if(rsp){
    alert("Predmet je kreiran!")

    inputName.value!.value=" ";
    inputEspb.value!.value=" ";
    
    getAllPredmets();
}


}


</script>

<template>
    <form @submit="createPredmet">
        <div class="input-group mb-3">
            <input type="text" ref="inputName" class="form-control" placeholder="Naziv" aria-label="Naziv"
                aria-describedby="button-addon2">
            <input type="text" ref="inputEspb" class="form-control" placeholder="ESPB" aria-label="ESPB"
                aria-describedby="button-addon2">
            
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
        </div>
</form>
</template>
<style>

</style>