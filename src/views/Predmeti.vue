<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Predmet from "../models/predmet.model";
import predmetService from '@/services/predmet.service';


const predmets = ref<Predmet[]>([]);
async function getAllPredmets() {
  const rsp = await predmetService.getAllPredmets();
  predmets.value = rsp.data;


}

async function deletePredmet(id: number) {

  const isSure =confirm("Da li ste sigurni?");
  if (!isSure){
    return;

  }


  const rsp = await predmetService.deletePredmet(id);

  if (rsp) {
    getAllPredmets();
  }

}

onMounted(() => {
 getAllPredmets();
});
</script>
<template>
  <h1>Svi predmeti</h1>
  <table class="table  table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAZIV</th>
        <th scope="col">ESPB</th>
        <th scope="col">ACTION</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="predmet in predmets">

        <td>{{ predmet.predmetId}}</td>
        <td>{{ predmet.name}}</td>
        <td>{{ predmet.espb }}</td>
        <td><button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="e => deletePredmet(predmet.predmetId)">Delete</button>
          <router-link class="btn btn-outline-secondary ms-2" :to="'/updatepredmet/' + predmet.predmetId">Update</router-link></td>

      </tr>

    </tbody>
  </table>
</template>
