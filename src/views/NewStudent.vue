<script setup lang="ts">
import { ref } from 'vue';

import studentService from '@/services/student.service';
import Student from '@/models/student.model';


const students = ref<Student[]>([]);
async function getAllStudents() {
  const rsp = await studentService.getAllStudents();
  students.value = rsp.data;


}

const inputIme = ref<HTMLInputElement>();
const inputPrezime = ref<HTMLInputElement>();
const inputIndeks = ref<HTMLInputElement>();
async function addStudent(event: Event) {
    event.preventDefault();

    const ime = inputIme.value!.value;
    const prezime = inputPrezime.value!.value;
    const indeks = inputIndeks.value!.value;

    const rsp =  await studentService.addStudent(ime, prezime, indeks);
    
    if(rsp){
    alert("Student je kreiran!")

    inputIme.value!.value=" ";
    inputPrezime.value!.value=" ";
    inputIndeks.value!.value=" ";
    getAllStudents();
}


}


</script>

<template>
    <form @submit="addStudent">
        <div class="input-group mb-3">
            <input type="text" ref="inputIme" class="form-control" placeholder="Ime" aria-label="Ime"
                aria-describedby="button-addon2">
            <input type="text" ref="inputPrezime" class="form-control" placeholder="Prezime" aria-label="Prezime"
                aria-describedby="button-addon2">
            <input type="text" ref="inputIndeks" class="form-control" placeholder="Broj Indeksa" aria-label="Broj Indeksa"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
        </div>
</form>
</template>
<style>

</style>