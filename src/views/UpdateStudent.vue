<script setup lang="ts">
import Student from '@/models/student.model';
import studentService from '@/services/student.service';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();

let id = 0;
const student = ref<Student | null>(null);

const inputIme = ref<HTMLInputElement>();
const inputPrezime = ref<HTMLInputElement>();
const inputIndeks = ref<HTMLInputElement>();


async function getStudent() {

    const rsp = (await studentService.getStudentById(id)).data;
    if (rsp) {
        student.value = rsp;

        inputIme.value!.value = rsp.ime;
        inputPrezime.value!.value = rsp.prezime;
        inputIndeks.value!.value = rsp.brIndeksa;
    }

}


async function updateStudent() {
    const ime = inputIme.value!.value;
    const prezime = inputPrezime.value!.value;
    const indeks = inputIndeks.value!.value;

    const rsp = await studentService.updateStudent(id, ime, prezime, indeks);

    if(rsp){
        alert("Student je azuriran!");
        router.push('/');
    }

    
}
onMounted(() => {
    id = parseInt(route.params.id as string);
    getStudent();

});



</script>

<template>
    <h1> Student: {{ route.params.id }}</h1>
    
        <div class="input-group mb-3">
            <input type="text" ref="inputIme" class="form-control" placeholder="Ime" aria-label="Ime"
                aria-describedby="button-addon2">
            <input type="text" ref="inputPrezime" class="form-control" placeholder="Prezime" aria-label="Prezime"
                aria-describedby="button-addon2">
            <input type="text" ref="inputIndeks" class="form-control" placeholder="Broj Indeksa" aria-label="Broj Indeksa"
                aria-describedby="button-addon2">
            <button  @click="updateStudent" class="btn btn-outline-secondary">Submit</button>
        </div>
    
</template>