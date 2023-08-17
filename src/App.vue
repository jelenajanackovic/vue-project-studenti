<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div style="background-color: #ffffff">
    <nav class="navbar navbar-expand-lg navbar navbar-light" style="background-color: #ffffff">
      <div class="container-fluid">
        <a class="navbar-brand" style="background-color: white;" href="#"><img width="50" height="50" src="https://img.icons8.com/ios/50/student-female.png" alt="student-female"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link  fw-bold" aria-current="page" to="/">Studenti</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/newstudent">Novi Student</router-link>
            </li>           
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/predmeti">Predmeti</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/newpredmet">Novi Predmet</router-link>
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
    <div class="container" style="background-color: #ffffff">
      <router-view />
    </div>
    <footer class="text-center " style="background-color: #ffffff">
      &copy;  Univerzitet Singidunum
    </footer>
  </div>
</template>





