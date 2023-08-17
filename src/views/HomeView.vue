<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Student from "../models/student.model";
import studentService from '@/services/student.service';


const students = ref<Student[]>([]);
async function getAllStudents() {
  const rsp = await studentService.getAllStudents();
  students.value = rsp.data;


}

async function deleteStudent(id: number) {

  const isSure =confirm("Da li ste sigurni?");
  if (!isSure){
    return;

  }


  const rsp = await studentService.deleteStudent(id);

  if (rsp) {
    getAllStudents();
  }

}

onMounted(() => {
  getAllStudents();
});
</script>
<template>
  <h1>Svi studenti</h1>
  <table class="table  table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">IME</th>
        <th scope="col">PREZIME</th>
        <th scope="col">BROJ INDEKSA</th>
        <th scope="col">ACTION</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students">

        <td>{{ student.studentId }}</td>
        <td>{{ student.ime }}</td>
        <td>{{ student.prezime }}</td>
        <td>{{ student.brIndeksa }}</td>
        <td><button class="btn btn-outline-secondary " type="button" id="button-addon2" @click="e => deleteStudent(student.studentId)">Delete</button>
        <router-link class="btn btn-outline-secondary ms-2" :to="'/updatestudent/' + student.studentId">Update</router-link></td>
        


      </tr>

    </tbody>
  </table>
</template>
