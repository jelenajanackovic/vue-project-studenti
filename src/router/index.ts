

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewStudent from '../views/NewStudent.vue';
import Predmeti from '../views/Predmeti.vue'
import NewPredmet from '../views/NewPredmet.vue'
import UpdateStudent from '../views/UpdateStudent.vue'
import UpdatePredmet from '../views/UpdatePredmet.vue'
 export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newstudent',
      name: 'newStudent',
      component: NewStudent
    },
    {
      path: '/predmeti',
      name: 'predmeti',
      component: Predmeti
    },
    {
      path: '/newpredmet',
      name: 'newpredmet',
      component: NewPredmet
    },
    {
      path: '/updatestudent/:id',
      name: 'updatestudent',
      component: UpdateStudent
    },
    {
      path: '/updatepredmet/:id',
      name: 'updatepredmet',
      component: UpdatePredmet
    },


 
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title)
      document.title = `${to.meta.title} :: Applikacija`;
  next();
})

